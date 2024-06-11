import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import BookingData from "./BookingData";
import useAuth from "../../../Hooks/useAuth";



const MyBookings = () => {

    const axiosSecure = useAxiosSecure();

    const { user } = useAuth()


    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/my-bookings/${user?.email}`);
            return data;
        }
    });
    
    const totalPrice = bookings.reduce((total, item) => total + item.price, 0);

    console.log(bookings);
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-lg"></span></div>;
    }

    return (
        <section>
            <SectionTitle title={'My Booking'}></SectionTitle>
            <div className="flex items-center justify-between my-4 font-maven">
                <h1 className=" text-xl">Total Orders : {bookings.length}</h1>
                <h1 className=" text-xl">Total Price : {totalPrice}</h1>
               
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-gray-800 uppercase">

                                <th></th>
                                <th>Package Name</th>
                                <th>Tour-Guide Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(item =>
                                    <BookingData key={item._id} item={item} refetch={refetch}></BookingData>
                                )
                            }

                        </tbody>


                    </table>
                </div>

            </div>



        </section>
    );
};

export default MyBookings;