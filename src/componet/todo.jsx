import React from 'react';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {Link} from "react-router-dom";

const Todo = ({text, id, onBtnClick}) => {

    return (
        <li id={id} key={id}>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={onBtnClick}>X</button>
        </li>
    )
};

function mapDispatchToProps(dispatch, ownProps) {
    return{
        onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
    }

}

export default connect(null, mapDispatchToProps)(Todo);