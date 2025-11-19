import { ArrowLeft, Store, Star, MapPin, Phone, Clock, Tag } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import type { MainScreen } from '../MainApp';

interface BusinessMarketplaceScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const businesses = [
  {
    id: 1,
    name: 'Café Verde',
    category: 'Food & Beverage',
    rating: 4.8,
    distance: '0.3 km',
    offer: '20% off on all drinks',
    hours: 'Open until 10 PM',
    color: '#F59E0B',
  },
  {
    id: 2,
    name: 'ROSHN Fitness Center',
    category: 'Fitness & Wellness',
    rating: 4.9,
    distance: '0.5 km',
    offer: 'Free trial session',
    hours: 'Open 24/7',
    color: '#EF4444',
  },
  {
    id: 3,
    name: 'Community Market',
    category: 'Grocery & Retail',
    rating: 4.7,
    distance: '0.2 km',
    offer: '15% off groceries',
    hours: 'Open until 11 PM',
    color: '#0FA878',
  },
  {
    id: 4,
    name: 'Tech Repair Hub',
    category: 'Services',
    rating: 4.6,
    distance: '0.8 km',
    offer: 'Free device checkup',
    hours: 'Open until 8 PM',
    color: '#3B82F6',
  },
  {
    id: 5,
    name: 'Green Laundry',
    category: 'Services',
    rating: 4.5,
    distance: '0.4 km',
    offer: '10% off for residents',
    hours: 'Open until 9 PM',
    color: '#8B5CF6',
  },
  {
    id: 6,
    name: 'Kids PlayZone',
    category: 'Entertainment',
    rating: 4.9,
    distance: '0.6 km',
    offer: '2 hours for price of 1',
    hours: 'Open until 8 PM',
    color: '#EC4899',
  },
];

export default function BusinessMarketplaceScreen({ onNavigate }: BusinessMarketplaceScreenProps) {
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
          <h1 className="text-white text-2xl">Marketplace</h1>
          <p className="text-slate-400 text-sm">Local business partners</p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Input
          placeholder="Search businesses..."
          className="bg-slate-900 border-slate-700 text-white h-12 rounded-xl focus:border-[#0FA878]"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['All', 'Food', 'Fitness', 'Retail', 'Services', 'Entertainment'].map((cat) => (
          <Badge
            key={cat}
            className={`${
              cat === 'All'
                ? 'bg-[#0FA878] text-white'
                : 'bg-slate-900 text-slate-400 border-slate-700'
            } px-4 py-2 cursor-pointer hover:bg-[#0FA878] hover:text-white transition-colors whitespace-nowrap`}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Business List */}
      <div className="space-y-4 flex-1">
        {businesses.map((business) => (
          <Card key={business.id} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-5 hover:border-[#0FA878]/50 transition-all cursor-pointer">
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${business.color}20` }}
              >
                <Store className="w-8 h-8" style={{ color: business.color }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white text-lg mb-1">{business.name}</h3>
                    <p className="text-slate-400 text-sm">{business.category}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/20 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-amber-500 text-sm">{business.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{business.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{business.hours}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge className="bg-[#0FA878]/20 text-[#0FA878] border-none">
                    <Tag className="w-3 h-3 mr-1" />
                    {business.offer}
                  </Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-lg"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
