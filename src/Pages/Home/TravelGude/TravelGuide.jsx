import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview";
import OurPackages from "./OurPackages";
import MeetTourGuide from "./MeetTourGuide";

const TravelGuide = () => {
  const [tabIndex, setTabIndex] = useState(0);
  
  return (
    <section className="my-12 text-white mx-auto max-w-7xl font-maven px-4">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-12 lg:gap-56 text-center md:text-left">
        <p className="md:text-left text-center w-full md:w-1/2">
          At Explore Savvy, we believe in creating travel experiences that are
          both immersive and unforgettable. Our expert local guides take you off
          the beaten path to discover the hidden gems and rich cultural stories
          of each destination. Whether you’re seeking adventure,
          relaxation, or a mix of both, our tailored tours cater to all your
          travel desires.
        </p>
        <div className="flex-1 w-full md:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-semibold md:leading-loose md:text-left">
            Welcome To Our <span className="text-yellow-400">ExploreSavvy</span>
          </h1>
          <h3 className="font-maven text-lg lg:text-xl font-medium text-gray-100 my-4">
            Your Gateway to Unforgettable Adventures
          </h3>
        </div>
      </div>
      <div className="mt-12">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-white font-maven font-bold flex flex-col md:flex-row justify-center md:justify-start">
            <Tab className="py-2 px-4 cursor-pointer hover:text-yellow-400 focus:outline-none" selectedClassName="text-yellow-400 border-b-2 border-yellow-400">
              Overview
            </Tab>
            <Tab className="py-2 px-4 cursor-pointer hover:text-yellow-400 focus:outline-none" selectedClassName="text-yellow-400 border-b-2 border-yellow-400">
              Our Packages
            </Tab>
            <Tab className="py-2 px-4 cursor-pointer hover:text-yellow-400 focus:outline-none" selectedClassName="text-yellow-400 border-b-2 border-yellow-400">
              Meet Our Tour Guide
            </Tab>
          </TabList>
          <TabPanel>
            <Overview />
          </TabPanel>
          <TabPanel>
            <OurPackages />
          </TabPanel>
          <TabPanel>
            <MeetTourGuide />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default TravelGuide;
