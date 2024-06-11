
import PageHeader from "../../Component/PageHeader";
import useBlogs from "../../Hooks/useBlogs";
import bg from '../../assets/blog/blogs.jpeg'


const Blogs = () => {
    const [blogs] = useBlogs();
    return (
        <div>
            <PageHeader title={'Beautiful Travel Journeys'} bg={bg}></PageHeader>
            <div className="md:flex gap-8 max-w-7xl mx-auto">

                <div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {
                            blogs.map(blog =>
                                <div key={blog._id} className="rounded-xl border border-gray-200 w-96 ">
                                <img className="md:w-96 h-64" src={blog.image} alt="" />
                                <div className="p-6">
                                    <div className="flex items-end my-2">
                                        <p>{blog.date}</p>
                                        

                                    </div>
                                    <div className="flex items-center gap-3 my-2">
                                        <img className="w-12 h-12 rounded-full" src={blog.author_photo} alt="" />
                                        <h5>{blog.author}</h5>

                                    </div>

                                    <h4 className="font-satisfy text-2xl m">{blog.title}</h4>
                                    <p className="my-4">{blog.content[0].text.substring(0, 80)}....</p>
                                </div>

                            </div>
                            )
                        }
                    </div>
                    <div className="">

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blogs;