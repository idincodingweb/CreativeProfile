import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsPinterest, BsInstagram, BsFacebook } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import '../assets/style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container fluid>
        <Row className="main-footer">
          <Col md={3} className="brand-section">
            <div className="brand-logo">
              <BiChevronLeft className="chevron-left" />
              <BiChevronRight className="chevron-right" />
            </div>
            <span className="brand-text">Idin.Code</span>
          </Col>
          
          <Col md={6}>
            <nav className="footer-nav">
              <ul>
                <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
                <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
                <li><NavLink to="/service" className="nav-link">Services</NavLink></li>
                <li><NavLink to="/contact" className="nav-link">Contacts</NavLink></li>
              </ul>
            </nav>
          </Col>

          <Col md={3} className="social-icons">
            <a href="#pinterest" className="social-icon pinterest">
              <BsPinterest />
            </a>
            <a href="#instagram" className="social-icon instagram">
              <BsInstagram />
            </a>
            <a href="#facebook" className="social-icon facebook">
              <BsFacebook />
            </a>
          </Col>
        </Row>

        <Row className="subscription-section align-items-center">
          <Col md={12} className="d-flex justify-content-center">
            <div className="subscribe-section d-flex align-items-center">
              <h3 className="mb-0 me-3">Subscribe Now</h3>
              <div className="email-input-container">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="social-copyright">
          <Col md={12} className="text-center">
            <p className="copyright-text">
              Creative portfolio © 2024 Design By Idin Code
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;