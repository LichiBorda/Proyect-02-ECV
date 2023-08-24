import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({ productos }) {
  const { id } = useParams();
  const producto = productos.find(prod => prod.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;