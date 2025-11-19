import { ArrowLeft, Gift, Coffee, ShoppingBag, Ticket, Utensils, Dumbbell } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import type { MainScreen } from '../MainApp';

interface RedeemRewardsScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const rewards = [
  {
    id: 1,
    title: '20% Off at Café Verde',
    category: 'food',
    points: 50,
    icon: Coffee,
    color: '#F59E0B',
    business: 'Café Verde',
  },
  {
    id: 2,
    title: 'Free Gym Session',
    category: 'fitness',
    points: 100,
    icon: Dumbbell,
    color: '#EF4444',
    business: 'ROSHN Fitness',
  },
  {
    id: 3,
    title: '15% Off Groceries',
    category: 'shopping',
    points: 75,
    icon: ShoppingBag,
    color: '#0FA878',
    business: 'Community Market',
  },
  {
    id: 4,
    title: 'Movie Ticket Discount',
    category: 'entertainment',
    points: 120,
    icon: Ticket,
    color: '#8B5CF6',
    business: 'Cinema Hub',
  },
  {
    id: 5,
    title: 'Restaurant Voucher SAR 50',
    category: 'food',
    points: 200,
    icon: Utensils,
    color: '#F59E0B',
    business: 'Dining Collection',
  },
  {
    id: 6,
    title: 'ROSHN Event Access',
    category: 'events',
    points: 150,
    icon: Gift,
    color: '#3B82F6',
    business: 'ROSHN Events',
  },
];

export default function RedeemRewardsScreen({ onNavigate }: RedeemRewardsScreenProps) {
  const userPoints = 485;

  return (
    <div className="min-h-screen flex flex-col px-6 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('rewards')}
          className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-white text-2xl">Redeem Rewards</h1>
          <p className="text-slate-400 text-sm">You have {userPoints} points</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="flex-1">
        <TabsList className="grid w-full grid-cols-3 bg-slate-900 border-slate-700 mb-6">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#0FA878] data-[state=active]:text-white">
            All
          </TabsTrigger>
          <TabsTrigger value="available" className="data-[state=active]:bg-[#0FA878] data-[state=active]:text-white">
            Available
          </TabsTrigger>
          <TabsTrigger value="locked" className="data-[state=active]:bg-[#0FA878] data-[state=active]:text-white">
            Locked
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3">
          {rewards.map((reward) => {
            const Icon = reward.icon;
            const canAfford = userPoints >= reward.points;
            return (
              <Card
                key={reward.id}
                className={`bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-4 ${
                  !canAfford ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${reward.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: reward.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1">{reward.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{reward.business}</p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-[#0FA878]/20 text-[#0FA878] border-none">
                        {reward.points} points
                      </Badge>
                      {!canAfford && (
                        <Badge className="bg-slate-800 text-slate-400 border-none">
                          Need {reward.points - userPoints} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button
                    disabled={!canAfford}
                    className="bg-gradient-to-r from-[#0FA878] to-emerald-600 hover:from-[#0FB885] hover:to-emerald-500 text-white rounded-xl disabled:opacity-50"
                  >
                    Redeem
                  </Button>
                </div>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="available" className="space-y-3">
          {rewards.filter(r => userPoints >= r.points).map((reward) => {
            const Icon = reward.icon;
            return (
              <Card key={reward.id} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${reward.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: reward.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1">{reward.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{reward.business}</p>
                    <Badge className="bg-[#0FA878]/20 text-[#0FA878] border-none">
                      {reward.points} points
                    </Badge>
                  </div>
                  <Button className="bg-gradient-to-r from-[#0FA878] to-emerald-600 hover:from-[#0FB885] hover:to-emerald-500 text-white rounded-xl">
                    Redeem
                  </Button>
                </div>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="locked" className="space-y-3">
          {rewards.filter(r => userPoints < r.points).map((reward) => {
            const Icon = reward.icon;
            return (
              <Card key={reward.id} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-4 opacity-60">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${reward.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: reward.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1">{reward.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{reward.business}</p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-[#0FA878]/20 text-[#0FA878] border-none">
                        {reward.points} points
                      </Badge>
                      <Badge className="bg-slate-800 text-slate-400 border-none">
                        Need {reward.points - userPoints} more
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}
