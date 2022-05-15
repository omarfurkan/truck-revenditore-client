import React from 'react';
import addImg from '../../Images/add.png'

const AddInventory = () => {
    return (
        <div className='container register-container my-5'>

            <div>
                <img src={addImg} alt="" />
            </div>

            <div>
                <h3 className='text-center'>Add Item</h3>
                <form >
                    <input className='my-3' type="text" name="" id="" placeholder='Name of Item' />
                    <input className='my-3' type="text" name="" id="" placeholder='Description' />
                    <input className='my-3' type="text" name="" id="" placeholder='Price' />
                    <input className='my-3' type="text" name="" id="" placeholder='Quantity' />
                    <input className='my-3' type="text" name="" id="" placeholder='Supplier' />


                    <button className="update-btn" type="submit">Add Item</button>
                </form>


            </div>
        </div>
    );
};

export default AddInventory;