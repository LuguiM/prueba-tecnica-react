import { configureStore } from "@reduxjs/toolkit";
import { moviesSerieSlice } from "./"

export const store = configureStore({
    reducer: {
        moviesSeries: moviesSerieSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    })
})