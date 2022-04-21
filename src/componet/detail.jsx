import React from 'react';
import { connect } from "react-redux";
import {useParams} from "react-router-dom";

const Detail = ({ todos }) => {
    const id = useParams().id;
    const seletedTodoText = todos.find((todo)=> parseInt(todo.id) === parseInt(id)).text;
    return(
        <>
            <div>this is detail page</div>
            <div>{seletedTodoText}</div>
        </>
    )
};

function mapStateToProps(state) {
    return{
        todos: state,
    }
}

export default connect(mapStateToProps)(Detail);