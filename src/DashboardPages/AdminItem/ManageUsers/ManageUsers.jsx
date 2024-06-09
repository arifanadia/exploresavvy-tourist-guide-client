import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UserDataRow from "../../../Component/UserDataRow";



const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isLoading,refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users')
            return data
        }
    })
    if(isLoading) return <span className="loading loading-bars loading-lg"></span>
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg text-gray-800 uppercase">
                            
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map(user =>
                            <UserDataRow key={user._id} user={user} refetch={refetch}></UserDataRow>
                        )
                       }
                
                    </tbody>
             

                </table>
            </div>

        </div>
    );
};

export default ManageUsers;