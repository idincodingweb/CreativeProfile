import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/style/About.css';

const About = () => {
  return (
    <div className="about-us text-white">
      {/* Header Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-12 text-center mb-4 fade-in">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center bg-transparent">
                <li className="breadcrumb-item">
                  <NavLink to="/home" className="text-white">Home</NavLink>
                </li>
                <li className="breadcrumb-item active text-white" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 slide-in-left">
            <img 
              src="https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Developer working" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6 ps-lg-5 slide-in-right">
            <h6 className="text-white-50">About Us</h6>
            <h2 className="display-4 mb-4">We Code the Future</h2>
            <p className="lead">
              At Idin Code, we are passionate about creating innovative software solutions that drive the future of technology. Our team of expert developers is dedicated to delivering high-quality coding services to meet the diverse needs of our clients.
            </p>
            <button className="btn btn-color px-4 py-2 mt-3 hover-effect">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 fade-in">
            <h3 className="mb-4">Our Skills</h3>
            <div className="skill-item mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span>Front-End Development</span>
                <span>95%</span>
              </div>
              <div className="progress1">
                <div 
                  className="progress-bar progress-animate frontend" 
                  role="progressbar" 
                  style={{ width: '95%' }}
                  aria-valuenow="95" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span>Back-End Development</span>
                <span>90%</span>
              </div>
              <div className="progress2">
                <div 
                  className="progress-bar progress-animate backend" 
                  role="progressbar" 
                  style={{ width: '90%', animationDelay: '0.2s' }}
                  aria-valuenow="90" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span>UI/UX Design</span>
                <span>85%</span>
              </div>
              <div className="progress3">
                <div 
                  className="progress-bar progress-animate uiux" 
                  role="progressbar" 
                  style={{ width: '85%', animationDelay: '0.4s' }}
                  aria-valuenow="85" 
                  aria-valuemin="0" 
                  aria-valuemax="85"
                ></div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="col-lg-6 stats-section fade-in">
            <div className="row text-center">
              <div className="col-6 mb-4 stat-item">
                <h2 className="display-4 fw-bold counter">10+</h2>
                <p className="text-white-50">Years Of Experience</p>
              </div>
              <div className="col-6 mb-4 stat-item">
                <h2 className="display-4 fw-bold counter">500+</h2>
                <p className="text-white-50">Projects Completed</p>
              </div>
              <div className="col-6 stat-item">
                <h2 className="display-4 fw-bold counter">300+</h2>
                <p className="text-white-50">Satisfied Clients</p>
              </div>
              <div className="col-6 stat-item">
                <h2 className="display-4 fw-bold counter">50</h2>
                <p className="text-white-50">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="container-fluid py-5 position-relative">
        <div className="cta-section text-center py-5 slide-in-left">
          <h3 className="text-white mb-3">Hire Us Now</h3>
          <h2 className="display-4 mb-4">We Are Ready To Transform Your Ideas Into Reality</h2>
          <button className="btn btn-color px-4 py-2 hover-effect">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;