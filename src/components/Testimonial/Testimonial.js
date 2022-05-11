import React from 'react';
import './Testimonial.css'
import person1 from '../../Images/person1.jpg';
import person2 from '../../Images/person2.jpg';
import person3 from '../../Images/person3.jpg';
const Testimonial = () => {
    return (
        <div className='testimonial container my-5 mb-5'>
            <p className='text-center'>What Our Happy Investors say about Us</p>
            <h3 className='text-center'>Our Testimonial</h3>
            <div className='review-container'>

                <div className='review'>
                    <img src={person1} alt="" />
                    <h5>Elon Martin</h5>
                    <p><small>Manager of Beacon Automobile</small></p>
                    <p>Perfect deal with 100% satisfaction and nice managemanet with qualitiful work</p>
                </div>

                <div className='review'>
                    <img src={person2} alt="" />
                    <h5>Justin Trimark</h5>
                    <p><small>Vibro Auto parts dealer</small></p>
                    <p>Best truck in town and appreciable managemanet with best deal</p>
                </div>
                <div className='review'>
                    <img src={person3} alt="" />
                    <h5>Anabela Joe</h5>
                    <p><small>Co-Sharer of Toyota</small></p>
                    <p>Best performes on short time with large number of quantity of truck</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;