import { useState } from "react";
import { FaCircleArrowRight, FaRegHeart, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import usePackages from "../../../Hooks/usePackages";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const OurPackages = () => {
    const [packages] = usePackages();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [wishlist, setWishlist] = useState({});

    const handleWishList = async (item) => {
        // Check if the item is already in the wishlist
        if (wishlist[item._id]) {
            toast.error("This item is already in your wishlist!");
            return;
        }

        const packageData = {
            packageName: item.tripTitle,
            packagesImg: item.mainImage,
            location: item.location,
            price: parseFloat(item.price),
            tourType: item.tourType,
            email: user?.email
        };

        const res = await axiosSecure.post("/wishList", packageData);
        if (res.data.insertedId) {
            toast.success("Wishlist item added");
            // Update the wishlist state to mark this item as added
            setWishlist((prevWishlist) => ({ ...prevWishlist, [item._id]: true }));
        }
    };

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ">
                {packages?.slice(0, 3).map((item) => (
                    <div key={item._id} className="card max-w-3xl mx-auto bg-[#000435] shadow-xl relative">
                        <figure>
                            <img className="rounded-xl h-[300px] w-[400px]" src={item.mainImage} alt={item.tripTitle} />
                        </figure>
                        <button
                            onClick={() => handleWishList(item)}
                            disabled={wishlist[item._id]} // Disable if already in wishlist
                            className={`absolute px-2 py-1 rounded-lg right-4 top-2 ${
                                wishlist[item._id] ? "bg-red-500" : "bg-white"
                            }`}
                        >
                            {wishlist[item._id] ? (
                                <FaHeart className="text-xl text-white" />
                            ) : (
                                <FaRegHeart className="text-xl text-yellow-400" />
                            )}
                        </button>
                        <div className="card-body">
                            <h2 className="font-satisfy text-2xl text-white font-semibold">{item.tripTitle}</h2>
                            <h2 className="card-title">{item.tourType}</h2>
                            <div className="flex justify-between items-center">
                                <p>BDT {item.price}/Person</p>
                                <Link to={`/packages-details/${item._id}`}>
                                    <button className="text-2xl">
                                        <FaCircleArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 w-1/3 mx-auto">
                <Link to="/all-packages/Adventure">
                    <button className="text-black btn-outline btn justify-center w-full mx-auto font-semibold flex items-center gap-4 text-xl">
                        See All <FaCircleArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OurPackages;
