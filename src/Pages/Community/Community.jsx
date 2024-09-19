import { useEffect, useState } from 'react';
import PageHeader from "../../Component/PageHeader";
import bg from "../../assets/community/travelcomun.jpg";
import { FaUserCircle, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCircleArrowRight } from 'react-icons/fa6';
import useBlogs from '../../Hooks/useBlogs';

const Community = () => {
    const [members, setMembers] = useState([]);
    const [blogs] = useBlogs();


    const fetchCommunityMembers = async () => {
        const response = await fetch('communityMembers.json');
        const data = await response.json();
        return data;
    };


    useEffect(() => {
        const getMembers = async () => {
            const data = await fetchCommunityMembers();
            setMembers(data);
        };
        getMembers();
    }, []);

    return (
        <section className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <PageHeader bg={bg} title="Dive into the World of Travelers" />

            {/* Community Introduction */}
            <section className="text-center py-12 px-4 md:px-8">
                <h1 className="text-4xl font-semibold mb-4" data-aos="fade-down">Join Our Vibrant Community</h1>
                <p className="text-lg text-gray-600 leading-relaxed" data-aos="fade-up">
                    Connect with fellow travelers, share experiences, and explore a world of exciting discussions and stories.
                </p>
                <button className='btn-ghost btn px-6 bg-black text-white mt-2 '>Join Our Community</button>
            </section>

            {/* Community Features */}
            <section className="px-4 md:px-8 py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center" data-aos="fade-up">
                        <h2 className="text-xl font-semibold mb-2">Discussion Board</h2>
                        <p className="text-gray-700 mb-4 text-center">
                            Engage in conversations about travel tips, destinations, and more. Share your knowledge and learn from others.
                        </p>
                        <Link to="/discussion-board">
                            <button className="btn bg-blue-500 text-white flex items-center gap-2">
                                Join the Discussion <FaCircleArrowRight />
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center" data-aos="fade-up">
                        <h2 className="text-xl font-semibold mb-2">Community Stories</h2>
                        <p className="text-gray-700 mb-4 text-center">
                            Read inspiring travel stories and share your own adventures. Discover new destinations through others &apos; experiences.
                        </p>
                        <Link to="/community-stories">
                            <button className="btn bg-green-500 text-white flex items-center gap-2">
                                Read Stories <FaCircleArrowRight />
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center" data-aos="fade-up">
                        <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
                        <p className="text-gray-700 mb-4 text-center">
                            Stay informed about upcoming travel meetups, webinars, and community events. Join us for exciting gatherings.
                        </p>
                        <Link to="/events">
                            <button className="btn bg-red-500 text-white flex items-center gap-2">
                                See Events <FaCircleArrowRight />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-4 md:px-8 py-12 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center mb-8" data-aos="fade-down">
                    Meet Our Community Members
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-6 text-center w-64"
                            data-aos="fade-up"
                        >
                            <div
                                className={`relative bg-gradient-to-r ${member.iconColor} rounded-full p-4 mb-4`}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaUserCircle className="text-6xl text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-12">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {blogs.length > 0 ? (
                        blogs.slice(0, 4).map((blog) => (
                            <div key={blog._id} className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-1/3" data-aos="fade-up">
                                <div className="flex items-center mb-4">
                                    <img src={blog.author_photo} alt={blog.author} className="w-12 h-12 rounded-full border-2 border-gray-200" />
                                    <div className="ml-4">
                                        <h3 className="text-xl font-semibold">{blog.author}</h3>
                                        <p className="text-gray-500 text-sm">{blog.date}</p>
                                    </div>
                                </div>
                                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                                <h4 className="text-lg font-semibold mb-2">{blog.title}</h4>
                                <a href={`/posts/${blog._id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Read More</a>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-700">No posts found.</p>
                    )}
                </div>
                <div className="text-center mt-6">
                    <a href="/blogs" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">View All Blogs</a>
                </div>
            </section>



            {/* Create a Post Section */}
            <section className="px-4 md:px-8 py-12 bg-gray-50">
                <h2 className="text-3xl font-semibold text-center mb-8" data-aos="fade-down">Contribute to the Community</h2>
                <div className="text-center">
                    <Link to="/create-post">
                        <button className="btn bg-blue-500 text-white flex items-center gap-2 mx-auto">
                            Create a Post <FaPlusCircle />
                        </button>
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Community;
