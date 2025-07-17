import React from 'react';

const NumericQuestion = ({ question, answer, onAnswerChange }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and dots
    const numericPattern = /^[0-9.]*$/;
    
    if (numericPattern.test(value)) {
      onAnswerChange(value);
    }
  };

  const handleKeyPress = (e) => {
    // Prevent non-numeric characters except dots
    const char = String.fromCharCode(e.which);
    if (!/[0-9.]/.test(char)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="numeric-input-container">
        <input
          type="text"
          className="numeric-input"
          placeholder={question.placeholder || 'أدخل رقم...'}
          value={answer}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          inputMode="decimal"
        />
      </div>
    </>
  );
};

export default NumericQuestion; 