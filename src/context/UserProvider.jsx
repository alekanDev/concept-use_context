import React, { createContext, useContext, useState } from "react"

const userContext = createContext()
const userToggleContext = createContext()

// personalHooks
export function useUserContext(){
  return useContext(userContext)
}

export function useUserToogleContext(){
  return useContext(userToggleContext)
}


export function UserProvider({ children }){

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

  return(
    <userContext.Provider value={ user }>
      <userToggleContext.Provider value={ cambiarLogin }>
        { children }
      </userToggleContext.Provider>
    </userContext.Provider>
  )
}