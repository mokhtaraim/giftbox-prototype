import React, { useState } from 'react';

const Header = ({ currentQuestion, totalQuestions, showProgress = true, language, onLanguageChange }) => {
  const [showModal, setShowModal] = useState(false);
  const progress = (currentQuestion / totalQuestions) * 100;
  const languages = [
    { value: 'ar', label: 'العربية' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'Deutsch' },
    { value: 'es', label: 'Spanish' },
  ];
  const titleTexts = {
    ar: 'أي لغة تحب؟',
    en: 'Which language do you prefer?',
    fr: 'Quelle langue préférez-vous ?',
    de: 'Welche Sprache bevorzugen Sie?',
    es: '¿Qué idioma prefieres?'
  };
  return (
    <>
      <div className="header">
        <div className="spotlight-header">
          <div className="spotlight-text" style={{cursor: 'pointer'}} onClick={() => setShowModal(true)}>
            <span>Spotlight</span>
            <span className="dropdown-arrow">▼</span>
            <span className="globe-icon">🌍</span>
          </div>
        </div>
        {showProgress && (
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-text">{Math.round(progress)}%</div>
          </div>
        )}
      </div>
      {showModal && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => setShowModal(false)}>
          <div style={{background: 'white', padding: '20px', borderRadius: '12px', maxWidth: '90%', width: '300px'}} onClick={e => e.stopPropagation()}>
            <h2 className="question-title" style={{textAlign: 'center'}}>{titleTexts[language] || titleTexts['en']}</h2>
            <div className="radio-group">
              {languages.map(lang => (
                <div key={lang.value} className={`radio-option ${language === lang.value ? 'selected' : ''}`} onClick={() => {
                  onLanguageChange(lang.value);
                  setShowModal(false);
                }}>
                  <div className={`radio-input ${language === lang.value ? 'checked' : ''}`}></div>
                  <span className="radio-text">{lang.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 