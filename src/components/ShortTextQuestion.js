import React from 'react';

const ShortTextQuestion = ({ question, answer, onAnswerChange }) => {
  const maxLength = 20;
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      onAnswerChange(value);
    }
  };

  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="short-text-input-container">
        <input
          type="text"
          className="short-text-input"
          placeholder={question.placeholder || 'اكتب إجابتك هنا...'}
          value={answer}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
        <div className="character-counter">
          {answer.length}/{maxLength}
        </div>
      </div>
    </>
  );
};

export default ShortTextQuestion; 