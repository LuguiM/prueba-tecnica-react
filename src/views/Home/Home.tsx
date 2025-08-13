import { useEffect, useState } from "react";
import { useMoviesdbStore } from "../../hooks";
import { Pagination } from "@mui/material";

import { CardInfo } from "../../components";

export const Home = () => {
  const {
    movies,
    series,
    trending,
    searchActive,
    isLoading,
    error,
    startLoadMovies,
  } = useMoviesdbStore();

  const { results = [], total_pages } = movies;
  const [page, setPage] = useState(movies.page || 1);

  const onNewPage = () => {
    setPage((prevPage: number) => {
      const newPage = prevPage + 1;
      startLoadMovies({ page: newPage });
      return newPage;
    });
  }
  useEffect(() => {
    startLoadMovies();
  }, []);

  return (
    <>
      <h1>Cine Archivo</h1>

      <div className="section-spacing">
        {isLoading && <p>Loading...</p>}

        {error && <p>Ha orrido un error</p>}

        {movies && (
          <div>
            <h2 className="text-h6">Movies</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {results.map((item: any) => (
                <CardInfo
                  key={item.id}
                  image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  gender="d"
                  title={item.name || item.original_title}
                  year={item.first_air_date || item.release_date}
                />
              ))}
            </div>
            <Pagination className="!text-white" count={total_pages} page={page} color="primary" onChange={onNewPage} showFirstButton showLastButton />
          </div>
        )}
      </div>
    </>
  );
};
