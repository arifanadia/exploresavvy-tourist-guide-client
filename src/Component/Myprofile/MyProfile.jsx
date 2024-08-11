import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MyProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()

    const { data: users = [], } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users/${user?.email}`);
            return data;
        }
    });
    return (
        <div>
            <h2 className="font-maven text-2xl font-semibold">{users.role} Details .</h2>
            <div className="border-t border-yellow my-2 w-42"></div>
            <div className="flex flex-col-reverse md:flex-row gap-12 justify-between bg-gray-50 rounded-xl my-10">
                <div className="p-8 font-satisfy">
                    <h1 className="text-3xl  ">Name :{users.name}</h1>
                    <h4 className="text-xl my-4"> {users.role}</h4>
                    <div className="border-t border-yellow my-2 w-42"></div>
                    <p className="my-6">Bio :  i&apos;m a dedicated and experienced admin with over 10 years of expertise in managing complex systems and ensuring smooth operations within various organizational environments. With a strong background in information technology and administrative management, John has consistently demonstrated exceptional problem-solving skills and a keen attention to detail.{users.role}</p>

                </div>


                <img className="w-64 h-64 rounded-xl mx-auto md:mx-0 md:rounded-r-xl" src={users.photo || user?.photoURL} alt="" />
            </div>
            <form className='max-w-3xl mx-auto'>
                <div className='flex items-center gap-3'>
                    <div className='form-control w-full'>
                        <div className="label">
                            <span className="label-text">Name</span>

                        </div>
                        <input type="text" placeholder="Type here" defaultValue={users.name} name='tripTitle'
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email</span>

                        </div>
                        <input type="text" placeholder="Type here" defaultValue={users.email} name='tripTitle'
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Date of Birth</span>

                        </div>
                        <input type="date" placeholder="Type here" name='location'
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Profession</span>

                        </div>
                        <input type="text" placeholder="e.g web developer" name='price'
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Package Description</span>
                    </div>
                    <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </label>
                <div className='flex gap-3'>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Change Image</span>

                        </div>
                        <input type="file" name='mainImage' className="file-input file-input-bordered w-full " />

                    </div>

                </div>
                {/* trip plan */}

                <button type='submit ' className='btn my-6 btn-outline text-white bg-black w-full'>Update Profile</button>

            </form>

        </div>
    );
};

export default MyProfile;