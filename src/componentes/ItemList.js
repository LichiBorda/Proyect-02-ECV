import React from 'react'

import { Link, useParams } from 'react-router-dom'

import imagenmenta2500 from '..//imagenes/menta-2500.png'
import imagenmulti2500 from '..//imagenes/multifruta-2500.png'
import imagenbanana2500 from '..//imagenes/banana-2500.png'
import imagenblueberry3500 from '..//imagenes/blueberry-3500.png'
import imagenmultifruta3500 from '..//imagenes/multifruta-3500.png'
import imagensandia3500 from '..//imagenes/sandia-3500.png'




function ItemList({ category }) {

  
  const ArrayProductos = [
    
        {id:0 ,sabor: "Menta" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor menta 2500 puffs" , imagen: imagenmenta2500},
        {id :1 ,sabor: "Banana" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor banana 2500 puffs" , imagen:imagenbanana2500},
        {id :2 ,sabor: "MultiFruta" , puffs:2500 , precio:10000 ,descripcion:"Vape fume sabor multifruta 2500 puffs" , imagen:imagenmulti2500},
        {id :3 ,sabor: "Sandia" , puffs:3500, precio:20000 , descripcion:"Vape fume sabor sandia 3500 puffs" , imagen: imagensandia3500},
        {id :4 ,sabor: "Blueberry" , puffs:3500 , precio:20000 , descripcion:"Vape fume sabor blueberry 3500 puffs" , imagen:imagenblueberry3500},
        {id :5 ,sabor: "MultiFruta" , puffs:3500 , precio:20000 ,descripcion:"Vape fume sabor multifruta 3500 puffs" , imagen:imagenmultifruta3500},
    
  ];


  const filteredProductos = ArrayProductos.filter(producto => {
    if (category === "2500") {
      return producto.puffs === 2500;
    } else if (category === "3500") {
      return producto.puffs === 3500;
    }
   
    return true;
  });
    



return (
    <div className="row" >
      {filteredProductos.map((producto, index) => (
        <div key={index} className="col-md-4 pt-4 mt-4">
          <div className="card">
            <img src={producto.imagen} className="card-img-top card-img" alt={producto.sabor} />
            <div className="card-body">
              <h5 className="card-title">{producto.sabor}</h5>
              <p className="card-text">Precio: ${producto.precio}</p>
              <p className="card-text">{producto.descripcion}</p>
              <Link to={`/detail/${producto.id}`} className="link">Ver Mas</Link>
              <hr/>
             
            </div>
          </div>
          
        </div>
      ))}
    </div>
    
    );
  }
  

  export default ItemList
