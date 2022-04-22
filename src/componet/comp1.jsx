import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {submitComment} from "../service/redux/user/slice";

const Comp1 = (props) => {
    const number = useSelector(state => state.user.number);
    const dispatch = useDispatch();
    const inputValue = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const comment = inputValue.current.value;
        dispatch(submitComment(comment));
        inputValue.current.value = "";
    }

    return(
        <div className="box">
            <h1>this is comp1</h1>
            <h2>number is :{number}</h2>
            <form onSubmit={onSubmit}>
                <input type="text" ref={inputValue}/>
                <button>add</button>
            </form>
        </div>
    )
};

export default Comp1;