import React from 'react';

const Features = () => (
  <section id="features" className="py-5 bg-body-secondary">
    <div className="container">
      <h2 className="text-center mb-4">Why Choose Us</h2>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3 text-center">
          <i className="bi bi-shield-lock display-4 text-primary mb-3"></i>
          <h5>Secure & Private</h5>
          <p>We use bank-grade encryption to keep your license data safe.</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center">
          <i className="bi bi-speedometer2 display-4 text-primary mb-3"></i>
          <h5>Fast Valuation</h5>
          <p>Get a machine-powered appraisal in under 24 hours.</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center">
          <i className="bi bi-currency-dollar display-4 text-primary mb-3"></i>
          <h5>Best Pricing</h5>
          <p>We guarantee competitive offers based on market demand.</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center">
          <i className="bi bi-headset display-4 text-primary mb-3"></i>
          <h5>Expert Support</h5>
          <p>Our team is available 24/7 to answer any questions.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
