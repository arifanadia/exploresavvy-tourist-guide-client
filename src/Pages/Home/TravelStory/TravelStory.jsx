import { MdExplore } from "react-icons/md";
import bg from '../../../assets/home/story.jpeg'
import TravelStoryCard from "./TravelStoryCard";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const TravelStory = () => {
    return (
        <div className="max-w-7xl mx-auto my-16">
            <div className="text-center md:text-left">
                <h1 className="text-2xl  lg:text-4xl font-maven font-semibold text-black ">
                    Tourist Wonderful Stories</h1>
                <h3 className="font-satisfy  my-4 text-xl lg:text-2xl">Discover Bengal&apos;s Nature Beauty Through Traveler&apos;s Eye&apos;s</h3>
                <p className="text-black flex justify-center md:justify-right items-center">--------<MdExplore className="text-yellow lg:text-3xl text-2xl" />--------</p>


            </div>
            <div className='rounded-xl  mt-12 bg-gray-100 h-[500px] bg-fixed bg-no-repeat bg-cover bg-center py-12'
                style={{
                    backgroundImage: `linear-gradient(
                    #0f0c29ED,#302b6336),url(${bg})`
                }}>
                <TravelStoryCard></TravelStoryCard>


            </div>
            <div className="mt-12 w-1/2 md:w-1/3 mx-auto">
                <Link to='/all-stories'>
                    <button className="text-black btn-outline btn justify-center w-full mx-auto font-semibold flex items-center gap-4 text-base md:text-xl ">Read more stories <FaCircleArrowRight /></button>
                </Link>
            </div>


        </div>
    );
};

export default TravelStory;