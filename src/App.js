import React from 'react';

// Remove these if you’re not using App.css or the logo
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';




function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <ContactForm />
      <ChatWidget />

      {/* TODO: Add Features, Testimonials, ContactForm here */}
    </>
  );
}

export default App;
