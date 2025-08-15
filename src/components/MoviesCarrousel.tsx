import { useRef, useState, useEffect } from "react";
import { CardInfo } from "./CardInfo";
import { CircularProgress } from "@mui/material";

interface MovieItem {
  id: number;
  poster_path: string;
  name?: string;
  original_title?: string;
  first_air_date?: string;
  release_date?: string;
  media_type?: "movie" | "tv";
}

interface MoviesCarouselProps {
  results: MovieItem[];
  title?: string;
  type?: "movie" | "tv";
  loader?: boolean;
}

export const MoviesCarousel = ({
  results,
  title,
  type,
  loader = false,
}: MoviesCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(loader);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (loader) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [results, loader]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-h6">{title}</h2>
      <div className="relative">
        {/* Botón Izquierda */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black"
        >
          &#8249;
        </button>

        {/* Contenedor */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide min-h-[200px]"
          style={{ scrollBehavior: "smooth" }}
        >
          {loading ? (
            <div className="flex justify-center items-center w-full">
              <CircularProgress />
            </div>
          ) : (
            results?.map((item: any) => (
              <CardInfo
                key={item.id}
                id={item.id}
                image={item.poster_path}
                gender={item.genre_ids}
                title={item.name || item.original_title}
                year={item.first_air_date || item.release_date}
                size="small"
                item={item}
                type={item.media_type || type}
              />
            ))
          )}
        </div>

        {/* Botón Derecha */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};
