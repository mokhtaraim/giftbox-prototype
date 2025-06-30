import React from 'react';

const RadioQuestion = ({ question, selectedAnswer, onAnswerChange }) => {
  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="radio-group">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`radio-option ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => onAnswerChange(index)}
          >
            <div className={`radio-input ${selectedAnswer === index ? 'checked' : ''}`}></div>
            <span className="radio-text">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioQuestion; 