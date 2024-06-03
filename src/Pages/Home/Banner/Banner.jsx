import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import banner1 from '../../../assets/home/banner1.png'
import banner2 from '../../../assets/home/banner2.png'
const Banner = () => {
    return (
        <div className='flex items-center bg-gray-50 gap-8'>
            <div className='w-1/3'>
                <img src={banner1} alt="" />

            </div>
            <div>
                <h1 className="lg:text-5xl text-3xl text-black font-semibold  font-maven">Travel memories <br /> you&apos;ll never forget</h1>
                <h3 className="lg:text-2xl text-yellow font-satisfy my-4">Dive into Bangladesh&apos;s nature beauty </h3>
                <div className="flex gap-4 mx-auto w-full mt-12">
                    <button
                        className="btn text-black flex gap-3 lg:mx-0 mx-auto items-center">
                        ___EXplore with Our Tour guide <FaArrowUpRightFromSquare className="text-yellow" /> </button>
                    <button
                        className="btn bg-black text-white flex gap-3 lg:mx-0 mx-auto items-center">
                        ___Read Blogs <FaArrowUpRightFromSquare className="text-yellow" /> </button>

                </div>

            </div>
            <div className='w-1/3 mt-10'>
                <img src={banner2} alt="" />
            </div>

        </div>
    );
};

export default Banner;