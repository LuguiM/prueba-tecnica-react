import { useState } from "react";
import { Link } from "react-router";
import { ListCards } from "../../components";
import { useFavoritesStore } from "../../hooks";
import { Button } from "@mui/material";

const ITEMS_PER_PAGE = 10;

export const FavoritesView = () => {
  const { favorites, isFavoritesLoad, clearFavorites } = useFavoritesStore();

  const [page, setPage] = useState(1);

  const total_pages = Math.ceil(favorites.length / ITEMS_PER_PAGE);

  const handleNewPage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedFavorites = favorites.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="section-spacing">
      {!isFavoritesLoad && favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-h6 font-bold">Sin Favoritos</h2>
          <p>Actualmente no tienes películas o series favoritas</p>
          <Link to="/">
            <Button className="btn-primary" variant="contained">
              Volver al inicio
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-h6 font-bold">Mis Favoritos</h2>
            <Button variant="contained" color="error" onClick={clearFavorites}>
              Eliminar favoritos
            </Button>
          </div>

          <ListCards
            results={paginatedFavorites}
            page={page}
            total_pages={total_pages}
            onNewPage={handleNewPage}
          />
        </div>
      )}
    </div>
  );
};
