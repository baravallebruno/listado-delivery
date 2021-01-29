import React from "react";

const Pedido = ({ pedido, eliminarPedido, editarPedido }) => {
  return (
    <div className="card shadow-sm p-2 mb-3 bg-white rounded border-0">
      <div className="card-body">
        <h5 className="card-title">{pedido.nombre}</h5>
        <ul className="list-group list-group-flush">
          {pedido.orden === null
            ? null
            : pedido.orden.map((item) => (
                <li className="list-group-item" key={item.id}>
                  Sabor: {item.id} Cantidad: {item.cant}
                </li>
              ))}
        </ul>
        <button
          className="btn btn-outline-primary"
          onClick={() => eliminarPedido(pedido.id)}
        >
          Eliminar &times;
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => editarPedido(pedido.id)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default Pedido;
