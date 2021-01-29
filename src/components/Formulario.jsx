import React, { useContext, useState, useEffect, Fragment } from "react";
import ListadoProductos from "./ListadoProductos";
import Notipedidos from "./Notipedidos";
import { PedidosContext } from "../context/PedidosContext";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ guardarPedidos, pedidos }) => {
  const { cantidadproducto, setError, setCantidadproducto } = useContext(
    PedidosContext
  );
  console.log("Pedidos state");
  console.log(pedidos);

  const [pedido, setPedido] = useState({
    nombre: "", //string
    orden: null, //array objetos
    precio: null, //numero
    id: "" //string
  });

  const [nombrecampo, setNombrecampo] = useState("");

  const { nombre, orden } = pedido;

  //Leer valores de inputs y actualizar los states
  const handleChange = (e) => {
    setNombrecampo(e.target.value);
    if (nombrecampo === "") {
      setPedido({
        ...pedido,
        nombre: ""
      });
    }
  };

  const setearNombre = (e) => {
    //actualiza el state de nombre
    if (e.charCode === 13) {
      setPedido({
        ...pedido,
        nombre: nombrecampo
      });
    }
  };

  useEffect(() => {
    //Eliminar los productos que estan en 0
    const arrPedido = cantidadproducto.filter(
      (cantidad) => cantidad.cant !== 0
    );
    //funcion que obtiene el precio de cada item
    const obtenerPrecio = () => {
      const precioparcial = arrPedido.map((num) => {
        return num.precio * num.cant;
      });
      console.log(precioparcial);
      //comprobamos que exista un precio en el array
      if (precioparcial.length !== 0) {
        //suma de los precios del array
        const preciopedido = precioparcial.reduce((acc, cur) => acc + cur);
        return preciopedido;
      }
    };
    const precio = obtenerPrecio();
    console.log(precio);

    setPedido({
      ...pedido,
      orden: arrPedido,
      precio: precio
    });
    // eslint-disable-next-line
  }, [cantidadproducto]);

  // funcion que limpia los forms y el state de cantidad producto
  const limpiarForm = () => {
    setNombrecampo("");
    setPedido({
      nombre: "",
      orden: null,
      precio: null,
      id: ""
    });
    setCantidadproducto(
      cantidadproducto.map((valor) => {
        return (valor = { ...valor, id: valor.id, cant: 0 });
      })
    );
  };

  //Funcion que se ejecuta al hacer click en pedir
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar si existe nombre y pedido no esta en 0
    if (nombre === "" || orden.length === 0) {
      setError(true);
      return;
    }
    setError(false);

    //Asignar un ID al pedido
    pedido.id = uuidv4();
    //actualizar state de pedido

    guardarPedidos(pedido);
    //reiniciar el form
    limpiarForm();
  };
  console.log("Pedidos state 1");
  console.log(pedidos);

  const quienpide =
    pedidos.length === 0 ? "Quien pide primero?" : "Quien es el siguiente?";

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className={pedidos.length !== 0 ? "mb-2" : "mb-6"}
      >
        {pedido.nombre ? null : (
          <>
            <h5 className="mb-3 fw-bold mt-4">{quienpide}</h5>
            <div className="form-group mb-3 mt-3">
              <input
                type="text"
                className="form-control form-control-lg mt-2"
                placeholder="Nombre"
                id="nombre"
                name="nombre"
                autocomplete="off"
                value={nombrecampo}
                onChange={handleChange}
                onKeyPress={setearNombre}
                onBlur={handleChange}
              />
            </div>

            {pedidos.length === 0 && <Notipedidos />}
          </>
        )}

        {pedido.nombre && (
          <>
            <h5 className="mb-3 fw-bold mt-4">
              Que pedimos para {nombrecampo}?
            </h5>
            <ListadoProductos />
            <div className="fixed-bottom bg-dark p-4 d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column pl-4">
                <span className="h6 fw-normal text-danger">Precio</span>
                <p className="fw-bold text-danger h1 precio">
                  <span className="h3 text-danger mr-2 fw-bold">$ </span>
                  {`${!pedido.precio ? 0 : pedido.precio}`}
                </p>
              </div>
              <input
                type="submit"
                className="btn btn-block btn-lg btn-danger py-3 fw-bold btn-principal"
                value="Confirmar"
              />
            </div>
          </>
        )}
      </form>
    </Fragment>
  );
};

export default Formulario;
