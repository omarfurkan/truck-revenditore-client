import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;