import { useEffect, useState } from "react";
import { useMoviesdbStore } from "../../hooks";
import { ListCards } from "../../components";
import { HeaderSection, CarrouselSection } from "./sections";
import { Button, TextField } from "@mui/material";

export const Home = () => {
  const {
    movies,
    searchActive,
    searchResults,
    isLoading,
    error,
    fetchSearchResults,
  } = useMoviesdbStore();

  const [page, setPage] = useState(movies.page || 1);
  const [searchQuery, setSearchQuery] = useState("");
  const [genres] = useState([]);
  const [year] = useState(0);
  const [searchParams, setSearchParams] = useState({
    query: { query: "", page: 1 },
    genres: [],
    year: 0,
  });
  // const [age, setAge] = useState("");
  const handleSearch = () => {
    const params = {
      query: { query: searchQuery, page: 1 }, // siempre empieza en página 1
      genres: genres,
      year: year,
    };

    setPage(1); // resetear paginación
    setSearchParams(params);
  };
  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //     setAge(event.target.value as string);
  // };

  const onNewPage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    const params = {
      ...searchParams,
      query: { ...searchParams.query, page: value },
    };

    setSearchParams(params);
  };

  useEffect(() => {
    if (searchParams.query.query !== "") {
      fetchSearchResults(
        searchParams.query,
        searchParams.genres,
        searchParams.year
      );
    }
  }, [searchParams]);

  return (
    <>
      <h1>Cine Archivo</h1>
      <HeaderSection>
        <TextField
          fullWidth
          placeholder="Buscar pelicula o serie"
          className="bg-white rounded-lg"
          value={searchQuery}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(event.target.value)
          }
        />
        {searchActive && (
          <>
            {/* <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select> */}
            <Button variant="outlined" className="rounded-lg">
              Limpiar
            </Button>
          </>
        )}
        <Button
          variant="contained"
          className="rounded-lg"
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </HeaderSection>
      <div className="section-spacing space-y-8">
        {!searchActive ? (
          <CarrouselSection />
        ) : (
          <ListCards
            titleList="Resultados de la búsqueda"
            error={error}
            loading={isLoading}
            results={searchResults.results}
            page={page}
            total_pages={searchResults.total_pages}
            onNewPage={onNewPage}
          />
        )}
      </div>
    </>
  );
};
