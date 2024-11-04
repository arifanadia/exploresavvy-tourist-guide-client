import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import useAuth from "../Hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import useRole from "../Hooks/useRole";
import AdminMenu from '../Component/AdminMenu';
import TouristMenu from "../Component/TouristMenu";
import TourGuideMenu from "../Component/TourGuideMenu";

const Dashboard = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [role, isLoading] = useRole();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control sidebar visibility

    const handleLogOut = async () => {
        await logOut();
        navigate('/');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Redirect based on role
        if (!isLoading) {
            if (role === 'admin') {
                navigate('/dashboard/admin-dashboard');
            } else if (role === 'tour guide') {
                navigate('/dashboard/my-profile');
            } else if (role === 'tourist') {
                navigate('/dashboard/my-profile');
            }
        }
    }, [role, isLoading, navigate]);

    if (isLoading) return <span className="loading loading-bars loading-lg"></span>;

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Hamburger Icon for Small Screens */}
            <div className="md:hidden bg-black p-4 flex justify-between items-center">
                <Avatar alt="User Avatar" src={user?.photoURL} sx={{ width: 50, height: 50 }} />
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {isMenuOpen ? <IoClose size={30} /> : <HiMenuAlt1 size={30} />}
                </button>
            </div>

            {/* Overlay for Small Screens when Menu is Open */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={toggleMenu} 
                ></div>
            )}

            {/* Dashboard side panel */}
            <div className={`fixed md:static bg-black w-72 min-h-screen z-20 transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
                <div className="p-6 text-center">
                    <Avatar
                        className="mx-auto"
                        alt="User Avatar"
                        src={user?.photoURL}
                        sx={{ width: 100, height: 100 }}
                    />
                    <h2 className="text-yellow-400 font-semibold mt-4 text-2xl">{user?.displayName}</h2>
                    <p className="text-gray-400 mt-1">{user?.email}</p>
                    <div className="mt-6">
                        <div className="border-t border-gray-700 mb-4"></div>
                        {role === 'admin' && <AdminMenu />}
                        {role === 'tour guide' && <TourGuideMenu />}
                        {role === 'tourist' && <TouristMenu />}
                    </div>
                    <button
                        className="mt-12 text-red-500 flex items-center justify-center gap-2 hover:text-red-400"
                        onClick={handleLogOut}
                    >
                        Logout
                        <LuLogOut size={20} />
                    </button>
                </div>
            </div>

            {/* Pages or Outlet */}
            <div className="flex-1 p-4 md:p-8 bg-gray-50">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
