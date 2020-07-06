import React from 'react'

class Search extends React.Component
{

    constructor()
    {
        super()
        this.state={
            search:''
        }
    }
    handleSearchChange=(e)=>{
        const search=e.target.value
        console.log(search)
        this.setState(()=>({search}))
        this.props.handleSearch(search)
    }
    render()
    {
        return(
            <div>
                <label >
                    <input type="text" value={this.state.search} onChange={this.handleSearchChange} placeholder="search" />
                </label>
                <button onClick={()=>{this.props.handlePriority('all')}
                }>All</button>
                <button onClick={()=>{this.props.handlePriority('Low')}
                }
                >Low</button>
                <button  onClick={()=>{this.props.handlePriority('High')}
                }>High</button>
                <button onClick={()=>{this.props.handlePriority('Medium')} }>Medium</button>
            </div>
        )
    }
}

export default Search
