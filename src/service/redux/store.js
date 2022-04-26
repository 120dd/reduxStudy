import {combineReducers, configureStore, } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage/session";

import {userSlice} from "./user/slice";
import { youtubeSlice} from "./yotubeData/slice";
import {authSlice} from "./authReducer/authReducer";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
    whitelist: ["youTubeData","authInfo"]
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
    youTubeData: youtubeSlice.reducer,
    authInfo: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware(
            {
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
                }
            }
        )
});
export let persistor = persistStore(store)

export default store