import bg from '../../assets/aUTH/tourTypebg.jpg'
import png from '../../assets/aUTH/log.png'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Login = () => {
    return (
        <div className='bg-no-repeat bg-cover bg-center py-24 '
            style={{ backgroundImage: `url(${bg})` }}>


            <div className='flex flex-row-reverse  bg-gray-100 rounded-2xl items-center shadow-xl md:w-2/3 w-10/12 mx-auto '>

                <div className='w-1/2 mx-auto hidden md:block'>
                    <img className='w-3/4 mx-auto' src={png} alt="" />
                </div>

                <div className='bg-white rounded-l-xl w-full md:w-3/4  h-full'>
                    <Link to="/">
                        <button className='font-satisfy p-4 font-semibold flex items-center gap-4'>
                            <FaArrowLeftLong className='text-xl' />Back to Home</button>
                    </Link>
                    <div className='text-center font-satisfy mt-12'>
                        <h1 className='md:text-xl font-bold '>Dear user Welcome Back</h1>
                        <p className='my-4'>happy to see you</p>
                    </div>
                    <form className=' rounded-xl px-12 py-6'>

                        <div className=''>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="email" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input type="password" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <button type='submit ' className='btn my-6 btn-outline text-white bg-black w-full'>Sign Up</button>
                    </form>
                    <p className='text-center font-satisfy my-6'>Don&apos;t have an account?<Link to="/login" className='text-blue-500'>Sign up</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;