import React, { useState, useContext } from "react";
import Counter from "./Counter";
import { PedidosContext } from "../context/PedidosContext";

const Producto = ({ sabor, ingredientes }) => {
  const [cantidad, setCantidad] = useState(0);

  const { cantidadproducto, setCantidadproducto } = useContext(PedidosContext);

  const cantidadEmp = (e) => {
    setCantidadproducto([
      ...cantidadproducto,
      {
        id: sabor,
        cant: inputRef.current.value
      }
    ]);
  };

  return (
    <div className="card shadow p-2 mb-3 bg-white rounded border-0">
      <div className="card-body">
        <div className="row d-flex align-items-center">
          <div className="card-text col-8">{sabor}</div>

          <div className="col-4">
            <Counter
              sabor={sabor}
              setCantidad={setCantidad}
              cantidad={cantidad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
