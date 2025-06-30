import React, { useState, useEffect } from 'react';
import './index.css';
import { surveyQuestions } from './data/questions';
import Header from './components/Header';
import RadioQuestion from './components/RadioQuestion';
import CheckboxQuestion from './components/CheckboxQuestion';
import TextQuestion from './components/TextQuestion';
import Navigation from './components/Navigation';
import CompletionScreen from './components/CompletionScreen';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = surveyQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === surveyQuestions.length - 1;

  // Check if current question can proceed
  const canProceed = () => {
    const currentAnswer = answers[currentQuestion.id];
    
    if (currentQuestion.type === 'radio') {
      return currentAnswer !== undefined;
    } else if (currentQuestion.type === 'checkbox') {
      return currentAnswer && currentAnswer.length > 0;
    } else if (currentQuestion.type === 'text') {
      return currentAnswer && currentAnswer.trim().length > 0;
    }
    
    return false;
  };

  // Handle answer changes
  const handleAnswerChange = (answer) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  // Navigate to next question
  const handleNext = () => {
    if (isLastQuestion) {
      setIsCompleted(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Restart survey
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCompleted(false);
  };

  // Handle swipe up gesture
  useEffect(() => {
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;
      
      // Swipe up to go to next question (minimum 50px swipe)
      if (deltaY > 50 && canProceed()) {
        handleNext();
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentQuestionIndex, answers]);

  // Render current question based on type
  const renderQuestion = () => {
    const currentAnswer = answers[currentQuestion.id];

    switch (currentQuestion.type) {
      case 'radio':
        return (
          <RadioQuestion
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            onAnswerChange={handleAnswerChange}
          />
        );
      case 'checkbox':
        return (
          <CheckboxQuestion
            question={currentQuestion}
            selectedAnswers={currentAnswer || []}
            onAnswerChange={handleAnswerChange}
          />
        );
      case 'text':
        return (
          <TextQuestion
            question={currentQuestion}
            answer={currentAnswer || ''}
            onAnswerChange={handleAnswerChange}
          />
        );
      default:
        return null;
    }
  };

  if (isCompleted) {
    return (
      <div className="app">
        <div className="container">
          <Header 
            currentQuestion={surveyQuestions.length} 
            totalQuestions={surveyQuestions.length} 
          />
          <CompletionScreen onRestart={handleRestart} />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <Header 
          currentQuestion={currentQuestionIndex + 1} 
          totalQuestions={surveyQuestions.length} 
        />
        
        {renderQuestion()}
        
        <Navigation
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={surveyQuestions.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          canProceed={canProceed()}
        />
      </div>
    </div>
  );
}

export default App; 