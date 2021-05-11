import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Rooms from './Components/Rooms';
import Error from './Components/Error'


import './App.css';

function App() {
  return (
       <React.Fragment>
             <NavBar/>
             <Switch>
               <Route exact path = "/" component={Home} />
               <Route path= "/rooms" component={Rooms}/>
               <Route path="/error" component={Error}/>
             </Switch>
              
              
       </React.Fragment>
        
     
          
  );
}

export default App;
