import { useLoaderData } from "react-router-dom";


const TourGuideDetails = () => {
    const guideDetails = useLoaderData()
    return (
        <div>
            <div>
                <img src={guideDetails.photo} alt="" />
            </div>

        </div>
    );
};

export default TourGuideDetails;