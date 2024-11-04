import { useState } from "react";
import {
  AiOutlineCustomerService,
  AiOutlineGlobal,
  AiOutlineSafety,
  AiOutlineSchedule,
} from "react-icons/ai";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="mt-12">
      <div className="px-4 lg:px-6 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Content Section */}
        <div
          className="py-6 rounded-lg shadow-lg text-center lg:text-left max-w-lg"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold mb-4">
            ExploreSavvy - Your Ultimate Travel Guide
          </h2>
          <p className="text-gray-100 leading-relaxed">
            Discover the hidden gems across Bangladesh with curated travel
            experiences Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Magni ab dolores eligendi voluptatum architecto maxime dolorum
            ad commodi, sit odio, temporibus dicta illum autem sint ratione
            alias eveniet nobis voluptates....
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex gap-4 justify-center lg:justify-start"
            data-aos="fade-up"
          >
            <Link to="/about-us">
              <button className="text-yellow-400 btn-outline btn font-semibold flex items-center gap-2 text-sm lg:text-lg">
                About Us <FaCircleArrowRight />
              </button>
            </Link>
            <button
              onClick={openModal}
              className="text-yellow-400 btn-outline btn font-semibold flex items-center gap-2 text-sm lg:text-lg"
            >
              Watch Us <BsPlayCircle />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 shadow-lg">
          <div className="overview-card">
            <AiOutlineSafety className="overview-icon" />
            <h3 className="text-2xl font-semibold">Safe Travel</h3>
            <p>
              Enjoy peace of mind with our top-notch safety protocols at every
              destination.
            </p>
          </div>

          <div className="overview-card">
            <AiOutlineCustomerService className="overview-icon" />
            <h3 className="text-2xl font-semibold">24/7 Support</h3>
            <p>
              We are here for you around the clock, ensuring a smooth and
              worry-free journey.
            </p>
          </div>

          <div className="overview-card">
            <AiOutlineGlobal className="overview-icon" />
            <h3 className="text-2xl font-semibold">Global Reach</h3>
            <p>
              Explore diverse cultures and landscapes with our worldwide travel
              network.
            </p>
          </div>

          <div className="overview-card">
            <AiOutlineSchedule className="overview-icon" />
            <h3 className="text-2xl font-semibold">Flexible Itineraries</h3>
            <p>
              Personalize your adventure with itineraries tailored to your
              interests and schedule.
            </p>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/6BdOvA_L16A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Overview;
