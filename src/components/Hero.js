import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const carImages = [
    { id: 1, src: '/img/image 9@2x.png', label: 'Video', type: 'video' },
    { id: 2, src: '/img/image 6@2x.png', label: 'INTERIOR' },
    { id: 3, src: '/img/image 7@2x.png', label: 'BODY' },
    { id: 4, src: '/img/image 8@2x.png', label: 'RIMS' }
  ];

  const performanceMetrics = [
    { name: 'SPEED', value: 85 },
    { name: 'ACCELERATION', value: 90 },
    { name: 'GRIP', value: 88 },
    { name: 'BREAKING', value: 92 }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="car-info">
              <h2 className="car-model">NISSAN GTR-R35 Nismo 2020</h2>
              <div className="performance-metrics">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="metric-item">
                    <div className="metric-label">{metric.name}</div>
                    <div className="metric-bar">
                      <div 
                        className="metric-fill" 
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="nav-arrow left-arrow">
              <span>&lt;</span>
            </button>
          </div>

          <div className="hero-center">
          <div className="sport-badge">SPORT</div>
            <div className="fast-text">
              <span className="scene-selection">SCENE SELECTION</span>
              FAST
            </div>
          </div>
          <div className='hero-right'>
          <button className="nav-arrow right-arrow">
              <span>&gt;</span>
            </button>
          </div>

          <div className='hero-bottom'>
          <div className="thumbnails">
            {carImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              >
                <img src={image.src} alt={image.label} />
                {image.type === 'video' && (
                  <div className="play-button">▶</div>
                )}
                <div className="thumbnail-label">{image.label}</div>
              </div>
            ))}
          </div>
          </div>
          <div></div>          
          <div className="price-section">
            <div className="price-label">PRICE</div>
            <div className="price">$212,435</div>
            <div className="vip-badge">
              <span className="checkmark">★</span>
              VIP CAR COLLECTING
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero; 