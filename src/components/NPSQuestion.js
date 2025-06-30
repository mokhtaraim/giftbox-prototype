import React from 'react';

const NPSQuestion = ({ question, selectedAnswer, onAnswerChange }) => {
  const numbers = Array.from({ length: 11 }, (_, i) => i);

  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="nps-container">
        <div className="nps-scale">
          {numbers.map((number) => (
            <button
              key={number}
              className={`nps-button ${selectedAnswer === number ? 'selected' : ''}`}
              onClick={() => onAnswerChange(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <div className="nps-labels">
          <span className="nps-label-left">غير محتمل إطلاقًا</span>
          <span className="nps-label-right">محتمل جدًا</span>
        </div>
      </div>
    </div>
  );
};

export default NPSQuestion; 