import React, { Fragment } from "react";
import Producto from "./Producto";
import { empanadas } from "../helpers/helpers";

const ListadoProductos = () => {
  return (
    <Fragment>
      {empanadas.map((empanada) => (
        <Producto
          key={empanada.sabor}
          sabor={empanada.sabor}
          ingredientes={empanada.ingredientes}
        />
      ))}
    </Fragment>
  );
};

export default ListadoProductos;
