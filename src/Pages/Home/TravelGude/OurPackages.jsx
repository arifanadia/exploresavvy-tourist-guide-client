
import { FaCircleArrowRight, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import usePackages from "../../../Hooks/usePackages";


const OurPackages = () => {

    const [packages] = usePackages();
    console.log(packages);
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ">
                {
                    packages.slice(0, 3).map(item =>
                        <div key={item._id} className="card max-w-3xl mx-auto bg-base-100 shadow-xl relative">
                            <figure><img className="rounded-xl h-[300px] w-[400px]" src={item.mainImage} alt="Shoes" /></figure>
                            <button className="absolute bg-white px-2 py-1 rounded-lg right-4 top-2"><FaRegHeart className="text-xl" /></button>
                            <div className="card-body">
                                <h2 className="font-satisfy text-2xl text-black font-semibold">{item.tripTitle}</h2>
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
            <div className="mt-12 w-1/3 mx-auto">
                <Link to="/all-packages">
                    <button className="text-black btn-outline btn justify-center w-full mx-auto font-semibold flex items-center gap-4  text-xl ">See All<FaCircleArrowRight /></button>
                </Link>
            </div>
        </div>
    );
};

export default OurPackages;