import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface FavoritesState {
    favorites: Record<string, unknown>[];
    isFavoritesLoad: boolean;
}

const initialState: FavoritesState = {
    favorites: [],
    isFavoritesLoad: false,
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, { payload }: PayloadAction<Record<string, unknown>>) => {
            state.isFavoritesLoad = true;
            state.favorites.push(payload);
        },
        removeFavorite: (state, { payload }: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(fav => fav.id !== payload);
        },
        removeAllFavorites: (state) => {
            state.favorites = [];
            state.isFavoritesLoad = false;
        }
    },
});

export const { addFavorite, removeFavorite, removeAllFavorites } = favoritesSlice.actions;
