import React , { Component } from "react"
import TodoStore from "../stores/TodoStore"

class TodoEntry extends Component {
    state = {
        value: ''
    }

    handleKeyDown = event => {
        if(event.keyCode !== 13){
            return;
        }
        event.preventDefault()
        TodoStore.addToDo(this.state.value)
        this.setState({
            value:''
        })
    }

    render() {
        return [
            <header className="header">
              <h1>TODO</h1>
              <input value={this.state.value} onKeyDown={event => {this.handleKeyDown(event)}} onChange={event => this.setState({value: event.target.value}) } type="text" className="new-todo" placeholder="whats need to be done?"/>
            </header>
        ]
    }
}

export default TodoEntry