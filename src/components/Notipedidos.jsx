import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const Notipedidos = () => {
  return (
    <div className="text-center px-3">
      <h1 className="text-claro carita">
        <FontAwesomeIcon icon={faFrown} />
      </h1>
      <h1 className="text-claro fw-bold">No hay pedidos...</h1>
      <p className="">Ingresá un nombre para realizar el primer pedido.</p>
    </div>
  );
};

export default Notipedidos;
