import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat';
import { Route, Router, Switch } from 'react-router-dom';
import { useState } from 'react'
import Login from './Login';
import { useStateValue } from './StateProvider'

function App() {

  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      { !user ? (
        <Login />
      ) : (
        <div className='app__body'> 
        <Router>
          <Switch>
            <Sidebar />
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
      )
    }


      
    </div>
  );
}

export default App;
