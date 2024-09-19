import PageHeader from "../../Component/PageHeader";
import useBlogs from "../../Hooks/useBlogs";
import bg from '../../assets/blog/blogs.jpeg';

const Blogs = () => {
    const [blogs] = useBlogs();
    return (
        <div>
            <PageHeader title={'Beautiful Travel Journeys'} bg={bg} />
            <div className="max-w-7xl mx-auto px-4 mt-12 flex flex-col lg:flex-row gap-8">

                {/* Sidebar */}
                <aside 
                    className="lg:w-1/4 bg-white rounded-lg shadow-lg p-6 h-min"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Categories</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><a href="#" className="hover:text-blue-600">Travel Tips</a></li>
                            <li><a href="#" className="hover:text-blue-600">Destination Guides</a></li>
                            <li><a href="#" className="hover:text-blue-600">Adventure</a></li>
                            <li><a href="#" className="hover:text-blue-600">Food & Drink</a></li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Recent Posts</h4>
                        <ul className="text-gray-700">
                            {blogs.slice(0, 5).map(blog => (
                                <li key={blog._id} className="mb-2">
                                    <a href={`/blogs/${blog._id}`} className="hover:text-blue-600">{blog.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-2">Popular Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium">Travel</span>
                            <span className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium">Adventure</span>
                            <span className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium">Food</span>
                            <span className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium">Culture</span>
                        </div>
                    </div>
                </aside>

                <div className="lg:w-3/4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogs.map(blog => (
                            <div
                                key={blog._id}
                                className="bg-white rounded-xl border border-gray-200 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <img className="w-full h-64 object-cover rounded-t-xl" src={blog.image} alt={blog.title} />
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4 text-gray-600">
                                        <p className="text-sm">{blog.date}</p>
                                        <div className="flex items-center gap-2">
                                            <img className="w-8 h-8 rounded-full" src={blog.author_photo} alt={blog.author} />
                                            <h5 className="text-sm font-semibold">{blog.author}</h5>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 text-blue-600">{blog.title}</h4>
                                    <p className="text-gray-700 mb-4">{blog.content[0].text.substring(0, 100)}...</p>
                                    <a href={`/blogs/${blog._id}`} className="text-blue-600 hover:underline font-medium">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
