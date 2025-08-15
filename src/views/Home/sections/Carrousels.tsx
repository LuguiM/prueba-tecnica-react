import { useEffect, useState } from "react";
import { MoviesCarousel } from "../../../components";
import { useMoviesdbStore } from "../../../hooks";

export const CarrouselSection = () => {
  const {
    movies,
    series,
    trending,
    isLoading,
    startLoadPopularMovies,
    startLoadPopularSeries,
    loadTrending,
  } = useMoviesdbStore();

  const [topic] = useState("day");

  useEffect(() => {
    startLoadPopularMovies();
    startLoadPopularSeries();
    loadTrending(topic);
  }, []);

  return (
    <>
      <MoviesCarousel
        title="Tendencias"
        results={trending.results}
        loader={isLoading}
      ></MoviesCarousel>
      <MoviesCarousel
        title="Peliculas Populares"
        results={movies.results}
        type="movie"
        loader={isLoading}
      ></MoviesCarousel>
      <MoviesCarousel
        title="Series Populares"
        results={series.results}
        type="tv"
        loader={isLoading}
      ></MoviesCarousel>
    </>
  );
};
