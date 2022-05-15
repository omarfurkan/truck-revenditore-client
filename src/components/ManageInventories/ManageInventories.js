import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';
import './ManageInventories.css'

const ManageInventories = () => {
    const [manageItems, setManageItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/product')
            .then(res => res.json())
            .then(data => setManageItems(data))
    })
    return (
        <div className='container inventory-container'>
            <h2 className='text-center my-5'>Inventory Items</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Information</th>
                            <th>Delete</th>
                        </tr>

                        {
                            manageItems.map(manageItem => <ManageItem
                                key={manageItem._id}
                                manageItem={manageItem}>
                            </ManageItem>)

                        }
                    </tbody>
                </table>


            </div>
        </div >
    );
};

export default ManageInventories;