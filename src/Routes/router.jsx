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
import TourGuideDetails from "../Pages/TourGuideDetails/TourGuideDetails";
import MyBookings from "../DashboardPages/TouristItem/MyBookings/MyBookings";
import ManageUsers from "../DashboardPages/AdminItem/ManageUsers/ManageUsers";
import AddPackage from "../DashboardPages/AdminItem/Addpackage/AddPackage";
import AdminDashboard from "../DashboardPages/AdminItem/AdminDashboard/AdminDashboard";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import MyWishList from "../DashboardPages/TouristItem/MyWishList/MyWishList";
import MyProfile from "../Component/Myprofile/MyProfile";
import AllStories from "../Pages/AllStories/AllStories";
import Blogs from "../Pages/Blogs/Blogs";
import StoryDetails from "../Pages/StoryDetails/StoryDetails";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import MyAssignedTour from "../DashboardPages/TourGuideItem/MyAssignedTour/MyAssignedTour";



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
                path: '/all-packages/:tourType',
                element: <AllPakages></AllPakages>
            },
            {
                path: '/packages-details/:id',
                element: <PackagesDetails></PackagesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/packages-details/${params.id}`)
            },
            {
                path: '/tour-guide-details/:id',
                element: <TourGuideDetails></TourGuideDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/tour-guide-details/${params.id}`)
            },
            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/all-stories',
                element: <AllStories></AllStories>
            },
            {
                path: '/tourist-stories-details/:id',
                element: <StoryDetails></StoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/tourist-stories-details/${params.id}`)
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/blog-details/:id',
                element: <BlogDetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog-details/${params.id}`)
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
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'admin-dashboard',
                element: <PrivateRoute><AdminRoute><AdminDashboard></AdminDashboard></AdminRoute></PrivateRoute>
            },
            {
                path: 'bookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'add-packages',
                element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
            },
            {
                path: 'my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'my-wishlist',
                element: <MyWishList></MyWishList>
            },
            {
                path: 'my-assigned-tour',
                element: <MyAssignedTour></MyAssignedTour>
            },
            

        ]
    }
]);

export default router;