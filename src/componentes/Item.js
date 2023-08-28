import React from 'react';

function Item({ product }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={product.imagen} className="card-img-top card-img" alt={product.sabor} />
                <div className="card-body">
                    <h5 className="card-title">{product.sabor}</h5>
                    <p className="card-text">{product.descripcion}</p>
                    <p className="card-text">Precio: {product.precio}</p>
                    <p className="card-text">Puffs: {product.puffs}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;