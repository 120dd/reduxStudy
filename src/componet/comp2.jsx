import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../store";

const Comp2 = (props) => {

    const dispatch = useDispatch();
    const comment = useSelector(state => state.comment);
    return(
        <div className="box">
            <h1>this is comp2</h1>
            <button onClick={()=>dispatch(actions.plus)}>+</button>
            <button onClick={()=>dispatch(actions.minus)}>-</button>
            <div>나와라:{comment}</div>
        </div>
    )
};

export default Comp2;