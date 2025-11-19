import { useState } from 'react';
import { Home, FileText, Award, Users, User } from 'lucide-react';
import HomeMapScreen from './screens/HomeMapScreen';
import ReportFlowScreen from './screens/ReportFlowScreen';
import ReportTrackingScreen from './screens/ReportTrackingScreen';
import RewardsScreen from './screens/RewardsScreen';
import RedeemRewardsScreen from './screens/RedeemRewardsScreen';
import BusinessMarketplaceScreen from './screens/BusinessMarketplaceScreen';
import CommunityFeedScreen from './screens/CommunityFeedScreen';
import VolunteerScreen from './screens/VolunteerScreen';
import ForumScreen from './screens/ForumScreen';
import ProfileScreen from './screens/ProfileScreen';
import ManagerDashboardScreen from './screens/ManagerDashboardScreen';
import AIPredictionsScreen from './screens/AIPredictionsScreen';
import IoTDashboardScreen from './screens/IoTDashboardScreen';

export type MainScreen = 
  | 'home' 
  | 'report' 
  | 'report-tracking'
  | 'rewards' 
  | 'redeem'
  | 'marketplace'
  | 'community' 
  | 'volunteer'
  | 'forum'
  | 'profile'
  | 'manager'
  | 'ai-predictions'
  | 'iot';

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState<MainScreen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeMapScreen onNavigate={setCurrentScreen} />;
      case 'report':
        return <ReportFlowScreen onNavigate={setCurrentScreen} />;
      case 'report-tracking':
        return <ReportTrackingScreen onNavigate={setCurrentScreen} />;
      case 'rewards':
        return <RewardsScreen onNavigate={setCurrentScreen} />;
      case 'redeem':
        return <RedeemRewardsScreen onNavigate={setCurrentScreen} />;
      case 'marketplace':
        return <BusinessMarketplaceScreen onNavigate={setCurrentScreen} />;
      case 'community':
        return <CommunityFeedScreen onNavigate={setCurrentScreen} />;
      case 'volunteer':
        return <VolunteerScreen onNavigate={setCurrentScreen} />;
      case 'forum':
        return <ForumScreen onNavigate={setCurrentScreen} />;
      case 'profile':
        return <ProfileScreen onNavigate={setCurrentScreen} />;
      case 'manager':
        return <ManagerDashboardScreen onNavigate={setCurrentScreen} />;
      case 'ai-predictions':
        return <AIPredictionsScreen onNavigate={setCurrentScreen} />;
      case 'iot':
        return <IoTDashboardScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeMapScreen onNavigate={setCurrentScreen} />;
    }
  };

  const navItems = [
    { id: 'home' as MainScreen, icon: Home, label: 'Home' },
    { id: 'report' as MainScreen, icon: FileText, label: 'Report' },
    { id: 'rewards' as MainScreen, icon: Award, label: 'Rewards' },
    { id: 'community' as MainScreen, icon: Users, label: 'Community' },
    { id: 'profile' as MainScreen, icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen flex flex-col mx-auto relative" style={{ width: '430px', height: '932px', maxWidth: '430px', overflow: 'hidden' }}>
      {/* Main Content with Global Scale */}
      <div 
        className="flex-1 overflow-auto pb-[110px]"
        style={{
          transform: 'scale(0.6375)',
          transformOrigin: 'top center',
          width: '674.5px',
          marginLeft: '-122.25px',
          height: '1462px'
        }}
      >
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <nav 
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-[#D1D5DB] mx-auto" 
        style={{ 
          width: '430px', 
          maxWidth: '430px',
          height: '90px',
          boxShadow: '0px 2px 10px rgba(0,0,0,0.06)',
          paddingBottom: '20px',
          transform: 'scale(0.6375)',
          transformOrigin: 'bottom center'
        }}
      >
        <div className="flex items-center justify-around px-1 h-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all ${
                  isActive
                    ? 'text-[#16A34A]'
                    : 'text-[#6B7280] hover:text-[#111827]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''}`} />
                <span style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 500 }}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}