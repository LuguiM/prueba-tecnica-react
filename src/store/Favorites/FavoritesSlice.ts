import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface FavoritesState {
    favorites: Record<string, unknown>[];
    isFavoritesLoad: boolean;
}

const storedFavorites = localStorage.getItem("favorites");
const initialFavorites: FavoritesState = {
    favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
    isFavoritesLoad: storedFavorites ? JSON.parse(storedFavorites).length > 0 : false,
};


export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialFavorites,
    reducers: {
        addFavorite: (state, { payload }: PayloadAction<Record<string, unknown>>) => {
            state.isFavoritesLoad = true;
            state.favorites.push(payload);
        },
        removeFavorite: (state, { payload }: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(fav => fav.id !== payload);
            if (state.favorites.length === 0) {
                state.isFavoritesLoad = false;
            }
        },
        removeAllFavorites: (state) => {
            state.isFavoritesLoad = false;
            state.favorites = [];
        }
    },
});

export const { addFavorite, removeFavorite, removeAllFavorites } = favoritesSlice.actions;
