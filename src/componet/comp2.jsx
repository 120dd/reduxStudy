import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {plus, minus, fetchData} from "../redux/store";
import {getData} from "../service/getData";

const Comp2 = (props) => {

    const dispatch = useDispatch();
    const comment = useSelector(state => state.user.comment);
    const fetchedDataInfo = useSelector(state => state.youTubeData.fetchData);

    const onClick = async () => {
        const data = await getData();
        dispatch(fetchData(data));
        console.log(data);
    }

    return(
        <div className="box">
            <h1>this is comp2</h1>
            <button onClick={()=>dispatch(plus())}>+</button>
            <button onClick={()=>dispatch(minus())}>-</button>
            <div>나와라 코맨트:{comment}</div>
            <button onClick={onClick}>비동기 시작</button>
            <div>나와라 비동기 데이터 이태그:{fetchedDataInfo.etag}</div>
            <div>나와라 비동기 데이터 국가정보:{fetchedDataInfo.regionCode}</div>
        </div>
    )
};

export default Comp2;