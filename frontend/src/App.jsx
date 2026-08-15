import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import LoginPopup from './components/LoginPopup/LoginPopup';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { ToastContainer } from 'react-toastify';


const App = () => {
  const[showLogin,setShowLogin]=useState(false);
  
  return (
    <div className="parent">
      <ToastContainer/>
      {showLogin?<LoginPopup setShowLogin={setShowLogin} showLogin={showLogin}/>:null}
      <Navbar setShowLogin={setShowLogin}/>
        <div className='app'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/order' element={<PlaceOrder/>}></Route>
          </Routes>
        </div>
        <Footer/>
    </div>
    
  )
}

export default App
