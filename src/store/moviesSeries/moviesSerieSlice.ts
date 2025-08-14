import { createSlice } from '@reduxjs/toolkit';


export const moviesSerieSlice = createSlice({
    name: 'moviesSeries',
    initialState: {
        movies: [],
        series: [],
        searchResults: [],
        trending: [],
        searchActive: false,
        isLoading: false,
        error: null,
        genres: [],
    },
    reducers: {
        setMovies: (state, { payload }) => {
            state.isLoading = false;
            state.movies = payload;
        },
        setSeries: (state, { payload }) => {
            state.series = payload;
        },
        setSearchResults: (state, { payload }) => {
            state.searchActive = true;
            state.searchResults = payload;
        },
        setTrending: (state, { payload }) => {
            state.trending = payload;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        setGenres: (state, { payload }) => {
            state.genres = payload;
        },
        cleanSearch: (state) => {
            state.searchActive = false;
            state.searchResults = [];
        }
    }
});

export const {
    setMovies,
    setSeries,
    setSearchResults,
    setTrending,
    cleanSearch,
    setIsLoading,
    setError,
    setGenres
} = moviesSerieSlice.actions;