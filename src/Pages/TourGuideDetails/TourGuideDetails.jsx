import { useLoaderData } from "react-router-dom";
import bg from '../../assets/guide details/guidedetails.jpg'
import useAuth from '../../Hooks/useAuth'
import { FaStar } from "react-icons/fa6";


const TourGuideDetails = () => {
    const { user } = useAuth()
    const guideDetails = useLoaderData();
    return (
        <div>
            <div className="bg-no-repeat h-[300px] bg-cover bg-center text-center p-8"
                style={{
                    backgroundImage: `url(${bg})`
                }}>
                <div className="bg-gray-50 border-gray-100 border rounded-xl bg-opacity-90 max-w-7xl mx-auto p-12 flex gap-8 justify-center items-center">
                    <img className="w-36 h-36 shadow-2xl rounded-xl" src={guideDetails.photo} alt="" />
                    <div>
                        <h1 className="font-maven text-4xl text-black font-semibold "> Meet Your Expert Guide: <span className="text-yellow">{guideDetails.name}</span> </h1>
                        <p className="text-2xl font-satisfy  text-black my-4">Hey,{user?.displayName} I&apos;m {guideDetails.name}</p>
                    </div>
                </div>


            </div>
            <div className="md:flex justify-between text-white my-12 max-w-7xl mx-auto gap-2">
                <div className="font-maven bg-gray-900 w-3/4  rounded-xl p-12 shadow-xl  ">
                    <h2 className="text-2xl font-semibold uppercase">   About <span className="text-yellow">{guideDetails.name} </span>:</h2>
                    <div className=" border-t border-t-yellow w-32 my-4" />
                    <p className="my-4 text-lg"><span className="font-semibold">Bio :</span> {guideDetails.bio}</p>
                    <p className="my-4 text-xl"><span className="font-semibold ">Languages : </span>
                        <div className=" border-t border-t-yellow w-32 my-4" />
                        <ul className="list-disc ml-5 flex items-center gap-10">
                            {
                                guideDetails.languages.map((lang, index) =>
                                    <li key={index}>{lang}</li>

                                )
                            }
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold uppercase">  Experiences:</h2>
                    <div className=" border-t border-t-yellow w-32 my-4" />
                    <div>
                        {
                            guideDetails.experiences.map((experience, index) =>
                                <div key={index} className="mt-6">
                                    <h3 className="text-xl font-semibold">{experience.title}:</h3>
                                    <div className="border-x-2 border-x-yellow rounded-xl px-8 ">
                                        <h3 className=" my-4 text-lg font-medium">Description :</h3>
                                        <p className="">{experience.description}</p>
                                        <div className="bg-white text-black p-3 rounded-xl border-2 border-gray-100 mt-4 w-3/4">
                                            <h3 className="my-4 font-medium">Highlights :</h3>

                                            {
                                                experience.highlights.map((light, index) =>
                                                    <div key={index} className="flex items-center gap-3">
                                                        <p>{index + 1}.</p>
                                                        <p>{light}</p>
                                                    </div>

                                                )
                                            }
                                        </div>
                                    </div>


                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="bg-gray-900 w-1/3 h-[800px] rounded-xl p-8">
                    <h3 className="text-xl text-center "> Review : <span className="text-yellow"> ({guideDetails.reviews.length}) Review</span></h3>
                    <div className=" border-t border-t-yellow w-44 mx-auto  my-4" />
                    <h4 className="text-2xl font-semibold my-4 text-center"> {guideDetails.name} clients Review </h4>
                    <div className=" border-t border-t-yellow w-44 mx-auto my-4" />
                    <div>
                        {
                            guideDetails.reviews.map((item,index) =>
                            <div key={index}>
                                    <div className="flex flex-col border border-yellow p-4 justify-center mt-6 rounded-xl">
                                            <img className="w-24 h-24 mx-auto rounded-full" src={item.img} alt="" />
                                            <div className="mt-4 text-center">
                                                <h3 className=""> {item.reviewer}</h3>
                                                <p className="flex justify-center gap-3 items-center my-3"><FaStar className="text-orange-400"></FaStar>{item.rating}</p>
                                                <p>{item.comment}</p>
                                            </div>
                                        </div>

                            </div> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGuideDetails;