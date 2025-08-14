import { useState } from "react";
import { Link } from "react-router";
import { Snackbar, Alert } from "@mui/material";
import type { SnackbarCloseReason } from "@mui/material";

import { useFavoritesStore } from "../hooks";

interface CardInfoProps {
  id?: number;
  image?: string;
  title?: string;
  gender?: string;
  year?: string;
  size?: "small" | "large";
  item?: Record<string, unknown>;
  type?: "movie" | "tv";
}

export const CardInfo: React.FC<CardInfoProps> = ({
  id,
  image,
  title,
  gender,
  year,
  size = "small",
  item = {},
  type = "movie",
}) => {
  const { favorites, startAddFavorite, deleteFavorite } = useFavoritesStore();

  const isFavorite = favorites.some((fav: any) => fav.id === id);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "info">(
    "success"
  );

  const handleFavoriteClick = () => {
    if (!id) return;

    if (isFavorite) {
      deleteFavorite(id);
      setSnackbarMessage("Eliminado de favoritos");
      setSnackbarSeverity("info");
    } else {
      startAddFavorite(item);
      setSnackbarMessage("Añadido a favoritos");
      setSnackbarSeverity("success");
    }

    setOpenSnackbar(true);
  };

const handleCloseSnackbar = (
  _event: React.SyntheticEvent<any> | Event,
  reason?: SnackbarCloseReason
) => {
  if (reason === "clickaway") return;
  setOpenSnackbar(false);
};

  return (
    <div
      className={`${
        size === "large"
          ? "flex flex-col mx-auto w-[20rem] sm:w-full"
          : "flex-shrink-0 w-40"
      } group relative`}
    >
      <Link
        to={`details/${type}/${id}`}
        className="block aspect-[2/3] w-full overflow-hidden rounded-lg relative group-hover:scale-105 transition-transform duration-300"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Link>

      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 bg-black/60 hover:bg-black p-2 rounded-full text-white z-10"
      >
        <span className={isFavorite ? "text-red-500" : ""}>♥</span>
      </button>

      <h2 className="mt-2 font-semibold truncate">{title}</h2>
      <p className="text-sm text-gray-400">
        {year?.slice(0, 4)} - {gender}
      </p>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};
