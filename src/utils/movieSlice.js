import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: null,
        trailorId:null,
    },
    reducers: {
        addMovies: (state,actions) => {
            state.movies = actions.payload;
        },
        addTrailorId: (state, actions) => {
            state.trailorId = actions.payload;
        }
    }
});
export default movieSlice.reducer;
export const { addMovies,addTrailorId } = movieSlice.actions;
