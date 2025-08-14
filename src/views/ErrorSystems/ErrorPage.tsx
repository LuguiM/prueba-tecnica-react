import { useRouteError } from "react-router";

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>¡Oops! Algo salió mal</h1>
      <p>{error?.statusText || error?.message || "Error desconocido"}</p>
      <a href="/">Volver al inicio</a>
    </div>
  );
};

