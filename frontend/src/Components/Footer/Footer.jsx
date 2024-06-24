import React from 'react'
import './Footer.css'
import footer__logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'


function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer__logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Rights Reservered</p>
      </div>
    </div>
  )
}

export default Footer
