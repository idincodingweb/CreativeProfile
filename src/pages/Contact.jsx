import React from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../assets/style/Contact.css';

const ContactPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
      });
    });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page text-white">
      <header className="text-center py-5 animate-on-scroll">
        <h1 className="text-danger">Contact Us</h1>
        <nav className="breadcrumb justify-content-center bg-transparent">
          <span className="breadcrumb-item active">Contact</span>
        </nav>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form p-4 rounded shadow animate-on-scroll">
              <h2 className="mb-4 text-danger">Get In Touch</h2>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control bg-transparent text-white" placeholder="Your Name..." />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control bg-transparent text-dark" placeholder="YourEmail@email.com" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control bg-transparent text-dark" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control bg-transparent text-white" placeholder="Title..." />
                </div>
                <div className="mb-3">
                  <textarea className="form-control bg-transparent form-outline-light text-white" rows="5" placeholder="Type Here..."></textarea>
                </div>
                <button type="submit" className="btn btn-outline-danger w-100 hover-scale">Send Now</button>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-info p-4 animate-on-scroll">
              <div className="contact-item mb-4">
                <i className="bi bi-telephone-fill"></i>
                <h4>Phone Number</h4>
                <p>+6282 2952 78890</p>
              </div>
              <div className="contact-item mb-4">
                <i className="bi bi-envelope-fill"></i>
                <h4>Email Address</h4>
                <p>Idincode@Email.Com</p>
              </div>
              <div className="contact-item mb-4">
                <i className="bi bi-whatsapp"></i>
                <h4>WhatsApp</h4>
                <p>082-245-7293</p>
              </div>
              <div className="contact-item mb-4">
                <i className="bi bi-geo-alt-fill"></i>
                <h4>Our Office</h4>
                <p>Desa Cipondoh, Kecamatan Tirtamulya, Kabupaten, Karawang 41372</p>
              </div>
              <div className="map-container rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126931.61370789904!2d107.24401361640625!3d-6.322471399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699c02aa9bc39f%3A0x183c9659c5a3c44a!2sKarawang%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2s!4v1703991245725!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default ContactPage;