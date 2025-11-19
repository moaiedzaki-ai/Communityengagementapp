import { ArrowLeft, User, Mail, Phone, MapPin, Award, Bell, Shield, HelpCircle, LogOut, ChevronRight, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Switch } from '../ui/switch';
import type { MainScreen } from '../MainApp';

interface ProfileScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
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
          <h1 className="text-[#111827] text-xl">Profile</h1>
          <p className="text-[#6B7280] text-xs">Manage your account</p>
        </div>
      </div>

      {/* Profile Card */}
      <Card className="bg-white border-[#D1D5DB] p-4 mb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-gradient-to-br from-[#0FA878] to-emerald-600 text-white text-lg">
              AK
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-[#1A1A1A] text-lg mb-0.5">Ahmed Khalid</h2>
            <p className="text-gray-600 text-xs">Resident since 2024</p>
          </div>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2.5 text-gray-700">
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            <span>ahmed.khalid@example.com</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-700">
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            <span>+966 5X XXX XXXX</span>
          </div>
          <div className="flex items-center gap-2.5 text-gray-700">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span>Block A2, Building 5, Unit 301</span>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <Card className="bg-white border-gray-200 p-3 text-center shadow-sm">
          <div className="text-[#0FA878] text-xl mb-0.5">485</div>
          <div className="text-slate-400 text-[10px]">Points</div>
        </Card>
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-3 text-center">
          <div className="text-[#0FA878] text-xl mb-0.5">12</div>
          <div className="text-slate-400 text-[10px]">Reports</div>
        </Card>
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-3 text-center">
          <div className="text-[#0FA878] text-xl mb-0.5">24</div>
          <div className="text-slate-400 text-[10px]">Hours</div>
        </Card>
      </div>

      {/* Quick Access */}
      <div className="space-y-2.5 mb-4">
        <Card
          onClick={() => onNavigate('rewards')}
          className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-3 cursor-pointer hover:border-[#0FA878]/50 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#16A34A]/20 flex items-center justify-center">
                <Award className="w-4 h-4 text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[#111827] text-sm">My Rewards</p>
                <p className="text-[#6B7280] text-xs">View badges & points</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
          </div>
        </Card>

        <Card
          onClick={() => onNavigate('report-tracking')}
          className="bg-white border-[#D1D5DB] p-3 cursor-pointer hover:border-[#16A34A]/50 transition-all shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Settings className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-[#111827] text-sm">My Reports</p>
                <p className="text-[#6B7280] text-xs">Track submissions</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
          </div>
        </Card>
      </div>

      {/* Settings */}
      <h3 className="text-[#111827] text-sm mb-2.5">Settings</h3>
      <Card className="bg-white border-[#D1D5DB] p-3 mb-4 shadow-sm">
        <div className="space-y-3">
          <div className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-2.5">
              <Bell className="w-4 h-4 text-[#4B5563]" />
              <span className="text-[#111827] text-sm">Notifications</span>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-[#4B5563]" />
              <span className="text-[#111827] text-sm">Privacy</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
          </div>
          <div className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="w-4 h-4 text-[#4B5563]" />
              <span className="text-[#111827] text-sm">Help & Support</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
          </div>
        </div>
      </Card>

      {/* Admin Access */}
      <Card
        onClick={() => onNavigate('manager')}
        className="bg-white border-amber-500/50 p-3 mb-4 cursor-pointer hover:border-amber-500 transition-all shadow-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <p className="text-[#111827] text-sm">Manager Dashboard</p>
              <p className="text-[#6B7280] text-xs">Admin tools & analytics</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
        </div>
      </Card>

      {/* Logout */}
      <Button
        variant="outline"
        className="w-full border-[#D1D5DB] text-[#111827] text-sm hover:bg-[#F7F9FA] rounded-xl h-10 shadow-sm"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </div>
  );
}
