import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from './AsyncMock';
import { useParams } from 'react-router-dom'
import ItemList from './ItemList';

function ItemListContainer({ category }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()
  
    useEffect(() => {
      //si hay categoria
          if(categoryId) {
      // va a llamar a la función y va a recibir el parámetro por parámetro. Valga la redundancia. 
            getProductsByCategory(categoryId).then((result) => setProducts(result))
          }else{
      // si no hay categoría, traemos todos los productos
            getProducts().then((result) => setProducts(result))
          }
        }, [categoryId]);
  return (
    <div>
      <h2>{categoryId === "2500" ? "Productos 2500 puffs" : categoryId === "3500" ? "Productos 3500 puffs" : "Todos los productos"}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;