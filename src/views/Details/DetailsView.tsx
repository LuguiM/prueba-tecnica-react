import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Button, CircularProgress } from "@mui/material";
import moviesSeriesServices from "../../services/moviesSeries.services";
import { useFavoritesStore } from "../../hooks";

export const DetailsView = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { favorites, startAddFavorite, deleteFavorite } = useFavoritesStore();
  const isFavorite = id
    ? favorites.some((fav: any) => fav.id === Number(id))
    : false;

  const fetchDetails = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      let response;
      if (type === "movie") {
        response = await moviesSeriesServices.detailsMovie(id);
      } else if (type === "tv") {
        response = await moviesSeriesServices.detailsTv(id);
      }
      setDetails(response);
    } catch (err: any) {
      console.error(err);
      setError("Error al cargar los detalles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (type && id) fetchDetails();
  }, [type, id]);

  const handleFavoriteClick = () => {
    if (!id) return;

    if (isFavorite) {
      deleteFavorite(Number(id));
    } else {
      startAddFavorite(details);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <CircularProgress />
      </div>
    );
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!details) return null;

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{
        backgroundImage: details.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`
          : `url(/backgroun_img.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-8">
        <div>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            Volver
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3 space-y-4">
            <img
              src={
                details.poster_path
                  ? `https://image.tmdb.org/t/p/w300${details.poster_path}`
                  : "/placeholder-img.jpg"
              }
              srcSet={
                details.poster_path
                  ? `
                https://image.tmdb.org/t/p/w200${details.poster_path} 200w,
                https://image.tmdb.org/t/p/w300${details.poster_path} 300w,
                https://image.tmdb.org/t/p/w500${details.poster_path} 500w,
                https://image.tmdb.org/t/p/w780${details.poster_path} 780w
              `
                  : undefined
              }
              sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 500px, 780px"
              alt={details.title || details.name || "Sin imagen disponible"}
              loading="lazy"
              className="rounded-lg shadow-lg mx-auto"
            />

            <Button
              variant={isFavorite ? "contained" : "outlined"}
              color="primary"
              className="mt-4 w-full"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? "En favoritos" : "Añadir a favoritos"}
            </Button>
          </div>

          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {details.title || details.name}
            </h1>
            <p className="text-gray-300 mb-2">
              {details.release_date?.slice(0, 4) ||
                details.first_air_date?.slice(0, 4)}{" "}
              •{" "}
              {details.runtime
                ? `${details.runtime} min`
                : `${details.number_of_seasons} temporada(s)`}
            </p>
            {details.genres && (
              <p className="mb-2">
                Géneros: {details.genres.map((g: any) => g.name).join(", ")}
              </p>
            )}
            {details.vote_average && (
              <p className="mb-2">⭐ Rating: {details.vote_average}</p>
            )}
            {details.overview && (
              <p className="mt-4 text-gray-200">{details.overview}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
