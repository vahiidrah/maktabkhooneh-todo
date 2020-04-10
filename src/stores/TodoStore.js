import { observable , action } from "mobx"
import TodoModel from "./TodoModel"

class TodoStore {
    @observable todos = []
    lastID = 0

    @action
    addToDo(title){
        this.todos.push(new TodoModel(this , true , title , false , this.lastID ++))
    }

}

const store = new TodoStore()

export default store