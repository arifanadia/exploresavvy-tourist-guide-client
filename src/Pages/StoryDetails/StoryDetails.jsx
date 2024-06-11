import { FaShareAlt } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useLoaderData } from "react-router-dom";



const StoryDetails = () => {
    const storyDetails = useLoaderData()


    return (
        <div>
            <div className="bg-no-repeat p-64 bg-cover bg-center text-center"
            style={{
                backgroundImage: `linear-gradient(
            #0f0c29ED,#302b6336),url(${storyDetails.image})`
            }}>
                <h1 className="text-3xl font-maven font-semibold text-white">{storyDetails.title}</h1>

            </div>
            <div className="-mt-24">
                <img className="w-64 h-64 mx-auto rounded-full border-4 border-gray-200" src={storyDetails.tourist_photo} alt="" />
            </div>
            <div className="max-auto text-center my-6" >
                <h3 className="font-satisfy font-semibold text-xl">By {storyDetails.tourist_name}</h3>
                <p className="my-2">Travel Story Writer</p>
                <p className="my-2">{storyDetails.start_date} - {storyDetails.end_date}</p>
                <p className="my-2">{storyDetails.destination}</p>
                <div className="border-t border-t-yellow my-3 w-1/2 mx-auto"></div>
                <div className="flex justify-between w-2/5 mx-auto my-4 text-xl">
                    <p className="flex gap-2 items-center"><MdOutlineRemoveRedEye /> 2050</p>
                    <button><FaShareAlt /></button>
                    <p className="flex gap-2 items-center"><IoChatbubbleOutline /> 150</p>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-maven">The Amazing Story :</h3>
                <div className="border-t border-t-yellow my-3 w-52"></div>
                <p className="text-lg my-3">History of {storyDetails.destination}</p>
                <p>{storyDetails.description.history}</p>
            </div>
            
        </div>
    );
};

export default StoryDetails;