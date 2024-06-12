
import usePackages from "../../Hooks/usePackages";
import PageHeader from "../../Component/PageHeader";
import bg from '../../assets/All packages/all.jpg'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import PacakgesByType from "./PacakgesByType";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import { useState } from "react";


const AllPakages = () => {
    const [packages] = usePackages();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    console.log(packages);
    const types = ['Adventure', 'Wildlife', 'Cultural', 'Food', 'Relaxation', 'Historical']
    const { tourType } = useParams();
    console.log(tourType);
    const initialIndex = types.indexOf(tourType)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const adventures = packages.filter(item => item.tourType === 'Adventure')
    console.log(adventures);
    const wildLife = packages.filter(item => item.tourType === 'Wildlife')
    const cultural = packages.filter(item => item.tourType === 'Cultural')
    const food = packages.filter(item => item.tourType === 'Food')
    const relaxation = packages.filter(item => item.tourType === 'Relaxation')
    const historical = packages.filter(item => item.tourType === 'Historical')


    const handleWishList = async (item) => {


        const packageData = {
            packageName: item.tripTitle,
            packagesImg: item.mainImage,
            location: item.location,
            price: parseFloat(item.price),
            tourType: item.tourType,
            email: user?.email


        }

        const res = await axiosSecure.post('/wishList', packageData)
        if (res.data.insertedId) {
            toast.success('wishlist are added')
        }

    }
    return (
        <div className="">
            <Helmet>
                <title> ExploreSavvy | Packages </title>
            </Helmet>
            <PageHeader bg={bg} title={'Buy and explore nature'}></PageHeader>
            <section className="max-w-7xl mx-auto my-12">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={'uppercase text-center'}>
                        <Tab>Adventure</Tab>
                        <Tab>Wildlife</Tab>
                        <Tab>Cultural</Tab>
                        <Tab>Food</Tab>
                        <Tab>Relaxation</Tab>
                        <Tab>Historical</Tab>

                    </TabList>
                    <TabPanel>
                        <PacakgesByType tripPack={adventures} handleWishList={handleWishList}></PacakgesByType>
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={wildLife}></PacakgesByType>
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={cultural}></PacakgesByType>
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={food}></PacakgesByType>
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={relaxation}></PacakgesByType>
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={historical}></PacakgesByType>
                    </TabPanel>

                </Tabs>
            </section>

        </div>
    );
};

export default AllPakages;