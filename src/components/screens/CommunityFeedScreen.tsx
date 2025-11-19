import { ArrowLeft, MessageCircle, Heart, Share2, Pin, Calendar, Users as UsersIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import type { MainScreen } from '../MainApp';

interface CommunityFeedScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const posts = [
  {
    id: 1,
    author: 'ROSHN Community',
    type: 'announcement',
    avatar: 'RC',
    time: '2 hours ago',
    content: 'Community clean-up event this Saturday at 8 AM. Join us to make our neighborhood shine! 🌟',
    likes: 45,
    comments: 12,
    pinned: true,
  },
  {
    id: 2,
    author: 'Ahmed Al-Rashid',
    type: 'update',
    avatar: 'AR',
    time: '4 hours ago',
    content: 'The new playground equipment has been installed. Kids are loving it! Thank you ROSHN team.',
    likes: 28,
    comments: 8,
    pinned: false,
  },
  {
    id: 3,
    author: 'Community Manager',
    type: 'event',
    avatar: 'CM',
    time: '1 day ago',
    content: 'Yoga classes starting next week every Tuesday and Thursday at 6 PM in the community center.',
    likes: 67,
    comments: 23,
    pinned: false,
  },
  {
    id: 4,
    author: 'Fatima Hassan',
    type: 'update',
    avatar: 'FH',
    time: '1 day ago',
    content: 'Found a lost cat near Block B. Grey with white paws. Please contact if it\'s yours.',
    likes: 15,
    comments: 5,
    pinned: false,
  },
  {
    id: 5,
    author: 'ROSHN Maintenance',
    type: 'announcement',
    avatar: 'RM',
    time: '2 days ago',
    content: 'Scheduled maintenance on water systems this Thursday 9 AM - 12 PM. Please plan accordingly.',
    likes: 89,
    comments: 34,
    pinned: false,
  },
];

const events = [
  {
    id: 1,
    title: 'Community Clean-Up',
    date: 'Sat, Nov 18',
    time: '8:00 AM',
    participants: 34,
    color: '#0FA878',
  },
  {
    id: 2,
    title: 'Yoga Session',
    date: 'Tue, Nov 21',
    time: '6:00 PM',
    participants: 12,
    color: '#3B82F6',
  },
  {
    id: 3,
    title: 'Kids Art Workshop',
    date: 'Sun, Nov 19',
    time: '10:00 AM',
    participants: 18,
    color: '#EC4899',
  },
];

export default function CommunityFeedScreen({ onNavigate }: CommunityFeedScreenProps) {
  return (
    <div className="min-h-full flex flex-col px-5 py-4 bg-[#F9FAFB]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onNavigate('home')}
          className="text-[#6B7A86] hover:text-[#0E1B2B] hover:bg-[#E7EEF0] rounded-xl w-10 h-10"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-[#0E1B2B]" style={{ fontSize: '24px', lineHeight: '28.8px', fontWeight: 600 }}>Community</h1>
          <p className="text-[#6B7A86]" style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 400 }}>Stay connected with neighbors</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card
          onClick={() => onNavigate('volunteer')}
          className="bg-white border border-[#E7EEF0] w-[172px] h-[100px] cursor-pointer hover:opacity-90 transition-all flex flex-col items-start justify-center"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderRadius: '16px', padding: '14px' }}
        >
          <UsersIcon className="w-5 h-5 text-[#0B7D6C] mb-2" />
          <p className="text-[#0E1B2B]" style={{ fontSize: '14px', lineHeight: '16.8px', fontWeight: 500 }}>Volunteer</p>
        </Card>
        <Card
          onClick={() => onNavigate('forum')}
          className="bg-white border border-[#E7EEF0] w-[172px] h-[100px] cursor-pointer hover:opacity-90 transition-all flex flex-col items-start justify-center"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderRadius: '16px', padding: '14px' }}
        >
          <MessageCircle className="w-5 h-5 text-[#0B7D6C] mb-2" />
          <p className="text-[#0E1B2B]" style={{ fontSize: '14px', lineHeight: '16.8px', fontWeight: 500 }}>Forum</p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="feed" className="flex-1 pb-4">
        <TabsList className="grid w-full grid-cols-2 bg-transparent border-none mb-4 gap-2 p-0 h-12" style={{ borderRadius: '16px' }}>
          <TabsTrigger 
            value="feed" 
            className="data-[state=active]:bg-[#0B7D6C] data-[state=active]:text-white data-[state=inactive]:bg-[#123045] data-[state=inactive]:text-white/70 rounded-2xl h-12"
            style={{ borderRadius: '16px', fontSize: '14px', lineHeight: '16.8px', fontWeight: 500 }}
          >
            Feed
          </TabsTrigger>
          <TabsTrigger 
            value="events" 
            className="data-[state=active]:bg-[#0B7D6C] data-[state=active]:text-white data-[state=inactive]:bg-[#123045] data-[state=inactive]:text-white/70 rounded-2xl h-12"
            style={{ borderRadius: '16px', fontSize: '14px', lineHeight: '16.8px', fontWeight: 500 }}
          >
            Events
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-[10px]">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className={`${
                post.pinned 
                  ? 'bg-white border border-[#E2E8F0]' 
                  : 'bg-white border border-[#E7EEF0]'
              }`}
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderRadius: '16px', padding: '14px' }}
            >
              {post.pinned && (
                <div className="flex items-center gap-2 text-[#0B7D6C] mb-2" style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 500 }}>
                  <Pin className="w-4 h-4" />
                  <span>Pinned Post</span>
                </div>
              )}
              <div className="flex items-start gap-3 mb-2">
                <Avatar className="w-9 h-9">
                  <AvatarFallback className="bg-[#0B7D6C] text-white text-xs">
                    {post.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#0E1B2B]" style={{ fontSize: '14px', lineHeight: '16.8px', fontWeight: 600 }}>{post.author}</h3>
                    <span className="text-[#6B7A86]" style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 400 }}>{post.time}</span>
                  </div>
                  <Badge
                    className={`text-xs mt-1 ${
                      post.type === 'announcement'
                        ? 'bg-[#0B7D6C]/10 text-[#0B7D6C]'
                        : post.type === 'event'
                        ? 'bg-blue-500/10 text-blue-600'
                        : 'bg-[#E7EEF0] text-[#6B7A86]'
                    } border-none h-5`}
                    style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 400 }}
                  >
                    {post.type}
                  </Badge>
                </div>
              </div>
              <p className="text-[#6B7A86] mb-3 px-1" style={{ fontSize: '14px', lineHeight: '16.8px', fontWeight: 400 }}>{post.content}</p>
              <div className="flex items-center gap-5 pt-2 border-t border-[#E7EEF0]">
                <button className="flex items-center gap-2 text-[#6B7A86] hover:text-[#0B7D6C] transition-colors">
                  <Heart className="w-4 h-4" />
                  <span style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 400 }}>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-[#6B7A86] hover:text-[#0B7D6C] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 400 }}>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-[#6B7A86] hover:text-[#0B7D6C] transition-colors ml-auto">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="events" className="space-y-[10px]">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="bg-white border border-[#E7EEF0]"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderRadius: '16px', padding: '14px' }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${event.color}20` }}
                >
                  <Calendar className="w-6 h-6" style={{ color: event.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0E1B2B] mb-1" style={{ fontSize: '18px', lineHeight: '21.6px', fontWeight: 600 }}>{event.title}</h3>
                  <div className="flex items-center gap-3 mb-3" style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 400, color: '#6B7A86' }}>
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#6B7A86]" style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 400 }}>
                      <UsersIcon className="w-4 h-4" />
                      <span>{event.participants} participants</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-[#0B7D6C] hover:bg-[#0B7D6C]/90 text-white rounded-lg h-12 px-4"
                      style={{ fontSize: '16px', lineHeight: '19.2px', fontWeight: 500 }}
                    >
                      Join
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}