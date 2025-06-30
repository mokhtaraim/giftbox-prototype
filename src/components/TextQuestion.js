import React from 'react';

const TextQuestion = ({ question, answer, onAnswerChange }) => {
  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="text-input-container">
        <textarea
          className="text-input"
          placeholder={question.placeholder}
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextQuestion; 