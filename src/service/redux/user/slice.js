import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        number: 0,
        comment: "",
    },
    reducers: {
        plus: state => {state.number++},
        minus: state => {state.number--},
        submitComment: (satate,action) => {satate.comment = action.payload},
    }
})

export const { plus, minus, submitComment,} = userSlice.actions;