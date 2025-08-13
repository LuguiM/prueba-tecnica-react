import { useEffect, useState } from "react";
import { useMoviesdbStore } from "../../hooks";
import { Pagination } from "@mui/material";

import { CardInfo, ListCards, MoviesCarousel } from "../../components";

export const Home = () => {
  const {
    movies,
    series,
    trending,
    searchActive,
    isLoading,
    error,
    startLoadPopularMovies,
    startLoadPopularSeries
  } = useMoviesdbStore();

  const [page, setPage] = useState(movies.page || 1);

  const onNewPage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    startLoadPopularMovies({ page: value });
  };
  useEffect(() => {
    startLoadPopularMovies();
    startLoadPopularSeries();
  }, []);

  return (
    <>
      <h1>Cine Archivo</h1>

      <div className="section-spacing space-y-8">
        <MoviesCarousel title="Popular Movies" results={movies.results}></MoviesCarousel>
        <MoviesCarousel title="Popular Series" results={series.results}></MoviesCarousel>
        
        <ListCards
          titleList="Peliculas"
          error={error}
          loading={isLoading}
          results={movies.results}
          page={page}
          total_pages={movies.total_pages}
          onNewPage={onNewPage}
        />
      </div>
    </>
  );
};
