import React, { useState } from 'react';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      alert('Thank you! Your message has been sent.');
      form.reset();
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  return (
    <section id="contact" className="py-5 bg-body-secondary">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form
          noValidate
          className={validated ? 'needs-validation was-validated' : 'needs-validation'}
          onSubmit={handleSubmit}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
              <div className="invalid-feedback">Please enter your name.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                required
              />
              <div className="invalid-feedback">Please enter a valid email.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="company" className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Company Name"
                required
              />
              <div className="invalid-feedback">Please enter your company name.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="licenseType" className="form-label">License Type</label>
              <select className="form-select" id="licenseType" required>
                <option value="">Choose...</option>
                <option>Single User License</option>
                <option>Multi User License</option>
                <option>Enterprise License</option>
              </select>
              <div className="invalid-feedback">Please select a license type.</div>
            </div>

            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your message..."
                required
              ></textarea>
              <div className="invalid-feedback">Please enter a message.</div>
            </div>

            <div className="col-12 text-center">
              <button className="btn btn-primary btn-lg" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
