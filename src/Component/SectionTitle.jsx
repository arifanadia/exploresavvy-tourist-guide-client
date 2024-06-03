import { MdExplore } from "react-icons/md";


const SectionTitle = ({ title, subTitle, }) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl text-center lg:text-4xl font-maven font-semibold text-black ">{title}</h1>
            <h3 className="font-satisfy  my-4 text-xl lg:text-2xl">{subTitle}</h3>
            <p className="text-black flex justify-center items-center">--------<MdExplore className="text-yellow lg:text-3xl text-2xl" />--------</p>


        </div>
    );
};

export default SectionTitle;