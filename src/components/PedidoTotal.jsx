import React, { useContext, useState, useEffect } from "react";
import { PedidosContext } from "../context/PedidosContext";

const PedidoTotal = () => {
  const { pedidos, cantidadproducto } = useContext(PedidosContext);

  const [cantidadtotal, setCantidadtotal] = useState([]);
  const [totalempanadas, setTotalempanadas] = useState(null);

  useEffect(() => {
    const arrordenes = pedidos.map((val) => {
      return val.orden;
    });

    let newcantidadtotal = [];
    cantidadproducto.map((val) => {
      arrordenes.map((arr) => {
        arr.map((elem) => {
          if (elem.id === val.id) {
            const cantidad = elem.cant + val.cant;

            const newvalor = { ...val, cant: cantidad };

            newcantidadtotal = [...newcantidadtotal, newvalor];
            return { ...val, cant: cantidad };
          }
          return elem;
        });

        return arr;
      });

      return val;
    });

    let nuevototal = [];
    cantidadproducto.forEach((val) => {
      const arr = newcantidadtotal.filter((elem) => elem.id === val.id);

      if (arr.length !== 0) {
        const suma = arr.reduce((acc, cur) => {
          const newtotal = acc.cant + cur.cant;
          return { ...val, cant: newtotal };
        });
        nuevototal = [...nuevototal, suma];
        console.log(suma);
      }
      return val;
    });

    //total de empanadas en el pedido
    const cantempanadastotal = nuevototal.reduce((acc, cur) => {
      return { cant: acc.cant + cur.cant };
    });

    setTotalempanadas(cantempanadastotal);
    setCantidadtotal(nuevototal);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-100 h-100 fondo">
      <div className="card bg-white pedido-total p-3 shadow-lg">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h5 className="fw-bold my-auto ms-2">Total pedido</h5>
          <span className="text-secondary fw-bold h5 my-auto">
            {totalempanadas ? totalempanadas.cant : 0}{" "}
            <span className="text-secondary fw-normal h6">empanadas.</span>
          </span>
        </div>
        <ul className="list-group list-group-flush pe-3 overflow-scroll">
          {cantidadtotal.map((item) => {
            return (
              <li className="list-group-item px-2" key={item.id}>
                <span className="fw-bold h3 ml-3">{item.cant} </span>
                <span className="mr-2"> {item.id}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PedidoTotal;
