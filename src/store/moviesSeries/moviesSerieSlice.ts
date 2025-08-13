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
            state.searchResults = payload;
        },
        setTrending: (state, { payload }) => {
            state.trending = payload;
        },
        setSearchActive: (state, { payload }) => {
            state.searchActive = payload;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        setGenres: (state, { payload }) => {
            state.genres = payload;
        }
    }
});

export const {
    setMovies,
    setSeries,
    setSearchResults,
    setTrending,
    setSearchActive,
    setIsLoading,
    setError,
    setGenres
} = moviesSerieSlice.actions;