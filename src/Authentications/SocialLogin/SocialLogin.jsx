import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



const SocialLogin = () => {
    const { signInWithGoogle, signInWithGitHub } = useAuth()
    const navigate = useNavigate()
    const handleSocialSignIn = async (socialProvider) => {
        try {
            await socialProvider()
            toast.success('sign in Successfully')
            navigate('/')

        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="">
            <p className="text-center">---- or connect with Social Login ----</p>
            <div className="lg:flex my-6 gap-3 justify-center">
                <button onClick={() => handleSocialSignIn(signInWithGoogle)} className="border-2 sm:px-6 px-3 py-2 mx-auto lg:mx-0  border-primaryColor rounded-lg flex justify-center items-center gap-4">
                    <FcGoogle className="sm:text-2xl"></FcGoogle><span className="font-inter font-bold"> Sign In With Google</span>
                </button>
                <button onClick={() => handleSocialSignIn(signInWithGitHub)} className="border-2 my-4 lg:my-0 mx-auto lg:mx-0 sm:px-6 px-3 py-2 border-primaryColor rounded-lg flex justify-center items-center gap-4">
                    <FaGithub className="sm:text-2xl"></FaGithub> <span className="font-inter font-bold"> Sign In With Google</span>
                </button>
            </div>



        </div>
    );
};

export default SocialLogin;