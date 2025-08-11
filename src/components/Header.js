import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <div className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="logo">
              <h1>LUXURY GARAGE</h1>
            </div>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home">HOME</a></li>
              <li><a href="#my-cars">MY CARS</a></li>
              <li><a href="#store">STORE</a></li>
              <li><a href="#gallery">GALLERY</a></li>
            </ul>
          </nav>

          <div className="profile-section">
            <div className="profile-picture">
              <img src="/img/image 98@2x.png" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 