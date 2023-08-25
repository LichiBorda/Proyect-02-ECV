import React from 'react';
import { ArrayProductos } from './AsyncMock';
import Item from './Item';

function ItemList({ products }) {
  return (
    <div>
      {products.map(ArrayProductos => (
        <Item key={ArrayProductos.id} product={ArrayProductos} />
      ))}
    </div>
  );
}

export default ItemList;