import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";

export const searchSongs = createAsyncThunk('songs/loadSongs', async (searchTerm, thunkAPI) => {
    return `loaded data regarding search term ${searchTerm}`;
});

const initialState = {
    songList: '',
    isLoading: false,
    isError: false,
};

const songListReducer = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        // Define reducers for actions with no payload if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchSongs.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.songList = '';
            })
            .addCase(searchSongs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.songList = action.payload;
            })
            .addCase(searchSongs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

// Exporting the selector
export const selectSongs = (state) => state.songList;

// Selector function
export const selectAllSongs = createSelector(
    selectSongs,
    (songs) => songs
);

// Exporting the slice reducer
export default songListReducer.reducer;
