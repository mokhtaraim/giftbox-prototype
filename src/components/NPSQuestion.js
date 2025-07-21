import React from 'react';

const NPSQuestion = ({ question, selectedAnswer, onAnswerChange }) => {
  const topRowNumbers = Array.from({ length: 6 }, (_, i) => i); // 0-5
  const bottomRowNumbers = Array.from({ length: 5 }, (_, i) => i + 6); // 6-10

  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="nps-container">
        <div className="nps-scale-wrapper">
          {/* Top row: 0-5 */}
          <div className="nps-scale nps-scale-top">
            {topRowNumbers.map((number) => (
              <button
                key={number}
                className={`nps-button ${selectedAnswer === number ? 'selected' : ''}`}
                onClick={() => onAnswerChange(number)}
              >
                {number}
              </button>
            ))}
          </div>
          
          {/* Bottom row: 6-10 */}
          <div className="nps-scale nps-scale-bottom">
            {bottomRowNumbers.map((number) => (
              <button
                key={number}
                className={`nps-button ${selectedAnswer === number ? 'selected' : ''}`}
                onClick={() => onAnswerChange(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
        
        <div className="nps-labels">
          <div className="nps-label-wrapper nps-label-left-wrapper">
            <span className="nps-label-number">0</span>
            <span className="nps-label-text">غير محتمل إطلاقًا</span>
          </div>
          <div className="nps-label-wrapper nps-label-right-wrapper">
            <span className="nps-label-number">10</span>
            <span className="nps-label-text">محتمل جدًا</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NPSQuestion; 