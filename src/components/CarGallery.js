import React from 'react';
import './CarGallery.css';

const CarGallery = () => {
  const cars = [
    {
      id: 1,
      name: 'Audi A6',
      year: '2018',
      miles: '70.000',
      price: '30.00',
      image: '/img/image 101@2x.png'
    },
    {
      id: 2,
      name: 'BMW M3',
      year: '2018',
      miles: '70.000',
      price: '45.00',
      image: '/img/image 102@2x.png'
    },
    {
      id: 3,
      name: 'Aston Martin',
      year: '2018',
      miles: '70.000',
      price: '120.00',
      image: '/img/image 103@2x.png'
    },
    {
      id: 4,
      name: 'Chevrolet',
      year: '2017',
      miles: '70.000',
      price: '35.00',
      image: '/img/image 104@2x.png'
    },
    {
      id: 5,
      name: 'Nissan Juke',
      year: '2017',
      miles: '70.000',
      price: '25.00',
      image: '/img/image 105@2x.png'
    },
    {
      id: 6,
      name: 'Toyota',
      year: '2017',
      miles: '70.000',
      price: '28.00',
      image: '/img/image 106@2x.png'
    },
    {
      id: 7,
      name: 'Lamborghini',
      year: '2017',
      miles: '70.000',
      price: '200.00',
      image: '/img/image 107@2x.png'
    },
    {
      id: 8,
      name: 'Ferrari',
      year: '2017',
      miles: '70.000',
      price: '180.00',
      image: '/img/image 108@2x.png'
    }
  ];

  return (
    <section className="car-gallery">
      <div className="container">
        <h2 className="gallery-title">Choose Awesome Car</h2>
        
        <div className="cars-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image">
                <img src={car.image} alt={`${car.name} ${car.year}`} />
              </div>
              <div className="car-info">
                <h3 className="car-name">{car.name} {car.year}</h3>
                <p className="car-miles">{car.miles} miles</p>
                <div className="car-price">
                  <span className="price-amount">${car.price}</span>
                  <span className="price-period">/Days</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarGallery; 