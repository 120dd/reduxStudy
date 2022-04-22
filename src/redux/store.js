import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit";

// const plusAction = createAction("PLUS");
// const minusAction = createAction("MINUS");
// const submitComment = createAction("SUBMIT");


// const reducer = (currentState = {number: 0, comment:""}, action) => {
//     switch (action.type) {
//         case plusAction.type:
//             return {...currentState, number: {...currentState}.number + 1};
//         case minusAction.type:
//             return {...currentState, number: {...currentState}.number - 1};
//         case submitComment.type:
//             return {...currentState, comment: action.payload}
//         default:
//             return currentState;
//     }
// }

// const reducer = createReducer({ number:0, comment:"" },{
//     [plusAction]: (state, action) => {
//         state.number++
//     },
//     [minusAction]: (state, action)=>{
//         state.number--
//     },
//     [submitComment]: (state, action) => {
//         state.comment = action.payload
//     }
// })
//
// // const Store = configureStore({reducer});
//
// export default configureStore({reducer});
//
// export const actions = {
//     plus: plusAction(),
//     minus: minusAction(),
//     submit: commnet => submitComment(commnet),
// }

const initialState = {
    number: 0,
    commnet: "",
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

export const { plus, minus, submitComment} = userSlice.actions;
export default configureStore({reducer: userSlice.reducer});