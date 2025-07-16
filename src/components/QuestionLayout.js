import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const QuestionLayout = ({ 
  currentQuestion, 
  totalQuestions, 
  language, 
  onLanguageChange, 
  onPrevious, 
  onNext, 
  canProceed,
  children 
}) => {
  return (
    <div className="app">
      <div className="container">
        <Header 
          currentQuestion={currentQuestion} 
          totalQuestions={totalQuestions}
          showProgress={true}
          language={language}
          onLanguageChange={onLanguageChange}
        />
        
        <div className="unified-question-container">
          <div className="question-content">
            {children}
          </div>
          
          <Navigation
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onPrevious={onPrevious}
            onNext={onNext}
            canProceed={canProceed}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionLayout; 