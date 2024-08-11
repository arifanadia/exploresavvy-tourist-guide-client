import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const UserDataRow = ({ user, refetch }) => {
    const { user: loggedInUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    

    const handleRoleChange = async (role) => {
        if (loggedInUser?.email === user?.email) {
            return toast.error("Action not allowed on yourself");
        }
        if (user?.status === 'Verified') {
            return toast.success("User is already verified");
        }

        const updateUser = { role, status: 'Approved' };

        try {
            const res = await axiosSecure.patch(`/users/role/${user?._id}`, updateUser);
            if (res.data.modifiedCount > 0) {
                toast.success("User updated successfully");
                refetch(); // Call refetch to get the updated data
            } else {
                toast.error("Failed to update user");
            }
        } catch (err) {
            console.error("Error updating user:", err.message);
            toast.error("Failed to update user");
        }
    };
    const isApproved = user.status === 'Approved';

    return (
        <tr className="text-gray-900">
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td className={`py-2 px-4 border-b ${user.status === 'Verified' ? 'text-green-600' : user.status === 'Requested' ? 'text-red-600' : user.status === 'Approved' ? 'text-blue-600' : 'text-gray-600'}`}>
                {user.status}
            </td>
            <td className="flex flex-col sm:flex-row gap-2">
                <button
                    onClick={() => handleRoleChange('admin')}
                    className={`${isApproved ? 'opacity-35 cursor-not-allowed' : ''} bg-black bg-opacity-80 p-2 text-gray-50 rounded-lg`}
                    disabled={isApproved}
                >
                    Make Admin
                </button>
                <button
                    onClick={() => handleRoleChange('tour guide')}
                    className={`${isApproved ? 'opacity-35 text-gray-500 cursor-not-allowed' : ''} ml-3 bg-yellow bg-opacity-70 text-gray-900 p-2 font-semibold rounded-lg`}
                    disabled={isApproved}
                >
                    Make Tour Guide
                </button>
            </td>
        </tr>
    );
};

export default UserDataRow;
