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

export default {
    getMovies,
    getSeriesTv,
    getPopularMovies,
    getPopularSeries,
    getAllTrending,
    searchMoviesSeries
}