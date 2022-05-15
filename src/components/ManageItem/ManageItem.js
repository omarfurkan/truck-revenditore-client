import React from 'react';
import './ManageItem.css'

const ManageItem = ({ manageItem }) => {
    const { _id, name, img, description, price, quantity, supplier } = manageItem;
    return (
        <>
            <tr>
                <td>
                    <div className='nameImg'>
                        <h5> {name}</h5>
                        <img src={img} alt="" />
                    </div>
                </td>
                <td>
                    <div>
                        <p>Descripton: {description}</p>
                        <h5>Price: {price}</h5>
                        <p><small>Quantity: {quantity}</small></p>
                        <p>Supplier:{supplier}</p>
                    </div>
                </td>
                <td>
                    <button className='update-btn'>Delete</button>
                </td>
            </tr>




        </>
    );
};

export default ManageItem;