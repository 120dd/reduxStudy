import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "./getData";

export const getYoutubeData = createAsyncThunk(
    'youtuData/getYoutubeDataStatus',
    async ()=>{
        return  await getData();
    }
)

export const youtubeSlice = createSlice({
    name: 'youTubeData',
    initialState: {
        fetchData: {
            loading: false,
            etag: "",
            regionCode: "",
        },
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getYoutubeData.pending, (state) => {
            if (state.fetchData.loading === false){
                state.fetchData.loading = true;
                state.fetchData.etag = '로딩중';
                state.fetchData.regionCode = '로딩중';
            }
        })
        builder.addCase(getYoutubeData.fulfilled, (state, action) => {
            if (state.fetchData.loading === true){
                state.fetchData.loading = false;
                state.fetchData = action.payload;
            }
        })
        builder.addCase(getYoutubeData.rejected, (state) => {
            state.fetchData.etag= "데이터 불러오기 실패";
            state.fetchData.regionCode= "데이터 불러오기 실패";
        })
    }
})

export const { fetchData } = youtubeSlice.actions