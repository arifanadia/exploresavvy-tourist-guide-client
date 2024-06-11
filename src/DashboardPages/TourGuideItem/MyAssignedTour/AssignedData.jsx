import { IoMdCheckmark } from "react-icons/io";

import { FiX } from "react-icons/fi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";




const AssignedData = ({item,refetch}) => {
    const axiosSecure = useAxiosSecure();
  

    const handleAccept = async() =>{
        console.log('accept');
       const {data} = await axiosSecure.patch(`/bookings/${item._id}`,{status : 'Accepted'})
       if(data.modifiedCount > 0){
        refetch()
        toast.success('tour package accepted')
       }


        
    }
    const handleReject = () =>{

    }
    return (
        <>
            {/* row 1 */}
            <tr className="text-gray-900 ">

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
                        onClick={ handleAccept}
                        className=" btn btn-success btn-outline "><IoMdCheckmark /></button>
                    <button
                        onClick={ handleReject}
                        className=" text-red-700 btn btn-outline ml-3"><FiX /></button>
                    
                </td>
            </tr>


        </>
    );
};

export default AssignedData;