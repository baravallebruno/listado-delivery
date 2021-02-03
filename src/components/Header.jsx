import React, { useContext } from "react";
import { PedidosContext } from "../context/PedidosContext";
import Logo from "../assests/Logo.svg";

const Header = () => {
  const { pedido, pedidos } = useContext(PedidosContext);

  const { nombre } = pedido;

  return (
    <nav className="navbar navbar-dark bg-dark justify-content-center top p-3 shadow-sm">
      <img
        src={Logo}
        alt="Logo"
        className={!nombre && pedidos.length === 0 ? "logo-grande" : "logo"}
      />
    </nav>
  );
};

export default Header;
