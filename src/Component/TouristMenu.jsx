import { useState } from "react";
import { FaHeart, FaList } from "react-icons/fa6";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import TouristModal from "./TouristModal";
import { HiCalendar } from "react-icons/hi2";
import useRole from "../Hooks/useRole";

const TouristMenu = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [role] = useRole()


    const modalHandle = async () => {
        console.log('i want to tour guide');
        const currentUser = {
            email: user?.email,
            role: 'tourist',
            status: 'Requested'
        }
        try {
            const { data } = await axiosSecure.put(`/users`, currentUser)
            console.log(data);
            if (data.modifiedCount > 0) {

                toast.success('success!Please wait for admin approval')

            } else {
                toast.success('Please!, wait for admin approval confirmation')
            }
        }
        catch (err) {
            toast.error(err.messages)
        }
        finally {
            handleClose()
        }


    }
    return (
        <div>
            <div className="w-full">
                {
                    role === 'tourist' ?
                        <div>
                            <button onClick={handleOpen} className="btn w-3/4 flex justify-center mx-auto btn-outline text-white border-yellow hover:bg-yellow">Become a Tour Guide</button>
                            <TouristModal handleClose={handleClose} modalHandle={modalHandle} open={open}></TouristModal>
                        </div>
                        :
                        <div>
                            <button onClick={handleOpen} className="btn w-3/4 flex justify-center mx-auto btn-outline text-white border-yellow hover:bg-yellow">Become a Admin</button>
                            <TouristModal handleClose={handleClose} modalHandle={modalHandle} open={open}></TouristModal>
                        </div>

                }

            </div>
            <ul className="menu text-center ">
                <li className="ml-10"><NavLink to="/dashboard"><CgProfile />My Dashboard</NavLink></li>
                <li className="ml-10"><NavLink to="/dashboard/my-profile"><CgProfile />My Profile</NavLink></li>
                <li className="ml-10"><NavLink to="/dashboard/bookings"><HiCalendar />My Booking</NavLink></li>
                <li className="ml-10"><NavLink to="/dashboard/my-wishlist"><FaHeart />My Wishlist</NavLink></li>
                <div className="border-t border-t-yellow my-4 w-56 mx-auto"></div>
                <li className="ml-10"><NavLink to="/"><FaHome />Home</NavLink></li>
                <li className="ml-10"><NavLink to="/all-packages/adventure"><FaList />All packages</NavLink></li>


            </ul>

        </div>
    );
};

export default TouristMenu;