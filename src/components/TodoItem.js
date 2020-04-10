import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };

  remove = () => {
    this.props.todo.delete();
  };

  render() {
    const { todo } = this.props;
    return [
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label className="d-inline-block">{todo.title}</label>
          <button onClick={this.remove} style={{position:"absolute",left:"93%",top:"30%"}} type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </li>,
    ];
  }
}

export default TodoItem;
