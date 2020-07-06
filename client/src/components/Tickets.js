import React from 'react'
import TicketForm from '../Form'
import Table from '../Table'
import axios from 'axios'
import Search from '../search'
import Graph from '../Graph'
// import Status from '../Status'
import Graphbar from '../GraphBar'
import  ProgressComponent from '../Progress'
class TicketData extends React.Component
{
    constructor(){
        super()
        this.state={
          tickets:[],
          originalTickets:[],
          notice:''
        }
      }
      componentDidMount()
      {
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=ae10e2fa0a200eb8`)
        .then(response=>{
          console.log('in com ',response.data)
          this.setState(()=>({
            tickets:response.data,
            originalTickets:response.data
          }))
        })
      }
      handleTicketForm=(ticket)=>{
        this.setState((prevState)=>({
          tickets:prevState.originalTickets.concat(ticket)
        }))
      }
      
      handleDelete=(value)=>{
        axios.delete(`http://cors-anywhere.herokuapp.com/dct-api-data.herokuapp.com/tickets/${value}?api_key=ae10e2fa0a200eb8`)
        .then(response=>{
        console.log(response.data,'in deletyte')
        
        this.setState((prevState=>({
         
        tickets:prevState.tickets.filter(ticket=> ticket.ticket_code.includes(value)===false)
        })))
       
       
        })
        }
        
      handleSearch=(value)=>{
          this.setState((prevState)=>({
              tickets:prevState.originalTickets.filter(ticket=>ticket.ticket_code.includes(value))
          }))
      }
      handlePriority=(value)=>
      {
          if(value==='all')
          {
              this.setState((prevState=>({
                  tickets:[].concat(prevState.originalTickets)
              })))
          }
          else{
              this.setState((prevState)=>({
                  tickets:prevState.originalTickets.filter(ticket=>ticket.priority===value)
              }))
          }
      }


    render()
    {
        return(
            <div>
                <h1>Tickets</h1>
                <h3>Listing-tickets:{this.state.tickets.length}</h3>
                <Search handleSearch={this.handleSearch } handlePriority={this.handlePriority} />
                <div className="row">
                <div className="col-md-8">
             <Table tickets={this.state.tickets} deletefun={this.handleDelete} />
             </div>
             <div className="col-md-4">
            <TicketForm handleTicketForm={this.handleTicketForm} />
            </div>
            </div>
           
            <Graph attribute={this.state.tickets}/>
            <Graphbar graphBar={this.state.tickets}/>
            <ProgressComponent/>
            </div>
        )
    }
}
export default TicketData