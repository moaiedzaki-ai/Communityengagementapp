import { ArrowLeft, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import type { MainScreen } from '../MainApp';

interface ReportTrackingScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const reports = [
  {
    id: 1,
    category: 'Cleanliness',
    description: 'Trash accumulation near park entrance',
    status: 'completed',
    date: '2 days ago',
    location: 'Block A2, Park Area',
  },
  {
    id: 2,
    category: 'Safety Hazard',
    description: 'Broken fence near playground',
    status: 'in-progress',
    date: '1 day ago',
    location: 'Block B3, Playground',
  },
  {
    id: 3,
    category: 'Noise',
    description: 'Construction noise early morning',
    status: 'submitted',
    date: '3 hours ago',
    location: 'Block C1',
  },
  {
    id: 4,
    category: 'Comfort',
    description: 'AC not working in common area',
    status: 'in-progress',
    date: '5 hours ago',
    location: 'Common Hall',
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'submitted':
      return { icon: Clock, color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)', label: 'Submitted' };
    case 'in-progress':
      return { icon: Loader2, color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)', label: 'In Progress' };
    case 'completed':
      return { icon: CheckCircle, color: '#0FA878', bg: 'rgba(15, 168, 120, 0.1)', label: 'Completed' };
    default:
      return { icon: AlertCircle, color: '#94A3B8', bg: 'rgba(148, 163, 184, 0.1)', label: 'Unknown' };
  }
};

export default function ReportTrackingScreen({ onNavigate }: ReportTrackingScreenProps) {
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
        <div>
          <h1 className="text-[#111827] text-xl">My Reports</h1>
          <p className="text-[#6B7280] text-xs">Track your submissions</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="flex-1">
        <TabsList className="grid w-full grid-cols-4 bg-white border-[#D1D5DB] mb-4 h-9 shadow-sm">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#16A34A] data-[state=active]:text-white text-[#6B7280] text-xs">
            All
          </TabsTrigger>
          <TabsTrigger value="submitted" className="data-[state=active]:bg-[#16A34A] data-[state=active]:text-white text-[#6B7280] text-xs">
            Submitted
          </TabsTrigger>
          <TabsTrigger value="in-progress" className="data-[state=active]:bg-[#16A34A] data-[state=active]:text-white text-[#6B7280] text-xs">
            Active
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-[#16A34A] data-[state=active]:text-white text-[#6B7280] text-xs">
            Done
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-2.5">
          {reports.map((report) => {
            const statusConfig = getStatusConfig(report.status);
            const StatusIcon = statusConfig.icon;
            return (
              <Card key={report.id} className="bg-white border-[#D1D5DB] p-3 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: statusConfig.bg }}
                  >
                    <StatusIcon
                      className={`w-5 h-5 ${report.status === 'in-progress' ? 'animate-spin' : ''}`}
                      style={{ color: statusConfig.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        className="text-[10px] px-2 py-0"
                        style={{
                          backgroundColor: statusConfig.bg,
                          color: statusConfig.color,
                          border: 'none',
                        }}
                      >
                        {report.category}
                      </Badge>
                      <span className="text-[#9CA3AF] text-[10px]">{report.date}</span>
                    </div>
                    <p className="text-[#111827] text-sm mb-0.5">{report.description}</p>
                    <p className="text-[#6B7280] text-xs">{report.location}</p>
                    <div className="mt-2">
                      <Badge
                        variant="outline"
                        className="text-[10px] px-2 py-0"
                        style={{
                          borderColor: statusConfig.color,
                          color: statusConfig.color,
                        }}
                      >
                        {statusConfig.label}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="submitted" className="space-y-2.5">
          {reports.filter(r => r.status === 'submitted').map((report) => {
            const statusConfig = getStatusConfig(report.status);
            const StatusIcon = statusConfig.icon;
            return (
              <Card key={report.id} className="bg-white border-[#D1D5DB] p-3 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: statusConfig.bg }}
                  >
                    <StatusIcon className="w-5 h-5" style={{ color: statusConfig.color }} />
                  </div>
                  <div className="flex-1">
                    <Badge className="text-[10px] px-2 py-0 mb-1.5" style={{ backgroundColor: statusConfig.bg, color: statusConfig.color, border: 'none' }}>
                      {report.category}
                    </Badge>
                    <p className="text-[#111827] text-sm mb-0.5">{report.description}</p>
                    <p className="text-[#6B7280] text-xs">{report.location}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-2.5">
          {reports.filter(r => r.status === 'in-progress').map((report) => {
            const statusConfig = getStatusConfig(report.status);
            const StatusIcon = statusConfig.icon;
            return (
              <Card key={report.id} className="bg-white border-[#D1D5DB] p-3 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: statusConfig.bg }}
                  >
                    <StatusIcon className="w-5 h-5 animate-spin" style={{ color: statusConfig.color }} />
                  </div>
                  <div className="flex-1">
                    <Badge className="text-[10px] px-2 py-0 mb-1.5" style={{ backgroundColor: statusConfig.bg, color: statusConfig.color, border: 'none' }}>
                      {report.category}
                    </Badge>
                    <p className="text-[#111827] text-sm mb-0.5">{report.description}</p>
                    <p className="text-[#6B7280] text-xs">{report.location}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="completed" className="space-y-2.5">
          {reports.filter(r => r.status === 'completed').map((report) => {
            const statusConfig = getStatusConfig(report.status);
            const StatusIcon = statusConfig.icon;
            return (
              <Card key={report.id} className="bg-white border-[#D1D5DB] p-3 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: statusConfig.bg }}
                  >
                    <StatusIcon className="w-5 h-5" style={{ color: statusConfig.color }} />
                  </div>
                  <div className="flex-1">
                    <Badge className="text-[10px] px-2 py-0 mb-1.5" style={{ backgroundColor: statusConfig.bg, color: statusConfig.color, border: 'none' }}>
                      {report.category}
                    </Badge>
                    <p className="text-[#111827] text-sm mb-0.5">{report.description}</p>
                    <p className="text-[#6B7280] text-xs">{report.location}</p>
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
