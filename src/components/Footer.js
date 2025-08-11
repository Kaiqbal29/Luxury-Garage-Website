import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>LUXURY GARAGE</h3>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>PERUSAHAAN</h4>
            <ul>
              <li><a href="#about">Tentang Kami</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#news">Berita Terbaru</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>PROGRAM</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#my-cars">My car</a></li>
              <li><a href="#store">Store</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#help">Bantuan</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>Copyright © 2020 - Converse. All rights reserved.</p>
            <div className="footer-links">
              <a href="#terms">Terms</a>
              <a href="#privacy">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 