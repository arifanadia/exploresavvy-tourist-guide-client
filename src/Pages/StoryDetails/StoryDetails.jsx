import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { FacebookIcon, FacebookShareButton } from "react-share";

const StoryDetails = () => {
    const storyDetails = useLoaderData();
    const shareUrl = window.location.href;

    return (
        <div>
            <div 
                className="bg-no-repeat p-6 sm:p-12  md:p-36 bg-cover bg-center text-center"
                style={{
                    backgroundImage: `linear-gradient(
                    #0f0c29ED,#302b6336),url(${storyDetails.image})`
                }}
            >
                <h1 className="text-2xl text-center font-maven font-semibold text-white mb-16 md:mb-0">
                    {storyDetails.title}
                </h1>
            </div>
            <div className="-mt-20 sm:-mt-24">
                <img 
                    className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto rounded-full border-4 border-gray-200" 
                    src={storyDetails.tourist_photo} 
                    alt="" 
                />
            </div>
            <div className="max-auto text-center my-4 sm:my-6">
                <h3 className="font-satisfy font-semibold text-lg sm:text-xl">
                    By {storyDetails.tourist_name}
                </h3>
                <p className="my-1 sm:my-2">Travel Story Writer</p>
                <p className="my-1 sm:my-2">
                    {storyDetails.start_date} - {storyDetails.end_date}
                </p>
                <p className="my-1 sm:my-2">{storyDetails.destination}</p>
                <div className="border-t border-t-yellow my-2 sm:my-3 w-3/4 sm:w-1/2 mx-auto"></div>
                <div className="flex justify-around sm:justify-between w-4/5 sm:w-3/5 mx-auto my-3 sm:my-4 text-lg sm:text-xl">
                    <p className="flex gap-2 items-center">
                        <MdOutlineRemoveRedEye /> 2050
                    </p>
                    <button>
                        <FacebookShareButton url={shareUrl}>
                            <FacebookIcon size={30} sm:size={40} round />
                        </FacebookShareButton>
                    </button>
                    <p className="flex gap-2 items-center">
                        <IoChatbubbleOutline /> 150
                    </p>
                </div>
            </div>
            <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-0">
                <h3 className="text-lg sm:text-xl font-maven">
                    The Amazing Story :
                </h3>
                <div className="border-t border-t-yellow my-2 sm:my-3 w-40 sm:w-52"></div>
                <p className="text-base sm:text-lg my-2 sm:my-3">
                    History of {storyDetails.destination}
                </p>
                <p>{storyDetails.description.history}</p>
                <p>{storyDetails.description.geography}</p>
                <p>{storyDetails.description.flora_and_fauna}</p>
                <p>{storyDetails.description.activities}</p>
                <p>{storyDetails.description.conservation}</p>
            </div>
        </div>
    );
};

export default StoryDetails;
