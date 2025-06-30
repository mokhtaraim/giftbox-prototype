import React from 'react';

const Header = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="header">
      <div className="spotlight-header">
        <div className="spotlight-text">
          <span>Spotlight</span>
        </div>
      </div>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default Header; 