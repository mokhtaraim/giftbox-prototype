import React, { useState, useEffect } from 'react';
import './index.css';
import { surveyQuestions } from './data/questions';
import { bankingQuestions } from './data/bankingQuestions';
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
import ShortTextQuestion from './components/ShortTextQuestion';
import NumericQuestion from './components/NumericQuestion';
import CompletionScreen from './components/CompletionScreen';
import WelcomeScreen from './components/WelcomeScreen';
import StartScreen from './components/StartScreen';
import BankingWelcomeScreen from './components/BankingWelcomeScreen';

function App() {
  const [surveyType, setSurveyType] = useState(null); // 'banking' or 'question-types'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [language, setLanguage] = useState('ar');

  // Get current questions based on survey type
  const currentQuestions = surveyType === 'banking' ? bankingQuestions : surveyQuestions;
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;

  // Check if current question can proceed - now always allows proceeding
  const canProceed = () => {
    return true; // Allow proceeding without answering
  };

  // Handle answer validation for questions with "other" option
  const isAnswerComplete = (answer, question) => {
    if (!answer) return false;
    
    // For questions with "other" option
    if (question.hasOtherOption && typeof answer === 'object') {
      const lastOptionIndex = question.options.length - 1;
      // If "other" is selected, check if text is provided
      if (answer.optionIndex === lastOptionIndex) {
        return answer.otherText && answer.otherText.trim().length > 0;
      }
      return true; // Other options selected
    }
    
    return true; // Regular questions
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
    setSurveyType(null);
  };

  // Handle survey type selection
  const handleSurveySelect = (type) => {
    setSurveyType(type);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCompleted(false);
    setIsStarted(false);
  };

  // Start the selected survey
  const handleStart = () => {
    setIsStarted(true);
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
      case 'short-text':
        return (
          <ShortTextQuestion
            question={currentQuestion}
            answer={currentAnswer || ''}
            onAnswerChange={handleAnswerChange}
          />
        );
      case 'numeric':
        return (
          <NumericQuestion
            question={currentQuestion}
            answer={currentAnswer || ''}
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
      case 'info':
        // For placeholder banking questions
        return (
          <div className="info-question">
            <h2>{currentQuestion.question}</h2>
            <p>{currentQuestion.subtitle}</p>
          </div>
        );
      default:
        return null;
    }
  };

  // Show start screen if no survey type is selected
  if (!surveyType) {
    return (
      <WelcomeLayout
        currentQuestion={0}
        totalQuestions={0}
        showProgress={false}
        language={language}
        onLanguageChange={setLanguage}
      >
        <StartScreen onSurveySelect={handleSurveySelect} language={language} />
      </WelcomeLayout>
    );
  }

  // Show welcome screen for selected survey type if not started
  if (!isStarted) {
    const WelcomeComponent = surveyType === 'banking' ? BankingWelcomeScreen : WelcomeScreen;
    return (
      <WelcomeLayout
        currentQuestion={0}
        totalQuestions={currentQuestions.length}
        showProgress={false}
        language={language}
        onLanguageChange={setLanguage}
      >
        <WelcomeComponent onStart={handleStart} language={language} />
      </WelcomeLayout>
    );
  }

  // Show completion screen
  if (isCompleted) {
    return (
      <WelcomeLayout
        currentQuestion={currentQuestions.length}
        totalQuestions={currentQuestions.length}
        showProgress={true}
        language={language}
        onLanguageChange={setLanguage}
      >
        <CompletionScreen onRestart={handleRestart} />
      </WelcomeLayout>
    );
  }

  // Show questions
  return (
    <QuestionLayout
      currentQuestion={currentQuestionIndex + 1}
      totalQuestions={currentQuestions.length}
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