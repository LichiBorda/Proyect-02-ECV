import React from 'react'
import imagenmenta2500 from '..//imagenes/menta-2500.png'
import imagenmulti2500 from '..//imagenes/multifruta-2500.png'
import imagenbanana2500 from '..//imagenes/banana-2500.png'

function ContainerProducts() {

    const ArrayProductos = [
        {sabor: "Menta" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor menta 2500 puffs" , imagen: imagenmenta2500},
        {sabor: "Banana" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor banana 2500 puffs" , imagen:imagenbanana2500},
        {sabor: "MultiFruta" , puffs:2500 , precio:10000 ,descripcion:"Vape fume sabor multifruta 2500 puffs" , imagen:imagenmulti2500},
        {sabor: "Menta" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor menta 2500 puffs" , imagen: imagenmenta2500},
        {sabor: "Banana" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor banana 2500 puffs" , imagen:imagenbanana2500},
        {sabor: "MultiFruta" , puffs:2500 , precio:10000 ,descripcion:"Vape fume sabor multifruta 2500 puffs" , imagen:imagenmulti2500},

    ]

console.log(ArrayProductos)


return (
    <div className="row">
      {ArrayProductos.map((producto, index) => (
        <div key={index} className="col-md-4">
          <div className="card">
            <img src={producto.imagen} className="card-img-top card-img" alt={producto.sabor} />
            <div className="card-body">
              <h5 className="card-title">{producto.sabor}</h5>
              <p className="card-text">Precio: ${producto.precio}</p>
              <p className="card-text">{producto.descripcion}</p>
              <a href="#" className="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ContainerProducts

