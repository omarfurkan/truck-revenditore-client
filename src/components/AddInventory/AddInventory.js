import React from 'react';
import addImg from '../../Images/add.png';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://morning-ridge-30051.herokuapp.com/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }



    return (
        <div className='container register-container my-5'>

            <div>
                <img src={addImg} alt="" />
            </div>

            <div>
                <h3 className='text-center'>Add Item</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='my-3' type="text" {...register("name")} placeholder='Name of Item' />
                    <input className='my-3' {...register("img")} placeholder='URL of Item Image' />
                    <textarea className='my-3' {...register("description")} placeholder='Description' />
                    <input className='my-3' {...register("price")} placeholder='Price' />
                    <input className='my-3' {...register("quantity")} placeholder='Quantity' />
                    <input className='my-3' {...register("supplier")} placeholder='Supplier' />


                    <button className="update-btn" type="submit">Add Item</button>
                </form>


            </div>
        </div>
    );
};

export default AddInventory;