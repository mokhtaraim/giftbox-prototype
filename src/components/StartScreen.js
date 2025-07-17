import React from 'react';

// Start screen component with two survey options
const StartScreen = ({ onSurveySelect, language = 'ar' }) => {
  const texts = {
    ar: {
      title: 'اختر نوع الاستطلاع',
      subtitle: 'يرجى اختيار نوع الاستطلاع الذي تريد المشاركة فيه',
      bankingSurvey: 'استطلاع البنوك',
      bankingSubtitle: 'استطلاع حقيقي عن الخدمات المصرفية',
      questionTypes: 'أنواع الأسئلة',
      questionTypesSubtitle: 'عرض توضيحي لأنواع الأسئلة المختلفة'
    },
    en: {
      title: 'Choose Survey Type',
      subtitle: 'Please select the type of survey you would like to participate in',
      bankingSurvey: 'Banking Survey',
      bankingSubtitle: 'Real survey about banking services',
      questionTypes: 'Question Types',
      questionTypesSubtitle: 'Demo showcasing different question types'
    },
    fr: {
      title: 'Choisir le type d\'enquête',
      subtitle: 'Veuillez sélectionner le type d\'enquête auquel vous souhaitez participer',
      bankingSurvey: 'Enquête bancaire',
      bankingSubtitle: 'Vraie enquête sur les services bancaires',
      questionTypes: 'Types de questions',
      questionTypesSubtitle: 'Démo présentant différents types de questions'
    },
    de: {
      title: 'Umfragetyp wählen',
      subtitle: 'Bitte wählen Sie den Umfragetyp aus, an dem Sie teilnehmen möchten',
      bankingSurvey: 'Banking-Umfrage',
      bankingSubtitle: 'Echte Umfrage über Bankdienstleistungen',
      questionTypes: 'Fragetypen',
      questionTypesSubtitle: 'Demo mit verschiedenen Fragetypen'
    },
    es: {
      title: 'Elegir tipo de encuesta',
      subtitle: 'Por favor selecciona el tipo de encuesta en la que te gustaría participar',
      bankingSurvey: 'Encuesta bancaria',
      bankingSubtitle: 'Encuesta real sobre servicios bancarios',
      questionTypes: 'Tipos de preguntas',
      questionTypesSubtitle: 'Demo que muestra diferentes tipos de preguntas'
    }
  };
  
  const { 
    title, 
    subtitle, 
    bankingSurvey, 
    bankingSubtitle, 
    questionTypes, 
    questionTypesSubtitle 
  } = texts[language] || texts['en'];
  
  return (
    <section className="welcome-section">
      <div className="welcome-card">
        <img 
          src="/1.svg" 
          alt="Survey selection illustration" 
          className="welcome-image"
        />
        
        <div className="welcome-divider"></div>
        
        <h1 className="welcome-title">{title}</h1>
        <p className="welcome-body">{subtitle}</p>
        
        <div className="survey-options">
          <button 
            className="survey-option-btn banking-survey" 
            onClick={() => onSurveySelect('banking')}
          >
            <div className="survey-option-content">
              <h3 className="survey-option-title">{bankingSurvey}</h3>
              <p className="survey-option-subtitle">{bankingSubtitle}</p>
            </div>
          </button>
          
          <button 
            className="survey-option-btn question-types" 
            onClick={() => onSurveySelect('question-types')}
          >
            <div className="survey-option-content">
              <h3 className="survey-option-title">{questionTypes}</h3>
              <p className="survey-option-subtitle">{questionTypesSubtitle}</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartScreen; 