import React from "react";
import "./TodoAdd.css";
import { SHOWN } from "./App.js";
import _ from "lodash";

export default class todoAdd extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Todo</h1>
        Welcome<br />
        <input
          type="text"
          className="Todo-add-title-input"
          id="Todo-add-title"
        />
        <br />
        <textarea
          name="description"
          className="Todo-add-description-input"
          id="Todo-add-description"
        />
        <br />
        <button
          type="button"
          value="Save"
          className="Todo-add-button"
          onClick={e => this.addTodo()}
        >
          Save
        </button>
        <button
          type="reset"
          value="Reset"
          className="Todo-add-button"
          onClick={e => this.todoAddReset()}
        >
          Reset
        </button>
      </div>
    );
  }
  addTodo() {
    let title = document.getElementById("Todo-add-title").value;
    let description = document.getElementById("Todo-add-description").value;
    this.todoAddReset();
    if (title === "" || description === "") {
      return true;
    }
    let todo = {};
    todo.title = title;
    todo.description = description;
    todo.status = SHOWN;
    this.props.addTodo(todo);
  }

  todoAddReset() {
    document.getElementById("Todo-add-title").value = "";
    document.getElementById("Todo-add-description").value = "";
  }
}
