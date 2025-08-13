import network from './network.services';

const getPopularMovies = async () => {
    return await network('GET', '/movie/popular');
}

const getPopularSeries = async () => {
    return await network('GET', '/series/popular');
}

const getAllTrending = async (moment: String) => {
    return await network('GET', `/trending/all/${moment}`);
}

const searchMoviesSeries = async (query: Object) => {
    return await network('GET', '/search/multi', query)
}

export default {
    getPopularMovies,
    getPopularSeries,
    getAllTrending,
    searchMoviesSeries
}