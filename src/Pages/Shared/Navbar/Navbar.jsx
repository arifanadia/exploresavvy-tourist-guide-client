import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo.png'
import useAuth from "../../../Hooks/useAuth";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";


const Navbar = () => {
    const {user,logOut} = useAuth();

    const handleLogOut = async() =>{
        await logOut ()
    }



    const navOptions =
        <>
            <li className="active:text-yellow"><Link to="/">Home</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-80 bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/'>
                    <img className="lg:w-24 w-16 mx-auto" src={logo} alt="logo" />
                    <h2 className="text-yellow font-maven font-bold lg:text-2xl ">ExploreSavvy</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end text-black">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><a> {user.displayName} </a> </li>
                                <li> <a>{user?.email} </a> </li>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li onClick={handleLogOut}><a>Logout<HiOutlineArrowRightOnRectangle className="text-red-700" /></a></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link to='/register'><button>Sign Up</button></Link>
                            <span className="mx-3">|</span>
                            <Link to='/login'><button > Login </button></Link>
                        </div>
                }
                <button id="search" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>


            </div>
        </div>
    );
};

export default Navbar;