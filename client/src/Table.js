import React from 'react'
import Trow from './Trow'

// class Table extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//     }
//     render()

//     {
    const Table =(props)=>{

        return(
            
            <table className="table">
            <thead className="thead-dark">
                <tr>
                
                    <th>CODE</th>
                    <th>NAME</th>
                    <th>DEPARTMENT</th>
                    <th>PRIORITY</th>
                    <th>MESSAGE</th>
                    <th>STATUS</th>
                    <th>DELETE</th>   
                
                </tr>
            </thead>
                    <tbody >
                        {props.tickets.map(ticket=>{
                            return <Trow key={ticket.ticket_code} ticket={ticket} delete={props.deletefun} />
                        })}

                    </tbody>
                </table>

            
        )
    }       
export default Table