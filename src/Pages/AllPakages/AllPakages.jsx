import { useState } from 'react';
import usePackages from "../../Hooks/usePackages";
import PageHeader from "../../Component/PageHeader";
import bg from '/assets/All packages/all.jpg';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import PacakgesByType from "./PacakgesByType";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

const AllPakages = () => {
    const [packages] = usePackages();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const types = ['Adventure', 'Wildlife', 'Cultural', 'Food', 'Relaxation', 'Historical'];
    const { tourType } = useParams();
    const initialIndex = types.indexOf(tourType);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [wishlist, setWishlist] = useState({});


    AOS.init({
        duration: 1000, 
        once: true,     
    });


    const adventures = packages.filter(item => item.tourType === 'Adventure');
    const wildLife = packages.filter(item => item.tourType === 'Wildlife');
    const cultural = packages.filter(item => item.tourType === 'Cultural');
    const food = packages.filter(item => item.tourType === 'Food');
    const relaxation = packages.filter(item => item.tourType === 'Relaxation');
    const historical = packages.filter(item => item.tourType === 'Historical');

    const handleWishList = async (item) => {
        const packageData = {
            packageName: item.tripTitle,
            packagesImg: item.mainImage,
            location: item.location,
            price: parseFloat(item.price),
            tourType: item.tourType,
            email: user?.email
        };

        try {
            const res = await axiosSecure.post('/wishList', packageData);
            if (res.data.insertedId) {
                toast.success('Wishlist item added');
                setWishlist((prevWishlist) => ({ ...prevWishlist, [item._id]: true }));
            }
        } catch (error) {
            toast.error('Failed to add to wishlist');
        }
    };

    return (
        <div>
            <Helmet>
                <title> ExploreSavvy | Packages </title>
            </Helmet>
            <PageHeader bg={bg} title={'Buy and explore nature'} />

            <section className="max-w-7xl mx-auto py-12">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="uppercase text-center">
                        <Tab data-aos="fade-up">Adventure</Tab>
                        <Tab data-aos="fade-up" data-aos-delay="100">Wildlife</Tab>
                        <Tab data-aos="fade-up" data-aos-delay="200">Cultural</Tab>
                        <Tab data-aos="fade-up" data-aos-delay="300">Food</Tab>
                        <Tab data-aos="fade-up" data-aos-delay="400">Relaxation</Tab>
                        <Tab data-aos="fade-up" data-aos-delay="500">Historical</Tab>
                    </TabList>
                    <TabPanel>
                        <PacakgesByType tripPack={adventures} wishlist={wishlist} handleWishList={handleWishList} data-aos="fade-up" />
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={wildLife} wishlist={wishlist} handleWishList={handleWishList} data-aos="fade-up" />
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={cultural} wishlist={wishlist} handleWishList={handleWishList} data-aos="fade-up" />
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={food} wishlist={wishlist} handleWishList={handleWishList} data-aos="fade-up" />
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={relaxation} wishlist={wishlist} handleWishList={handleWishList} data-aos="fade-up" />
                    </TabPanel>
                    <TabPanel>
                        <PacakgesByType tripPack={historical} wishlist={wishlist} handleWishList={handleWishList} data-aos="fade-up" />
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default AllPakages;
