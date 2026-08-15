import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
      <div className="navbar-content">
        <img className='logo' src={assets.logo} alt="" />
        <img  className='pro-pic' src={assets.profile_image} alt="" />
      </div>
  )
}

export default Navbar
