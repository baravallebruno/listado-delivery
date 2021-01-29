import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const Notipedidos = () => {
  return (
    <div className="text-center">
      <h1 className="text-danger carita">
        <FontAwesomeIcon icon={faFrown} />
      </h1>
      <h1 className="text-danger fw-bold">No hay pedidos...</h1>
    </div>
  );
};

export default Notipedidos;
