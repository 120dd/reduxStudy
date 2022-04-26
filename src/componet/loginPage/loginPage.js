import React from 'react';
import Button from "../button/button";
import styles from "./loginPage.module.css";
import {useDispatch, useSelector,} from "react-redux";
import {getLoginByGoogle, } from "../../service/redux/authReducer/authReducer";
import {auth, signOutFirebase} from "../../service/firebase/firebaseService";

const LoginPage = (props) => {
    const dispatch = useDispatch();
    const isLogined = useSelector(state => state.authInfo.isLogined);
    const onLogin = async (e) => {
        e.preventDefault();
        dispatch(getLoginByGoogle());
    }

    const onSignout = async (e) => {
        e.preventDefault();
        // dispatch(getSignoutFirebase());
        signOutFirebase();
    }

    const config = () => {
        console.log(auth.currentUser);
    }

    return (
        <div className={styles.loginPage}>
            <h1>login</h1>
            <form className={styles.loginForm} onSubmit={onLogin}>
                <Button btnName="구글로그인"/>
            </form>
            {isLogined && <Button btnName="로그아웃" onClick={onSignout} />}
            <Button btnName="로그인 상태 확인" onClick={config} />
        </div>
    )
};

export default LoginPage;