import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite, removeAllFavorites } from "../store";

export const useFavoritesStore = () => {
    const dispatch = useDispatch();
    const { favorites, isFavoritesLoad  } = useSelector((state: any) => state.favorites);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const startAddFavorite = (item: Record<string, unknown>) => {
        if (item.length === 0 ) return;
        dispatch(addFavorite(item));
    }

    const deleteFavorite = (id: number) => {
        dispatch(removeFavorite(id));
    }

    const clearFavorites = () => {
        dispatch(removeAllFavorites());
    };

    return {
        favorites,
        isFavoritesLoad,
        startAddFavorite,
        deleteFavorite,
        clearFavorites
    }
    
}