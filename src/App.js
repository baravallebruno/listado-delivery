import React, { useState, useEffect, useContext, Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Pedido from "./components/Pedido";
import { PedidosContext } from "./context/PedidosContext";

import "./styles.css";

const App = () => {
  //State que viene del context
  const { cantidadproducto, setCantidadproducto } = useContext(PedidosContext);

  let pedidosiniciales = JSON.parse(localStorage.getItem("pedidos"));
  if (!pedidosiniciales) {
    pedidosiniciales = [];
  }

  //array de pedidos en state
  const [pedidos, setPedidos] = useState(pedidosiniciales);

  //useEffect para revisar pedidos en el localStorage
  useEffect(() => {
    if (pedidosiniciales) {
      localStorage.setItem("pedidos", JSON.stringify(pedidos));
    } else {
      localStorage.setItem("pedidos", JSON.stringify([]));
    }
    // eslint-disable-next-line
  }, [pedidos]);

  // funcion que guarda los pedidos en el state
  const guardarPedidos = (pedido) => {
    setPedidos([...pedidos, pedido]);
  };

  // funcion que elimina los pedidos en el state
  const eliminarPedido = (id) => {
    const nuevospedidos = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(nuevospedidos);
  };

  const editarPedido = (id) => {
    const pedidomodificar = pedidos.filter((pedido) => pedido.id === id);
    const [pedido] = pedidomodificar;

    cantidadproducto.forEach((item) => {
      pedido.orden.forEach((prod) => {
        if (prod.id === item.id) {
          cantidadproducto.splice(cantidadproducto.indexOf(item), 1, prod);
        }
        return;
      });
    });

    setCantidadproducto(cantidadproducto);
  };

  const titulo =
    pedidos.length !== 0 ? (
      <h5 className="mb-3 fw-bold mt-2">Pedidos realizados</h5>
    ) : null;

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-12">
            <Formulario guardarPedidos={guardarPedidos} pedidos={pedidos} />
          </div>
          <div className="col-md-6 col-12 text-center">
            {titulo}
            {pedidos.map((pedido) => (
              <Pedido
                pedido={pedido}
                key={pedido.id}
                eliminarPedido={eliminarPedido}
                editarPedido={editarPedido}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
