import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";

const UserDataRow = ({ user, refetch }) => {

    const axiosSecure = useAxiosSecure();
    const [isUpdating,setISUpdating] = useState(false)

    const { mutateAsync } = useMutation({
        mutationFn: async (updateUser) => {
            const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, updateUser)
            return data

        },
        onSuccess: data => {
            refetch()
            console.log(data);
            setISUpdating(false)
            toast.success('user role update successfully')
        }
    })

    const handleRole = async (id, role) => {
        setISUpdating(true)
        const updateUser = {
            id,
            role,
            status: 'Approved'
        }
        try {
            await mutateAsync(updateUser)
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
                    {user.email}
                </td>
                <td>
                    {user.role}
                </td>
                <td className={`py-2 px-4 border-b ${user.status === 'Verified' ? 'text-green-600' : user.status === 'Requested' ? 'text-red-600' : user.status === 'Approved' ? 'text-blue-600' : 'text-gray-600'}`}>
                    {user.status}
                </td>

                <td>
                    <button
                        onClick={() => handleRole(user._id, 'admin')}
                        disabled={isUpdating || user.role === 'admin'}
                        className=" bg-black bg-opacity-80 p-2 text-gray-50 rounded-lg ">Make Admin</button>
                    <button
                        onClick={() => handleRole(user._id, 'tour guide')} 
                        disabled={isUpdating || user.role === 'tour guide'}
                        className=" ml-3 bg-yellow  bg-opacity-70 text-gray-900 p-2 font-semibold rounded-lg disabled"> Make Tour-Guide</button>
                </td>
            </tr>


        </>
    );
};

export default UserDataRow;