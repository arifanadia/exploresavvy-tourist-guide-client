
import { MdExplore } from "react-icons/md";
import TravelStoryCard from "./TravelStoryCard";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';

const TravelStory = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 py-12">
       
            <div className="text-center md:text-left">
                <h1 className="text-2xl lg:text-4xl font-maven font-semibold text-white" data-aos="fade-up">
                    Tourist Wonderful Stories
                </h1>
                <h3 className="font-satisfy my-4 text-xl lg:text-2xl text-yellow-400" data-aos="fade-up" data-aos-delay="200">
                    Discover Bengal&apos;s Nature Beauty Through Traveler&apos;s Eye&apos;s
                </h3>
                <p className="text-yellow-400 flex justify-center md:justify-start items-center" data-aos="fade-up" data-aos-delay="400">
                    --------<MdExplore className="text-yellow lg:text-3xl text-2xl" />--------
                </p>
            </div>

            {/* Background Section with TravelStoryCard */}
            <div className="rounded-xl mt-12 bg-gray-100 h-[500px] bg-fixed bg-no-repeat bg-cover bg-center py-12"
                style={{
                    backgroundImage: `linear-gradient(#0f0c29ED,#302b6336),url("/assets/home/story.jpeg")`
                }}
                data-aos="fade-up" data-aos-delay="600">
                <TravelStoryCard />
            </div>

            {/* Button Section */}
            <div className="mt-12 w-1/2 md:w-1/3 mx-auto">
                <Link to='/all-stories'>
                    <button className="text-yellow-400 btn-outline btn justify-center w-full mx-auto font-semibold flex items-center gap-4 text-sm md:text-xl"
                        data-aos="fade-up" data-aos-delay="800">
                        Read more stories <FaCircleArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TravelStory;
