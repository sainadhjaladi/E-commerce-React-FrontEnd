import React, { useContext, useState , useRef} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assests/nav_dropdown.png';

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu("shop")}> 
                    <Link to='/'>Shop</Link>   
                    {menu === "shop" && <hr />} 
                </li>
                <li onClick={() => setMenu("mens")}> 
                    <Link to='/mens'>Men</Link>     
                    {menu === "mens" && <hr />} 
                </li>
                <li onClick={() => setMenu("womens")}> 
                    <Link to='/womens'>Women</Link>  
                    {menu === "womens" && <hr />} 
                </li>
                <li onClick={() => setMenu("kids")}> 
                    <Link to='/kids'>Kids</Link>   
                    {menu === "kids" && <hr />} 
                </li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?
                <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
                <Link to='/login'><button>Login</button></Link>
                }
                
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
