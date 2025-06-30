import React from 'react';

const RankingQuestion = ({ question, selectedAnswers, onAnswerChange }) => {
  const rankings = selectedAnswers || question.options.map((option, index) => ({ option, rank: index + 1 }));

  const handleRankChange = (optionIndex, newRank) => {
    const newRankings = [...rankings];
    const targetRank = parseInt(newRank);
    
    // Update the rank for the selected option
    newRankings[optionIndex].rank = targetRank;
    
    // Adjust other rankings to avoid duplicates
    newRankings.forEach((item, index) => {
      if (index !== optionIndex && item.rank === targetRank) {
        // Find the next available rank
        let nextRank = 1;
        while (newRankings.some((r, i) => i !== index && r.rank === nextRank)) {
          nextRank++;
        }
        item.rank = nextRank;
      }
    });
    
    onAnswerChange(newRankings);
  };

  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="ranking-container">
        {rankings.map((item, index) => (
          <div key={index} className="ranking-item">
            <select
              className="ranking-select"
              value={item.rank}
              onChange={(e) => handleRankChange(index, e.target.value)}
            >
              {question.options.map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <span className="ranking-text">{item.option}</span>
          </div>
        ))}
      </div>
      
      <div className="ranking-help">
        <p className="help-text">1 = الأهم، {question.options.length} = الأقل أهمية</p>
      </div>
    </div>
  );
};

export default RankingQuestion; 