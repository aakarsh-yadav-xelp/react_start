import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

export default class Todo extends Component {
  renderTitle(todo) {
    return (
      <div className="Todo-title">
        <div>
          <b>Title-</b> &nbsp;
          <div id={"title" + todo._id}>{todo.title}</div>
          <br />
        </div>
      </div>
    );
  }

  renderBody(todo) {
    return (
      <div className="Todo-body">
        <div className="Todo-description">
          <b>Description </b>
          <div id={"des" + todo._id}>
            {todo.description}
          </div>
        </div>
      </div>
    );
  }

  renderButtons(todo) {
    return (
      <div className="Todo-buttons">
        <button
          title="Edit"
          className="Todo-edit-button"
          id={todo._id}
          onClick={() => this.todoEditShow(todo)}
        >
          &#9998;
        </button>
        <button
          title="Delete"
          className="Todo-delete-button"
          onClick={e => this.props.deleteTodo(todo)}
        >
          &#10008;
        </button>
      </div>
    );
  }

  render() {
    const { todo } = this.props;

    return todo.status
      ? <div className="Todo">
          {this.renderButtons(todo)}
          {this.renderTitle(todo)}
          {this.renderBody(todo)}
          {this.renderTodoEdit(todo)}
        </div>
      : <div />;
  }

  renderTodoEdit(todo) {
    return (
      <div className={"Todo-Body-Edit Todo-Body-Edit-" + todo._id}>
        <input
          type="text"
          id={"Todo-Body-Edit-Title-" + todo._id}
          className="Todo-Body-Edit-Title"
          placeholder={todo.title}
        />
        <br />
        <input
          type="text"
          id={"Todo-Body-Edit-Description-" + todo._id}
          className="Todo-Body-Edit-Description"
          placeholder={todo.description}
        />
        <br />
        <button
          className="Todo-Body-Edit-Save"
          onClick={e => this.todoEditSave(todo._id)}
        >
          Edit
        </button>
        <button
          className="Todo-Body-Edit-Reset"
          onClick={e => this.todoEditCancle(todo._id)}
        >
          Cancel
        </button>
      </div>
    );
  }
  todoEditCancle(id) {
    document.getElementsByClassName("Todo-Body-Edit-" + id)[0].style.display =
      "none";
  }
  todoEditShow(todo) {
    document.getElementsByClassName("Todo-Body-Edit")[0].style.display = "none";
    document.getElementsByClassName(
      "Todo-Body-Edit-" + todo._id
    )[0].style.display =
      "block";
  }

  todoEditSave(id) {
    let task = {};
    task._id = id;
    task.title = document.getElementById("Todo-Body-Edit-Title-" + id).value;
    task.description = document.getElementById(
      "Todo-Body-Edit-Description-" + id
    ).value;
    this.props.editTodo(task);
    document.getElementsByClassName("Todo-Body-Edit-" + id)[0].style.display =
      "none";
  }
}

Todo.propTypes = {
  todo: PropTypes.object,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};
