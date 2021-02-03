import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Error = ({ mensaje }) => {
  return (
    <div className="d-flex justify-content-between align-items-center card bg-danger text-white pedido-total p-3 shadow-lg text-center">
      <span>
        {"  "}
        <span className="h2 me-1">
          <FontAwesomeIcon icon={faExclamationCircle} />
        </span>
        {"   "}
        {mensaje}
      </span>
    </div>
  );
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired
};

export default Error;
