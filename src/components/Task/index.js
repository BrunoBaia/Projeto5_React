import React from "react";
//import PropTypes from 'prop-types';
import { FaWindowClose, FaEdit } from "react-icons/fa";

import './Task.css';

export default function Task(props/* { tasks, handleEdit, handleDelete } */) {
  return (
    <ul className="tasks">
      {props.tasks.map((task, index) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit onClick={(e) => props.handleEdit(e, index)} className="edit" />
            <FaWindowClose onClick={(e) => props.handleDelete(e, index)} className="delete" />
          </div>
        </li>
      ))}
    </ul>
  );
}

/* Task.defaultProps = {
  tasks: 'Valor padrao...'
};  */

// Colocando valor default nao coloque '.isRequired' abaixo

/* Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}; */
