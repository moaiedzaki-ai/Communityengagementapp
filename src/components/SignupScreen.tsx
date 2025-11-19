import { useState } from 'react';
import { Users, Mail, Lock, User, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';

interface SignupScreenProps {
  onSignup: () => void;
  onLogin: () => void;
}

export default function SignupScreen({ onSignup, onLogin }: SignupScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 max-w-md mx-auto justify-center">
      {/* Logo */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#16A34A] to-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-[#111827] text-2xl mb-1">Create Account</h1>
        <p className="text-[#6B7280] text-sm">Join the ROSHN community</p>
      </div>

      {/* Signup Form */}
      <Card className="bg-white border-gray-200 p-4 shadow-md mb-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-[#111827] text-sm">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <Input
                id="name"
                type="text"
                placeholder="Ahmed Al-Rashid"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#F7F9FA] border-[#D1D5DB] text-[#111827] text-sm pl-10 h-10 rounded-xl focus:border-[#16A34A]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-[#111827] text-sm">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#F7F9FA] border-[#D1D5DB] text-[#111827] text-sm pl-10 h-10 rounded-xl focus:border-[#16A34A]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-[#111827] text-sm">
              Phone Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <Input
                id="phone"
                type="tel"
                placeholder="+966 5X XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-[#F7F9FA] border-[#D1D5DB] text-[#111827] text-sm pl-10 h-10 rounded-xl focus:border-[#16A34A]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-[#111827] text-sm">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#F7F9FA] border-[#D1D5DB] text-[#111827] text-sm pl-10 h-10 rounded-xl focus:border-[#16A34A]"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm rounded-xl h-10 shadow-md mt-4"
          >
            Create Account
          </Button>
        </form>
      </Card>

      {/* Login Link */}
      <div className="text-center text-sm">
        <span className="text-[#6B7280]">Already have an account? </span>
        <Button
          variant="link"
          onClick={onLogin}
          className="text-[#16A34A] hover:text-[#15803D] p-0 text-sm h-auto"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
