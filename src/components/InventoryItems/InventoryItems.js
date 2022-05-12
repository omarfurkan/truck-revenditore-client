import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InevtoryItems.css';


const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/product')
            .then(res => res.json())
            .then(data => setInventoryItems(data))
    })
    const inevtoryItemsSlice = inventoryItems.slice(0, 6)
    return (
        <div className='container inventory-container'>
            <h2 className='text-center my-5'>Inventory Items</h2>
            <div className='items-container'>
                {
                    inevtoryItemsSlice.map(inventoryItem => <InventoryItem
                        key={inventoryItem._id}
                        inventoryItem={inventoryItem}>
                    </InventoryItem>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;