import React, { useState } from 'react';

const Header = ({ currentQuestion, totalQuestions, showProgress = true, language, onLanguageChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const progress = (currentQuestion / totalQuestions) * 100;
  
  const languages = [
    { value: 'ar', label: 'العربية' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'es', label: 'Español' },
    { value: 'it', label: 'Italiano' },
    { value: 'pt', label: 'Português' },
  ];

  const currentLanguageLabel = languages.find(lang => lang.value === language)?.label || 'English';

  return (
    <>
      <div className="header">
        <div className="header-content">
          {/* Left spacer for centering */}
          <div className="header-left"></div>
          
          {/* Centered Spotlight */}
          <div className="spotlight-header">
            <div className="spotlight-text">
              <span>Spotlight</span>
            </div>
          </div>
          
          {/* Right-positioned language selector */}
          <div className="language-selector">
            <div 
              className="language-dropdown-trigger" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="globe-icon">🌐</span>
              <span className="current-language">{currentLanguageLabel}</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            
            {showDropdown && (
              <div className="language-dropdown">
                {languages.map(lang => (
                  <div 
                    key={lang.value} 
                    className={`language-option ${language === lang.value ? 'selected' : ''}`}
                    onClick={() => {
                      onLanguageChange(lang.value);
                      setShowDropdown(false);
                    }}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
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
          </div>
        )}
      </div>
      
      {/* Overlay to close dropdown when clicking outside */}
      {showDropdown && (
        <div 
          className="dropdown-overlay" 
          onClick={() => setShowDropdown(false)}
        />
      )}
    </>
  );
};

export default Header; 