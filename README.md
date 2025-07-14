# Giftbox Survey Prototype

A React-based survey application prototype with Arabic language support, designed for both mobile and web platforms.

<!-- Updated for GitHub push test -->

## Features

- **Multiple Question Types**: Radio buttons, checkboxes, and text input
- **Arabic Language Support**: Right-to-left (RTL) layout and Arabic font
- **Mobile-First Design**: Responsive design optimized for mobile devices
- **Touch Gestures**: Swipe up to navigate to the next question
- **Progress Tracking**: Visual progress bar and dots indicator
- **Real-time Validation**: Disable navigation until questions are answered

## Getting Started

### Prerequisites

- Node.js (14.0.0 or later)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment on Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
src/
  components/          # React components
    Header.js         # Mobile browser header simulation
    RadioQuestion.js  # Single choice questions
    CheckboxQuestion.js # Multiple choice questions
    TextQuestion.js   # Text input questions
    Navigation.js     # Navigation with progress dots
    CompletionScreen.js # Survey completion screen
  data/
    questions.js      # Survey questions data
  App.js              # Main application component
  index.js            # Application entry point
  index.css           # Global styles
```

## Customization

### Adding New Questions

Edit `src/data/questions.js` to add or modify survey questions:

```javascript
{
  id: 7,
  type: 'radio', // 'radio', 'checkbox', or 'text'
  question: 'Your question in Arabic',
  subtitle: 'Optional subtitle',
  options: ['Option 1', 'Option 2'] // For radio/checkbox only
}
```

### Styling

Modify `src/index.css` to change:
- Colors and themes
- Layout and spacing
- Typography
- Mobile responsiveness

### Language Support

The app is currently configured for Arabic (RTL). To add English support:
1. Update the HTML `lang` and `dir` attributes
2. Modify CSS for LTR layout
3. Add language toggle functionality

## Technologies Used

- React 18
- CSS3 with Flexbox
- Google Fonts (Cairo)
- Mobile touch gesture detection
- Progressive Web App features

## Browser Support

- Modern mobile browsers (iOS Safari, Chrome Mobile)
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Progressive Web App compatible

## License

This project is a prototype for demonstration purposes. 