import React, { useContext, useEffect, useState } from "react";
import { PedidosContext } from "../context/PedidosContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ sabor }) => {
  //State que viene del context
  const { cantidadproducto, setCantidadproducto } = useContext(PedidosContext);

  const [valorinput, setValorinput] = useState(0);

  // Extraer ID de array de objetos de state
  const idMap = cantidadproducto.map((valor) => {
    if (valor.id === sabor) {
      return valor.id;
    }
    return valor;
  });

  //convertir ID en string
  // eslint-disable-next-line
  const id = idMap.filter((value) => value !== undefined).toString();

  //Extraer cantidad de array de objetos en state
  const amount = cantidadproducto.map((valor) => {
    if (valor.id === sabor) return valor.cant;
    // eslint-disable-next-line
    return;
  });
  const canti = amount.filter((numero) => numero !== undefined);
  const cantEmpanadas = canti[0];

  //Funcion que aumenta el counter
  const aumentar = (e) => {
    e.preventDefault();
    setCantidadproducto(
      cantidadproducto.map((valor) => {
        if (valor.id === sabor) {
          return { ...valor, cant: valor.cant + 1 };
        }
        return valor;
      })
    );
  };

  //Funcion que disminuye el counter
  const disminuir = (e) => {
    e.preventDefault();

    setCantidadproducto(
      cantidadproducto.map((valor) => {
        if (valor.id === sabor) {
          if (valor.cant === 0) return { ...valor, cant: valor.cant };
          return { ...valor, cant: valor.cant - 1 };
        }
        return valor;
      })
    );
  };

  const actualizarState = (e) => {
    cantidadproducto.forEach((valor) => {
      if (valor.id === sabor) {
        setCantidadproducto(...cantidadproducto, { cant: e.target.value });
      }
      return valor;
    });

    //setCantidadproducto(empUpdated);
  };

  useEffect(() => {
    cantidadproducto.forEach((cant) => {
      if (cant.id === sabor) {
        if (cant.cant < 0) return;
        setValorinput(cant.cant);
      }
    });
    // eslint-disable-next-line
  }, [cantidadproducto]);

  return (
    <div className="counter">
      <button
        className={`btn btn-outline-danger btn-lg fw-bold boton ${
          cantEmpanadas <= 0 ? "disabled" : null
        }`}
        onClick={disminuir}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        className={`form-control border-0 text-center cantidad ${
          cantEmpanadas === 0 ? "text-secondary" : "text-danger"
        }`}
        type="number"
        value={valorinput}
        onChange={actualizarState}
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

export default Counter;
