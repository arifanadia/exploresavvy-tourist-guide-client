import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and toggle glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setLoading(true);
      try {
        await logOut();
        alert("Successfully logged out.");
      } catch (error) {
        console.error("Logout failed: ", error);
        alert("Logout failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { key: "home", label: "Home", href: "/" },
    { key: "about", label: "All Packages", href: "/all-packages/Adventure" },
    { key: "community", label: "Community", href: "/community" },
    { key: "blogs", label: "Blogs", href: "/blogs" },
    { key: "contact", label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div
      className={`navbar fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white bg-opacity-40 backdrop-blur-md text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <button
                className="btn btn-ghost btn-circle float-right"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <AiOutlineClose className="text-black" />
              </button>
            </li>
            {navLinks.map((link) => (
              <li key={link.key}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow font-bold"
                      : "text-black hover:text-yellow-400 hover:underline"
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">
          <img className="lg:w-24 w-16 mx-auto" src={"/assets/icons/logo.png"} alt="logo" />
          <h2 className="text-yellow-400 font-maven font-bold lg:text-2xl">ExploreSavvy</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <NavLink
              to={link.href}
              key={link.key}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold mx-6"
                  : "text-white hover:text-yellow hover:underline mx-6"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end text-black">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>{user.displayName}</a>
              </li>
              <li>
                <a>{user.email}</a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li onClick={handleLogOut}>
                <a>
                  {loading ? "Logging out..." : "Logout"}
                  <HiOutlineArrowRightOnRectangle className="text-red-700 ml-2" />
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="transition-all ease-out border-yellow-400 border bg-transparent hover:border-4 rounded-md px-6 py-2 text-white">
                Login
              </button>
            </Link>
          </div>
        )}
        <button
          id="search"
          className="btn btn-ghost btn-circle text-white"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
