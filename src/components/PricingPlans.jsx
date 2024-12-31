import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/PricingPlans.css";

const PricingPlans = () => {
  return (
    <div className="pricing-plans-container text-center text-white">
      <h1 className="mb-5">Plans and Pricing</h1>
      <div className="container">
        <div className="row justify-content-center">
          {/* Basic Plan */}
          <div className="col-md-4 mb-4">
            <div className="plan-card p-4">
              <h3>Starter Plan</h3>
              <h2>$499</h2>
              <p className="text-muted">per project</p>
              <ul className="list-unstyled">
                <li>Single Page Application</li>
                <li>Responsive Design</li>
                <li>Basic SEO Optimization</li>
                <li>Email Support</li>
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="col-md-4 mb-4">
            <div className="plan-card p-4 most-popular">
              <div className="most-popular-tag">Most Popular</div>
              <h3>Professional Plan</h3>
              <h2>$999</h2>
              <p className="text-muted">per project</p>
              <ul className="list-unstyled">
                <li>Multi-Page Application</li>
                <li>Advanced Responsive Design</li>
                <li>SEO Optimization</li>
                <li>Priority Email Support</li>
                <li>Performance Optimization</li>
              </ul>
              <button className="btn btn-primary">Upgrade Now</button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="col-md-4 mb-4">
            <div className="plan-card p-4">
              <h3>Enterprise Plan</h3>
              <h2>$1999</h2>
              <p className="text-muted">per project</p>
              <ul className="list-unstyled">
                <li>Custom Web Application</li>
                <li>Comprehensive Responsive Design</li>
                <li>Complete SEO Optimization</li>
                <li>24/7 Premium Support</li>
                <li>Advanced Security Features</li>
                <li>Free Domain and Hosting for 1 Year</li>
              </ul>
              <button className="btn btn-primary">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;