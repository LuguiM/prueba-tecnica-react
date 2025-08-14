import { Button } from "@mui/material";
import { Link, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-white h-screen">
      <h1 className="text-h1">¡Oops! Algo salió mal</h1>
      {/* <p>{error?.statusText || error?.message || "Error desconocido"}</p> */}
      <Link to="/">
        <Button className="btn-primary" variant="contained">
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
};
