import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Component/SectionTitle";
import WishListData from "./WishListData";

const MyWishList = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()


    const { data: wishlist = [], isLoading, refetch } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/my-wishlist/${user?.email}`);
            return data;
        }
    });

    console.log(wishlist);
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-lg"></span></div>;
    }

    return (
        <section>
            <SectionTitle title={'My Wishlist'}></SectionTitle>
            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-gray-800 uppercase">
                                <th>Package Name</th>
                                <th>location</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlist.map(item =>
                                    <WishListData key={item._id} item={item} refetch={refetch}></WishListData>
                                )
                            }

                        </tbody>


                    </table>
                </div>

            </div>



        </section>
    );
};

export default MyWishList;
