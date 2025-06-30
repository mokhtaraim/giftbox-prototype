import React, { useState } from 'react';

const RankingQuestion = ({ question, selectedAnswers, onAnswerChange }) => {
  const [rankings, setRankings] = useState(
    selectedAnswers || question.options.map((option, index) => ({ option, id: index }))
  );
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedItem === null || draggedItem === dropIndex) return;

    const newRankings = [...rankings];
    const draggedItemData = newRankings[draggedItem];
    
    // Remove the dragged item
    newRankings.splice(draggedItem, 1);
    
    // Insert it at the new position
    newRankings.splice(dropIndex, 0, draggedItemData);
    
    setRankings(newRankings);
    onAnswerChange(newRankings);
    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="ranking-container">
        {rankings.map((item, index) => (
          <div
            key={item.id}
            className={`ranking-item ${draggedItem === index ? 'dragging' : ''}`}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            <div className="ranking-number">{index + 1}</div>
            <div className="drag-handle">⋮⋮</div>
            <span className="ranking-text">{item.option}</span>
          </div>
        ))}
      </div>
      
      <div className="ranking-help">
        <p className="help-text">اسحب العناصر لإعادة ترتيبها - 1 = الأهم، {question.options.length} = الأقل أهمية</p>
      </div>
    </div>
  );
};

export default RankingQuestion; 