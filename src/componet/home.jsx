import React from 'react';
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import LoginPage from "./loginPage/loginPage";

const Home = (props) => {
    return (
        <>
            <Comp1/>
            <Comp2/>
            <LoginPage/>
        </>
    )
};

export default Home;