import { useLoaderData } from "react-router-dom";
import bg from '../../assets/guide details/guidedetails.jpg'
import useAuth from '../../Hooks/useAuth'
import { FaStar } from "react-icons/fa6";

const TourGuideDetails = () => {
    const { user } = useAuth();
    const guideDetails = useLoaderData();

    return (
        <div className="bg-gray-100">
            {/* Header Section */}
            <div className="bg-no-repeat h-[300px] bg-cover bg-center text-center p-6 md:p-8 lg:p-12"
                style={{ backgroundImage: `url(${bg})` }}>
                <div className="bg-gray-50 border-gray-100 border rounded-xl bg-opacity-90 max-w-7xl mx-auto p-6 md:p-8 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
                    <img className="w-32 h-32 md:w-36 md:h-36 shadow-2xl rounded-xl" src={guideDetails.photo} alt="" />
                    <div>
                        <h1 className="font-maven text-xl md:text-2xl lg:text-4xl text-black font-semibold">
                            Meet Your Expert Guide: <span className="text-yellow">{guideDetails.name}</span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-satisfy text-black my-4">
                            Hey, {user?.displayName}! I&apos;m {guideDetails.name}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="lg:flex lg:justify-between text-white my-6 md:my-8 lg:my-12 max-w-7xl mx-auto gap-6 md:gap-8 lg:gap-12">
                <div className="font-maven bg-gray-900 w-full rounded-xl p-6 md:p-8 lg:p-12 shadow-xl">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase">
                        About <span className="text-yellow">{guideDetails.name}</span>:
                    </h2>
                    <div className="border-t border-t-yellow w-24 md:w-32 lg:w-40 my-4" />
                    <p className="my-4 text-base md:text-lg lg:text-lg">
                        <span className="font-semibold">Bio:</span> {guideDetails.bio}
                    </p>
                    <p className="my-4 text-base md:text-lg lg:text-xl">
                        <span className="font-semibold">Languages:</span>
                        <div className="border-t border-t-yellow w-24 md:w-32 lg:w-40 my-4" />
                        <ul className="list-disc ml-5 flex flex-wrap gap-8">
                            {guideDetails.languages.map((lang, index) =>
                                <li key={index}>{lang}</li>
                            )}
                        </ul>
                    </p>

                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase">Experiences:</h2>
                    <div className="border-t border-t-yellow w-24 md:w-32 lg:w-40 my-4" />
                    <div className="">
                        {guideDetails.experiences.map((experience, index) =>
                            <div key={index} className="mt-6">
                                <h3 className="text-lg md:text-xl lg:text-xl font-semibold">{experience.title}:</h3>
                                <div className="border-x-2 border-x-yellow rounded-xl px-4 md:px-6 lg:px-8 py-4 mt-6">
                                    <h3 className="my-4 text-base md:text-lg lg:text-lg font-medium">Description:</h3>
                                    <p>{experience.description}</p>
                                    <div className="bg-white text-black p-3 rounded-xl border-2 border-gray-100 mt-4">
                                        <h3 className="my-4 font-medium">Highlights:</h3>
                                        {experience.highlights.map((light, index) =>
                                            <div key={index} className="flex items-center gap-2 md:gap-3">
                                                <p>{index + 1}.</p>
                                                <p>{light}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-white text-black lg:w-2/4 mt-8 md:mt-0 rounded-xl p-6 md:p-8 lg:p-8">
                    <h3 className="text-lg md:text-xl lg:text-2xl text-center">
                        Review: <span className="text-yellow">({guideDetails.reviews.length}) Review</span>
                    </h3>
                    <div className="border-t border-t-yellow w-24 md:w-32 lg:w-40 mx-auto my-4" />
                    <h4 className="text-xl md:text-2xl lg:text-2xl font-semibold my-4 text-center">
                        {guideDetails.name} Clients Review
                    </h4>
                    <div className="border-t border-t-yellow w-24 md:w-32 lg:w-40 mx-auto my-4" />
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-1 gap-4">
                        {guideDetails.reviews.map((item, index) =>
                            <div key={index} className="flex flex-col border border-yellow p-4 mt-6 rounded-xl">
                                <img className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full" src={item.img} alt="" />
                                <div className="mt-4 text-center">
                                    <h3>{item.reviewer}</h3>
                                    <p className="flex justify-center gap-2 md:gap-3 items-center my-3">
                                        <FaStar className="text-orange-400" />{item.rating}
                                    </p>
                                    <p>{item.comment}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGuideDetails;
