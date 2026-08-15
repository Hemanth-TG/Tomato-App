import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,image,description,price}) => {
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="image-and-count">
            <img className='food-image' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
            ?
            <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
            : 
            <div className='counter'>
                <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} />
            </div>
            }
        </div>
        <div className="food-text">
            <div className="name-and-ratings">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='description'>{description}</p>
            <p className='price'>{price}$</p>
        </div>
    </div>
  )
}

export default FoodItem
