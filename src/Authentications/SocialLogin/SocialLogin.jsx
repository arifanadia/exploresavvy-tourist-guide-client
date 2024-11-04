import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { signInWithGoogle, signInWithGitHub } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSocialSignIn = async (socialProvider) => {
        try {
            const response = await socialProvider();
            const socialUser = response.user; 

            const userInfo = {
                name: socialUser?.displayName,
                photo: socialUser?.photoURL,
                email: socialUser?.email,
                role: 'tourist',
                status: 'Verified'
            };

            const result = await axiosPublic.put('/users', userInfo);

            if (result.status === 200) {
                toast.success('Sign in successfully!');
                navigate('/', { replace: true });
            } else {
                toast.error('Failed to sign in');
            }
        } catch (err) {
            console.error('Error during sign-in:', err);
            toast.error('An error occurred during sign-in. Please try again.');
        }
    };

    return (
        <div>
            <p className="text-center">---- or connect with Social Login ----</p>
            <div className="lg:flex my-6 gap-3 justify-center">
                <button
                    onClick={() => handleSocialSignIn(signInWithGoogle)}
                    className="border-2 sm:px-6 px-3 py-2 mx-auto lg:mx-0 border-primaryColor rounded-lg flex justify-center items-center gap-4"
                >
                    <FcGoogle className="sm:text-2xl" />
                    <span className="font-inter font-bold">Sign In With Google</span>
                </button>
                <button
                    onClick={() => handleSocialSignIn(signInWithGitHub)}
                    className="border-2 my-4 lg:my-0 mx-auto lg:mx-0 sm:px-6 px-3 py-2 border-primaryColor rounded-lg flex justify-center items-center gap-4"
                >
                    <FaGithub className="sm:text-2xl" />
                    <span className="font-inter font-bold">Sign In With GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
