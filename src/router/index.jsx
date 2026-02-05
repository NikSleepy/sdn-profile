import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default router;
