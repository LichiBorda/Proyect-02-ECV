
import React, {useState} from 'react';
function ItemCount() {

  const [cantidad, setCantidad] = useState(0);

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const restarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }

  
  }


  return (
    <div className="item-count">
    <button className="btn btn-danger" onClick={restarCantidad}>-</button>
    <span className="cantidad">{cantidad}</span>
    <button className="btn btn-success" onClick={sumarCantidad}>+</button>
  </div>
    


  )
}

export default ItemCount