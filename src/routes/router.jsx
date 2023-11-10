import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Details from "../pages/Details";
import About from "../pages/About";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import NotFound from "../NotFound";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/destination',
                element: <Destination/>
            },
            {
                path: '/details',
                element: <Details/>
            },
            {
                path: '/about',
                element: <About/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/registration',
        element: <Registration/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router