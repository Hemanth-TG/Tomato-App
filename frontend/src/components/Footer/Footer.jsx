import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
                    <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem porro a vitae optio alias, pariatur mollitia, perspiciatis magni repellendus similique architecto omnis quasi ex ullam soluta accusantium nisi nulla nemo cumque, aliquam ea enim dicta assumenda asperiores? Expedita, dolore. A magnam tenetur quaerat, qui quisquam mollitia facere iste amet minus.</p>
                <div className="social-media">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-middle">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 89734 80812</li>
                    <li><a href="mailto: hemanthjayanesh@gmail.com">hemanthjayanesh@gmail.com</a></li>
                </ul>
            </div>
        </div>
      

      <hr />
      <p className='copyrights'>Copyright 2026 &copy; Tomato.com - All rights reserved</p>
    </div>
  )
}

export default Footer
