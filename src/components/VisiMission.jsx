import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/VisiMission.css';

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6">
            <div className="content-section mb-5">
              <span className="section-label">Vision & Mission</span>
              <h2 className="section-title">Our Vision</h2>
              <p className="section-text">
                Our vision is to be at the forefront of frontend development, creating visually stunning, highly interactive, and user-friendly web applications. We aim to push the boundaries of what's possible on the web, providing seamless and engaging experiences for users worldwide.
              </p>
            </div>

            <div className="content-section">
              <span className="section-label">Vision & Mission</span>
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
                Our mission is to deliver top-notch frontend solutions that combine cutting-edge technology with exceptional design. We strive to empower businesses by enhancing their digital presence, ensuring that their web applications are not only functional but also aesthetically pleasing and easy to use. Through continuous learning and innovation, we aim to set new standards in the field of frontend development.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="col-lg-6">
            <div className="image-grid">
              <div className="floating-image image-1"></div>
              <div className="floating-image image-2"></div>
              <div className="floating-image image-3"></div>
              <div className="floating-image image-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;