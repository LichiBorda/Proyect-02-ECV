import { useContext } from "react"
import { contexto } from "./Micontexto"


function CartWidget() {
 const valordelcontexto = useContext(contexto)
 
  return (
    
<div className="container-fluid">
  <div className="row">
    
    <div className="col">
    <img className="logo-carrito float-end"  src="/imagenes/carrito-de-compras.png" alt="" />
    <span className="float-end contador mt-2">{valordelcontexto.cantidadTotal}</span>
    </div>
  </div>
</div>
  )
}

export default CartWidget
