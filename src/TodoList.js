import React from "react";
import Todo from "./Todo.js";
import "./TodoList.css";
import { DELETE} from "./App.js";
import TodoAdd from "./TodoAdd";
import _ from "lodash";
import TodoAuto from "./todoauto";
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

  addTodo(todo) {
    const oldTodos = _.cloneDeep(this.state.todos);
    todo._id = oldTodos.length;
    oldTodos.push(todo);
    this.setState({ todos: oldTodos });
  }

  render() {
    console.log(this.state);
    return (
      <div> 
        <TodoAuto todos={this.state.todos} />
      <div className="PageContent">
        
        <div className="PageLeft">
          <div className="TodoList">
            <h1 className="TodoList-header">Todos</h1>
            <nav className="TodoList-body">
              {this.state.todos.map((todo, i) => this.renderTodo(todo, i))}
            </nav>
          </div>
        </div>
        <div className="PageRight">
          <TodoAdd addTodo={todo => this.addTodo(todo)} />
        </div>
      </div>
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
