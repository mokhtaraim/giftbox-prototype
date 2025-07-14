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
    <div className="question-container welcome-container" style={{textAlign: 'center'}}>
      <img 
        src="/1.svg" 
        alt="Welcome illustration" 
        style={{
          maxWidth: '100%', 
          height: 'auto', 
          marginBottom: '20px',
          maxHeight: '300px'
        }} 
      />
      <h2 className="question-title">{title}</h2>
      <p className="question-subtitle">{subtitle}</p>
      <button 
        className="welcome-start-button" 
        onClick={onStart}
        style={{
          background: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          padding: '15px 30px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          fontFamily: 'Cairo, sans-serif',
          margin: '30px auto 0',
          display: 'block',
          maxWidth: '200px',
          width: '100%',
          transition: 'background 0.2s ease'
        }}
        onMouseOver={(e) => e.target.style.background = '#5a6268'}
        onMouseOut={(e) => e.target.style.background = '#6c757d'}
      >
        {button}
      </button>
    </div>
  );
};

export default WelcomeScreen; 