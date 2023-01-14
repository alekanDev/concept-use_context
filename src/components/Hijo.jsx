import React, { useContext } from 'react'
import { userContext } from '../App'

const Hijo = () => {

  const user = useContext(userContext)

  return (
    <div>
      <h2>Componente Hijo</h2>
      {user && <p>Hola { user.name } </p>}
    </div>
  )
}

export default Hijo