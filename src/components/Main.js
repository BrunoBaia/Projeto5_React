import React, { Component } from "react";

import Form from './Form/index.js';
import Task from './Task/index.js';

import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createTask: "",
      tasks: [],
      editTask: -1,
    };
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleChange = (e) => {
    this.setState({
      createTask: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { createTask, editTask } = this.state;
    const response = e.target.nextElementSibling;
    createTask = createTask.trim();

    if (tasks.indexOf(createTask) !== -1) {
      this.setState({ editTask: -1, createTask: "" });
      response.style.backgroundColor = "rgb(232, 45, 45)";
      response.innerText = 'Tarefa ja existe';
      return;
    };

    if (!createTask) {
      this.setState({ editTask: -1, createTask: "" });
      response.style.backgroundColor = "rgb(232, 45, 45)";
      response.innerText = 'Digite uma tarefa';
      return;
    }

    const newTasks = [...tasks];

    response.style.backgroundColor = "rgb(28, 234, 28)";

    if (editTask !== -1) {
      newTasks[editTask] = createTask;
      this.setState({
        tasks: [...newTasks],
        createTask: "",
        editTask: -1
      });

      response.innerText = 'Tarefa editada com sucesso';
      return;
    }

    this.setState({
      tasks: [...newTasks, createTask],
      createTask: "",
    });

    response.innerText = 'Tarefa criada com sucesso';
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    let { createTask, editTask } = this.state;

    createTask = tasks[index];
    editTask = index;
    this.setState({
      createTask,
      editTask
    });
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    const response = document.querySelector('.response');

    response.style.backgroundColor = "rgb(28, 234, 28)";
    response.innerText = `Tarefa '${newTasks[index]}' deletada com sucesso`;

    newTasks.splice(index, 1);
    this.setState({
      tasks: [...newTasks],
    });
  }

  render() {
    const { createTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        createTask={createTask}
        />

        <div className="response"></div>

        <Task
        tasks={tasks}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
