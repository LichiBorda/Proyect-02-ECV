
import { createContext } from 'react'

export const contexto = createContext()
const Provider = contexto.Provider

const Micustomprovider = (props) => {
    const valordelcontexto = {
        carrito : [],
        montoTotal : 0,
        cantidadTotal : 15,
    }
  return (
    <Provider value={valordelcontexto}>

    {props.children}
    </Provider>
  )
}

export default Micustomprovider