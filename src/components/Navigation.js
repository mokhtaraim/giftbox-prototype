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