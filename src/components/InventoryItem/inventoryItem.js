import React from 'react';
import './InventoryItem.css'

const InventoryItem = ({ inventoryItem }) => {
    const { name, img, description, price, quantity, supplier } = inventoryItem
    return (
        <div className='item-container p-3'>
            <img className='img-fluid mx-auto d-block img-item' src={img} alt="" />
            <h4 className='text-center my-3'>{name}</h4>
            <p>{description}</p>
            <h5>Price: {price}</h5>
            <p><small>Quantity: {quantity}</small></p>
            <p>{supplier}</p>
            <button className='update-btn'>Update</button>
        </div>
    );
};

export default InventoryItem;