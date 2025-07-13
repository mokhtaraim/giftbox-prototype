import React from 'react';

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
    <div className="question-container" style={{textAlign: 'center'}}>
      <img src="/8.svg" alt="Welcome illustration" style={{maxWidth: '100%', height: 'auto', marginBottom: '20px'}} />
      <h2 className="question-title">{title}</h2>
      <p className="question-subtitle">{subtitle}</p>
      <button className="nav-button next" onClick={onStart} style={{margin: '30px auto 0', display: 'block'}}>
        {button}
      </button>
    </div>
  );
};

export default WelcomeScreen; 