import React from "react";
import PropTypes from 'prop-types';
import { FaPlus } from "react-icons/fa";

import './Form.css';

export default function Form({ handleSubmit, handleChange, createTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={createTask} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

/* Form.defaultProps = {
  createTask: 'Valor padrao...'
}; */

// Colocando valor default nao coloque '.isRequired' abaixo

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  createTask: PropTypes.string.isRequired,
};
