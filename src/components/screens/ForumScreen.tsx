import { ArrowLeft, MessageCircle, ThumbsUp, TrendingUp, PlusCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import type { MainScreen } from '../MainApp';

interface ForumScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const discussions = [
  {
    id: 1,
    title: 'Should we have more food trucks in the community?',
    author: 'Sarah Ahmed',
    avatar: 'SA',
    category: 'Suggestions',
    replies: 34,
    votes: 67,
    time: '2 hours ago',
    hot: true,
  },
  {
    id: 2,
    title: 'Organizing a monthly book club',
    author: 'Mohammed Ali',
    avatar: 'MA',
    category: 'Activities',
    replies: 12,
    votes: 23,
    time: '5 hours ago',
    hot: false,
  },
  {
    id: 3,
    title: 'Parking space allocation discussion',
    author: 'Layla Hassan',
    avatar: 'LH',
    category: 'Community Issues',
    replies: 56,
    votes: 89,
    time: '1 day ago',
    hot: true,
  },
  {
    id: 4,
    title: 'Ideas for improving the playground',
    author: 'Omar Khalid',
    avatar: 'OK',
    category: 'Suggestions',
    replies: 28,
    votes: 45,
    time: '1 day ago',
    hot: false,
  },
  {
    id: 5,
    title: 'Community garden expansion plans',
    author: 'Fatima Noor',
    avatar: 'FN',
    category: 'Environment',
    replies: 19,
    votes: 38,
    time: '2 days ago',
    hot: false,
  },
];

const polls = [
  {
    id: 1,
    question: 'What time should community events start?',
    options: [
      { text: 'Morning (8-10 AM)', votes: 45, percentage: 35 },
      { text: 'Afternoon (2-4 PM)', votes: 52, percentage: 40 },
      { text: 'Evening (6-8 PM)', votes: 32, percentage: 25 },
    ],
    totalVotes: 129,
    endsIn: '2 days',
  },
  {
    id: 2,
    question: 'Which amenity should we prioritize next?',
    options: [
      { text: 'Swimming Pool', votes: 78, percentage: 48 },
      { text: 'Tennis Court', votes: 45, percentage: 28 },
      { text: 'Outdoor Cinema', votes: 39, percentage: 24 },
    ],
    totalVotes: 162,
    endsIn: '5 days',
  },
];

export default function ForumScreen({ onNavigate }: ForumScreenProps) {
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
          <h1 className="text-white text-2xl">Forum</h1>
          <p className="text-slate-400 text-sm">Discussions & polls</p>
        </div>
        <Button
          size="icon"
          className="bg-gradient-to-r from-[#0FA878] to-emerald-600 hover:from-[#0FB885] hover:to-emerald-500 text-white rounded-xl"
        >
          <PlusCircle className="w-5 h-5" />
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="discussions" className="flex-1">
        <TabsList className="grid w-full grid-cols-2 bg-slate-900 border-slate-700 mb-6">
          <TabsTrigger value="discussions" className="data-[state=active]:bg-[#0FA878] data-[state=active]:text-white">
            Discussions
          </TabsTrigger>
          <TabsTrigger value="polls" className="data-[state=active]:bg-[#0FA878] data-[state=active]:text-white">
            Polls
          </TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-4">
          {discussions.map((discussion) => (
            <Card key={discussion.id} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-4 cursor-pointer hover:border-[#0FA878]/50 transition-all">
              {discussion.hot && (
                <div className="flex items-center gap-2 text-orange-400 text-sm mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Hot Topic</span>
                </div>
              )}
              <h3 className="text-white text-lg mb-3">{discussion.title}</h3>
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-[#0FA878] text-white text-xs">
                    {discussion.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-slate-300 text-sm">{discussion.author}</p>
                  <p className="text-slate-500 text-xs">{discussion.time}</p>
                </div>
                <Badge className="bg-slate-800 text-slate-300 border-slate-700">
                  {discussion.category}
                </Badge>
              </div>
              <div className="flex items-center gap-6 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-400">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-sm">{discussion.votes}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{discussion.replies}</span>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="polls" className="space-y-4">
          {polls.map((poll) => (
            <Card key={poll.id} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 p-5">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white text-lg flex-1">{poll.question}</h3>
                <Badge className="bg-slate-800 text-slate-300 border-slate-700 text-xs">
                  Ends in {poll.endsIn}
                </Badge>
              </div>
              <div className="space-y-3 mb-4">
                {poll.options.map((option, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-300">{option.text}</span>
                      <span className="text-slate-400">{option.votes} votes ({option.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0FA878] to-emerald-600 transition-all"
                        style={{ width: `${option.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <span className="text-slate-400 text-sm">{poll.totalVotes} total votes</span>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#0FA878] to-emerald-600 hover:from-[#0FB885] hover:to-emerald-500 text-white rounded-lg"
                >
                  Vote
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
