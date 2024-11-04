
import TourType from "../../TourType/TourType";
import Banner from "../Banner/Banner";
import TravelGuide from "../TravelGude/TravelGuide";
import TravelStory from "../TravelStory/TravelStory";


const Home = () => {
    return (
        <div className="white "
       >
            <Banner></Banner>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
            <TravelStory></TravelStory>
            
   
            
        </div>
    );
};

export default Home;