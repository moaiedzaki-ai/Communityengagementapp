import { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import OnboardingFlow from './components/OnboardingFlow';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import MainApp from './components/MainApp';

export type AppScreen = 'onboarding' | 'login' | 'signup' | 'main';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('onboarding');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('main');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingFlow onComplete={() => setCurrentScreen('login')} />;
      case 'login':
        return <LoginScreen onLogin={handleLogin} onSignup={() => setCurrentScreen('signup')} />;
      case 'signup':
        return <SignupScreen onSignup={handleLogin} onLogin={() => setCurrentScreen('login')} />;
      case 'main':
        return <MainApp />;
      default:
        return <OnboardingFlow onComplete={() => setCurrentScreen('login')} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#F7F9FA]">
        {renderScreen()}
      </div>
    </ErrorBoundary>
  );
}

export default App;
