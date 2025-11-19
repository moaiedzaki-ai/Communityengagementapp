import { useState } from 'react';
import { Users, Mail, Lock, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';

interface LoginScreenProps {
  onLogin: () => void;
  onSignup: () => void;
}

export default function LoginScreen({ onLogin, onSignup }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 max-w-md mx-auto justify-center">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#16A34A] to-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-[#111827] text-2xl mb-1">Welcome Back</h1>
        <p className="text-[#6B7280] text-sm">Login to your Hayyak account</p>
      </div>

      {/* Login Form */}
      <Card className="bg-white border-gray-200 p-4 shadow-md mb-4">
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm rounded-xl h-10 shadow-md"
          >
            Login
          </Button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={onLogin}
          className="w-full border-[#D1D5DB] text-[#111827] text-sm hover:bg-[#F7F9FA] rounded-xl h-10"
        >
          <Building2 className="w-4 h-4 mr-2 text-[#16A34A]" />
          Login with ROSHN Account
        </Button>
      </Card>

      {/* Sign Up Link */}
      <div className="text-center text-sm">
        <span className="text-[#6B7280]">Don't have an account? </span>
        <Button
          variant="link"
          onClick={onSignup}
          className="text-[#16A34A] hover:text-[#15803D] p-0 text-sm h-auto"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
