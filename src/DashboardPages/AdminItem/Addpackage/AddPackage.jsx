import toast from 'react-hot-toast';
import SectionTitle from '../../../Component/SectionTitle'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddPackage = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const handleAddPackage = async (e) => {
        e.preventDefault();
        const form = e.target
        const tourType = form.tourType.value
        const tripTitle = form.tripTitle.value
        const location = form.location.value
        const price = form.price.value
        const description = form.description.value
        const mainImage = form.mainImage.files[0]
        const images = form.images.files
        console.log(images);
        const tripPlan = [
            {
                day: form.day1.value,
                place: form.place1.value,
                activities: [form.activities1_1.value, form.activities1_2.value, form.activities1_3.value]
            },
           
            // Add more days here if needed
        ];

        const mainImageFormData = new FormData();
        mainImageFormData.append('image', mainImage);

        const { data } = await axiosPublic.post(image_hosting_api, mainImageFormData)
        console.log(data);
        const mainImageUrl = data.data.url

        const additionalImageUrls = [];
        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('image', images[i]);
            const { data: additionalImageData } = await axiosPublic.post(image_hosting_api, formData);
            additionalImageUrls.push(additionalImageData.data.url);
        }



        if (data.success) {
            const packageData = {
                tourType,
                tripTitle,
                location,
                price,
                description,
                mainImage: mainImageUrl,
                images: additionalImageUrls,
                tripPlan
            }
            console.log(packageData);
            try {
                const { data } = await axiosSecure.post('/packages', packageData)
                console.log(data);
                if (data.insertedId) {
                   toast.success('package added successfully')
                }


            }
            catch (err) {
                console.log(err.message);
            }
        }

    }


    return (
        <div className='bg-gray-50 p-12 rounded-xl'>
            <SectionTitle title={'Add packages'} subTitle={'Add new packages to the system.'} />
            <form onSubmit={handleAddPackage} className='max-w-3xl mx-auto'>
                <div className='flex items-center gap-3'>
                    <div className='form-control w-full'>
                        <div className="label">
                            <span className="label-text">Tour Type</span>

                        </div>
                        <select className="select select-bordered w-full " name="tourType">
                            <option disabled selected> select your Tour Guide </option>
                            <option>Adventure</option>
                            <option>Wildlife</option>
                            <option>Cultural</option>
                            <option>Food</option>
                            <option>Relaxation</option>
                            <option>Historical</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tour Title</span>

                        </div>
                        <input type="text" placeholder="Type here" name='tripTitle'
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Location</span>

                        </div>
                        <input type="text" placeholder="Type here" name='location'
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price</span>

                        </div>
                        <input type="number" placeholder="Type here" name='price'
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
                            <span className="label-text">Thumbnail Image</span>

                        </div>
                        <input type="file" name='mainImage' className="file-input file-input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Place Images</span>
                        </div>
                        <input type="file" name='images' className="file-input file-input-bordered w-full " multiple />

                    </div>
                </div>
                {/* trip plan */}
                <div className='mt-5'>
                    <h1 className='text-2xl font-satisfy text-center font-semibold'>Trip Plan </h1>
                       {/*plan 1 */}

                    <div name='tripPlan'>
                        <div className="label">
                            <span className="label-text">Trip Plan 1</span>
                        </div>

                        <div className=' border-2 border-yellow rounded-xl p-6' name='tripPlan'>
                         
                            <div className='flex gap-3'>
                                <div className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Day</span>

                                    </div>
                                    <input type="number" placeholder="Type here" name='day1'
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Place</span>

                                    </div>
                                    <input type="text" placeholder="Type here" name='place1'
                                        className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Activities</span>

                                </div>
                                <div className='flex gap-3' name='activities1'>
                                    <input type="text" placeholder=" Activities 1"
                                        className="input input-bordered w-full" name='activities1_1' />
                                    <input type="text" placeholder="Activities 2"
                                        className="input input-bordered w-full" name='activities1_2' />
                                    <input type="text" placeholder="Activities 3"
                                        className="input input-bordered w-full" name='activities1_3' />
                                </div>
                            </div>
                        </div>

                    </div>
                 
                </div>
                <button type='submit ' className='btn my-6 btn-outline text-white bg-black w-full'>Add package</button>

            </form>

        </div>
    );
};

export default AddPackage;