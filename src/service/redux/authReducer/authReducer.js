import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {googleSignUp, signOut} from "../../authService";

export const getLoginByGoogle = createAsyncThunk(
    'authInfo/getAuthInfo',
    async () => {
        return await googleSignUp();
    }
)

export const getSignoutFirebase = createAsyncThunk(
    'authInfo/getSignoutFirebase',
    async () => {
        return await signOut();
    }
)

export const authSlice = createSlice({
    name: 'authInfo',
    initialState: {
        userInfo: {
            loading: false,
            isLogined: false,
            refreshToken: null,
        }
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getLoginByGoogle.pending, (state) => {
            if (state.userInfo.loading === false) {
                state.userInfo.loading = true;
            }
        })
        builder.addCase(getLoginByGoogle.fulfilled, (state, action) => {
            if (state.userInfo.loading === true) {
                state.userInfo.loading = false;
                state.refrechToken = action.payload;
                state.isLogined = true;
            }
        })
        builder.addCase(getLoginByGoogle.rejected, (state) => {
            state.userInfo.loading = false;
            console.log("로그인에 실패했다");
        })
        builder.addCase(getSignoutFirebase.pending, (state) => {
            if (state.userInfo.loading === false) {
                state.userInfo.loading = true;
            }
        })
        builder.addCase(getSignoutFirebase.fulfilled, (state) => {
            if (state.userInfo.loading === true) {
                state.userInfo.isLogined = false;
                state.userInfo.loading = false;
            }
        })
        builder.addCase(getSignoutFirebase.rejected, (state) => {
            if (state.userInfo.loading === true){
                state.userInfo.loading = false;
                console.log("로그아웃에 실패하였다");
            }
        })
    }
})