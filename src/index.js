import {createStore} from "redux";

const inputFild = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todolist");
// const addForm = document.querySelector("#addForm");

const addTodo = (text) => {
    return {
        type: ADDLIST,
        text
    }
}

const deleteTodo = (id) => {
    return{
        type: DELETELIST,
        id
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADDLIST:
            return [...state, {text: action.text, id: Date.now()}];
        case  DELETELIST:
            return state.filter((todo)=>todo.id !== parseInt(action.id));
        default:
            return state
    }
}

const ADDLIST = "ADDLIST";
const DELETELIST = "DELETELIST";

const store = createStore(reducer);

const dispatchAddToDo = text => {
    store.dispatch(addTodo(text));
}

const dispatchDeleteTodo = e => {
    const id = e.target.parentNode.id
    store.dispatch(deleteTodo(id));
}

const onChange = () => {
    todoList.innerHTML = "";
    const toDos = store.getState();
    toDos.forEach(todo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        li.id = todo.id;
        li.innerText = todo.text;
        btn.innerText = "x";
        btn.onclick = dispatchDeleteTodo;
        li.appendChild(btn);
        todoList.appendChild(li);
    });
}

addBtn.onclick = (e) => {
    e.preventDefault();
    const todo = inputFild.value
    dispatchAddToDo(todo);
    inputFild.value = "";
}

store.subscribe(onChange);