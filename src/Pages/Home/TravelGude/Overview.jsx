import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Overview = () => {
   
    return (
        <section className="mt-12">
            <div className='px-6'>
                <iframe
                    className="w-full rounded-md "
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/6BdOvA_L16A?si=T5hExhd6zazeWkZ_"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    data-aos="fade-up" 
                ></iframe>
                
        
                <div
                    className="mt-8 px-4 py-6 bg-gray-100 rounded-lg shadow-lg text-center mx-auto w-3/4"
                    data-aos="fade-up" 
                >
                    <h2 className="text-2xl font-semibold mb-4">ExploreSavvy - Your Ultimate Travel Guide</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Discover the hidden gems and breathtaking locations across Bangladesh with our curated travel experiences. Whether you&apos;re an adventurer seeking thrill or a nature lover yearning for tranquility, ExploreSavvy has something for everyone. Join us on a journey to create unforgettable memories.
                    </p>
                </div>

                <div
                    className="mt-12 w-1/3 mx-auto"
                    data-aos="fade-up" 
                >
                    <Link to={"/about-us"}>
                        <button className="text-black btn-outline btn justify-center w-full mx-auto font-semibold flex items-center gap-4 text-sm md:text-xl">
                            About Us <FaCircleArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Overview;
