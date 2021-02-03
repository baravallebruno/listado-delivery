import React, { useContext } from "react";
import PropTypes from "prop-types";

import { PedidosContext } from "../context/PedidosContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Pedido = ({ pedido, eliminarPedido }) => {
  //State que viene del context
  const { setPedidoseleccionado } = useContext(PedidosContext);

  const { nombre, orden, precio } = pedido;

  const seleccionarPedido = () => {
    setPedidoseleccionado(pedido);
  };

  let listado = [];
  if (orden !== undefined) {
    listado = orden.map((item) => (
      <li className="list-group-item px-2" key={item.id}>
        <span className="fw-bold h3 ml-3">{item.cant} </span>
        <span className="mr-2">{item.id}</span>
      </li>
    ));
  }

  return (
    <div className="card shadow-sm p-2 mb-3 bg-white rounded border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between ">
          <p className="nombre-pedido fw-bold text-secondary my-auto">
            {nombre}
          </p>
          <div className="btn-edit">
            <button
              className="btn btn-pedido"
              onClick={() => seleccionarPedido(pedido)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="btn btn-pedido ml-2"
              onClick={() => eliminarPedido(pedido.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <ul className="list-group list-group-flush pe-3 w-70">
            {orden !== null ? listado : null}
          </ul>

          <div className="mx-auto text-end">
            <span className="small">Total {nombre}</span>
            <p className="fw-bold text-danger h3">
              <span className="fw-bold h6">$ </span>
              {precio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Pedido.propTypes = {
  pedido: PropTypes.object.isRequired,
  eliminarPedido: PropTypes.func.isRequired
};

export default Pedido;
