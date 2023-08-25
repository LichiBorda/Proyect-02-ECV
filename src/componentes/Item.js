import React from 'react';
import { ArrayProductos } from './AsyncMock';

function Item({ product }) {
  return (
    <div>
      <img src={product.imagen} alt={product.sabor} />
      <h3>{product.sabor}</h3>
      <p>{product.descripcion}</p>
      <p>Precio: {product.precio}</p>
      <p>Puffs: {product.puffs}</p>
    </div>
  );
}

export default Item;