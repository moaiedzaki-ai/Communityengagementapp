import { ArrowLeft, TrendingUp, TrendingDown, Brain, Cpu } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import type { MainScreen } from '../MainApp';

interface ManagerDashboardScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const kpis = [
  { label: 'Total Reports', value: '247', change: '+12%', trend: 'up' },
  { label: 'Active Issues', value: '23', change: '-8%', trend: 'down' },
  { label: 'Resolved', value: '224', change: '+15%', trend: 'up' },
  { label: 'Response Time', value: '2.4h', change: '-18%', trend: 'down' },
];

const heatmapData = [
  { area: 'Block A', cleanliness: 92, comfort: 88, safety: 95 },
  { area: 'Block B', cleanliness: 85, comfort: 82, safety: 90 },
  { area: 'Block C', cleanliness: 78, comfort: 85, safety: 88 },
  { area: 'Block D', cleanliness: 88, comfort: 90, safety: 92 },
];

const recentReports = [
  { id: 1, type: 'Cleanliness', location: 'Block A', status: 'in-progress', time: '10 min ago' },
  { id: 2, type: 'Safety', location: 'Block C', status: 'submitted', time: '25 min ago' },
  { id: 3, type: 'Comfort', location: 'Block B', status: 'completed', time: '1 hour ago' },
];

export default function ManagerDashboardScreen({ onNavigate }: ManagerDashboardScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-4 py-4 bg-[#F7F9FA]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('profile')}
          className="text-[#4B5563] hover:text-[#111827] hover:bg-[#F2F4F5] rounded-xl h-9 w-9"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-[#111827] text-xl">Manager Dashboard</h1>
          <p className="text-[#6B7280] text-xs">Community analytics & insights</p>
        </div>
      </div>

      {/* Quick Tools */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <Card
          onClick={() => onNavigate('ai-predictions')}
          className="bg-white border-[#D1D5DB] p-4 cursor-pointer hover:border-[#9CA3AF] transition-all shadow-sm"
        >
          <Brain className="w-6 h-6 text-[#8B5CF6] mb-2" />
          <p className="text-[#111827] text-sm">AI Predictions</p>
          <p className="text-[#9CA3AF] text-xs mt-0.5">View forecasts</p>
        </Card>
        <Card
          onClick={() => onNavigate('iot')}
          className="bg-white border-[#D1D5DB] p-4 cursor-pointer hover:border-[#9CA3AF] transition-all shadow-sm"
        >
          <Cpu className="w-6 h-6 text-[#3B82F6] mb-2" />
          <p className="text-[#111827] text-sm">IoT Sensors</p>
          <p className="text-[#9CA3AF] text-xs mt-0.5">Monitor live</p>
        </Card>
      </div>

      {/* KPIs Section */}
      <div className="mb-5">
        <h3 className="text-[#111827] text-sm mb-3">Key Performance Indicators</h3>
        <div className="grid grid-cols-2 gap-3">
          {kpis.map((kpi, index) => {
            // Determine if trend is positive or negative based on context
            const isPositive = 
              (kpi.label === 'Total Reports' && kpi.trend === 'up') ||
              (kpi.label === 'Resolved' && kpi.trend === 'up') ||
              (kpi.label === 'Active Issues' && kpi.trend === 'down') ||
              (kpi.label === 'Response Time' && kpi.trend === 'down');
            
            const trendColor = isPositive ? '#16A34A' : '#DC2626';
            const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;

            return (
              <Card key={index} className="bg-white border-[#D1D5DB] p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[#6B7280] text-xs">{kpi.label}</span>
                  <div className="flex items-center gap-1" style={{ color: trendColor }}>
                    <TrendIcon className="w-3.5 h-3.5" />
                    <span className="text-xs">{kpi.change}</span>
                  </div>
                </div>
                <div className="text-[#111827] text-[26px] leading-none tracking-tight">
                  {kpi.value}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Area Health Scores */}
      <div className="mb-5">
        <h3 className="text-[#111827] text-sm mb-3">Area Health Scores</h3>
        <Card className="bg-white border-[#D1D5DB] p-4 shadow-sm">
          <div className="space-y-4">
            {heatmapData.map((area, index) => {
              const avgScore = Math.round((area.cleanliness + area.comfort + area.safety) / 3);
              return (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[#111827] text-sm">{area.area}</span>
                    <span className="text-[#16A34A] text-sm tabular-nums">
                      {avgScore}%
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    <div>
                      <div className="text-[10px] text-[#9CA3AF] mb-1.5 uppercase tracking-wide">Clean</div>
                      <div className="h-1.5 bg-[#F2F4F5] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#16A34A] rounded-full transition-all"
                          style={{ width: `${area.cleanliness}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-[#6B7280] mt-1 tabular-nums">{area.cleanliness}%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#9CA3AF] mb-1.5 uppercase tracking-wide">Comfort</div>
                      <div className="h-1.5 bg-[#F2F4F5] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#3B82F6] rounded-full transition-all"
                          style={{ width: `${area.comfort}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-[#6B7280] mt-1 tabular-nums">{area.comfort}%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#9CA3AF] mb-1.5 uppercase tracking-wide">Safety</div>
                      <div className="h-1.5 bg-[#F2F4F5] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#F59E0B] rounded-full transition-all"
                          style={{ width: `${area.safety}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-[#6B7280] mt-1 tabular-nums">{area.safety}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-[#111827] text-sm mb-3">Recent Reports</h3>
        <div className="space-y-2.5">
          {recentReports.map((report) => {
            const statusConfig = {
              submitted: { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
              'in-progress': { bg: '#DBEAFE', text: '#1E40AF', border: '#BFDBFE' },
              completed: { bg: '#D1FAE5', text: '#065F46', border: '#A7F3D0' },
            };
            const config = statusConfig[report.status as keyof typeof statusConfig];
            
            return (
              <Card key={report.id} className="bg-white border-[#D1D5DB] p-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#111827] text-sm">{report.type}</span>
                      <span className="text-[#9CA3AF] text-xs">·</span>
                      <span className="text-[#9CA3AF] text-xs">{report.time}</span>
                    </div>
                    <p className="text-[#6B7280] text-xs">{report.location}</p>
                  </div>
                  <Badge
                    className="capitalize text-[10px] px-2.5 py-0.5"
                    style={{ 
                      backgroundColor: config.bg, 
                      color: config.text,
                      border: `1px solid ${config.border}`
                    }}
                  >
                    {report.status.replace('-', ' ')}
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
