import React from "react";

const Counter = ({ sabor, cantidad, setCantidad }) => {
  //funcion aumentar
  const aumentar = () => {
    setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad < 1) return;
    setCantidad(cantidad - 1);
  };

  return (
    <div className="input-group">
      <button
        className={`btn btn-primary fw-bold border-end-0 ${
          cantidad === 0 ? "disabled" : null
        }`}
        onClick={disminuir}
      >
        -
      </button>
      <input
        className="form-control border-0 fw-bold text-primary text-center cantidad"
        type="number"
        value={cantidad}
      />
      <button
        className="btn btn-primary fw-bold border-start-0"
        onClick={aumentar}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
