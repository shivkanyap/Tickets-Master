import React from 'react'
import axios from 'axios'

class Status extends React.Component
{
    constructor()
    {
        super()
        this.state={
            status:false
        }
    }
    componentDidMount()
    {
        if(this.props.ticket.status==='close')
        {
            this.setState({status:true})
        }
    }
    handleCheck=()=>{
        if(this.props.ticket.status==='open')
        {
            this.props.ticket.status="close"
        }
        else{
            this.props.ticket.status='open'
        }
        axios.put(`http://cors-anywhere.herokuapp.com/dct-api-data.herokuapp.com/tickets/${this.props.ticket.ticket_code}?api_key=ae10e2fa0a200eb8`,this.props.ticket)
        .then(res=>{
            console.log(res.data)
        })
        console.log(this.props.ticket.status,'checked')
    }
    render(){
        return(
            <div>
                <input type="checkbox" onClick={this.handleCheck} defaultChecked={this.state.status}/>
            </div>
        )
    }
    
}
export default Status