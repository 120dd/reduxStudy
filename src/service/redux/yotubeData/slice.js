import {createSlice} from "@reduxjs/toolkit";

export const youtubeSlice = createSlice({
    name: 'youTubeData',
    initialState: {
        fetchData: {},
    },
    reducers: {
        fetchData: (state, action) => {state.fetchData = action.payload},
    }
})

export const { fetchData } = youtubeSlice.actions