import React from 'react';

const NPSQuestion = ({ question, selectedAnswer, onAnswerChange }) => {
  const topRowNumbers = Array.from({ length: 6 }, (_, i) => i); // 0-5
  const bottomRowNumbers = Array.from({ length: 5 }, (_, i) => i + 6); // 6-10

  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      <div className="nps-container">
        <div className="nps-grid-wrapper">
          {/* Top row: 0-5 */}
          <div className="nps-grid-row">
            {topRowNumbers.map((number) => (
              <div key={number} className="nps-button-wrapper">
                {number === 0 && (
                  <span className="nps-label-above">غير محتمل إطلاقًا</span>
                )}
                <button
                  className={`nps-button ${selectedAnswer === number ? 'selected' : ''}`}
                  onClick={() => onAnswerChange(number)}
                >
                  {number}
                </button>
              </div>
            ))}
          </div>
          {/* Bottom row: 6-10, with empty cell for alignment */}
          <div className="nps-grid-row">
            <div className="nps-button-wrapper nps-empty-cell" />
            {bottomRowNumbers.map((number) => (
              <div key={number} className="nps-button-wrapper">
                {number === 10 && (
                  <span className="nps-label-above">محتمل جدًا</span>
                )}
                <button
                  className={`nps-button ${selectedAnswer === number ? 'selected' : ''}`}
                  onClick={() => onAnswerChange(number)}
                >
                  {number}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NPSQuestion; 