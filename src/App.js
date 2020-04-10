import React, { Component } from "react";
import "./App.css";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Filter from "./components/Filter"

class App extends Component {
  render() {
    return [
      <div className="col-sm-12 mx-auto">
        <div className="todoapp" id="todoapp">
          <TodoEntry />
          <TodoItems />
          <Filter />
        </div>
      </div>,
    ];
  }
}

export default App;
