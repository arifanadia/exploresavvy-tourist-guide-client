import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UserDataRow from "../../../Component/UserDataRow";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: users = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users');
            return data;
        }
    });

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-lg"></span></div>;
    }

    if (isError) {
        return <div className="flex justify-center items-center h-screen"><p>Error: {error.message}</p></div>;
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-lg text-gray-800 uppercase">
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center text-gray-500">No users found.</td>
                            </tr>
                        ) : (
                            users.map(user => (
                                <UserDataRow key={user._id} user={user} refetch={refetch}></UserDataRow>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
