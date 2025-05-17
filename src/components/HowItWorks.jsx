import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => (
  <section id="how-it-works" className="py-5">
    <div className="container">
      {/* Static heading stays visible */}
      <h2 className="text-center mb-4">How It Works</h2>

      {/* Animate only the row of cards */}
      <motion.div
        className="row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="col-md-4 text-center">
          <i className="bi bi-upload display-4 text-primary mb-3"></i>
          <h3>Step 1: Upload</h3>
          <p>Submit your software license documents securely through our platform.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-piggy-bank display-4 text-primary mb-3"></i>
          <h3>Step 2: Valuation</h3>
          <p>We appraise your licenses and offer you the best price.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-cash-stack display-4 text-primary mb-3"></i>
          <h3>Step 3: Get Paid</h3>
          <p>Choose your payment method and receive funds instantly.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
