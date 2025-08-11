import React, { useState } from 'react';
import './BookingSection.css';

const BookingSection = () => {
  const [bookingData, setBookingData] = useState({
    car: '',
    location: '',
    date: '',
    time: '',
    duration: ''
  });

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    alert('Booking request submitted successfully!');
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-content">
          <div className="booking-left">
            <div className="car-image-container">
              <img src="/img/image 100@2x.png" alt="Audi A6" className="booking-car-image" />
              <div className="car-background"></div>
            </div>
          </div>
          
          <div className="booking-right">
            <div className="booking-form-container">
              <h2 className="booking-title">BOOK YOUR CAR</h2>
              
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <select
                    name="car"
                    value={bookingData.car}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose Your Car</option>
                    <option value="audi-a6">Audi A6</option>
                    <option value="bmw-m3">BMW M3</option>
                    <option value="mercedes-c63">Mercedes C63</option>
                    <option value="porsche-911">Porsche 911</option>
                    <option value="ferrari-488">Ferrari 488</option>
                    <option value="lamborghini-huracan">Lamborghini Huracan</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <select
                    name="location"
                    value={bookingData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Pick Up Location</option>
                    <option value="downtown">Downtown</option>
                    <option value="airport">Airport</option>
                    <option value="hotel">Hotel</option>
                    <option value="office">Office</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleChange}
                    required
                    placeholder="Pick Up Date"
                  />
                  <span className="form-icon">📅</span>
                </div>
                
                <div className="form-group">
                  <input
                    type="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleChange}
                    required
                    placeholder="Pick Up Time"
                  />
                  <span className="form-icon">🕒</span>
                </div>
                
                <div className="form-group">
                  <select
                    name="duration"
                    value={bookingData.duration}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Per Day</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="7">1 Week</option>
                    <option value="30">1 Month</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary booking-btn">
                  CONTINUE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection; 