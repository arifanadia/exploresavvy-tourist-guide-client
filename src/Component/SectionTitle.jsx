import { MdExplore } from "react-icons/md";


const SectionTitle = ({ title, subTitle, }) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl text-center lg:text-3xl font-maven font-semibold text-white ">{title}</h1>
            <h3 className="font-satisfy  my-4 text-lg lg:text-xl text-yellow-400">{subTitle}</h3>
            <p className="text-yellow-400  flex justify-center items-center">--------<MdExplore className=" lg:text-3xl text-2xl" />--------</p>


        </div>
    );
};

export default SectionTitle;