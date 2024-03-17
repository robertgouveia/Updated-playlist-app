import {combineReducers, configureStore} from "@reduxjs/toolkit";
import songListReducer from "../features/songs/songSlice";

const store = configureStore({
    reducer: combineReducers({
        songs: songListReducer,
    })
})

export default store;