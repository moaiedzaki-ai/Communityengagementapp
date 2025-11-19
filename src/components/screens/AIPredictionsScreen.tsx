import { ArrowLeft, Brain, AlertTriangle, ThermometerSun, Wrench, Activity } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import type { MainScreen } from '../MainApp';

interface AIPredictionsScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const predictions = [
  {
    id: 1,
    type: 'Comfort Level',
    prediction: 'Temperature will rise in Block B',
    confidence: 87,
    timeframe: 'Next 4 hours',
    severity: 'moderate',
    icon: ThermometerSun,
    color: '#F59E0B',
    recommendation: 'Adjust AC systems in common areas',
  },
  {
    id: 2,
    type: 'Maintenance',
    prediction: 'Lighting system may require maintenance',
    confidence: 72,
    timeframe: 'Within 2 days',
    severity: 'low',
    icon: Wrench,
    color: '#3B82F6',
    recommendation: 'Schedule preventive inspection',
  },
  {
    id: 3,
    type: 'Safety Alert',
    prediction: 'Increased foot traffic expected',
    confidence: 91,
    timeframe: 'Weekend',
    severity: 'high',
    icon: AlertTriangle,
    color: '#EF4444',
    recommendation: 'Deploy additional security patrols',
  },
  {
    id: 4,
    type: 'Activity Pattern',
    prediction: 'High community engagement expected',
    confidence: 78,
    timeframe: 'Next week',
    severity: 'low',
    icon: Activity,
    color: '#16A34A',
    recommendation: 'Prepare community spaces',
  },
];

const insights = [
  {
    title: 'Peak Times',
    value: '6–9 PM',
    trend: '+15%',
    subtitle: 'vs last week',
    color: '#16A34A',
  },
  {
    title: 'Avg. Response',
    value: '2.4h',
    trend: '-18%',
    subtitle: 'improvement',
    color: '#16A34A',
  },
  {
    title: 'Predicted Issues',
    value: '3',
    trend: 'Next 7 days',
    subtitle: '',
    color: '#3B82F6',
  },
];

export default function AIPredictionsScreen({ onNavigate }: AIPredictionsScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-4 py-4 bg-[#F7F9FA]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('manager')}
          className="text-[#4B5563] hover:text-[#111827] hover:bg-[#F2F4F5] rounded-xl h-9 w-9"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <p className="text-[#9CA3AF] text-xs">Predictive analytics & insights</p>
          <h1 className="text-[#16A34A] text-lg tracking-wide">
            AI Engine Active
          </h1>
        </div>
      </div>

      {/* AI Status Card */}
      <Card className="bg-gradient-to-r from-purple-200 to-purple-300 border-purple-300 p-4 mb-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 text-purple-700 animate-pulse" />
          </div>
          <div className="flex-1">
            <p className="text-purple-900 text-sm">AI Predictions</p>
            <p className="text-purple-800 text-xs mt-0.5 opacity-80">
              Community activity forecast & automated analysis
            </p>
          </div>
        </div>
      </Card>

      {/* KPI Grid */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {insights.map((insight, index) => (
          <Card key={index} className="bg-[#0D1B2A] text-white rounded-xl p-3 shadow-md border-[#1E293B]">
            <p className="text-xs opacity-70">{insight.title}</p>
            <h2 className="text-lg mt-1 leading-tight">{insight.value}</h2>
            <p 
              className="text-xs mt-1"
              style={{ color: insight.color === '#16A34A' ? '#4ADE80' : '#93C5FD' }}
            >
              {insight.trend}
              {insight.subtitle && <span className="opacity-70"> {insight.subtitle}</span>}
            </p>
          </Card>
        ))}
      </div>

      {/* Predictions */}
      <h3 className="text-[#111827] text-sm mb-3">Upcoming Predictions</h3>
      <div className="space-y-3">
        {predictions.map((pred) => {
          const Icon = pred.icon;
          const severityConfig = {
            high: { bg: '#FEE2E2', text: '#991B1B', border: '#FCA5A5' },
            moderate: { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
            low: { bg: '#DBEAFE', text: '#1E40AF', border: '#BFDBFE' },
          };
          const severity = severityConfig[pred.severity as keyof typeof severityConfig];
          
          return (
            <Card key={pred.id} className="bg-white border-[#D1D5DB] p-4 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${pred.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: pred.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge 
                      className="text-[10px] px-2 py-0.5"
                      style={{ 
                        backgroundColor: severity.bg, 
                        color: severity.text,
                        border: `1px solid ${severity.border}`
                      }}
                    >
                      {pred.severity} priority
                    </Badge>
                    <span className="text-[#9CA3AF] text-xs">{pred.timeframe}</span>
                  </div>
                  <h3 className="text-[#111827] text-sm mb-0.5">{pred.prediction}</h3>
                  <p className="text-[#6B7280] text-xs">{pred.type}</p>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[#6B7280]">Confidence Level</span>
                  <span className="text-[#111827] tabular-nums">{pred.confidence}%</span>
                </div>
                <div className="h-1.5 bg-[#F2F4F5] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#16A34A] rounded-full transition-all"
                    style={{ width: `${pred.confidence}%` }}
                  />
                </div>
              </div>

              <div className="bg-[#F7F9FA] rounded-lg p-3">
                <p className="text-[#4B5563] text-xs leading-relaxed">
                  <span className="text-[#16A34A]">Recommendation:</span> {pred.recommendation}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Model Info */}
      <Card className="bg-white border-[#D1D5DB] p-4 mt-5 shadow-sm">
        <h3 className="text-[#111827] text-sm mb-3">Model Performance</h3>
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-[#6B7280]">Prediction Accuracy</span>
              <span className="text-[#111827] tabular-nums">94.2%</span>
            </div>
            <div className="h-1.5 bg-[#F2F4F5] rounded-full overflow-hidden">
              <div className="h-full bg-[#16A34A] rounded-full" style={{ width: '94.2%' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-[#6B7280]">Data Quality</span>
              <span className="text-[#111827] tabular-nums">98.7%</span>
            </div>
            <div className="h-1.5 bg-[#F2F4F5] rounded-full overflow-hidden">
              <div className="h-full bg-[#3B82F6] rounded-full" style={{ width: '98.7%' }} />
            </div>
          </div>
          <div className="pt-3 border-t border-[#E5E7EB]">
            <p className="text-[#9CA3AF] text-[10px]">
              Model trained on 12,450 data points • Last updated: 2 hours ago
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
