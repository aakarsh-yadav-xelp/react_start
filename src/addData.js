import React from "react";
import "./TodoAdd.css";
import _ from "lodash";

export default class todoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    };
  }
  render() {
    return (
      <div>
        Welcome<br />
        <input
          type="text"
          name="Todo-title-input"
          className="Todo-title-input"
          id="Todo-title"
        />
        <br />
        <textarea
          name="description"
          className="Todo-description-input"
          id="Todo-description"
        />
        <br />
        <button
          type="button"
          value="Save"
          className="Todo-add-button"
          onClick={e => this.saveDataList()}
        >
          Save
        </button>
        <button
          type="reset"
          value="Reset"
          className="Todo-add-button"
          onClick={e => this.resetDataList()}
        >
          Reset
        </button>
      </div>
    );
  }
  saveDataList() {
    let title = document.getElementById("Todo-title").value;
    let description = document.getElementById("Todo-description").value;
    document.getElementById("Todo-title").value = "";
    document.getElementById("Todo-description").value = "";
    if (title === "" || description === "") {
      return true;
    }
    let todo = {};
    todo.title = title;
    todo.description = description;
    todo.status = 1;
    this.todoAdd(todo);
    return true;
  }
  todoAdd(todoToAdd) {
    alert("sadsa");
    const oldTodos = _.cloneDeep(this.state.todos);
    const { todos } = this.props;
    todoToAdd._id = todos.length + 1;
    oldTodos.push(todoToAdd);
    console.log(oldTodos);
    this.forceUpdate({ oldTodos });
    console.log(this.state.todos);
  }
  resetDataList() {
    document.getElementById("Todo-title").value = "";
    document.getElementById("Todo-description").value = "";
  }
}
