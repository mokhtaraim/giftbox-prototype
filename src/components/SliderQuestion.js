import React from 'react';

const SliderQuestion = ({ question, selectedAnswer, onAnswerChange }) => {
  const value = selectedAnswer !== undefined ? selectedAnswer : Math.floor((question.scale.min + question.scale.max) / 2);

  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="slider-container">
        <div className="slider-labels">
          <span className="slider-label">{question.scale.min}</span>
          <span className="slider-label">{question.scale.max}</span>
        </div>
        
        <input
          type="range"
          min={question.scale.min}
          max={question.scale.max}
          value={value}
          onChange={(e) => onAnswerChange(parseInt(e.target.value))}
          className="slider-input"
        />
        
        <div className="slider-value">
          <span className="current-value">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderQuestion; 