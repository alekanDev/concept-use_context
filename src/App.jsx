import './App.css';
import React, { createContext, useState } from 'react';
// COMPONENTS
import Hijo from './components/Hijo';

export const  userContext = createContext()

function App() {

  const [user, setUser] = useState(null)

  const cambiarLogin = () => {
    if(user){
      setUser(null)
    } else {
      setUser({
        name: 'alejandroCano',
        email: 'alejandro.cano@cubiqnet.com'
      })
    }
  }

  return (
    <userContext.Provider value={user}>
      <button onClick={
        cambiarLogin
      }>Cambiar Login</button>
    <div className="App">
      <Hijo />
    </div>
    </userContext.Provider>
      
  );
}

export default App;
