import { createBrowserRouter } from "react-router";
import { Home } from "../views/Home";
import { mainLayout } from "../layout/mainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: mainLayout,
        children:[
            {
                index: true,
                Component: Home
            }
        ]
    },
]);