import { createBrowserRouter } from "react-router";
import { Home } from "../views/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);