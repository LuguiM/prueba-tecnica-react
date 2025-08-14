import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, moviesSerieSlice } from "./"

export const store = configureStore({
    reducer: {
        moviesSeries: moviesSerieSlice.reducer,
        favorites: favoritesSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    })
})