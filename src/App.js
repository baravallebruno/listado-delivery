import React, { useContext, Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Pedido from "./components/Pedido";
import { PedidosContext } from "./context/PedidosContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const App = () => {
  const { pedidos, setPedidos } = useContext(PedidosContext);

  // funcion que guarda los pedidos en el state
  const guardarPedidos = (pedido) => {
    setPedidos([pedido, ...pedidos]);
  };

  // funcion que edita el pedido elegido
  const actualizarPedido = (pedido) => {
    console.log("Pedidos antes de actualizar");
    console.log(pedidos);

    const nuevospedidos = pedidos.filter((ped) => ped.id !== pedido.id);

    setPedidos([...nuevospedidos, pedido]);
  };

  // funcion que elimina los pedidos en el state
  const eliminarPedido = (id) => {
    const nuevospedidos = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(nuevospedidos);
  };

  const titulo =
    pedidos.length !== 0 ? (
      <h5 className="mb-3 fw-bold mt-2 ms-2 text-danger">
        Aca estan tus pedidos <FontAwesomeIcon icon={faHandPointDown} />{" "}
      </h5>
    ) : null;

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-12">
            <Formulario
              guardarPedidos={guardarPedidos}
              actualizarPedido={actualizarPedido}
              pedidos={pedidos}
            />
          </div>

          {pedidos.length === 0 ? null : (
            <div className="col-md-8 col-12">
              <div className="lista-pedidos mb-6">
                {titulo}
                {pedidos.map((pedido) => {
                  return (
                    <Pedido
                      pedido={pedido}
                      key={pedido.id}
                      eliminarPedido={eliminarPedido}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
