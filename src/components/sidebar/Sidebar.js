import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar-section">
      <div className="sidebar-subsection">
        <span className="sidebar-title">about me</span>
        <img className="sidebar-img" src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">categories</span>
        <ul className="sidebar-categories">
          <li className="sidebar-category">Buy</li>
          <li className="sidebar-category">Sell</li>
          <li className="sidebar-category">Rent</li>
          <li className="sidebar-category">Hostel</li>
          <li className="sidebar-category">B & B</li>
          <li className="sidebar-category">Hotel</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">follow us</span>
        <div className="sidebar-social-icons">
          <i class="sidebar-social-icon fab fa-instagram"></i>
          <i class="sidebar-social-icon fab fa-facebook"></i>
          <i class="sidebar-social-icon fab fa-linkedin"></i>
          <i class="sidebar-social-icon fab fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar