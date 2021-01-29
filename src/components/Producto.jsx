import React, { useContext } from "react";
import Counter from "./Counter";
import { PedidosContext } from "../context/PedidosContext";

const Producto = ({ sabor, ingredientes }) => {
  const { cantidadproducto } = useContext(PedidosContext);

  const amount = cantidadproducto.map((valor) => {
    if (valor.id === sabor) return valor.cant;
  });

  const canti = amount.filter((numero) => numero !== undefined);
  const cantEmpanadas = canti[0];

  return (
    <div className="card mb-2 py-2 rounded bg-white border-white">
      <div className="card-body">
        <div className="row d-flex align-items-center">
          <div
            className={`card-text fw-bold col-6 ${
              cantEmpanadas > 0 ? "text-danger" : "text-secondary"
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

export default Producto;
