import { createBrowserRouter } from "react-router";
import { Home, DetailsView, FavoritesView } from "../views";
import { mainLayout } from "../layout/mainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: mainLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: "details/:id",
                Component: DetailsView  
            },
            {
                path: "favorites",
                Component: FavoritesView
            },
            {
                //not found
                path: "*",
                Component: () => <div>Page not found</div>
            }
        ]
    },
]);