import { FaHeart } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import WishListModal from "../../../Component/WishListModal";
import { useState } from "react";
import toast from "react-hot-toast";


const WishListData = ({ item, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleReject = async (id) => {

        try {
            const res = await axiosSecure.delete(`/wishlist/${id}`)

            if (res.data.deletedCount > 0) {
                refetch()
                toast.success('package remove from wishList')
            }

        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            {/* row 1 */}
            <tr className="text-gray-900 ">

                <td>
                    <div className="flex gap-3 items-center">
                        <img className="w-16 h-16 rounded-xl" src={item.packagesImg} alt="" />
                        <p> {item.packageName}</p>
                        <p> {item.tourType}</p>
                    </div>

                </td>
                <td>
                    {item.location}
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    <button
                        onClick={handleOpen}
                        className=" text-red-600 text-xl btn btn-outline "><FaHeart /></button>
                    <WishListModal handleClose={handleClose} open={open} handleReject={handleReject} item={item}></WishListModal>

                </td>
            </tr>


        </>
    );
};

export default WishListData;