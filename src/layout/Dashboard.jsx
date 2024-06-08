import { Avatar } from "@mui/material";
import useAuth from "../Hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import useRole from "../Hooks/useRole";
import TouristMenu from "../Component/TouristMenu";
import TourGuideMenu from "../Component/TourGuideMenu";
import AdminMenu from "../Component/AdminMenu";







const Dashboard = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate()
    const [role, isLoading] = useRole();
    console.log(role);


    const handleLogOut = async () => {
        await logOut()
        navigate('/')
    }


    return (
        <div className="flex">
            {/* dashboard side panel */}
            <div className="bg-black w-72 min-h-screen text-white">
                <div className="mt-10 text-center">
                    <Avatar
                        className="mx-auto "
                        alt="Remy Sharp"
                        src={user?.photoURL}
                        sx={{ width: 100, height: 100 }}
                    />
                    <h2 className="text-yellow font-semibold font-maven mt-2 text-2xl">{user?.displayName}</h2>
                    <p className="my-2">{user?.role}</p>
                    <p className="my-2">{user?.email}</p>
                </div>
                <div className="border-t border-t-yellow my-4 w-56 mx-auto"></div>
                <nav>
                    {role === 'tourist' && <TouristMenu />}
                    {role === 'tour guide' && <TourGuideMenu />}
                    {role === 'admin' && <AdminMenu />}
                    

                </nav>

                {/* logout */}
                <div>
                    <p className="ml-10 mt-16 flex gap-1 items-center " onClick={handleLogOut}>Logout<HiOutlineArrowRightOnRectangle
                        className="text-red-700" /></p>
                </div>


            </div>
            {/* pages or Outlet */}
            <div className="flex-1 p-8">

                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default Dashboard;