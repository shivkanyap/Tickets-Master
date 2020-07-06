import React from 'react';
import './App.css';
// import TicketForm from './Form'
import Home from './components/Home'
import { Switch,Route, BrowserRouter, Link } from 'react-router-dom'
import TicketData from './components/Tickets'

class App extends React.Component
{ 
  render()
  {
    return(
      <div>
         <BrowserRouter>
                <Link to ="/">Home</Link>
                <Link to='/tickets'>Tickets</Link>
                <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/tickets' component={TicketData}/>
                </Switch>
            </BrowserRouter>

        
      </div>
    )
  }

}

export default App;
