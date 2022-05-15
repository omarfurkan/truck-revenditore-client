import React from 'react';
import './ManageItem.css'

const ManageItem = ({ manageItem }) => {
    const { _id, name, img, description, price, quantity, supplier } = manageItem;


    const handleItemDelete = id => {
        // confirmation popup includes while deleting item
        const proceed = window.confirm('Are you Sure?')
        if (proceed) {
            console.log(_id);
            const url = `http://localhost:7000/product/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remains = manageItem.filter(manageItem => manageItem._id !== id);
                        return remains;
                    }

                })
        }

    }

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
                    <button onClick={() => handleItemDelete(_id)} className='update-btn'>Delete</button>
                </td>
            </tr>




        </>
    );
};

export default ManageItem;