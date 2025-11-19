import { ArrowLeft, Users, Clock, MapPin, Award, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import type { MainScreen } from '../MainApp';

interface VolunteerScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const opportunities = [
  {
    id: 1,
    title: 'Community Garden Maintenance',
    date: 'Saturday, Nov 18',
    time: '9:00 AM - 12:00 PM',
    location: 'Community Garden, Block A',
    volunteers: 5,
    needed: 10,
    points: 50,
    category: 'Environment',
  },
  {
    id: 2,
    title: 'Help at Community Event',
    date: 'Sunday, Nov 19',
    time: '2:00 PM - 6:00 PM',
    location: 'Community Center',
    volunteers: 8,
    needed: 12,
    points: 75,
    category: 'Events',
  },
  {
    id: 3,
    title: 'Teach Kids Coding',
    date: 'Tuesday, Nov 21',
    time: '4:00 PM - 6:00 PM',
    location: 'Learning Center',
    volunteers: 2,
    needed: 4,
    points: 100,
    category: 'Education',
  },
  {
    id: 4,
    title: 'Senior Assistance Program',
    date: 'Wednesday, Nov 22',
    time: '10:00 AM - 2:00 PM',
    location: 'Various Locations',
    volunteers: 6,
    needed: 8,
    points: 80,
    category: 'Community Care',
  },
];

const myVolunteerStats = {
  hours: 24,
  tasks: 8,
  points: 425,
};

export default function VolunteerScreen({ onNavigate }: VolunteerScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-6 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('community')}
          className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-white text-2xl">Volunteer</h1>
          <p className="text-slate-400 text-sm">Make a difference</p>
        </div>
      </div>

      {/* Stats Card */}
      <Card className="bg-gradient-to-br from-[#0FA878] to-emerald-600 border-none p-5 mb-6 shadow-xl shadow-[#0FA878]/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg">Your Impact</h3>
          <Award className="w-6 h-6 text-white" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-white text-2xl">{myVolunteerStats.hours}</div>
            <div className="text-emerald-100 text-sm">Hours</div>
          </div>
          <div>
            <div className="text-white text-2xl">{myVolunteerStats.tasks}</div>
            <div className="text-emerald-100 text-sm">Tasks</div>
          </div>
          <div>
            <div className="text-white text-2xl">{myVolunteerStats.points}</div>
            <div className="text-emerald-100 text-sm">Points</div>
          </div>
        </div>
      </Card>

      {/* Opportunities */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg">Available Opportunities</h2>
        <Badge className="bg-slate-900 text-slate-300 border-slate-700">
          {opportunities.length} active
        </Badge>
      </div>

      <div className="space-y-4 flex-1">
        {opportunities.map((opp) => {
          const progress = (opp.volunteers / opp.needed) * 100;
          return (
            <Card key={opp.id} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-1">{opp.title}</h3>
                  <Badge className="bg-[#0FA878]/20 text-[#0FA878] border-none text-xs">
                    {opp.category}
                  </Badge>
                </div>
                <Badge className="bg-amber-500/20 text-amber-500 border-none">
                  +{opp.points} pts
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{opp.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{opp.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{opp.location}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-400">Volunteers</span>
                  <span className="text-white">{opp.volunteers} / {opp.needed}</span>
                </div>
                <Progress value={progress} className="h-2 bg-slate-950" />
              </div>

              <Button className="w-full bg-gradient-to-r from-[#0FA878] to-emerald-600 hover:from-[#0FB885] hover:to-emerald-500 text-white rounded-xl h-11">
                Register
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
