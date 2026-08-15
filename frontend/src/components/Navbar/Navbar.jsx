import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({setShowLogin}) => {
  const[menu,setMenu]=useState("");
  const {getSubTotal,token,setToken}=useContext(StoreContext);

  const navigate=useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <div className='navbar-menu'>
        {/* <HashLink smooth to='/#header' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</HashLink> */}
        <HashLink smooth to='/#header' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>Home</HashLink>
        <HashLink smooth to='/#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>Menu</HashLink>
        <HashLink smooth to='/#mobile-app' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>Mobile-App</HashLink>
        <HashLink smooth to='/#footer' onClick={()=>setMenu("contact")} className={menu==='contact'?"active":""}>Contact Us</HashLink>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="basket-and-dot">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={`dot ${getSubTotal()===0?"removeDot":""}`}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>:
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className='navbar-profile-dropdown'>
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>}
        
      </div>
    </div>
  )
}

export default Navbar