import { IoMdCheckmark } from "react-icons/io";

import { FiX } from "react-icons/fi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";




const AssignedData = ({ item, refetch }) => {
    const axiosSecure = useAxiosSecure();




    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });


    }


    const handleAccept = async () => {
        console.log('accept');
        const { data } = await axiosSecure.patch(`/bookings/${item._id}`, { status: 'Accepted' })
        if (data.modifiedCount > 0) {
            refetch()
            toast.success('tour package accepted')
        }



    }
    const handleReject = async () => {
        console.log('rejected');
        const { data } = await axiosSecure.patch(`/bookings/${item._id}`, { status: 'Rejected' })
        if (data.modifiedCount > 0) {
            refetch()
            toast.success('tour package rejected')
        }



    }
    return (
        <>
            {/* row 1 */}
            <tr className="text-gray-900 ">
                <td>
                   <button onClick={() =>handleDelete(item._id)} className="text-red-700"> <MdDelete /></button>
                </td>
                <td>
                    {item.packageTitle}
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    {item.tourDate}
                </td>
                <td className={`py-2 px-4 border-b ${item.status === 'In review' ? 'text-green-600' : item.status === 'Rejected' ? 'text-red-600' : item.status === 'Accepted' ? 'text-blue-600' : 'text-gray-600'}`}>
                    {item.status}
                </td>

                <td>
                    <button
                        onClick={handleAccept}
                        className=" btn btn-success btn-outline "><IoMdCheckmark /></button>
                    <button
                        onClick={handleReject}
                        className=" text-red-700 btn btn-outline ml-3"><FiX /></button>

                </td>
            </tr>


        </>
    );
};

export default AssignedData;