import React, { Fragment, useState } from "react";
import ListadoProductos from "./ListadoProductos";

import PedidosProvider from "../context/PedidosContext";

const Formulario = () => {
  return (
    <PedidosProvider>
      <p className="lead mb-2">Quien pide?</p>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Nombre</label>
      </div>
      <ListadoProductos />
    </PedidosProvider>
  );
};

export default Formulario;
