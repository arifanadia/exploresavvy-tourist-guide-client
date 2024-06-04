import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from "./Overview";
import OurPackages from "./OurPackages";
import MeetTourGuide from "./MeetTourGuide";

const TravelGuide = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <section className="my-12 text-black max-w-7xl mx-auto">
            <div className="md:flex text-center md:text-left gap-8">
                <div className="relative ">
                    <h1 className="text-3xl lg:text-4xl  font-semibold leading-loose font-satisfy md:text-left ">
                        Welcome To Our ExploreSavvy </h1>
                    <div className="bg-yellow w-16 left-72 top-2 h-16 rounded-full opacity-35 absolute"></div>
                    <h3 className="font-maven  text-xl font-medium text-yellow my-6">Your Gateway to Unforgettable Adventures</h3>
                </div>
                
                <p className="md:w-2/4 md:text-left text-center"> At Explore Savvy, we believe in creating travel experiences that are
                    both immersive and unforgettable. Our expert local guides take you off
                    the beaten path to discover the hidden gems and rich cultural stories of
                    each destination. Whether you&apos;re seeking adventure, relaxation, or a
                    mix of both, our tailored tours cater to all your travel desires.</p>
            </div>
            <div className="mt-12">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={'text-black font-maven font-bold'}>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Our Tour Guide</Tab>
                    </TabList>
                    <TabPanel>
                        <Overview></Overview>
                    </TabPanel>
                    <TabPanel>
                        <OurPackages></OurPackages>
                    </TabPanel>
                    <TabPanel>
                        <MeetTourGuide></MeetTourGuide>
                    </TabPanel>
                </Tabs>
            </div>
        </section>

    );
};

export default TravelGuide;