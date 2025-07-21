import React, { useState } from 'react';

const CheckboxQuestionV2 = ({ question, selectedAnswers, onAnswerChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOptionClick = (index) => {
    if (selectedAnswers.includes(index)) {
      onAnswerChange(selectedAnswers.filter(answer => answer !== index));
    } else {
      onAnswerChange([...selectedAnswers, index]);
    }
  };

  const handleZoomClick = (option, image, index) => {
    setModalContent({ option, image, index });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  // Color palette for the sections
  const getColorForIndex = (index) => {
    const colors = [
      '#F5F5F5', // Light gray
      '#1E3A8A', // Dark blue
      '#1F2937', // Dark gray/black
      '#3B82F6', // Bright blue
      '#EF4444', // Red
      '#10B981', // Green
      '#F59E0B', // Orange
      '#8B5CF6', // Purple
    ];
    return colors[index % colors.length];
  };

  const getTextColorForBg = (bgColor) => {
    // Return white text for dark backgrounds, dark text for light backgrounds
    const darkBgs = ['#1E3A8A', '#1F2937', '#EF4444', '#10B981', '#8B5CF6'];
    return darkBgs.includes(bgColor) ? '#FFFFFF' : '#000000';
  };

  return (
    <>
      <h2 className="question-title">{question.question}</h2>
      {question.subtitle && (
        <p className="question-subtitle">{question.subtitle}</p>
      )}
      
      <div className="checkbox-group-v2">
        {question.options.map((option, index) => {
          const bgColor = getColorForIndex(index);
          const textColor = getTextColorForBg(bgColor);
          const isSelected = selectedAnswers.includes(index);
          
          return (
            <div
              key={index}
              className={`checkbox-option-v2 ${isSelected ? 'selected' : ''}`}
              style={{ backgroundColor: bgColor }}
            >
              {/* Checkbox positioned in top-right corner */}
              <div className="checkbox-corner-v2">
                <div className={`checkbox-input-v2 ${isSelected ? 'checked' : ''}`}></div>
              </div>

              {/* Zoom icon positioned in top-right */}
              <div 
                className="zoom-icon-v2"
                onClick={() => handleZoomClick(option, question.images?.[index], index)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                </svg>
              </div>

              {/* Logo/Image container */}
              {question.images && question.images[index] && (
                <div className="option-image-v2">
                  <img src={question.images[index]} alt={option} />
                </div>
              )}
              
              {/* Text content */}
              <div 
                className="option-text-container-v2"
                style={{ color: textColor }}
                onClick={() => handleOptionClick(index)}
              >
                <span className="option-text-v2">{option}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && modalContent && (
        <div className="modal-overlay-v2" onClick={closeModal}>
          <div className="modal-content-v2" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-v2">
              <h3>{modalContent.option}</h3>
              <button className="modal-close-v2" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="modal-body-v2">
              {modalContent.image && (
                <img 
                  src={modalContent.image} 
                  alt={modalContent.option}
                  className="modal-image-v2"
                />
              )}
              <p className="modal-text-v2">{modalContent.option}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckboxQuestionV2; 