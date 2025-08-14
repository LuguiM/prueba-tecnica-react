import network from './network.services';

const getMovies = async (query?: Object) => {
    return await network('GET', '/discover/movie', query);
}

const getSeriesTv = async (query?: Object) => {
    return await network('GET', '/discover/tv', query);
}

const getPopularMovies = async (query?: Object) => {
    return await network('GET', '/movie/popular', query);
}

const getPopularSeries = async (query?: Object) => {
    return await network('GET', '/tv/popular', query);
}

const getAllTrending = async (moment: String) => {
    return await network('GET', `/trending/all/${moment}`);
}

const searchMoviesSeries = async (query: Object) => {
    return await network('GET', '/search/multi', query)
}

const detailsMovie = async (id: string) => {
    return await network('GET', `/movie/${id}`);
}

const detailsTv = async (id: string) => {
    return await network('GET', `/tv/${id}`);
}

const getMoviesGenres = async() => {
    return await network('GET', '/genre/movie/list');
}

const getTvGenres = async() => {
    return await network('GET', '/genre/tv/list');
}

export default {
    getMovies,
    getSeriesTv,
    getPopularMovies,
    getPopularSeries,
    getAllTrending,
    searchMoviesSeries,
    detailsMovie,
    detailsTv,
    getMoviesGenres,
    getTvGenres
}