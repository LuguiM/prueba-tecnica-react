import { createSlice } from '@reduxjs/toolkit';


export const moviesSerieSlice = createSlice({
    name: 'moviesSeries',
    initialState: {
        movies: [],
        series: [],
        searchResults: [],
        trending: [],
        searchActive: false,
        isLoading: true,
        error: null,
        genres: [],
    },
    reducers: {
        setMovies: (state, { payload }) => {
            state.movies = payload;
            state.isLoading = false;
        },
        setSeries: (state, { payload }) => {
            state.series = payload;
            state.isLoading = false;
        },
        setSearchResults: (state, { payload }) => {
            state.searchActive = true;
            state.searchResults = payload;
            state.isLoading = false
        },
        setTrending: (state, { payload }) => {
            state.trending = payload;
            state.isLoading = false;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        setGenres: (state, { payload }) => {
            state.genres = payload;
            state.isLoading = false;
        },
        cleanSearch: (state) => {
            state.searchActive = false;
            state.searchResults = [];
            state.isLoading = true;
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