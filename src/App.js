import React, { useState, useEffect } from 'react';
import './index.css';
import { surveyQuestions } from './data/questions';
import Header from './components/Header';
import QuestionLayout from './components/QuestionLayout';
import WelcomeLayout from './components/WelcomeLayout';
import RadioQuestion from './components/RadioQuestion';
import CheckboxQuestion from './components/CheckboxQuestion';
import TextQuestion from './components/TextQuestion';
import NPSQuestion from './components/NPSQuestion';
import ScaleQuestion from './components/ScaleQuestion';
import MultiTextQuestion from './components/MultiTextQuestion';
import GridQuestion from './components/GridQuestion';
import SliderQuestion from './components/SliderQuestion';
import RankingQuestion from './components/RankingQuestion';
import DropdownQuestion from './components/DropdownQuestion';
import CompletionScreen from './components/CompletionScreen';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [language, setLanguage] = useState('ar');

  const currentQuestion = surveyQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === surveyQuestions.length - 1;

  // Check if current question can proceed
  const canProceed = () => {
    const currentAnswer = answers[currentQuestion.id];
    
    if (currentQuestion.type === 'radio' || currentQuestion.type === 'scale') {
      return currentAnswer !== undefined;
    } else if (currentQuestion.type === 'checkbox' || currentQuestion.type === 'dropdown') {
      return currentAnswer && currentAnswer.length > 0;
    } else if (currentQuestion.type === 'text') {
      return currentAnswer && currentAnswer.trim().length > 0;
    } else if (currentQuestion.type === 'nps' || currentQuestion.type === 'slider') {
      return currentAnswer !== undefined;
    } else if (currentQuestion.type === 'multi-text') {
      return currentAnswer && currentAnswer.some(answer => answer.trim().length > 0);
    } else if (currentQuestion.type === 'grid') {
      return currentAnswer && Object.keys(currentAnswer).length === currentQuestion.rows.length;
    } else if (currentQuestion.type === 'ranking') {
      return currentAnswer && Array.isArray(currentAnswer) && currentAnswer.length === currentQuestion.options.length;
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
    setIsStarted(false);
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);


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
      case 'dropdown':
        return (
          <DropdownQuestion
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
      case 'nps':
        return (
          <NPSQuestion
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            onAnswerChange={handleAnswerChange}
          />
        );
      case 'scale':
        return (
          <ScaleQuestion
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            onAnswerChange={handleAnswerChange}
          />
        );
      case 'multi-text':
        return (
          <MultiTextQuestion
            question={currentQuestion}
            answer={currentAnswer || ['']}
            onAnswerChange={handleAnswerChange}
          />
        );
      case 'grid':
        return (
          <GridQuestion
            question={currentQuestion}
            selectedAnswers={currentAnswer || {}}
            onAnswerChange={handleAnswerChange}
          />
        );
      case 'slider':
        return (
          <SliderQuestion
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            onAnswerChange={handleAnswerChange}
          />
        );
      case 'ranking':
        return (
          <RankingQuestion
            question={currentQuestion}
            selectedAnswers={currentAnswer || currentQuestion.options.map((option, index) => ({ option, id: index }))}
            onAnswerChange={handleAnswerChange}
          />
        );
      default:
        return null;
    }
  };

  if (!isStarted) {
    return (
      <WelcomeLayout
        currentQuestion={0}
        totalQuestions={surveyQuestions.length}
        showProgress={false}
        language={language}
        onLanguageChange={setLanguage}
      >
        <WelcomeScreen onStart={() => setIsStarted(true)} language={language} />
      </WelcomeLayout>
    );
  }

  if (isCompleted) {
    return (
      <WelcomeLayout
        currentQuestion={surveyQuestions.length}
        totalQuestions={surveyQuestions.length}
        showProgress={true}
        language={language}
        onLanguageChange={setLanguage}
      >
        <CompletionScreen onRestart={handleRestart} />
      </WelcomeLayout>
    );
  }

  return (
    <QuestionLayout
      currentQuestion={currentQuestionIndex + 1}
      totalQuestions={surveyQuestions.length}
      language={language}
      onLanguageChange={setLanguage}
      onPrevious={handlePrevious}
      onNext={handleNext}
      canProceed={canProceed()}
    >
      {renderQuestion()}
    </QuestionLayout>
  );
}

export default App; 