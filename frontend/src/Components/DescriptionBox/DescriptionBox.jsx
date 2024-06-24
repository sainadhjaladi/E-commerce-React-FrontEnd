import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An ecommerce website is an online platform that facilitates the buying and 
                selling of products or services over the internet. It allows customers to browse 
                a wide range of items, compare prices, read reviews, and make purchases from the comfort
                 of their own homes. These websites often include features such as secure payment gateways, 
                 user accounts, shopping carts, and order tracking. Additionally, ecommerce sites provide businesses 
                 with tools for managing inventory, processing orders, and marketing products to a global audience. 
            </p>
            <p>
            An ecommerce website typically displays products or services with detailed descriptions, 
            including images, prices, specifications, and customer reviews. This information helps 
            customers make informed purchasing decisions, ensuring a seamless and convenient online shopping experience.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
