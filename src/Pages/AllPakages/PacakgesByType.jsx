import { FaCircleArrowRight, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";


const PacakgesByType = ({tripPack,handleWishList}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
                {
                    tripPack.map(item =>
                        <div key={item._id} className="card max-w-3xl mx-auto bg-base-100 shadow-xl relative">
                            <figure><img className="rounded-xl h-[300px] w-[400px]" src={item.mainImage} alt="Shoes" /></figure>
                            <button onClick={() => handleWishList(item)} className="absolute bg-white px-2 py-1 rounded-lg right-4 top-2"><FaRegHeart className="text-xl" /></button>
                            <div className="card-body">
                                <h2 className="font-satisfy text-3xl text-black font-semibold">{item.tripTitle}</h2>
                                <h2 className="card-title">{item.tourType}</h2>
                                <div className="flex justify-between items-center">
                                    <p>BDT {item.price}/Person</p>
                                    <Link to={`/packages-details/${item._id}`}><button className="text-2xl"><FaCircleArrowRight /></button></Link>

                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
    );
};

export default PacakgesByType;