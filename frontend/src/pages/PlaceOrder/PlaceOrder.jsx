import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const {getSubTotal,finalDeliveryFee}=useContext(StoreContext);
  return (
    <form className='place-order'>
        <div className="place-order-left">
            <h2>Delivery Information</h2>
            <div className="multi-fields">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Street' />
            <div className="multi-fields">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='State' />
            </div>
            <div className="multi-fields">
                <input type="text" placeholder='Zip Code' />
                <input type="text" placeholder='Country' />
            </div>
            <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
            <div className="cart-bottom-left total-details">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getSubTotal()}$</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery</p>
                <p>{finalDeliveryFee}$</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b>{getSubTotal()+finalDeliveryFee}$</b>
            </div>
            <hr />
            <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder
