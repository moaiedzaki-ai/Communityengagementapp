import { ArrowLeft, Cpu, Wind, Droplets, ThermometerSun, Zap, Activity, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import type { MainScreen } from '../MainApp';

interface IoTDashboardScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const sensors = [
  {
    id: 1,
    name: 'Air Quality',
    location: 'Block A - Common Area',
    value: 'Good',
    metric: 'AQI 42',
    status: 'normal',
    icon: Wind,
    color: '#0FA878',
    lastUpdate: '2 min ago',
  },
  {
    id: 2,
    name: 'Temperature',
    location: 'Block B - Lobby',
    value: '24°C',
    metric: 'Optimal',
    status: 'normal',
    icon: ThermometerSun,
    color: '#0FA878',
    lastUpdate: '1 min ago',
  },
  {
    id: 3,
    name: 'Humidity',
    location: 'Block C - Garden',
    value: '65%',
    metric: 'Moderate',
    status: 'warning',
    icon: Droplets,
    color: '#F59E0B',
    lastUpdate: '3 min ago',
  },
  {
    id: 4,
    name: 'Noise Level',
    location: 'Block A - Playground',
    value: '58 dB',
    metric: 'Acceptable',
    status: 'normal',
    icon: Activity,
    color: '#0FA878',
    lastUpdate: '1 min ago',
  },
  {
    id: 5,
    name: 'Lighting',
    location: 'Block D - Parking',
    value: '320 lux',
    metric: 'Adequate',
    status: 'normal',
    icon: Zap,
    color: '#0FA878',
    lastUpdate: '4 min ago',
  },
  {
    id: 6,
    name: 'Energy Usage',
    location: 'Community Center',
    value: '245 kWh',
    metric: 'High',
    status: 'warning',
    icon: Zap,
    color: '#F59E0B',
    lastUpdate: '5 min ago',
  },
];

const alerts = [
  {
    id: 1,
    sensor: 'Humidity Sensor - Block C',
    message: 'Humidity level slightly elevated',
    severity: 'warning',
    time: '10 min ago',
  },
  {
    id: 2,
    sensor: 'Energy Monitor - Community Center',
    message: 'Power consumption above average',
    severity: 'warning',
    time: '15 min ago',
  },
];

const stats = [
  { label: 'Active Sensors', value: '47', color: '#0FA878' },
  { label: 'Alerts Today', value: '2', color: '#F59E0B' },
  { label: 'Data Points', value: '12.4K', color: '#3B82F6' },
  { label: 'Uptime', value: '99.8%', color: '#0FA878' },
];

export default function IoTDashboardScreen({ onNavigate }: IoTDashboardScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-6 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('manager')}
          className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-white text-2xl">IoT Sensors</h1>
          <p className="text-slate-400 text-sm">Real-time environmental data</p>
        </div>
      </div>

      {/* Status */}
      <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-500/50 p-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Cpu className="w-7 h-7 text-blue-400 animate-pulse" />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-lg mb-1">All Systems Operational</h3>
            <p className="text-blue-300 text-sm">Monitoring 47 sensors across 4 blocks</p>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-3 text-center">
            <div className="text-white text-lg mb-1">{stat.value}</div>
            <div className="text-slate-400 text-xs">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <>
          <h3 className="text-white mb-3">Active Alerts</h3>
          <div className="space-y-3 mb-6">
            {alerts.map((alert) => (
              <Card key={alert.id} className="bg-gradient-to-br from-slate-900 to-slate-800 border-amber-500/30 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white">{alert.sensor}</span>
                      <span className="text-slate-500 text-xs">{alert.time}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{alert.message}</p>
                  </div>
                  <Badge className="bg-amber-500/20 text-amber-500 border-none text-xs capitalize">
                    {alert.severity}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Sensors */}
      <h3 className="text-white mb-3">Live Sensor Data</h3>
      <div className="grid grid-cols-2 gap-3">
        {sensors.map((sensor) => {
          const Icon = sensor.icon;
          const statusColors = {
            normal: { bg: 'rgba(15, 168, 120, 0.1)', border: 'rgba(15, 168, 120, 0.3)' },
            warning: { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)' },
            alert: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.3)' },
          };
          const colors = statusColors[sensor.status as keyof typeof statusColors];

          return (
            <Card
              key={sensor.id}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-4"
              style={{ borderColor: colors.border }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${sensor.color}20` }}
              >
                <Icon className="w-5 h-5" style={{ color: sensor.color }} />
              </div>
              <h3 className="text-white mb-1">{sensor.name}</h3>
              <p className="text-slate-400 text-xs mb-3">{sensor.location}</p>
              <div className="mb-2">
                <div className="text-white text-2xl">{sensor.value}</div>
                <div className="text-slate-400 text-xs">{sensor.metric}</div>
              </div>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800">
                <Badge
                  className="capitalize"
                  style={{
                    backgroundColor: colors.bg,
                    color: sensor.color,
                    border: 'none',
                  }}
                >
                  {sensor.status}
                </Badge>
                <span className="text-slate-500">{sensor.lastUpdate}</span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Network Status */}
      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-5 mt-6">
        <h3 className="text-white mb-3">Network Status</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Connection Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0FA878] animate-pulse"></div>
              <span className="text-white text-sm">Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Data Transfer</span>
            <span className="text-white text-sm">2.4 MB/s</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Last Sync</span>
            <span className="text-white text-sm">Just now</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
