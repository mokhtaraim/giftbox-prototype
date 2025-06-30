import React from 'react';

const CompletionScreen = ({ onRestart }) => {
  return (
    <div className="completion-screen">
      <div className="completion-icon">
        🎉
      </div>
      
      <h2 className="completion-title">
        شكراً لك!
      </h2>
      
      <p className="completion-subtitle">
        تم إرسال إجاباتك بنجاح. لقد حصلت على مكافأة قدرها 50 نقطة!
      </p>
      
      <button 
        className="restart-button"
        onClick={onRestart}
      >
        ابدأ استطلاع جديد
      </button>
    </div>
  );
};

export default CompletionScreen; 