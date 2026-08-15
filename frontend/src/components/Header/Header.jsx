import React from 'react'
import './Header.css'
import {HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
    <div className='header' id='header'>
        <div className="header-contents">
            <h2>Order your food here!</h2>
            <p>You can choose from our variety of foods from the below menu. Check it out and don't forget to place an order!</p>
            <HashLink smooth to="/#explore-menu">
              <button>View Menu</button>
            </HashLink>
        </div>
    </div>
  )
}

export default Header
