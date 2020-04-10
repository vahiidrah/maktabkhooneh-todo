import React, { Component } from "react";
import TodoItem from "./TodoItem";
import store from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  render() {
    return [
      <section className="main main-all">
        <ul className="todo-list">
          {
            // eslint-disable-next-line array-callback-return
            store.todos.map((todo) => {
              if (todo.visible) {
                return <TodoItem todo={todo} />;
              }
            })
          }
        </ul>
      </section>,
      <section className="main main-active">
        <ul className="todo-list">
          {
            // eslint-disable-next-line array-callback-return
            store.todos.map((todo) => {
              if (todo.visible && todo.completed === false) {
                  return <TodoItem todo={todo} />;
              }
            })
          }
        </ul>
      </section>,
      <section className="main main-completed">
        <ul className="todo-list">
          {
            // eslint-disable-next-line array-callback-return
            store.todos.map((todo) => {
              if (todo.visible && todo.completed === true) {
                return <TodoItem todo={todo} />;
              }
            })
          }
        </ul>
      </section>,
    ];
  }
}

export default TodoItems;
