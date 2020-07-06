import React from 'react'
import axios from 'axios'

class TicketForm extends React.Component{

    constructor()
    {
        super()
        this.state={
            name:'',
            department:'',
            priority:'',
            message:'',
            depOption:[
                {id:1,name:'Technical'},
                {id:2,name:'Manager'},
                {id:3,name:'Hr'},
                {id:4,name:'Hardwaredpt'},
                {id:5,name:'Helpdesk'}
            ]
        }
    }
    handleNameChange=(e)=>{
        const name=e.target.value
        this.setState(()=>({name}))    
    }
    handleMessageChange=(e)=>{
        const message=e.target.value
        this.setState(()=>({message}))    
    }

    handleDeptChange=(e)=>{
        const department=e.target.value
        this.setState(()=>({department}))
    }
    handlePriorityChange=(e)=>{
        const priority=e.target.value
        this.setState(()=>({priority}))

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            department:this.state.department,
            priority:this.state.priority,
            message:this.state.message

        }
        console.log(formData, 'formdata')

        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=ae10e2fa0a200eb8',formData)
        .then(response=>{
            console.log(response.data, 'res')
            if(response.data.hasOwnProperty('errors'))
            {
                this.setState(()=>({errors:response.data.errors
               }))
            }
            else{
                this.props.handleTicketForm(response.data)
                this.setState(()=>({
                    notice:'succesfully submitted the form'
                }))
                setTimeout(() => {
                    this.setState(() => ({
                    notice: ''
                    }));
                }, 2000);

                this.resetForm()
            
            }

        })

    }
    handleReset=(e)=>
    {
        e.preventDefault()
        this.resetForm()

    }
    resetForm(){
    
        this.setState(()=>({
            name:'',
            department:'',
            priority:'',
            message:''
        }))
    }
    render()
    {
        return(
            <fieldset>
                 <h2>Add ticket</h2>
            <div className="form-group">
               
               
                <form onSubmit={this.handleSubmit}>

                    <div className="form-control form-control-lg">
                    <label>Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                    </label><br/>
                    </div>

                    <div className="form-control form-control-lg">
                    <label>
                        Department:
                        <select value={this.state.department}  onChange={this.handleDeptChange}>
                            <option value="">select</option>
                            {this.state.depOption.map((dept)=>{
                                return <option key={dept.id}>{dept.name}</option>
                            })}

                        </select>
                        
                    </label><br/>
                    </div>
                    
                    <div className="form-control form-control-lg">
                    <label>
                        Priority
                        <select value={this.state.priority} onChange={this.handlePriorityChange}>
                        <option value=" ">Select</option>
                        <option value="High">High</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        </select>

                    </label><br/>
                    </div>
                            
                    <div >
                    <label className="form-control-lg">
                        Message:
                        <textarea  name="message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                    </label>
                    </div><br/><br/>

                   
                    
                        <input type="submit"></input>
                    
                    
                    
                        <button type="reset" onClick={this.handleReset} >Reset</button><br/><br/>
                        <h2>{this.state.notice}</h2>
                        
                        


                </form>
                </div>
                
                </fieldset>
            
        )
    }
}
export default TicketForm