import bg from '../../assets/home/tourTypebg.jpg'



const TourTypeCard = ({ img, type }) => {


    return (
        <div 
        style={{backgroundImage : `linear-gradient(#E2E2E2ED,#C9D6FF36),url(${bg})`}} className='bg-no-repeat bg-cover bg-center smy-16 rounded-full bg-gray-900 border-yellow  shadow-xl py-6  md:py-12 w-[150px] md:w-[220px] md:h-[220px]'>
            <div className="md:w-24 md:h-24 w-16 h-16 mx-auto p-4 bg-white border-2 border-yellow md:p-6 rounded-full">
                <img className='' src={img} alt="" />

            </div>
            <div className="mt-4 px-6 text-left md:text-center">
                <h3 className="lg:text-2xl font-satisfy">{type}</h3>
               
            </div>
        </div >
    );
};

export default TourTypeCard;
