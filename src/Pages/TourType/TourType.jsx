
import SectionTitle from '../../Component/SectionTitle';
import TourTypeCard from './TourTypeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import icon1 from '../../assets/icons/landscape (1).png'
import icon2 from '../../assets/icons/duck.png'
import icon3 from '../../assets/icons/vase.png'
import icon4 from '../../assets/icons/fish.png'
import icon5 from '../../assets/icons/sunbed.png'
import icon6 from '../../assets/icons/skyscraper-building.png'
const TourType = () => {

    return (
        // <section className='bg-gray-100 h-[600px] bg-fixed bg-no-repeat bg-cover bg-center py-12'
        // style={{backgroundImage : `linear-gradient(#E2E2E2ED,#C9D6FF36),url(${bg})`}}

        // >
        <section className='bg-gray-100 py-12'>
            <SectionTitle title={'Explore Our Tour Types'}
                subTitle={'Discover a variety of tours tailored to different interests and experiences'}></SectionTitle>
            <div >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "
                >
                    <SwiperSlide  >
                        <TourTypeCard img={icon1} type={'Adventures'}
                         quote={'"Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta"'}/>
                        
                    </SwiperSlide >

                    <SwiperSlide  >
                    <TourTypeCard img={icon2} type={'Wildlife'}
                     quote={'"Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta"'}/>
                    </SwiperSlide >

                    <SwiperSlide  >
                    <TourTypeCard img={icon3} type={'Cultural'}
                    quote={'"Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta"'}/>
                    </SwiperSlide >

                    <SwiperSlide  >
                    <TourTypeCard img={icon4} type={'Food'}
                    quote={'"Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta"'}/>
                    </SwiperSlide >

                    <SwiperSlide  >
                    <TourTypeCard img={icon5} type={'Relaxation'}
                    quote={'"Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta"'}/>
                    </SwiperSlide >
                    <SwiperSlide  >
                    <TourTypeCard img={icon6} type={'Historical'}
                    quote={'"Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta"'}/>
                    </SwiperSlide >



                </Swiper >
            </div>



        </section>
    );
};

export default TourType;