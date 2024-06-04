import { useEffect, useState } from "react";


const MeetTourGuide = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('TourGuide.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
console.log(data);
    return (
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {
                data.map(item =>
                    <div key={item.id} className="w-full max-w-md mx-auto px-8 py-4 mt-16 bg-gray-900 rounded-lg shadow-lg ">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-28 h-28 border-2 border-yellow rounded-full " alt="Testimonial avatar" src={item.photo} />
                        </div>

                        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{item.name}</h2>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{item.bio}</p>

                        <div className="flex justify-end mt-4">
                           <button className="btn bg-yellow text-black">See Details</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MeetTourGuide;