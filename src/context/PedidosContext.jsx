import React, { createContext, useState } from "react";

//crear el context
export const PedidosContext = createContext();

//Provider donde se encuentran disponibles funciones y state
const PedidosProvider = (props) => {
  const [cantidadproducto, setCantidadproducto] = useState([
    { id: "Carne", precio: 35, cant: 0 },
    { id: "Carne Picante", precio: 35, cant: 0 },
    { id: "Cebolla y queso", precio: 35, cant: 0 },
    { id: "Humita", precio: 35, cant: 0 },
    { id: "Jamón y queso", precio: 35, cant: 0 },
    { id: "Pollo", precio: 35, cant: 0 },
    { id: "Verdura", precio: 35, cant: 0 },
    { id: "Mediterranea", precio: 42, cant: 0 },
    { id: "Roquefórt Jamón y Apio", precio: 24, cant: 0 },
    { id: "Pollo al curry", precio: 42, cant: 0 },
    { id: "Bondiola BBQ", precio: 42, cant: 0 },
    { id: "Veggie Integral", precio: 42, cant: 0 },
    { id: "Cheeseburguer", precio: 42, cant: 0 }
  ]);

  const [error, setError] = useState(false);

  return (
    <PedidosContext.Provider
      value={{
        cantidadproducto,
        error,
        setCantidadproducto,
        setError
      }}
    >
      {props.children}
    </PedidosContext.Provider>
  );
};

export default PedidosProvider;
