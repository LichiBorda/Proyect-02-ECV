
import React, { useContext, useState } from 'react';


function ItemCount({ onAdd }) {
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
    <div className="row">
      <div className="item-count col">
        <button className="btn btn-danger" onClick={restarCantidad}>-</button>
        <span className="cantidad">{cantidad}</span>
        <button className="btn btn-success" onClick={sumarCantidad}>+</button>
      </div>
      <div className="col">
        <button className="btn btn-secondary" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;