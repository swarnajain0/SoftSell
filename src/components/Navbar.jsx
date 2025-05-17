import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  // Initialize theme state
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  // Whenever theme changes: update <html> attribute and persist
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav
  className={`navbar navbar-expand-lg bg-body fixed-top shadow-sm ${
    theme === 'light' ? 'navbar-light' : 'navbar-dark'
  }`}
>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="SoftSell Logo" width="30" height="30" className="me-2" />
          <span className="fw-bold">SoftSell</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Why Choose Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <button
                onClick={toggleTheme}
                className="btn btn-outline-secondary ms-3"
                aria-label="Toggle theme"
              >
                {theme === 'light' 
                  ? <i className="bi bi-moon-fill"></i> 
                  : <i className="bi bi-sun-fill"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
