import {combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    number: 0,
    commnet: "",
    fetchData: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        plus: state => {state.number++},
        minus: state => {state.number--},
        submitComment: (satate,action) => {satate.comment = action.payload},
    }
})

const youtubeSlice = createSlice({
    name: 'youTubeData',
    initialState,
    reducers: {
        fetchData: (state, action) => {state.fetchData = action.payload},
    }
})

const reducer = combineReducers({
    user: userSlice.reducer,
    youTubeData: youtubeSlice.reducer,
})

const store = configureStore({reducer});

export const { plus, minus, submitComment,} = userSlice.actions;
export const { fetchData } = youtubeSlice.actions;
export default store;