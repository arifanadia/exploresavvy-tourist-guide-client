import { FaStar } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import AllAboutPackage from "./AllAboutPackage";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const PackagesDetails = () => {

    const packageDetails = useLoaderData();
    const { user } = useAuth();
    const [guideData, setGuideData] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchTourData = async () => {
            const res = await axiosSecure.get('/tourGuides');
            setGuideData(res.data);
        };
        fetchTourData();
    }, [axiosSecure]);

    const handleBookNow = async (e) => {
        e.preventDefault();
        if (user && user.email) {
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const photo = form.photo.value;
            const price = parseFloat(packageDetails.price);
            const tourDate = startDate;
            const tourGuideName = form.tourGuide.value;
            const packageTitle = packageDetails.tripTitle;
            const packageId = packageDetails._id;
            const packageImg = packageDetails.mainImage;

            const bookingData = {
                name,
                email,
                photo,
                price,
                tourGuideName,
                packageTitle,
                packageId,
                status: 'In review',
                tourDate: new Date(tourDate).toLocaleDateString(),
                packageImg
            };

            const res = await axiosSecure.post('/bookings', bookingData);
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Your booking has been successfully initiated.",
                    text: "Please check your booking",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Go to my booking"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/dashboard/bookings', { state: { from: location } });
                    }
                });
            }
        } else {
            Swal.fire({
                title: "Are you want to booking?",
                text: "Please Login to add to the tour package",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto font-satisfy mt-12 gap-8">
            <AllAboutPackage packageDetails={packageDetails} />
            <div className="min-h-screen w-full lg:w-1/2">
                <div className="mt-6">
                    <h1 className="text-xl text-center lg:text-left md:text-2xl">Book Your Package</h1>
                    <div className="border border-gray-100 rounded-lg p-6 mt-6">
                        <div className="flex justify-between items-center">
                            <h4>
                                <span className="text-xl font-semibold font-maven">tk. {packageDetails.price}</span>/per person
                            </h4>
                            <p className="flex gap-3 items-center"><FaStar className="text-orange-400" />4.0</p>
                        </div>
                        <div className="divider my-4"></div>
                        <div>
                            <form onSubmit={handleBookNow} className="border border-gray-100 font-maven rounded-lg p-6 mt-6">
                                <div className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Name</span>
                                    </div>
                                    <input type="text" placeholder="Type here" name="name" defaultValue={user?.displayName}
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full mt-4">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <input type="text" placeholder="Type here" defaultValue={user?.email} name="email"
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full mt-4">
                                    <div className="label">
                                        <span className="label-text">Photo URL</span>
                                    </div>
                                    <input type="text" placeholder="Type here" defaultValue={user?.photoURL} name="photo"
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
                                    <div className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Price</span>
                                        </div>
                                        <input type="text" placeholder="Type here" defaultValue={user && user.email ? packageDetails.price : ""} name="price"
                                            className="input input-bordered w-full" />
                                    </div>

                                    <div className="form-control w-full mt-4 md:mt-0">
                                        <div className="label">
                                            <span className="label-text">Choose Date</span>
                                        </div>
                                        <DatePicker className="border-2 rounded-md p-2.5 w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>
                                <select className="select select-bordered w-full mt-4" name="tourGuide">
                                    <option disabled selected>Select your Tour Guide</option>
                                    {user && user.email ?
                                        guideData.map(guide =>
                                            <option key={guide._id}>{guide.name}</option>
                                        )
                                        :
                                        <option></option>
                                    }
                                </select>
                                <button type='submit' className='btn my-6 btn-outline text-white bg-black w-full'>Book Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl text-center lg:text-left md:text-2xl">List of Tour Guides</h1>
                    <div className="border border-gray-100 rounded-lg p-6 mt-6 shadow-xl">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                            {guideData.map(guide =>
                                <Link key={guide._id} to={`/tour-guide-details/${guide._id}`}>
                                    <div className="flex flex-col md:flex-row border border-gray-200 p-6 items-center gap-4">
                                        <img className="w-24 h-24 rounded-full" src={guide.photo} alt={guide.name} />
                                        <div>
                                            <h3>{guide.name}</h3>
                                            <p className="flex gap-3 items-center my-3"><FaStar className="text-orange-400" />{guide.rating}</p>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagesDetails;
