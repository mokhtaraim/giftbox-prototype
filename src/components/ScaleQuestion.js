import React from 'react';

const ScaleQuestion = ({ question, selectedAnswer, onAnswerChange }) => {
  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="scale-group">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`scale-option ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => onAnswerChange(index)}
          >
            <div className={`scale-input ${selectedAnswer === index ? 'checked' : ''}`}></div>
            <span className="scale-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ScaleQuestion; 