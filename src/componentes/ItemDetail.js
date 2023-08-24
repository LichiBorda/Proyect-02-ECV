import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'; // Asegúrate de importar ItemCount u otros componentes necesarios aquí

function ItemDetail({ productos }) { // Pasa el array de productos como prop
  const { id } = useParams();
  const producto = productos.find(prod => prod.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="row mt-4">
      <div className="col-md-6">
        <img src={producto.imagen} alt={producto.sabor} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{producto.sabor}</h2>
        <p>Precio: ${producto.precio}</p>
        <p>{producto.descripcion}</p>
        {/* Renderiza otros detalles */}
        <ItemCount /> {/* O cualquier otro componente que necesites */}
      </div>
    </div>
  );
}

export default ItemDetail;