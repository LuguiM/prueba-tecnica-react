import { useDispatch, useSelector } from "react-redux"
import { setMovies, setSeries, setTrending, setSearchResults, cleanSearch } from "../store";
import moviesSeriesServices from "../services/moviesSeries.services";

export const useMoviesdbStore = () => {
    const dispatch = useDispatch();
    const { movies, series, trending, searchResults, searchActive, isLoading, error } = useSelector((state: any) => state.moviesSeries);

    const startLoadMovies = async (query?: Object) => {
        try {
            const data = await moviesSeriesServices.getMovies(query);
            dispatch(setMovies(data));
        } catch (err) {
            console.error("Error loading movies:", err);
        }
    }

    const startLoadPopularMovies = async (query?: Object) => {
        try {
            const data = await moviesSeriesServices.getPopularMovies(query);
            dispatch(setMovies(data));
        } catch (err) {
            console.error("Error loading movies:", err);
        }
    }

    const startLoadPopularSeries = async (query?: Object) => {
        try {
            const data = await moviesSeriesServices.getPopularSeries(query);
            dispatch(setSeries(data));
        } catch (err) {
            console.error("Error loading movies:", err);
        }
    }

    const loadTrending = async (moment: String) => {
        try {
            const data = await moviesSeriesServices.getAllTrending(moment);
            dispatch(setTrending(data))

        } catch (err) {
            console.error("Error loading trending:", err);
        }
    }

    const fetchSearchResults = async ( query: Object, genre: Array<number>, year: Number ) => {
        try {
            const genresArray = Array.isArray(genre) ? genre : genre ? [genre] : [];
            const data = await moviesSeriesServices.searchMoviesSeries(query);
            const filteredResults = data.results.filter((item:any) => {
            const yearToCheck = item.media_type === "movie"
                ? item.release_date
                : item.first_air_date;

            const releaseYear = yearToCheck ? parseInt(yearToCheck.split("-")[0]) : null;

            return (!year || releaseYear === year) &&
                   (!genresArray.length || genresArray.some(g => item.genre_ids.includes(g)));
        });

            dispatch(setSearchResults({ ...data, results: filteredResults }));
        } catch (err) {
            console.error("Error searching movies:", err);
        }
    }

    const cleanSearchResults = () => {
        dispatch(cleanSearch());
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
        startLoadMovies,
        startLoadPopularMovies,
        startLoadPopularSeries,
        loadTrending,
        fetchSearchResults,
        cleanSearchResults
    }
}
