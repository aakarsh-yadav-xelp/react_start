import React from "react";
import "./App.css";
import TodoList from "./TodoList";

// import AddData from "./addData";
export const DELETE = 0;
export const SHOWN = 1;

var todos = [
  {
    _id: 0,
    title: "Todo App 1",
    description: "This is the first todo",
    status: SHOWN
  },
  {
    _id: 1,
    title: "Todo App 2",
    description: "This is the second todo",
    status: SHOWN
  },
  {
    _id: 2,
    title: "Todo App 3",
    description: "This is the third todo app",
    status: SHOWN
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }
  render() {
    return (
      <div className="App">
        <div className="PageHeader">
          <h2>Welcome to React</h2>
        </div>
       
        <TodoList todos={this.state.todos} />
        <div className="pageBottom">Thanx </div>
      </div>
    );
  }
}

export default App;
