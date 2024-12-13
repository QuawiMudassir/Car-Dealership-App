import React from 'react';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <div className="faq-section">
        <Question title="Meet Our Team">
          <p>1. Member One<br />2. Member Two<br />3. Member Three</p>
        </Question>
        <Question title="Technologies we used">
          <p>React, Tailwind, Framer Motion, and more.</p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({ title, children }) => {
  return (
    <div className="question">
      <button className="question-title">{title}</button>
      <div className="question-content">{children}</div>
    </div>
  );
};

export default FAQ;
