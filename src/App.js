import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

import "./styles.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Formulario />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
