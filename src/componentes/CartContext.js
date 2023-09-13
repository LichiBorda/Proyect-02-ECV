
import { createContext, useContext, useState } from 'react'


export const CartContext = createContext()


const Micustomprovider = ({children}) =>{

const[cartArray,setCartArray] = useState([])
const addToCart = (producto,count) =>{
  console.log(`Agregaste un producto sabor ${producto.sabor} a un precio de ${count}`)
}
const value = {
  cartArray,
  
}

  

  return (
    <CartContext.Provider value={value}>

    {children}
    </CartContext.Provider>
  )
}

export default Micustomprovider