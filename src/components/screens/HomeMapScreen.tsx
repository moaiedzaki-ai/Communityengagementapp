import { useState } from 'react';
import { Filter, Plus, MapPin, Droplets, ThermometerSun, Volume2, Users as UsersIcon, AlertTriangle, Bell, Menu, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import type { MainScreen } from '../MainApp';

interface HomeMapScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

interface MapMarker {
  id: number;
  type: 'cleanliness' | 'comfort' | 'noise' | 'crowd' | 'hazard';
  position: { x: number; y: number };
  status: 'good' | 'moderate' | 'attention';
  description: string;
}

const mockMarkers: MapMarker[] = [
  { id: 1, type: 'cleanliness', position: { x: 20, y: 25 }, status: 'good', description: 'Park cleaned' },
  { id: 2, type: 'noise', position: { x: 70, y: 35 }, status: 'moderate', description: 'Construction noise' },
  { id: 3, type: 'comfort', position: { x: 45, y: 60 }, status: 'good', description: 'Temperature optimal' },
  { id: 4, type: 'crowd', position: { x: 35, y: 75 }, status: 'moderate', description: 'Busy area' },
  { id: 5, type: 'hazard', position: { x: 75, y: 70 }, status: 'attention', description: 'Broken fence' },
  { id: 6, type: 'cleanliness', position: { x: 60, y: 20 }, status: 'good', description: 'Garden maintained' },
  { id: 7, type: 'comfort', position: { x: 15, y: 80 }, status: 'good', description: 'AC working well' },
  { id: 8, type: 'noise', position: { x: 85, y: 45 }, status: 'good', description: 'Quiet zone' },
];

const markerIcons = {
  cleanliness: Sparkles,
  comfort: ThermometerSun,
  noise: Volume2,
  crowd: UsersIcon,
  hazard: AlertTriangle,
};

export default function HomeMapScreen({ onNavigate }: HomeMapScreenProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  const filteredMarkers = filter === 'all' 
    ? mockMarkers 
    : mockMarkers.filter(m => m.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return '#0FA878';
      case 'moderate': return '#F59E0B';
      case 'attention': return '#EF4444';
      default: return '#0FA878';
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-0 py-0 bg-[#F8F9FA]">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 bg-white border-b border-[#D1D5DB]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-[#111827] text-xl">Hayyak</h1>
            <p className="text-[#6B7280] text-xs">ROSHN Community Pulse</p>
          </div>
          <div className="flex gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#4B5563] hover:text-[#111827] hover:bg-[#F7F9FA] rounded-xl relative h-8 w-8"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#16A34A] rounded-full"></span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate('manager')}
              className="text-[#4B5563] hover:text-[#111827] hover:bg-[#F7F9FA] rounded-xl h-8 w-8"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-1.5 mb-3">
          <Card className="bg-white border-[#D1D5DB] p-2 text-center shadow-sm">
            <Sparkles className="w-4 h-4 text-[#16A34A] mx-auto mb-0.5" />
            <div className="text-[#111827] text-xs">Clean</div>
          </Card>
          <Card className="bg-white border-[#D1D5DB] p-2 text-center shadow-sm">
            <ThermometerSun className="w-4 h-4 text-[#16A34A] mx-auto mb-0.5" />
            <div className="text-[#111827] text-xs">Comfort</div>
          </Card>
          <Card className="bg-white border-[#D1D5DB] p-2 text-center shadow-sm">
            <Volume2 className="w-4 h-4 text-amber-500 mx-auto mb-0.5" />
            <div className="text-[#111827] text-xs">Noise</div>
          </Card>
          <Card className="bg-white border-[#D1D5DB] p-2 text-center shadow-sm">
            <UsersIcon className="w-4 h-4 text-[#16A34A] mx-auto mb-0.5" />
            <div className="text-[#111827] text-xs">Crowds</div>
          </Card>
        </div>

        {/* Filter */}
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="bg-white border-[#D1D5DB] text-[#111827] text-sm focus:border-[#16A34A] rounded-xl h-9 shadow-sm">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#16A34A]" />
              <SelectValue placeholder="Filter map" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-white border-[#D1D5DB]">
            <SelectItem value="all" className="text-[#111827] text-sm focus:bg-[#F7F9FA] focus:text-[#111827]">
              All Activity
            </SelectItem>
            <SelectItem value="cleanliness" className="text-[#111827] text-sm focus:bg-[#F7F9FA] focus:text-[#111827]">
              Cleanliness
            </SelectItem>
            <SelectItem value="comfort" className="text-[#111827] text-sm focus:bg-[#F7F9FA] focus:text-[#111827]">
              Comfort
            </SelectItem>
            <SelectItem value="noise" className="text-[#111827] text-sm focus:bg-[#F7F9FA] focus:text-[#111827]">
              Noise Levels
            </SelectItem>
            <SelectItem value="crowd" className="text-[#111827] text-sm focus:bg-[#F7F9FA] focus:text-[#111827]">
              Crowds
            </SelectItem>
            <SelectItem value="hazard" className="text-[#111827] text-sm focus:bg-[#F7F9FA] focus:text-[#111827]">
              Hazards
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Map Container */}
      <div className="flex-1 px-4 pb-4">
        <Card className="bg-white border-[#D1D5DB] shadow-md h-full overflow-hidden">
          <div className="relative w-full h-full min-h-[350px] bg-[#F2F4F5] overflow-hidden">
            {/* Realistic Community Map Background */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Roads */}
              <path d="M 0 50 L 100 50" stroke="rgba(156, 163, 175, 0.6)" strokeWidth="1.5" />
              <path d="M 50 0 L 50 100" stroke="rgba(156, 163, 175, 0.6)" strokeWidth="1.5" />
              <path d="M 25 0 L 25 100" stroke="rgba(156, 163, 175, 0.4)" strokeWidth="0.8" />
              <path d="M 75 0 L 75 100" stroke="rgba(156, 163, 175, 0.4)" strokeWidth="0.8" />
              <path d="M 0 25 L 100 25" stroke="rgba(156, 163, 175, 0.4)" strokeWidth="0.8" />
              <path d="M 0 75 L 100 75" stroke="rgba(156, 163, 175, 0.4)" strokeWidth="0.8" />
              
              {/* Residential Blocks */}
              <rect x="5" y="5" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="30" y="5" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="55" y="5" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="80" y="5" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              
              <rect x="5" y="30" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="55" y="30" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="80" y="30" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              
              <rect x="5" y="55" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="30" y="55" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="80" y="55" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              
              <rect x="5" y="80" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="30" y="80" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="55" y="80" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              <rect x="80" y="80" width="15" height="15" fill="rgba(15, 168, 120, 0.1)" stroke="rgba(15, 168, 120, 0.3)" strokeWidth="0.5" rx="1" />
              
              {/* Parks/Green Spaces */}
              <ellipse cx="37.5" cy="37.5" rx="10" ry="10" fill="rgba(15, 168, 120, 0.15)" stroke="rgba(15, 168, 120, 0.4)" strokeWidth="0.5" />
              <ellipse cx="62.5" cy="62.5" rx="12" ry="12" fill="rgba(15, 168, 120, 0.15)" stroke="rgba(15, 168, 120, 0.4)" strokeWidth="0.5" />
              
              {/* Amenities */}
              <rect x="28" y="28" width="6" height="6" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" rx="0.5" />
              <rect x="70" y="48" width="6" height="6" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.5" rx="0.5" />
            </svg>

            {/* Activity Markers */}
            {filteredMarkers.map((marker) => {
              const Icon = markerIcons[marker.type];
              return (
                <button
                  key={marker.id}
                  onClick={() => setSelectedMarker(marker)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                  style={{
                    left: `${marker.position.x}%`,
                    top: `${marker.position.y}%`,
                  }}
                >
                  <div className="relative">
                    {/* Pulse */}
                    <div 
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{ backgroundColor: getStatusColor(marker.status), opacity: 0.2 }}
                    />
                    {/* Pin */}
                    <div 
                      className="relative w-7 h-7 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border-2 border-white"
                      style={{ backgroundColor: getStatusColor(marker.status) }}
                    >
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Selected Marker Info */}
      {selectedMarker && (
        <div className="fixed bottom-20 left-4 right-4 max-w-md mx-auto">
          <Card className="bg-white border-[#D1D5DB] p-3 shadow-lg">
            <div className="flex items-start gap-2.5">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${getStatusColor(selectedMarker.status)}20` }}
              >
                {(() => {
                  const Icon = markerIcons[selectedMarker.type];
                  return <Icon className="w-5 h-5" style={{ color: getStatusColor(selectedMarker.status) }} />;
                })()}
              </div>
              <div className="flex-1">
                <Badge 
                  className="capitalize mb-1 text-xs"
                  style={{ 
                    backgroundColor: `${getStatusColor(selectedMarker.status)}20`,
                    color: getStatusColor(selectedMarker.status),
                    border: 'none'
                  }}
                >
                  {selectedMarker.type}
                </Badge>
                <p className="text-[#111827] text-sm">{selectedMarker.description}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedMarker(null)}
                className="text-[#6B7280] hover:text-[#111827] -mt-1 h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Quick Report Button */}
      <Button
        onClick={() => onNavigate('report')}
        className="fixed bottom-20 right-4 w-12 h-12 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg z-20"
      >
        <Plus className="w-5 h-5" />
      </Button>
    </div>
  );
}
