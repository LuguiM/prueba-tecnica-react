import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../store";

export const useFavoritesStore = () => {
    const dispatch = useDispatch();
    const { favorites, isFavoritesLoad  } = useSelector((state: any) => state.favorites);


    const startAddFavorite = (item: Record<string, unknown>) => {
        dispatch(addFavorite(item));
    }

    const deleteFavorite = (id: number) => {
        dispatch(removeFavorite(id));
    }

    return {
        favorites,
        isFavoritesLoad,
        startAddFavorite,
        deleteFavorite
    }
    
}