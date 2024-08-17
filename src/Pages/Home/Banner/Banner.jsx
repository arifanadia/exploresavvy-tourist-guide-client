import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import banner1 from '../../../assets/home/banner1.png'
import banner2 from '../../../assets/home/banner2.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='flex-col-reverse flex md:flex-row  items-center bg-gray-50 gap-8 lg:py-24 py-20'>
            <div className='md:w-1/3'>
                <img className='w-3/4 md:w-full mx-auto' src={banner1} alt="" />

            </div>
            <div className='text-center mt-14 lg:mt-0 '>
                <h1 className="lg:text-4xl text-3xl text-black font-semibold  font-maven">Travel memories <br /> you&apos;ll never forget</h1>
                <h3 className="lg:text-2xl text-yellow font-satisfy my-4">Dive into Bangladesh&apos;s nature beauty </h3>
                <div className="flex justify-center  gap-4 mx-auto w-full mt-12">
                    <Link to="/all-packages/Adventure">
                        <button
                            className="btn text-black flex gap-3 lg:mx-0 mx-auto items-center">
                            ___EXplore With Us<FaArrowUpRightFromSquare className="text-yellow" /> </button>
                    </Link>
                    <Link to="/blogs">
                        <button
                            className="btn bg-black text-white flex gap-3 lg:mx-0 mx-auto items-center">
                            __Read Blogs <FaArrowUpRightFromSquare className="text-yellow" /> </button>
                    </Link>

                </div>

            </div>
            <div className='md:w-1/3 mt-10 hidden md:block'>
                <img src={banner2} alt="" />
            </div>

        </div>
    );
};

export default Banner;