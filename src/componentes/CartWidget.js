import carrito from "../imagenes/carrito-de-compras.png"
function CartWidget() {
  return (
    
<div className="container-fluid">
  <div className="row">
    
    <div className="col">
    <img className="logo-carrito float-end" src={carrito} alt="" />
    <p className="float-end contador mt-2">5</p>
    </div>
  </div>
</div>
  )
}

export default CartWidget
