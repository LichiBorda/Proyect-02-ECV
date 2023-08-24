import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
  const { id } = useParams();
  const ArrayProductos = [
    
    {id:0 ,sabor: "Menta" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor menta 2500 puffs" , imagen: imagenmenta2500},
    {id :1 ,sabor: "Banana" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor banana 2500 puffs" , imagen:imagenbanana2500},
    {id :2 ,sabor: "MultiFruta" , puffs:2500 , precio:10000 ,descripcion:"Vape fume sabor multifruta 2500 puffs" , imagen:imagenmulti2500},
    {id :3 ,sabor: "Sandia" , puffs:3500, precio:20000 , descripcion:"Vape fume sabor sandia 3500 puffs" , imagen: imagensandia3500},
    {id :4 ,sabor: "Blueberry" , puffs:3500 , precio:20000 , descripcion:"Vape fume sabor blueberry 3500 puffs" , imagen:imagenblueberry3500},
    {id :5 ,sabor: "MultiFruta" , puffs:3500 , precio:20000 ,descripcion:"Vape fume sabor multifruta 3500 puffs" , imagen:imagenmultifruta3500},
// ... (rest of your product data)
];;
  const producto = ArrayProductos.find(prod => prod.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
