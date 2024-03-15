import {createReducer} from "@reduxjs/toolkit";
import {createAction} from "@reduxjs/toolkit/src";

const searchSongs = createAction('songList/search');

const initialState = {
    songList: {},
    isLoading: false,
    isError: false,
};

const songListReducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(searchSongs, (state, action) => {
            state.songList = action.payload;
        })
    }
);

export default songListReducer;