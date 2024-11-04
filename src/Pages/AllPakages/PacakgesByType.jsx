import { FaCircleArrowRight, FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PacakgesByType = ({ tripPack, handleWishList,wishlist }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
            {
                tripPack.map(item =>
                    <div
                        key={item._id}
                        className="card max-w-3xl mx-auto bg-[#000435] shadow-xl relative"
                        data-aos="fade-right"
                        data-aos-duration="1000" 
                        data-aos-easing="ease-in-out" 
                    >
                        <figure>
                            <img className="rounded-xl h-[300px] w-[400px]" src={item.mainImage} alt={item.tripTitle} />
                        </figure>
                        <button
                            onClick={() => handleWishList(item)}
                            disabled={wishlist[item._id]} 
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
                        <div className="card-body text-white">
                            <h2 className="font-satisfy text-3xl text-white font-semibold">{item.tripTitle}</h2>
                            <h2 className="card-title">{item.tourType}</h2>
                            <div className="flex justify-between items-center">
                                <p>BDT {item.price}/Person</p>
                                <Link to={`/packages-details/${item._id}`}>
                                    <button className="text-2xl text-yellow-400">
                                        <FaCircleArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default PacakgesByType;
