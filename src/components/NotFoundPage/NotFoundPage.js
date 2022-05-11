import React from 'react';
import notFoundImg from '../../Images/not-found.jpg'

const NotFoundPage = () => {
    return (
        <div>
            <img className='img-fluid mx-auto d-block mt-5' src={notFoundImg} alt="page not found" />
        </div>
    );
};

export default NotFoundPage;