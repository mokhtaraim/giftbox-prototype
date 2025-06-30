import React from 'react';

const MultiTextQuestion = ({ question, answer, onAnswerChange }) => {
  const answers = answer || [''];

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    onAnswerChange(newAnswers);
  };

  const addAnswer = () => {
    onAnswerChange([...answers, '']);
  };

  const removeAnswer = (index) => {
    if (answers.length > 1) {
      const newAnswers = answers.filter((_, i) => i !== index);
      onAnswerChange(newAnswers);
    }
  };

  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="multi-text-container">
        {answers.map((answer, index) => (
          <div key={index} className="multi-text-item">
            <textarea
              className="multi-text-input"
              placeholder={`${question.placeholder} ${index + 1}`}
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
            {answers.length > 1 && (
              <button 
                className="remove-answer-btn"
                onClick={() => removeAnswer(index)}
                type="button"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        
        <button 
          className="add-answer-btn"
          onClick={addAnswer}
          type="button"
        >
          + إضافة إجابة أخرى
        </button>
      </div>
    </div>
  );
};

export default MultiTextQuestion; 