
import SectionTitle from "../../../Component/SectionTitle";
import useBooking from "../../../Hooks/useBooking";
import AssignedData from "./AssignedData";


const MyAssignedTour = () => {
    const [bookings, refetch] = useBooking();
    

    return (
        <section>
            <SectionTitle title={'My Assigned Tour'}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg text-gray-800 uppercase">
                                <th></th>
                                <th>Package Name</th>
                                <th>Tourist Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(item =>
                                    <AssignedData key={item._id} item={item} refetch={refetch}></AssignedData>
                                )
                            }

                        </tbody>


                    </table>
                </div>

            </div>

        </section>
    )
};

export default MyAssignedTour;