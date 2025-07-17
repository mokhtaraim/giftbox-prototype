import React from 'react';

const RadioQuestion = ({ question, selectedAnswer, onAnswerChange }) => {
  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="radio-group">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`radio-option ${selectedAnswer === index ? 'selected' : ''} ${question.images ? 'with-image' : ''}`}
            onClick={() => onAnswerChange(index)}
          >
            <div className={`radio-input ${selectedAnswer === index ? 'checked' : ''}`}></div>
            {question.images && question.images[index] && (
              <div className="option-image">
                <img src={question.images[index]} alt={option} />
              </div>
            )}
            <span className="radio-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioQuestion; 