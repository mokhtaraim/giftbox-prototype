import React from 'react';

const CheckboxQuestion = ({ question, selectedAnswers, onAnswerChange }) => {
  const handleOptionClick = (index) => {
    if (selectedAnswers.includes(index)) {
      onAnswerChange(selectedAnswers.filter(answer => answer !== index));
    } else {
      onAnswerChange([...selectedAnswers, index]);
    }
  };

  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className={`checkbox-group ${question.variant === 'image-mid' ? 'image-mid' : ''}`}>
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`checkbox-option ${selectedAnswers.includes(index) ? 'selected' : ''} ${question.images ? 'with-image' : ''} ${question.variant === 'image-mid' ? 'image-mid' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            {question.variant === 'image-mid' ? (
              <>
                {/* Checkbox positioned in top-right corner */}
                <div className="checkbox-corner">
                  <div className={`checkbox-input ${selectedAnswers.includes(index) ? 'checked' : ''}`}></div>
                </div>
                
                {/* Logo container */}
                {question.images && question.images[index] && (
                  <div className="option-image-mid">
                    <img src={question.images[index]} alt={option} />
                  </div>
                )}
                
                {/* Text content */}
                <div className="option-text-container">
                  <span className="radio-text">{option}</span>
                </div>
              </>
            ) : (
              <>
                <div className={`checkbox-input ${selectedAnswers.includes(index) ? 'checked' : ''}`}></div>
                {question.images && question.images[index] && (
                  <div className="option-image">
                    <img src={question.images[index]} alt={option} />
                  </div>
                )}
                <span className="radio-text">{option}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckboxQuestion; 