import {combineReducers, configureStore, } from "@reduxjs/toolkit";
import {userSlice} from "./user/slice";
import {youtubeSlice} from "./yotubeData/slice";

const reducer = combineReducers({
    user: userSlice.reducer,
    youTubeData: youtubeSlice.reducer,
})

const store = configureStore({reducer});

export default store;