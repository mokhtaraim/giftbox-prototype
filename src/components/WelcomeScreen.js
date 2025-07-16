import React from 'react';

// Welcome screen component with multi-language support
const WelcomeScreen = ({ onStart, language = 'ar' }) => {
  const texts = {
    ar: {
      title: 'مرحبا!',
      subtitle: 'شكراً على مشاركتك في هذا الاستطلاع. سيستغرق الأمر دقائق قليلة فقط، وستحصل على مكافأة فورية عند إكماله.',
      button: 'ابدأ الان'
    },
    en: {
      title: 'Hello!',
      subtitle: 'Thank you for participating in this survey. It will only take a few minutes, and you will receive an instant reward upon completion.',
      button: 'Get Started'
    },
    fr: {
      title: 'Bonjour!',
      subtitle: 'Merci de participer à ce sondage. Cela ne prendra que quelques minutes, et vous recevrez une récompense instantanée à la fin.',
      button: 'Commencer'
    },
    de: {
      title: 'Hallo!',
      subtitle: 'Vielen Dank für Ihre Teilnahme an dieser Umfrage. Es dauert nur ein paar Minuten, und Sie erhalten eine sofortige Belohnung nach Abschluss.',
      button: 'Loslegen'
    },
    es: {
      title: '¡Hola!',
      subtitle: 'Gracias por participar en esta encuesta. Solo tomará unos minutos, y recibirás una recompensa instantánea al completarla.',
      button: 'Empezar'
    }
  };
  
  const { title, subtitle, button } = texts[language] || texts['en'];
  
  return (
    <section className="welcome-section">
      <div className="welcome-card">
        <img 
          src="/1.svg" 
          alt="Welcome illustration" 
          className="welcome-image"
        />
        
        <div className="welcome-divider"></div>
        
        <h1 className="welcome-title">{title}</h1>
        <p className="welcome-body">{subtitle}</p>
        
        <button 
          className="welcome-btn" 
          onClick={onStart}
        >
          {button}
        </button>
      </div>
    </section>
  );
};

export default WelcomeScreen; 