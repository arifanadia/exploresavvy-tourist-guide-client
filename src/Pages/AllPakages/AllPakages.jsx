import { Link } from "react-router-dom";
import usePackages from "../../Hooks/usePackages";
import { FaCircleArrowRight, FaRegHeart } from "react-icons/fa6";
import PageHeader from "../../Component/PageHeader";
import bg from '../../assets/All packages/all.jpg'


const AllPakages = () => {
    const [packages] = usePackages();
    console.log(packages);
    return (
        <div className="">
            <PageHeader bg={bg} title={'Buy and explore nature'}></PageHeader>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ">
                {
                    packages.map(item =>
                        <div key={item._id} className="card max-w-3xl mx-auto bg-base-100 shadow-xl relative">
                            <figure><img className="rounded-xl h-[300px] w-[400px]" src={item.mainImage} alt="Shoes" /></figure>
                            <button className="absolute bg-white px-2 py-1 rounded-lg right-4 top-2"><FaRegHeart className="text-xl" /></button>
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
            {
                packages.map(item => {
                    <div key={item._id} className="card max-w-3xl mx-auto bg-base-100 shadow-xl relative">
                            <figure><img className="rounded-xl h-[300px] w-[400px]" src={item.mainImage} alt="Shoes" /></figure>
                            <button className="absolute bg-white px-2 py-1 rounded-lg right-4 top-2"><FaRegHeart className="text-xl" /></button>
                            <div className="card-body">
                                <h2 className="font-satisfy text-3xl text-black font-semibold">{item.tripTitle}</h2>
                                <h2 className="card-title">{item.tourType}</h2>
                                <div className="flex justify-between items-center">
                                    <p>BDT {item.price}/Person</p>
                                    <Link to={`/packages/${item._id}`}><button className="text-2xl"><FaCircleArrowRight /></button></Link>

                                </div>
                            </div>

                        </div>
                })
            }
            
        </div>
    );
};

export default AllPakages;