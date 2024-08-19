import { FaCircleArrowRight } from "react-icons/fa6";


const Overview = () => {
    return (
        <div className=" mt-12 ">
            <iframe className="w-full" width="560" height="315" src="https://www.youtube.com/embed/6BdOvA_L16A?si=T5hExhd6zazeWkZ_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="mt-12 w-1/3 mx-auto">
                <button className="text-black btn-outline btn justify-center w-full mx-auto font-semibold flex items-center gap-4 text-sm  md:text-xl ">About Us <FaCircleArrowRight /></button>
            </div>


        </div>
    );
};

export default Overview;