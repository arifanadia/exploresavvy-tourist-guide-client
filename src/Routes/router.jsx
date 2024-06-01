import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/Shared/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentications/Login/Login";
import Register from "../Authentications/Register/Register";
import Dashboard from "../layout/Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
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