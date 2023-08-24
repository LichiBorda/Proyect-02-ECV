import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ producto }) {
  return (
    <div className="row mt-4">
      <div className="col-md-6">
        <img src={producto.imagen} alt={producto.sabor} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{producto.sabor}</h2>
        <p>Precio: ${producto.precio}</p>
        <p>{producto.descripcion}</p>
        
      </div>
    </div>
  );
}

export default ItemDetail;