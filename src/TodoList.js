import React from "react";
import Todo from "./Todo.js";
import "./TodoList.css";
import { DELETE, SHOWN } from "./App.js";
import _ from "lodash";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    };
  }
  deleteTodo(todoToDelete) {
    const oldTodos = _.cloneDeep(this.state.todos);
    oldTodos.forEach(todo => {
      if (todo._id === todoToDelete._id) {
        todo.status = DELETE;
      }
    });
    this.setState({ todos: oldTodos });
    console.log(this.state.todos);
  }

  editTodo(todo) {
    const oldTodos = _.cloneDeep(this.state.todos);
    oldTodos.forEach(todoToEdit => {
      if (todoToEdit._id === todo._id) {
        todoToEdit.title = todo.title;
        todoToEdit.description = todo.description;
      }
    });
    this.setState({ todos: oldTodos });
  }

  render() {
    return (
      <div className="TodoList">
        <h1 className="TodoList-header">Todos</h1>
        <nav className="TodoList-body">
          {this.state.todos.map((todo, i) => this.renderTodo(todo, i))}
        </nav>
      </div>
    );
  }

  renderTodo(todo, index) {
    return (
      <Todo
        key={index}
        todo={todo}
        editTodo={todo => this.editTodo(todo)}
        deleteTodo={todo => this.deleteTodo(todo)}
      />
    );
  }
}
