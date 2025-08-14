import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useMoviesdbStore } from "./hooks";
import { useEffect } from "react";

export const App = () => {
  const { fetchGenres } = useMoviesdbStore();

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
      <RouterProvider router={router} />
  );
};
