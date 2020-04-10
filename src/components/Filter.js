import React, { Component } from "react";
import store from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class Filter extends Component {
  state = {
    mainAll: localStorage.getItem("mode") === "all" ? true : false,
    mainActive: localStorage.getItem("mode") === "active" ? true : false,
    mainCompleted: localStorage.getItem("mode") === "complete" ? true : false,
    mode: localStorage.getItem("mode"),
  };

  mainAll() {
    localStorage.setItem("mode", "all");

    document
      .getElementsByClassName("main-all")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("main-active")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("main-completed")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("all-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("active-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("complete-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    this.setState({
      mainAll: true,
      mainActive: false,
      mainCompleted: false,
    });
  }

  mainActive() {
    localStorage.setItem("mode", "active");

    document
      .getElementsByClassName("main-all")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("main-active")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("main-completed")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("all-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("active-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("complete-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    this.setState({
      mainAll: false,
      mainActive: true,
      mainCompleted: false,
    });
  }

  mainCompleted() {
    localStorage.setItem("mode", "completed");

    document
      .getElementsByClassName("main-all")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("main-active")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("main-completed")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("all-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("active-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    document
      .getElementsByClassName("complete-btn")[0]
      .setAttribute("data-mode", localStorage.getItem("mode"));
    this.setState({
      mainAll: false,
      mainActive: false,
      mainCompleted: true,
    });
  }

  render() {
    const num = store.todos
      .filter((a) => a.completed !== true)
      .filter((a) => a.visible === true);

    return [
      <div className="pl-3 pr-3 pt-1 pb-1 rounded-bottom">
        <p className="d-inline-block mr-5">{`${num.length} item left`}</p>
        <button onClick={() => this.mainAll()} className="btn all-btn">
          All
        </button>
        <button onClick={() => this.mainActive()} className={"btn active-btn"}>
          Active
        </button>
        <button
          onClick={() => this.mainCompleted()}
          className={"btn complete-btn"}
        >
          Completed
        </button>
      </div>,
    ];
  }
}

export default Filter;
