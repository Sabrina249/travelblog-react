import React from 'react'
import './Header.css'
import logo from './Logo.png'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
      <header>
        <div className="Container_header">
        <div className="Branding_header">
        <Link to="/">
          <img src={logo} alt="Logo"/>
          </Link>
          </div>
          <div className="Navigation_header">
          <div className="Center">
          <Link to="/contact">Contact</Link>
          </div>
          <div className="Center">
          <Link to="/newpost">
          <button type="button" className="Button_header">
            New Post
            </button>
          </Link>
          </div>
          <div className="Center">
          <Link to="/login">
          <button type="button" className="Button_header">
            Login
            </button>
          </Link>
          </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header
