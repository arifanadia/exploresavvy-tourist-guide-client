import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const MeetTourGuide = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('TourGuide.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
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
             
                modules={[Pagination,Navigation]}
                className="mySwiper "
            >


                {
                    data.map(item =>
                        <SwiperSlide key={item.id} >
                            <div className="w-full max-w-md mx-auto px-8 py-4 mt-16 bg-gray-900 rounded-lg shadow-lg ">
                                <div className="flex justify-center -mt-16 md:justify-end">
                                    <img className="object-cover w-28 h-28 border-2 border-yellow rounded-full " alt="Testimonial avatar" src={item.photo} />
                                </div>

                                <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{item.name}</h2>

                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{item.bio}</p>

                                <div className="flex justify-end mt-4">
                                    <button className="btn bg-yellow text-black">See Details</button>
                                </div>
                            </div>


                        </SwiperSlide >

                    )

                }






            </Swiper >

        </div>

    );
};

export default MeetTourGuide;