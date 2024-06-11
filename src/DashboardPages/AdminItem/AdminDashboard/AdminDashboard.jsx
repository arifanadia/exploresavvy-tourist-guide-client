import img1 from '../../../assets/dashboard/packagesbook-removebg-preview.png'
import img2 from '../../../assets/dashboard/packages-removebg-preview.png'
import img3 from '../../../assets/dashboard/guide-removebg-preview.png'
import usePackages from '../../../Hooks/usePackages';
import useBooking from '../../../Hooks/useBooking';
import useTourGuide from '../../../Hooks/useTourGuide';

const AdminDashboard = () => {
    const [packages] = usePackages();
    const [bookings] = useBooking();
    const [tourGuides] = useTourGuide();
    console.log(bookings);
    return (
        <div>
            <div className='grid grid-cols-3 gap-8'>
                <div className=' bg-gray-50 rounded-xl shadow-xl p-8'>
                    <img className='w-32 h-32 mx-auto' src={img1} alt="" />
                    <h2 className='text-xl text-center my-4 font-satisfy'>Total Booking  :({bookings.length})</h2>

                </div>
                <div className=' bg-gray-50 rounded-xl shadow-xl p-8'>
                    <img className='w-32 h-32 mx-auto' src={img2} alt="" />
                    <h2 className='text-xl text-center my-4 font-satisfy'>Total Packages :({packages.length})</h2>

                </div>
                <div className=' bg-gray-50 rounded-xl shadow-xl p-8'>
                    <img className='w-32 h-32 mx-auto' src={img3} alt="" />
                    <h2 className='text-xl text-center my-4 font-satisfy'>Total Tour Guides({tourGuides.length})</h2>

                </div>
            </div>
            
        </div>
    );
};

export default AdminDashboard;