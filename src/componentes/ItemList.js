import React from 'react';
import { ArrayProductos } from './AsyncMock';
import Item from './Item';

function ItemList({ products }) {
    console.log(products)
  return (
    <div className='row'>
      {products.map(ArrayProductos => (
        <Item key={ArrayProductos.id} product={ArrayProductos} />
      ))}
    </div>
  );
}

export default ItemList;