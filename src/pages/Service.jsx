import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/Service.css";
import { FaLaptopCode, FaMobileAlt, FaSearch, FaPaintBrush, FaBolt, FaNetworkWired } from 'react-icons/fa'; // Import icons from react-icons

const Service = () => {
    const [activeTab, setActiveTab] = useState('vision-mission');
    const [expandedItems, setExpandedItems] = useState([]);

    const tabs = [
        { id: 'vision-mission', label: 'Vision & Mission' },
        { id: 'services', label: 'Our Services' },
        { id: 'project-details', label: 'Project Details' },
        { id: 'development-process', label: 'Development Process' }
    ];

    const faqItems = [
        {
            question: "What is our Vision?",
            answer: "Our vision is to be at the forefront of frontend development, creating visually stunning, highly interactive, and user-friendly web applications that push the boundaries of what's possible on the web."
        },
        {
            question: "What is our Mission?",
            answer: "Our mission is to deliver top-notch frontend solutions that combine cutting-edge technology with exceptional design, empowering businesses by enhancing their digital presence and ensuring their web applications are functional, aesthetically pleasing, and easy to use."
        },
        {
            question: "What services do we offer?",
            answer: "We offer a wide range of frontend development services including Single Page Applications, Multi-Page Applications, Responsive Design, SEO Optimization, and Performance Optimization."
        },
        {
            question: "How do we handle project development?",
            answer: "We follow a comprehensive development process that includes planning, design, development, testing, and deployment to ensure high-quality project delivery and client satisfaction."
        }
    ];

    const toggleItem = (index) => {
        setExpandedItems(prev => 
            prev.includes(index) 
                ? prev.filter(item => item !== index)
                : [...prev, index]
        );
    };

    return (
        <div>
            {/* Services Section */}
            <section className="services-section py-5">
                <div className="container text-center">
                    <h2>Services</h2>
                    <p className="text-more mb-5">
                        Explore our range of frontend development services designed to take your web presence to the next level.
                    </p>
                    <div className="row">
                        {/* Service Cards */}
                        {[
                            { title: "Single Page Applications", icon: <FaLaptopCode /> },
                            { title: "Multi-Page Applications", icon: <FaMobileAlt />, highlighted: true },
                            { title: "Responsive Design", icon: <FaSearch /> },
                            { title: "SEO Optimization", icon: <FaPaintBrush /> },
                            { title: "Performance Optimization", icon: <FaBolt /> },
                            { title: "UX/UI Design", icon: <FaNetworkWired /> },
                        ].map((service, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className={`service-card p-4 ${service.highlighted ? "highlighted" : ""}`}>
                                    <div className="service-icon mb-3">{service.icon}</div>
                                    <h5>{service.title}</h5>
                                    <p className="text-more">
                                        We provide {service.title.toLowerCase()} to ensure your web applications are engaging, fast, and user-friendly.
                                    </p>
                                    <button className="btn btn-more">Learn More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Client Testimonials</h2>
                    <div className="row">
                        {[
                            { name: "Sara Ryan", role: "Marketing Manager", text: "The team delivered a stunning website that exceeded our expectations." },
                            { name: "Jack Austin", role: "Project Manager", text: "Their attention to detail and commitment to quality is unparalleled." },
                        ].map((testimonial, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="testimonial-card text-white p-4">
                                    <h5>{testimonial.name}</h5>
                                    <p className="text-muted">{testimonial.role}</p>
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <div className="faq-container">
                <div className="container py-5">
                    {/* Tabs Navigation */}
                    <div className="tabs-wrapper mb-4">
                        <div className="custom-tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="row">
                        <div className="col-md-6">
                            {faqItems.slice(0, 2).map((item, index) => (
                                <div key={index} className="faq-item">
                                    <div 
                                        className="faq-question"
                                        onClick={() => toggleItem(index)}
                                    >
                                        {item.question}
                                        <span className={`expand-icon ${expandedItems.includes(index) ? 'expanded' : ''}`}>
                                            +
                                        </span>
                                    </div>
                                    {expandedItems.includes(index) && (
                                        <div className="faq-answer">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="col-md-6">
                            {faqItems.slice(2, 4).map((item, index) => (
                                <div key={index + 2} className="faq-item">
                                    <div 
                                        className="faq-question"
                                        onClick={() => toggleItem(index + 2)}
                                    >
                                        {item.question}
                                        <span className={`expand-icon ${expandedItems.includes(index + 2) ? 'expanded' : ''}`}>
                                            +
                                        </span>
                                    </div>
                                    {expandedItems.includes(index + 2) && (
                                        <div className="faq-answer">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;