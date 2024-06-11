import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import useTouristStories from '../../../Hooks/useTouristStories';
const TravelStoryCard = () => {

    const [touristStories] = useTouristStories()
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
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >

                {
                    touristStories.map(item =>
                        <SwiperSlide key={item.id} >
                            <div className="group rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div className="h-96 w-full">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={item.image} alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-maven text-3xl font-bold text-white">{item.tourist_name}</h1>
                                    <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.start_date}</p>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.title}</p>
                                    <Link to={`/tourist-stories-details/${item._id}`}>
                                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Discover More</button>
                                    </Link>
                                </div>
                            </div>



                        </SwiperSlide >

                    )
                }




            </Swiper >

        </div>
    );
};

export default TravelStoryCard;