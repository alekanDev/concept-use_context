import { useUserContext, useUserToogleContext } from "../context/UserProvider"

const Hijo = () => {

  const user = useUserContext()
  const cambiarLogin = useUserToogleContext()

  return (
    <div>
      <h2>Componente Hijo</h2>
      <button onClick={ cambiarLogin }>Cambiar Login</button>
      {user && <p>Hola { user.name } </p>}

    </div>
  )
}

export default Hijo