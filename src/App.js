import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./componet/home";
import Detail from "./componet/detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
