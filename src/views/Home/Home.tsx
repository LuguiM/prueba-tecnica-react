import { useEffect, useState } from "react";
import { useMoviesdbStore } from "../../hooks";
import { ListCards } from "../../components";
import { HeaderSection, CarrouselSection } from "./sections";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

export const Home = () => {
  const {
    movies,
    genres, // géneros vienen del store
    searchActive,
    searchResults,
    isLoading,
    error,
    fetchSearchResults,
    cleanSearchResults,
  } = useMoviesdbStore();

  const [page, setPage] = useState(movies.page || 1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [year, setYear] = useState<number | "">("");
  const [searchParams, setSearchParams] = useState({
    query: { query: "", page: 1 },
    genres: [] as number[],
    year: 0,
  });
  const [inputError, setInputError] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setInputError(true);
      return;
    }
    setInputError(false);

    const params = {
      query: { query: searchQuery, page: 1 },
      genres: selectedGenres,
      year: year ? Number(year) : 0,
    };

    setPage(1);
    setSearchParams(params);
  };

  const clean = () => {
    setSearchParams({
      query: { query: "", page: 1 },
      genres: [],
      year: 0,
    });
    setSearchQuery("");
    setSelectedGenres([]);
    setYear("");
    setPage(1);
    setInputError(false);
    cleanSearchResults();
  };

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
      <HeaderSection>
        <div className="w-full relative">
          <div>
            <TextField
              fullWidth
              placeholder="Buscar película o serie"
              className="bg-white rounded-lg"
              value={searchQuery}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSearchQuery(event.target.value);
                if (inputError) setInputError(false);
              }}
            />
            {inputError && (
              <p className="text-red-500 text-sm mt-1">
                El campo de búsqueda no puede estar vacío
              </p>
            )}
          </div>
        </div>

        {searchActive && (
          <>
            {/* Select de géneros dinámico */}
            <FormControl fullWidth className="bg-white rounded-lg mt-2">
              <InputLabel id="genre-select-label">Género</InputLabel>
              <Select
                labelId="genre-select-label"
                multiple
                value={selectedGenres}
                onChange={(e) => setSelectedGenres(e.target.value as number[])}
              >
                {genres.map((genre: any) => (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              type="number"
              placeholder="Año"
              className="bg-white rounded-lg mt-2"
              value={year}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setYear(e.target.value ? Number(e.target.value) : "")
              }
            />

            <Button
              variant="contained"
              className="rounded-lg mt-2"
              onClick={clean}
            >
              Limpiar
            </Button>
          </>
        )}

        <Button
          variant="contained"
          className="rounded-lg mt-2"
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </HeaderSection>

      <div className="section-spacing space-y-8">
        {!searchActive ? (
          <CarrouselSection />
        ) : searchResults.results.length === 0 ? (
          <p className="text-center text-white">No se encontraron resultados</p>
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
