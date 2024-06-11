import { MdOutlineCancel } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const BookingData = ({ item,refetch }) => {
    const axiosSecure = useAxiosSecure()


    const handleReject = (id) => {
        

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

    return (
        <>
            {/* row 1 */}
            <tr className="text-gray-900 ">
                <td>
                    <button
                        onClick={() =>handleReject(item._id)}
                        className=" text-red-600 text-xl "><MdOutlineCancel /></button>

                </td>

                <td>
                    <div className="flex gap-3 items-center">
                        <img className="w-16 h-16 rounded-xl" src={item.packageImg} alt="" />
                        <p> {item.packageTitle}</p>
                    </div>

                </td>
                <td>
                    {item.tourGuideName}
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    {item.tourDate}
                </td>
                <td className={`py-2 px-4 border-b ${item.status === 'In review' ? 'text-green-600' : item.status === 'Requested' ? 'text-red-600' : item.status === 'Accepted' ? 'text-blue-600' : 'text-gray-600'}`}>
                    {item.status}
                </td>

                <td>
                    <button className="btn bg-gray-900 text-white">Pay</button>

                </td>
            </tr>


        </>
    );
};

export default BookingData;