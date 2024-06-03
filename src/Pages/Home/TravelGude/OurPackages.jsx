import { useEffect, useState } from "react";
import { FaCircleArrowRight, FaRegHeart } from "react-icons/fa6";


const OurPackages = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('packages.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(data);
    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-6 mt-12">
                {
                  data.slice(0,3).map(item =>
                        <div key={item.id} className="card w-96 bg-base-100 shadow-xl relative">
                            <figure><img className="h-[250px]" src={item.mainImage} alt="Shoes" /></figure>
                            <button className="absolute bg-white px-2 py-1 rounded-lg right-4 top-2"><FaRegHeart className="text-xl" /></button>
                            <div className="card-body">
                                <h2 className="font-satisfy text-3xl text-black font-semibold">{item.tripTitle}</h2>
                                <h2 className="card-title">{item.tourType}</h2>
                                <p>Price : BDT {item.price}</p>
                                <div className="w-full">
                                    <button className=" w-full btn bg-black text-white">Buy Now</button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
            <div className="mt-12 w-1/3 mx-auto">
                <button className="text-yellow justify-center w-full mx-auto font-semibold flex items-center gap-4  text-xl ">View All Packages<FaCircleArrowRight /></button>
            </div>
        </div>
    );
};

export default OurPackages;