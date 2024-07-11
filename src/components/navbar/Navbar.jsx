import React from 'react'
import './Navbar.css'
import logo from '../assets/Frontend_Assets/logo.png'
import car_icon from '../assets/Frontend_Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li>Shop <hr /></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={car_icon} alt="car" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
