import bg from '../../assets/aUTH/tourTypebg.jpg'
import png from '../../assets/aUTH/log.png'
import {  Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import useAuth from '../../Hooks/useAuth';
import { useFormik } from 'formik';
import { signUpSchema } from '../../Schemas';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const initialValues = {
    name: '',
    photo: '',
    email: '',
    password: '',
}
const Register = () => {
    const { createUser, updateUserProfile, setUser, user } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()

    const { values, handleChange, touched, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            console.log(values);
            const result = await createUser(values.email, values.password);
            console.log(result)
            try {
                await updateUserProfile(values.name, values.photo);
        
                const userInfo = {
                    name: values.name,
                    photo: values.photo,
                    email: values.email,
                    role: 'tourist',
                    status: 'Verified'
                };
        
                const { data } = await axiosPublic.put('/users', userInfo);
                console.log(data);
        
              
                    console.log('User added');
                    toast.success('Sign up successful');
                    setUser({ ...user, displayName: values.name, photoURL: values.photo });
                    navigate('/');
               
            } catch(err){
                console.log(err);
            }



        }
    })
    return (

        <div className='bg-no-repeat bg-cover bg-center py-24 '
            style={{ backgroundImage: `url(${bg})` }}>


            <div className='flex  bg-gray-100 rounded-2xl items-center shadow-xl md:w-2/3 w-10/12 mx-auto '>

                <div className='w-1/2 mx-auto hidden md:block'>
                    <Link to="/">
                        <button className='font-satisfy p-4 font-semibold flex items-center gap-4'>
                            <FaArrowLeftLong className='text-xl' />Back to Home</button>
                    </Link>
                    <img className='w-3/4 mx-auto' src={png} alt="" />
                </div>

                <div className='bg-white rounded-l-xl w-full md:w-3/4  h-full'>
                    <div className='text-center font-satisfy mt-12'>
                        <h1 className='md:text-xl font-bold '>Create your account</h1>
                        <p className='my-4'>It&apos;s free and easy</p>
                    </div>
                    <form onSubmit={handleSubmit} className=' rounded-xl px-12 pt-6'>
                        <div className=''>
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input
                                    type="text" placeholder="Your Name"
                                    name='name' value={values.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full" />
                            </div>
                            {errors.name && touched.name && <p className="text-red-600">{errors.name}</p>}
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photo</span>
                                </div>
                                <input
                                    type="url" placeholder="PhotoURL"
                                    name='photo' value={values.photo}
                                    onChange={handleChange}
                                    className="input input-bordered w-full" />
                            </div>
                            {errors.photo && touched.photo && <p className="text-red-600">{errors.photo}</p>}
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input
                                    type="email" placeholder="Your Email"
                                    name='email' value={values.email}
                                    onChange={handleChange}
                                    className="input input-bordered w-full" />
                            </div>
                            {errors.email && touched.email && <p className="text-red-600">{errors.email}</p>}
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input
                                    type="password" placeholder="Type here"
                                    name='password' value={values.password}
                                    onChange={handleChange}
                                    className="input input-bordered w-full" />
                            </div>
                            {errors.password && touched.password && <p className="text-red-600">{errors.password}</p>}
                        </div>
                        <button type='submit ' className='btn my-4 btn-outline text-white bg-black w-full'>Sign Up</button>
                    </form>
                    <p className='text-center font-satisfy my-6'>Already have an account?<Link to="/login" className='text-blue-500'>Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>




    );
};

export default Register;