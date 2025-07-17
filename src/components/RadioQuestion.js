import React, { useState, useEffect } from 'react';

const RadioQuestion = ({ question, selectedAnswer, onAnswerChange }) => {
  const [otherText, setOtherText] = useState('');
  const lastOptionIndex = question.options.length - 1;
  const isOtherSelected = question.hasOtherOption && selectedAnswer === lastOptionIndex;

  // Update parent when other text changes
  useEffect(() => {
    if (isOtherSelected && question.hasOtherOption) {
      onAnswerChange({ optionIndex: lastOptionIndex, otherText: otherText });
    }
  }, [otherText, isOtherSelected, lastOptionIndex, onAnswerChange, question.hasOtherOption]);

  const handleOptionClick = (index) => {
    if (question.hasOtherOption && index === lastOptionIndex) {
      // For "other" option, pass both index and text
      onAnswerChange({ optionIndex: index, otherText: otherText });
    } else {
      // For regular options, pass just the index
      onAnswerChange(index);
      // Clear other text if switching away from other option
      if (question.hasOtherOption) {
        setOtherText('');
      }
    }
  };

  const handleOtherTextChange = (e) => {
    const newText = e.target.value;
    setOtherText(newText);
  };

  // Get the selected option index (handle both old format and new format)
  const getSelectedIndex = () => {
    if (typeof selectedAnswer === 'object' && selectedAnswer?.optionIndex !== undefined) {
      return selectedAnswer.optionIndex;
    }
    return selectedAnswer;
  };

  const selectedIndex = getSelectedIndex();

  // Initialize other text from existing answer
  useEffect(() => {
    if (typeof selectedAnswer === 'object' && selectedAnswer?.otherText) {
      setOtherText(selectedAnswer.otherText);
    }
  }, [selectedAnswer]);

  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className={`radio-group ${question.variant === 'image-focused' ? 'image-focused' : ''}`}>
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isOtherOption = question.hasOtherOption && index === lastOptionIndex;
          
          return (
            <div key={index}>
              <div
                className={`radio-option ${isSelected ? 'selected' : ''} ${question.images ? 'with-image' : ''} ${question.variant === 'image-focused' ? 'image-focused' : ''}`}
                onClick={() => handleOptionClick(index)}
              >
                {question.variant === 'image-focused' ? (
                  <>
                    {question.images && question.images[index] && (
                      <div className="option-image-large">
                        <img src={question.images[index]} alt={option} />
                      </div>
                    )}
                    <div className="option-content">
                      <div className={`radio-input ${isSelected ? 'checked' : ''}`}></div>
                      <span className="radio-text">{option}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`radio-input ${isSelected ? 'checked' : ''}`}></div>
                    {question.images && question.images[index] && (
                      <div className="option-image">
                        <img src={question.images[index]} alt={option} />
                      </div>
                    )}
                    <span className="radio-text">{option}</span>
                  </>
                )}
              </div>
              
              {/* Show text input for "other" option when selected */}
              {isOtherOption && isSelected && (
                <div className="other-text-input-container">
                  <input
                    type="text"
                    className="other-text-input"
                    placeholder={question.otherPlaceholder || 'يرجى التوضيح...'}
                    value={otherText}
                    onChange={handleOtherTextChange}
                    onClick={(e) => e.stopPropagation()} // Prevent triggering option selection
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RadioQuestion; 