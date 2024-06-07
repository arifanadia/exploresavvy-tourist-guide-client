import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/Shared/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentications/Login/Login";
import Register from "../Authentications/Register/Register";
import Dashboard from "../layout/Dashboard";
import AllPakages from "../Pages/AllPakages/AllPakages";
import Community from "../Pages/Community/Community";
import PackagesDetails from "../Pages/PackagesDetails/PackagesDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-packages',
                element: <AllPakages></AllPakages>
            },
            {
                path: '/packages-details/:id',
                element: <PackagesDetails></PackagesDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/packages-details/${params.id}`)
            },
            {
                path: '/tour-guide-details/:id',
                element: <PackagesDetails></PackagesDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/tour-guide-details/${params.id}`)
            },
            {
                path: '/community',
                element: <Community></Community>
            },
        ]

    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children: [
            {

            }
        ]
    }
]);

export default router;