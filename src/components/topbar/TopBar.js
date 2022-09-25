import React from 'react'
import './TopBar.css'
import { NavLink } from 'react-router-dom';

//React component returns JSX kind on markup
function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <i class="topbar-social-icon fab fa-instagram"></i>
        <i class="topbar-social-icon fab fa-facebook"></i>
        <i class="topbar-social-icon fab fa-linkedin"></i>
        <i class="topbar-social-icon fab fa-twitter"></i>
      </div>
      <div className="topbar-center">
        <ul className="topbar-list">
          <li className="topbar-list-item">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="topbar-list-item">ABOUT</li>
          <li className="topbar-list-item">CONTACT</li>
          <li className="topbar-list-item">
            <NavLink to="/create">CREATE PROPERTY</NavLink>
          </li>
          <li className="topbar-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="topbar-right">
        <img className="topbar-profile-pic" src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <i className="topbar-search fas fa-search"></i>
      </div>
    </div>
  )
}

export default TopBar