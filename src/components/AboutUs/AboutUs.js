import React from 'react';
import './AboutUs.css'
import aboutImg from '../../Images/about.jpg'

const AboutUs = () => {
    return (
        <div className='about container'>
            <hr />
            <div className='about-container'>
                <div>
                    <h2 className='mb-5'>About Us</h2>
                    <p>Best Dealer in Town.All you need  is here. We serve the best qualitiful trucks in town as well as all over the Country. We are One of the largest truck dealer in Country. We supply the best brands of turck in any country with in 24 hours. Ous aim is to develop all the cities by providing any best quality of truck all over the country</p>
                </div>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;