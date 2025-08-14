import { Link } from "react-router";
import { ListCards } from "../../components";
import { useFavoritesStore } from "../../hooks";
import { Button } from "@mui/material";

export const FavoritesView = () => {
  const { favorites, isFavoritesLoad } = useFavoritesStore();

  return (
    <div className="section-spacing">
      {!isFavoritesLoad && favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-h6 font-bold">Sin Favoritos</h2>
          <p>Actualmente no tienes peliculas o series favoritas</p>
          <Link to="/">
            <Button className="btn-primary" variant="contained">Volver al inicio</Button>
          </Link>
        </div>
      ) : (
        <ListCards titleList="Favoritos" results={favorites} />
      )}
    </div>
  );
};
