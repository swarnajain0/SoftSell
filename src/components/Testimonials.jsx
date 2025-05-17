import React from 'react';
import johnImg from '../assets/person1.avif';
import janeImg from '../assets/person2.avif';

const Testimonials = () => (
  <section id="testimonials" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <div className="row g-4">
        {/* Testimonial 1 */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <i className="bi bi-quote display-6 text-primary mb-3"></i>
              
              {/* Avatar + Name/Role */}
              <div className="d-flex align-items-center mb-3">
                <img
                  src={johnImg}
                  alt="John Doe"
                  className="rounded-circle me-3"
                  width="100"
                  height="100"
                />
                <div>
                  <h6 className="mb-0">John Doe</h6>
                  <small className="text-muted">IT Manager, Acme Corp</small>
                </div>
              </div>

              {/* Quote */}
              <p className="card-text">
                “SoftSell completely transformed the way we handle unused software. Within a week, we turned idle licenses into real revenue without lifting a finger. The process was seamless and the team was super responsive.”
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <i className="bi bi-quote display-6 text-primary mb-3"></i>
              
              {/* Avatar + Name/Role */}
              <div className="d-flex align-items-center mb-3">
                <img
                  src={janeImg}
                  alt="Jane Smith"
                  className="rounded-circle me-3"
                  width="100"
                  height="100"
                />
                <div>
                  <h6 className="mb-0">Jane Smith</h6>
                  <small className="text-muted">CFO, BetaTech</small>
                </div>
              </div>

              {/* Quote */}
              <p className="card-text">
                “I was skeptical at first, but SoftSell delivered beyond expectations. The valuation was fair, the platform was easy to use, and we got paid faster than I imagined. It’s now our go-to for license resale.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
