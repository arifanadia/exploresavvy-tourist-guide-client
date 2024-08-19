import { FaStar } from "react-icons/fa6";
import PackagesImages from "./PackagesImages";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { TbCoinTaka } from "react-icons/tb";

const AllAboutPackage = ({ packageDetails }) => {
    return (
        <div className="w-full lg:w-3/4 mx-auto px-4 lg:px-0">
            <PackagesImages packageDetails={packageDetails}></PackagesImages>
            {/* All about package */}
            <div className="border border-gray-100 rounded-lg p-6 my-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl mt-3">{packageDetails.tripTitle}</h1>
                <h3 className="text-lg md:text-xl my-2">#{packageDetails.tourType}</h3>
                <span className="text-yellow">----------------------</span>
                <div className="flex flex-wrap gap-4 items-center mt-4">
                    <p className="flex items-center gap-2"><IoLocationOutline /> {packageDetails.location}</p>
                    <p className="flex items-center gap-2"><TbCoinTaka /> {packageDetails.price}/per person</p>
                    <p className="flex items-center gap-2"><IoPeopleOutline />8 people</p>
                </div>
                <h4 className="mt-6 text-xl">Description:</h4>
                <p className="font-maven my-4">{packageDetails.description}</p>
                <div className="">
                    <h4 className="mt-6 text-yellow text-2xl">Trip Plan:</h4>
                    <hr className="w-44 my-2" />
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        {packageDetails.tripPlan.map((plan, index) => (
                            <div key={index} className="border-2 bg-gray-900 border-yellow text-slate-200 p-6 rounded-lg">
                                <p>Day {plan.day}</p>
                                <p>Place: {plan.place}</p>
                                <div>
                                    {plan.activities.map((activity, activityIndex) => (
                                        <div key={activityIndex} className="flex items-center gap-2">
                                            <p>{activityIndex + 1}.</p>
                                            <p>{activity}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Reviews */}
            <div className="border border-gray-100 rounded-lg p-6 w-full lg:w-10/12">
                <h1 className="text-xl lg:text-2xl">Reviews (1 Review)</h1>
                <div className="flex gap-2 lg:gap-4 items-center my-4 flex-wrap">
                    <p className="flex items-center">1<FaStar className="text-orange-400"></FaStar></p>
                    <p className="flex items-center">2<FaStar className="text-orange-400"></FaStar></p>
                    <p className="flex items-center">3<FaStar className="text-orange-400"></FaStar></p>
                    <p className="flex items-center">4<FaStar className="text-orange-400"></FaStar></p>
                    <p className="flex items-center">5<FaStar className="text-orange-400"></FaStar></p>
                </div>
                <form className="md:relative">
                    <input
                        type="text"
                        placeholder="Share your thought"
                        name="review"
                        className="w-full border border-yellow rounded-full p-3.5"
                    />
                    <button
                        type="submit"
                        className="absolute hidden md:flex right-4 top-1 btn rounded-full bg-black text-white w-28"
                    >
                        Submit
                    </button>

                    <button
                        type="submit"
                        className="mt-4  text-center md:hidden btn rounded-full bg-black text-white w-28"
                    >
                        Submit
                    </button>

                </form>
                <div className="border border-black mt-4 p-6 rounded-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img src="" alt="" className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="font-semibold">User name</p>
                                <p className="my-1">09-06-2024</p>
                            </div>
                        </div>
                        <p className="flex items-center">5<FaStar className="text-orange-400"></FaStar></p>
                    </div>
                    <p className="my-4">This is an awesome tour</p>
                </div>
            </div>
        </div>
    );
};

export default AllAboutPackage;
