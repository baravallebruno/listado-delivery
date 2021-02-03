import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { PedidosContext } from "../context/PedidosContext";
import Counter from "./Counter";

const Producto = ({ sabor, ingredientes }) => {
  const { cantidadproducto, pedidoseleccionado } = useContext(PedidosContext);
  const [cantidadempanadas, setCantidadempanadas] = useState(0);

  useEffect(() => {
    const amount = cantidadproducto.map((valor) => {
      if (valor.id === sabor) return valor.cant;
      return valor;
    });

    const canti = amount.filter((numero) => numero !== undefined);
    const cantEmpanadas = canti[0];
    setCantidadempanadas(cantEmpanadas);
    // eslint-disable-next-line
  }, [cantidadproducto, pedidoseleccionado]);

  return (
    <div className="card mb-2 py-2 rounded bg-white border-white">
      <div className="card-body">
        <div className="row d-flex align-items-center">
          <div
            className={`card-text fw-bold col-6 ${
              cantidadempanadas > 0 ? "text-danger" : "text-secondary"
            }`}
          >
            {sabor}
          </div>

          <div className="col-6">
            <Counter sabor={sabor} />
          </div>
        </div>
      </div>
    </div>
  );
};

Producto.propTypes = {
  sabor: PropTypes.string.isRequired,
  ingredientes: PropTypes.array.isRequired
};

export default Producto;
