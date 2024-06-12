import PageHeader from "../../Component/PageHeader";
import useBlogs from "../../Hooks/useBlogs";
import useTouristStories from "../../Hooks/useTouristStories";
import bg from '../../assets/all stories/storiesall.jpg'
import type2 from '../../assets/blog/1_a92GOsmtF8jaXFduhWLPgw.jpg'
import type3 from '../../assets/blog/Best-Places-to-Travel-this-Winter-Season-Sundarbans.jpg'
import type4 from '../../assets/blog/near-watch-tower.jpg'
import type5 from '../../assets/blog/sundarban.jpg'
import type6 from '../../assets/blog/Train20170619140222.jpg'
import { Link } from "react-router-dom";


const AllStories = () => {
    const [touristStories] = useTouristStories();
    const [blogs] = useBlogs()
    return (
        <div>
            <PageHeader title={'Travel Stories are Always Amazing'} bg={bg}></PageHeader>
            <div className="md:flex gap-8 max-w-7xl mx-auto my-12">
                <div className="w-1/3">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="my-8">
                        <h1 className="text-xl font-satisfy font-semibold">Tour Types</h1>
                        <p className="text-xl font-semibold my-2 p-6 bg-no-repeat bg-cover text-white rounded-xl text-center " style={{ backgroundImage: `url(${type2})` }}>Adventures</p>
                        <p className="text-xl font-semibold my-2 p-6 bg-no-repeat bg-cover text-white rounded-xl text-center" style={{ backgroundImage: `url(${type3})` }}>Wildlife</p>
                        <p className="text-xl font-semibold my-2 p-6 bg-no-repeat bg-cover text-white rounded-xl text-center" style={{ backgroundImage: `url(${type4})` }}>Cultural</p>
                        <p className="text-xl font-semibold my-2 p-6 bg-no-repeat bg-cover text-white rounded-xl text-center" style={{ backgroundImage: `url(${type5})` }}>Food</p>
                        <p className="text-xl font-semibold my-2 p-6 bg-no-repeat bg-cover text-white rounded-xl text-center" style={{ backgroundImage: `url(${type6})` }}>Relaxation</p>
                        <p className="text-xl font-semibold my-2 p-6 bg-no-repeat bg-cover text-white rounded-xl text-center" style={{ backgroundImage: `url(${bg})` }}>Historical</p>

                    </div>
                    <div className="border border-gray-100 rounded-2xl bg-gray-50 p-6 space-y-4">
                        <h1 className="text-xl font-satisfy font-semibold">Blogs</h1>
                        {
                            blogs.map(blog =>
                                <div key={blog._id} className="flex gap-3 items-center mt-4">
                                    <img className="w-20 h-20 rounded-xl" src={blog.image} alt="" />
                                    <div>
                                        <h5 className="font-semibold font-satisfy">{blog.title}</h5>
                                        <p className="my-3">{blog.date}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
                <div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {
                            touristStories.map(stories =>
                                <Link key={stories._id} to={`/tourist-stories-details/${stories._id}`}>
                                    <div className="rounded-xl border border-gray-200 w-96 ">
                                        <img className="md:w-96 h-64" src={stories.image} alt="" />
                                        <div className="p-6">
                                            <div className="flex items-end my-2">
                                                <p>{stories.start_date}-</p>
                                                <p>{stories.end_date}</p>

                                            </div>
                                            <div className="flex items-center gap-3 my-2">
                                                <img className="w-12 h-12 rounded-full" src={stories.tourist_photo} alt="" />
                                                <h5>{stories.tourist_name}</h5>

                                            </div>

                                            <h4 className="font-satisfy text-2xl m">{stories.title}</h4>
                                            <p className="my-4">{stories.description.history}....</p>
                                        </div>

                                    </div>
                                </Link>
                            )
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AllStories;