import React from 'react';

// Banking survey welcome screen component with multi-language support
const BankingWelcomeScreen = ({ onStart, language = 'ar' }) => {
  const texts = {
    ar: {
      title: 'مرحبا بك في استطلاع البنوك!',
      subtitle: 'شكراً لمشاركتك في استطلاعنا حول الخدمات المصرفية. سيساعدنا رأيك في تحسين تجربتك المصرفية. الاستطلاع سيستغرق حوالي 10-15 دقيقة.',
      button: 'ابدأ الاستطلاع'
    },
    en: {
      title: 'Welcome to the Banking Survey!',
      subtitle: 'Thank you for participating in our banking services survey. Your opinion will help us improve your banking experience. The survey will take approximately 10-15 minutes.',
      button: 'Start Survey'
    },
    fr: {
      title: 'Bienvenue dans l\'enquête bancaire!',
      subtitle: 'Merci de participer à notre enquête sur les services bancaires. Votre opinion nous aidera à améliorer votre expérience bancaire. L\'enquête prendra environ 10-15 minutes.',
      button: 'Commencer l\'enquête'
    },
    de: {
      title: 'Willkommen bei der Banking-Umfrage!',
      subtitle: 'Vielen Dank für Ihre Teilnahme an unserer Umfrage zu Bankdienstleistungen. Ihre Meinung wird uns helfen, Ihre Banking-Erfahrung zu verbessern. Die Umfrage dauert etwa 10-15 Minuten.',
      button: 'Umfrage starten'
    },
    es: {
      title: '¡Bienvenido a la encuesta bancaria!',
      subtitle: 'Gracias por participar en nuestra encuesta sobre servicios bancarios. Tu opinión nos ayudará a mejorar tu experiencia bancaria. La encuesta tomará aproximadamente 10-15 minutos.',
      button: 'Iniciar encuesta'
    }
  };
  
  const { title, subtitle, button } = texts[language] || texts['en'];
  
  return (
    <section className="welcome-section">
      <div className="welcome-card">
        <img 
          src="/8.svg" 
          alt="Banking survey illustration" 
          className="welcome-image"
        />
        
        <div className="welcome-divider"></div>
        
        <h1 className="welcome-title">{title}</h1>
        <p className="welcome-body">{subtitle}</p>
        
        <button 
          className="welcome-btn banking-btn" 
          onClick={onStart}
        >
          {button}
        </button>
      </div>
    </section>
  );
};

export default BankingWelcomeScreen; 