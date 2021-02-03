import React, { useContext, useEffect, useState } from "react";
import { PedidosContext } from "../context/PedidosContext";
import PedidoTotal from "./PedidoTotal";

const Footer = () => {
  const { pedidos } = useContext(PedidosContext);
  const [preciototal, setPreciototal] = useState(0);
  const [showpedido, setShowpedido] = useState(false);

  useEffect(() => {
    const precios = pedidos.map((pedido) => pedido.precio);

    if (precios.length !== 0) {
      const preciototal = precios.reduce((acc, cur) => acc + cur);
      setPreciototal(preciototal);
    }
  }, [pedidos]);

  const mostrarPedido = () => {
    if (showpedido) {
      setShowpedido(false);
    } else {
      setShowpedido(true);
    }
  };

  return (
    <>
      {showpedido ? <PedidoTotal /> : null}

      <div className="fixed-bottom bg-dark p-4 shadow-lg">
        <div className="mx-auto d-flex justify-content-between align-items-center footer">
          <div className="d-flex flex-column pl-4">
            <span className="h6 fw-normal text-danger">Precio total</span>
            <p className="fw-bold text-danger h1 precio">
              <span className="h3 text-danger mr-2 fw-bold">$ </span>
              {preciototal}
            </p>
          </div>
          <button
            className="btn btn-block btn-lg btn-danger py-3 fw-bold btn-principal"
            onClick={mostrarPedido}
          >
            {showpedido ? "Ocultar" : "Ver pedido"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
