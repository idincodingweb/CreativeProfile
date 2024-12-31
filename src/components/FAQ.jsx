import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/FAQ.css';

const FAQ = () => {
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
      question: "What is Cybvini's Vision?",
      answer: "Cybvini aims to build a virtual reality environment, a real metaverse for business activities, where all users can easily bring their business activities to the network operations, increasing stakeholder efficiency with the extensive support of technologies."
    },
    {
      question: "What is Cybvini's Mission?",
      answer: "Cybvini is conceptualized around the development of the digital society and digital economy of the world according to the comprehensive digital transformation model."
    },
    {
      question: "What services does Cybvini offer?",
      answer: "Cybvini offers a wide range of services including virtual reality solutions, digital transformation consulting, and smart city development."
    },
    {
      question: "How does Cybvini handle project development?",
      answer: "Cybvini follows a comprehensive development process that includes planning, design, development, testing, and deployment to ensure high-quality project delivery."
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
  );
};

export default FAQ;