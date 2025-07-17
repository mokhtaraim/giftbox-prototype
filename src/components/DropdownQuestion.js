import React, { useState, useRef, useEffect } from 'react';

const DropdownQuestion = ({ question, selectedAnswers, onAnswerChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Filter options based on search term
  const filteredOptions = question.options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle option selection
  const handleOptionClick = (index) => {
    const originalIndex = question.options.indexOf(filteredOptions[index]);
    if (selectedAnswers.includes(originalIndex)) {
      onAnswerChange(selectedAnswers.filter(answer => answer !== originalIndex));
    } else {
      onAnswerChange([...selectedAnswers, originalIndex]);
    }
  };

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Get selected option names for display
  const getSelectedOptionsText = () => {
    if (selectedAnswers.length === 0) {
      return 'اختر من القائمة...';
    }
    if (selectedAnswers.length === 1) {
      return question.options[selectedAnswers[0]];
    }
    return `تم اختيار ${selectedAnswers.length} عنصر`;
  };

  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="dropdown-container" ref={dropdownRef}>
        <div 
          className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="dropdown-text">{getSelectedOptionsText()}</span>
          <div className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 1L7 7L13 1" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-search">
              <input
                ref={searchInputRef}
                type="text"
                className="dropdown-search-input"
                placeholder="ابحث..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="dropdown-options">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => {
                  const originalIndex = question.options.indexOf(option);
                  const isSelected = selectedAnswers.includes(originalIndex);
                  
                  return (
                    <div
                      key={originalIndex}
                      className={`dropdown-option ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleOptionClick(index)}
                    >
                      <div className={`checkbox-input ${isSelected ? 'checked' : ''}`}></div>
                      <span className="dropdown-option-text">{option}</span>
                    </div>
                  );
                })
              ) : (
                <div className="dropdown-no-results">
                  لا توجد نتائج
                </div>
              )}
            </div>
          </div>
        )}

        {/* Selected items display */}
        {selectedAnswers.length > 0 && (
          <div className="dropdown-selected-items">
            {selectedAnswers.map((answerIndex) => (
              <div key={answerIndex} className="selected-item">
                <span>{question.options[answerIndex]}</span>
                <button
                  className="remove-item"
                  onClick={() => onAnswerChange(selectedAnswers.filter(answer => answer !== answerIndex))}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownQuestion; 