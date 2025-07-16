import React from 'react';
import Header from './Header';

const WelcomeLayout = ({ 
  currentQuestion, 
  totalQuestions, 
  showProgress = false,
  language, 
  onLanguageChange,
  children 
}) => {
  return (
    <div className="app">
      <div className="container">
        <Header 
          currentQuestion={currentQuestion} 
          totalQuestions={totalQuestions}
          showProgress={showProgress}
          language={language}
          onLanguageChange={onLanguageChange}
        />
        {children}
      </div>
    </div>
  );
};

export default WelcomeLayout; 