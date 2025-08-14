import { useState } from "react";
import { Link } from "react-router";

interface CardInfoProps {
  id?: number;
  image?: string;
  title?: string;
  gender?: string;
  year?: string;
  size?: "small" | "large";
}

export const CardInfo: React.FC<CardInfoProps> = ({
  id,
  image,
  title,
  gender,
  year,
  size = "small",
}) => {
  const formatYear = year ? year.slice(0, 4) : "";
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className={`${
        size === "large" ? "flex flex-col mx-auto w-[20rem] sm:w-full" : "flex-shrink-0 w-40"
      } group relative`}
    >
      <Link
        to={`/movie/${id}`}
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
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-2 right-2 bg-black/60 hover:bg-black p-2 rounded-full text-white z-10"
      >
        <span className={isFavorite ? "text-red-500" : ""}>♥</span>
      </button>

      <h2 className="mt-2 font-semibold truncate">{title}</h2>
      <p className="text-sm text-gray-400">
        {formatYear} - {gender}
      </p>
    </div>
  );
};
