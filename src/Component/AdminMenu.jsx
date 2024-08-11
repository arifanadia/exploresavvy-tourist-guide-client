import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { SiBloglovin } from "react-icons/si";
import { FaList, FaUserGroup, FaUserShield } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";


const AdminMenu = () => {
    return (
        <div>
           <ul className="menu text-center ">
                <li className="ml-10"><NavLink to="/dashboard/admin-dashboard"><CgProfile />My Dashboard</NavLink></li>
                <li className="ml-10"><NavLink to="/dashboard/my-profile"><CgProfile />My Profile</NavLink></li>
                <li className="ml-10"><NavLink to="/dashboard/add-packages"><IoIosAddCircle />Add Packages </NavLink></li>
                <li className="ml-10"><NavLink to="/dashboard/manage-users"><FaUserShield />Manage Users </NavLink></li>
                <div className="border-t border-t-yellow my-4 w-56 mx-auto"></div>
                <li className="ml-10"><NavLink to="/"><FaHome />Home</NavLink></li>
                 <li className="ml-10"><NavLink to="/all-packages/Adventure"><FaList />All packages</NavLink></li>
                <li className="ml-10"><NavLink to="/community"><FaUserGroup />Community</NavLink></li>
                <li className="ml-10"><NavLink to="/community"><SiBloglovin/>Blogs</NavLink></li>


            </ul>

        </div>
    );
};

export default AdminMenu;