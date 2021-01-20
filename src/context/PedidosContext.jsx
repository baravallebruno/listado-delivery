import React, { createContext, useState } from "react";

//crear el context
export const PedidosContext = createContext();

//Provider donde se encuentran disponibles funciones y state
const PedidosProvider = (props) => {
  const [cantidadproducto, setCantidadproducto] = useState({
    id: null,
    cant: 0
  });

  return (
    <PedidosContext.Provider
      value={{
        cantidadproducto,
        setCantidadproducto
      }}
    >
      {props.children}
    </PedidosContext.Provider>
  );
};

export default PedidosProvider;
