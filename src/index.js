import React from "react";
import ReactDOM from "react-dom";
import PedidosProvider from "./context/PedidosContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PedidosProvider>
    <App />
    </PedidosProvider>
  </React.StrictMode>,
  rootElement
);
