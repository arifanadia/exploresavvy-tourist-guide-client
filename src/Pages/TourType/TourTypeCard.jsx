import { Link } from "react-router-dom";


const TourTypeCard = ({ img, type }) => {
    return (
        <Link to={`/all-packages/${type}`}>
            <div
                className="mt-6"
                data-aos="fade-left" // AOS animation attribute
                data-aos-duration="1000" // Duration of the animation
            >
                <img className="w-44 h-44 mx-auto" src={img} alt={type} />

                <div className="mt-4 px-6 text-center">
                    <h3 className="lg:text-2xl font-satisfy">{type}</h3>
                </div>
            </div>
        </Link>
    );
};

export default TourTypeCard;
