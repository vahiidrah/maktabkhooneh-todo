import { observable , action } from "mobx"

class TodoModel {
    @observable visible
    store
    id
    @observable title
    @observable completed

    constructor(store , visible , title , completed , id){
        this.visible = visible
        this.store = store
        this.title = title
        this.completed = completed
        this.id = id
    }

    @action
    toggle(){
        this.completed = !this.completed
    }

    
    @action
    delete(){
        this.visible = !this.visible
        this.completed = !this.completed
    }
}

export default TodoModel