import React from 'react';

const GridQuestion = ({ question, selectedAnswers, onAnswerChange }) => {
  const answers = selectedAnswers || {};

  const handleCellClick = (rowIndex, columnIndex) => {
    const newAnswers = {
      ...answers,
      [rowIndex]: columnIndex
    };
    onAnswerChange(newAnswers);
  };

  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="grid-container">
        <div className="grid-table">
          {/* Header row */}
          <div className="grid-header">
            <div className="grid-cell grid-cell-empty"></div>
            {question.columns.map((column, index) => (
              <div key={index} className="grid-cell grid-cell-header">
                {column}
              </div>
            ))}
          </div>
          
          {/* Data rows */}
          {question.rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              <div className="grid-cell grid-cell-row-header">
                {row}
              </div>
              {question.columns.map((_, columnIndex) => (
                <div 
                  key={columnIndex} 
                  className="grid-cell grid-cell-data"
                  onClick={() => handleCellClick(rowIndex, columnIndex)}
                >
                  <div className={`grid-radio ${answers[rowIndex] === columnIndex ? 'checked' : ''}`}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridQuestion; 