import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from './AsyncMock';
import ItemList from './Item';

function ItemListContainer({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let fetchedProducts;
      if (category === "2500" || category === "3500") {
        fetchedProducts = await getProductsByCategory(category);
      } else {
        fetchedProducts = await getProducts();
      }
      setProducts(fetchedProducts);
    }

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>{category === "2500" ? "Productos 2500 puffs" : category === "3500" ? "Productos 3500 puffs" : "Todos los productos"}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;