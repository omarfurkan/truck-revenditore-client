import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = () => {
    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState({});
    const [deliverOne, setDeliverOne] = useState(0);



    useEffect(() => {
        const url = `http://localhost:7000/product/${id}`
        console.log(url)
        fetch(url)

            .then(res => res.json())
            .then(data => setItemDetail(data));
    }, [id])



    const handleDeliver = () => {
        let quantity = itemDetail.quantity
        quantity = quantity - 1

        setDeliverOne(quantity)
    }




    return (
        <div className='container my-5'>
            <h2 className='my-5 mt-5'>Detail of Truck</h2>
            <div className='detail-container'>
                <div>
                    <img className='img-fluid mx-auto d-block img-item' src={itemDetail.img} alt="" />
                </div>
                <div>
                    <h4 className='my-3'>{itemDetail.name}</h4>
                    <p>Id: {itemDetail._id}</p>
                    <p>{itemDetail.description}</p>
                    <h5>Price: {itemDetail.price}</h5>
                    <h6>Quantity:<span className='quantity'> {itemDetail.quantity}</span></h6>

                    <p>Supplier: {itemDetail.supplier}</p>
                    <p>{deliverOne}</p>
                    <p><small>Sold: {itemDetail.sold}</small></p>
                    <button
                        onClick={handleDeliver}
                        className='update-btn'
                    >Delivered</button>
                </div>
            </div>
            <div className=''>
                <form className='text-center my-5'>
                    <input type="number" name="" id="" placeholder='Restock the items' className='me-5' />

                    <input type="submit" value="Restock" className='update-btn' />
                </form>
            </div>
        </div >
    );
};

export default ItemDetail;