import {combineReducers, configureStore, } from "@reduxjs/toolkit";
import {userSlice} from "./user/slice";
import {youtubeSlice} from "./yotubeData/slice";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    youTubeData: youtubeSlice.reducer,
})

export default configureStore({reducer: rootReducer});