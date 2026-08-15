import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {cartItems,food_list,addToCart,removeFromCart,getSubTotal,finalDeliveryFee,url}=useContext(StoreContext);
    
    const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Add/Remove</p>
        </div>
        <hr />
        {food_list.map((item)=>{
            if(cartItems[item._id]>0) {
                    return (
                
                <div className="cart-item-info-container" key={item._id}>
                    <div className="cart-items-title cart-items-info">
                        <img className='cart-food-image' src={url+"/images/"+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.price}$</p>
                        <p>{cartItems[item._id]}</p>
                        <p>{item.price*cartItems[item._id]}$</p>
                        <div className="add-or-remove">
                            <img onClick={()=>addToCart(item._id)} src={assets.add_icon_green} alt="" />
                            <img onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                        </div>
                    </div>
                    <hr />
                </div>
            )
                }
            
        })}
      </div>

      <div className="cart-bottom">
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
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-bottom-right promocode-container">
            <h2>Have a Promo Code?</h2>
            <div className="promocode">
                <input type="text" placeholder='Enter promo code'/>
                <button>APPLY</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
