import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Testimonial></Testimonial>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;