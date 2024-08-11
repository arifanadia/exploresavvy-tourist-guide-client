import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MeetTourGuide = () => {
    const [data, setData] = useState([]);
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        const fetchTourData = async () => {
            const res = await axiosSecure.get('/tourGuides')
            console.log(res.data);
            setData(res.data)

        }
        fetchTourData()

    }, [axiosSecure])

    return (


        <div>


            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                className="mySwiper "
            >


                {
                    data.map(guide =>
                        <SwiperSlide key={guide._id} >
                            <Link to={`/tour-guide-details/${guide._id}`}>
                                <div className="bg-gray-100 rounded-xl relative w-72 h-80 mx-auto md:mx-0 mt-12">
                                    <div>
                                        <img className=" w-full h-[200px] rounded-t-xl" src={guide.photo} alt="tour guide image" />
                                    </div>
                                    <div className="rounded-b-xl flex gap-4 p-6 text-2xl text-center justify-center mt-8 ">
                                        <p className="p-1 rounded-full bg-gray-50  border border-gray-100"><FaFacebook /></p>
                                        <p className="p-1 rounded-full bg-gray-50  border border-gray-100"><FaTwitter /></p>
                                        <p className="p-1 rounded-full bg-gray-50  border border-gray-100"><FaYoutube /></p>
                                        <p className="p-1 rounded-full bg-gray-50  border border-gray-100"><FaInstagram /></p>

                                    </div>
                                    <div className="absolute right-2 text-gray-50 left-2 rounded-xl text-center bottom-20 bg-gray-900 p-2">
                                        <h3 className="text-xl font-semibold font-maven mt-2">{guide.name}</h3>
                                        <p className="my-2">Tour Guide</p>

                                    </div>
                                </div>
                            </Link>


                        </SwiperSlide >

                    )

                }
            </Swiper >

        </div>


    );
};

export default MeetTourGuide;