import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import CarGallery from './components/CarGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BookingSection />
      <CarGallery />
      <Footer />
    </div>
  );
}

export default App; 