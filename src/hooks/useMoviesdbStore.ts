import { useDispatch, useSelector } from "react-redux"
import { setSearchActive, setIsLoading, setMovies } from "../store";
import moviesSeriesServices from "../services/moviesSeries.services";

export const useMoviesdbStore = () => {
    const dispatch = useDispatch();
    const { movies, series, trending, searchResults, searchActive, isLoading, error } = useSelector((state: any) => state.moviesSeries);

    const setActiveSearch = (active: boolean) => {
        dispatch(setSearchActive(active));
    }

    const setLoading = (loading: boolean) => {
        dispatch(setIsLoading(loading));
    }

    const startLoadMovies = async (query?: Object) => {
        try {
            const data = await moviesSeriesServices.getMovies(query);
            dispatch(setMovies(data));
        } catch (err) {
            console.error("Error loading movies:", err);
        }
    }

    return {
        movies,
        series,
        trending,
        searchActive,
        searchResults,
        isLoading,
        error,

        // metodos
        setActiveSearch,
        setLoading,
        startLoadMovies,
    }
}
