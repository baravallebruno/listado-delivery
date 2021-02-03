import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PedidosContext } from "../context/PedidosContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ sabor }) => {
  //State que viene del context
  const {
    cantidadproducto,
    setCantidadproducto,
    pedidoseleccionado
  } = useContext(PedidosContext);

  const [valorinput, setValorinput] = useState(0);

  //funcion que actualiza la cantidad de empanadas en el array
  const actualizarCantidadEmpanadas = (val) => {
    const cantidadproductonueva = cantidadproducto.map((producto) => {
      if (producto.id === sabor) {
        return { ...producto, cant: val };
      }
      return producto;
    });
    setCantidadproducto(cantidadproductonueva);
  };

  //Funcion que aumenta el counter
  const aumentar = (e) => {
    e.preventDefault();
    const newvalorinput = valorinput + 1;
    setValorinput(newvalorinput);

    actualizarCantidadEmpanadas(newvalorinput);
  };

  //Funcion que disminuye el counter
  const disminuir = (e) => {
    e.preventDefault();

    const newvalorinput = valorinput - 1;
    if (valorinput < 1) {
      return;
    } else {
      setValorinput(newvalorinput);
    }
    actualizarCantidadEmpanadas(newvalorinput);
  };

  useEffect(() => {
    //effect coloca los valores del pedido seleccionado en el state

    if (pedidoseleccionado !== null) {
      const arrnuevacantidad = pedidoseleccionado.orden;

      const newcantidadproducto = cantidadproducto.map((item) => {
        arrnuevacantidad.forEach((prod) => {
          if (prod.id === item.id) {
            cantidadproducto.splice(cantidadproducto.indexOf(item), 1, prod);
          }
          return;
        });
        return item;
      });

      setCantidadproducto(newcantidadproducto);

      arrnuevacantidad.forEach((cant) => {
        if (cant.id === sabor) {
          if (cant.cant < 0) return;
          setValorinput(cant.cant);
        }
      });
    } else {
      setValorinput(0);
    }
    // eslint-disable-next-line
  }, [pedidoseleccionado]);

  return (
    <div className="counter">
      <button
        className={`btn btn-outline-danger btn-lg fw-bold boton ${
          valorinput <= 0 ? "disabled" : null
        }`}
        onClick={disminuir}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        className={`form-control border-0 text-center cantidad ${
          valorinput === 0 ? "text-secondary" : "text-danger"
        }`}
        type="number"
        value={valorinput}
        readOnly
      />
      <button
        className="btn btn-outline-danger btn-lg fw-bold boton"
        onClick={aumentar}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

Counter.propTypes = {
  sabor: PropTypes.string.isRequired
};

export default Counter;
