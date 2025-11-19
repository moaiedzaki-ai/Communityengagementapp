import { ArrowLeft, Award, TrendingUp, Star, Trophy, Target, Zap, Gift } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import type { MainScreen } from '../MainApp';

interface RewardsScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const badges = [
  { id: 1, name: 'First Report', icon: Award, earned: true, color: '#0FA878' },
  { id: 2, name: 'Community Helper', icon: Star, earned: true, color: '#F59E0B' },
  { id: 3, name: 'Active Member', icon: Zap, earned: true, color: '#3B82F6' },
  { id: 4, name: 'Top Contributor', icon: Trophy, earned: false, color: '#94A3B8' },
  { id: 5, name: 'Volunteer', icon: Target, earned: false, color: '#94A3B8' },
  { id: 6, name: 'Elite Member', icon: Trophy, earned: false, color: '#94A3B8' },
];

const recentActivity = [
  { action: 'Submitted cleanliness report', points: '+10', time: '2 hours ago' },
  { action: 'Participated in community event', points: '+25', time: '1 day ago' },
  { action: 'Completed volunteer task', points: '+50', time: '3 days ago' },
  { action: 'Helped neighbor', points: '+15', time: '5 days ago' },
];

export default function RewardsScreen({ onNavigate }: RewardsScreenProps) {
  const currentPoints = 485;
  const nextLevel = 500;
  const progress = (currentPoints / nextLevel) * 100;
  const level = 3;

  return (
    <div className="min-h-screen flex flex-col px-4 py-4 bg-[#F7F9FA]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('home')}
          className="text-[#4B5563] hover:text-[#111827] hover:bg-[#F2F4F5] rounded-xl h-8 w-8"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex-1">
          <h1 className="text-[#111827] text-xl">Rewards</h1>
          <p className="text-[#6B7280] text-xs">Your achievements & points</p>
        </div>
      </div>

      {/* Points Card */}
      <Card className="bg-gradient-to-br from-[#16A34A] to-emerald-600 border-none p-4 mb-4 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-emerald-100 text-xs mb-0.5">Total Points</p>
            <h2 className="text-white text-3xl">{currentPoints}</h2>
          </div>
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <Award className="w-7 h-7 text-white" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-emerald-100">Level {level}</span>
            <span className="text-emerald-100">{nextLevel - currentPoints} to Level {level + 1}</span>
          </div>
          <Progress value={progress} className="h-1.5 bg-white/20" />
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <Card
          onClick={() => onNavigate('redeem')}
          className="bg-white border-[#D1D5DB] p-3 cursor-pointer hover:border-[#16A34A]/50 transition-all shadow-sm"
        >
          <Gift className="w-6 h-6 text-[#16A34A] mb-1.5" />
          <p className="text-[#111827] text-sm">Redeem</p>
          <p className="text-[#6B7280] text-xs">Use your points</p>
        </Card>
        <Card
          onClick={() => onNavigate('marketplace')}
          className="bg-white border-[#D1D5DB] p-3 cursor-pointer hover:border-[#16A34A]/50 transition-all shadow-sm"
        >
          <TrendingUp className="w-6 h-6 text-[#16A34A] mb-1.5" />
          <p className="text-[#111827] text-sm">Marketplace</p>
          <p className="text-[#6B7280] text-xs">Exclusive offers</p>
        </Card>
      </div>

      {/* Badges */}
      <div className="mb-4">
        <h3 className="text-[#111827] mb-2.5">Your Badges</h3>
        <div className="grid grid-cols-3 gap-2.5">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <Card
                key={badge.id}
                className={`p-3 text-center shadow-sm ${
                  badge.earned
                    ? 'bg-white border-[#D1D5DB]'
                    : 'bg-[#F2F4F5] border-[#D1D5DB] opacity-50'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1.5"
                  style={{ backgroundColor: badge.earned ? `${badge.color}20` : 'rgba(148, 163, 184, 0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: badge.earned ? badge.color : '#9CA3AF' }} />
                </div>
                <p className="text-[#111827] text-[10px]">{badge.name}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-[#111827] mb-2.5">Recent Activity</h3>
        <Card className="bg-white border-[#D1D5DB] p-3 shadow-sm">
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-1.5 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-[#111827] text-xs">{activity.action}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Badge className="bg-[#16A34A]/20 text-[#16A34A] border-none text-[10px] px-2 py-0">
                      {activity.points}
                    </Badge>
                    <span className="text-[#9CA3AF] text-[10px]">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
