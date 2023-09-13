import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from 'react-router-dom'


function CartWidget() {
 const valordelcontexto = useContext(CartContext)
 
  return (
    
<div className="container-fluid">
  <div className="row">
    
    <div className="col">
    <Link to="/carrito"><img className="logo-carrito float-end" to="" src="/imagenes/carrito-de-compras.png" alt="" /></Link>
    <span className="float-end contador mt-2">{7}</span>
    </div>
  </div>
</div>
  )
}

export default CartWidget
