import React, {useState} from 'react';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import Todo from "./todo";

const Home = ({ todos, addTodo, deleteTodo }) => {

    const [text,setText] = useState("");
    function onChange(e) {
        e.preventDefault();
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
        console.log(todos);
    }

    return(
        <>
            <h1>TODO</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>ADD</button>
            </form>
            <ul>
                {todos.map((todo)=>
                <Todo
                    key={todo.id}
                    text={todo.text}
                    id={todo.id}
                />
                )}
            </ul>
        </>
    )
};

function mapStateToProps(state) {
    return {todos: state}
}
function mapDispatchToProps(dispatch) {
    return {
        addTodo: text => dispatch(actionCreators.addTodo(text)),
        deleteTodo: id => dispatch(actionCreators.deleteTodo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) ;