import React from 'react';

const Navigation = ({ 
  currentQuestion, 
  totalQuestions, 
  onPrevious, 
  onNext, 
  canProceed 
}) => {
  return (
    <div className="navigation">
      <button 
        className="nav-button back"
        onClick={onPrevious}
        disabled={currentQuestion === 1}
      >
        ⬆️
      </button>
      
      <div className="progress-dots">
        {Array.from({ length: totalQuestions }, (_, index) => (
          <div
            key={index}
            className={`progress-dot ${
              index + 1 === currentQuestion 
                ? 'active' 
                : index + 1 < currentQuestion 
                ? 'completed' 
                : ''
            }`}
          ></div>
        ))}
      </div>
      
      <button 
        className="nav-button next"
        onClick={onNext}
        disabled={!canProceed}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation; 