import React from 'react'
import { Link } from 'react-router-dom'

function ItemDetail({producto}) {
  console.log(producto)
  return (
  <div>
       <div className="col-md-4 mb-4">
            <div className="card">
                <img src={producto.imagen} className="card-img-top card-img" alt={producto.sabor} />
                <div className="card-body">
                    <h5 className="card-title">  {producto.sabor}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">Precio: {producto.precio}</p>
                    <p className="card-text">Puffs: {producto.puffs}</p>
                </div>
            </div>
        </div>
  </div>
  )
}

export default ItemDetail
