import { useState } from 'react';
import { MapPin, Users, Award, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: MapPin,
    title: 'Digital Pulse Map',
    description: 'Real-time view of your community health, activities, and reports on an interactive map',
    color: '#0FA878',
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Share updates, report issues, and engage with your neighbors to build a thriving community',
    color: '#0FA878',
  },
  {
    icon: Award,
    title: 'Earn & Redeem Rewards',
    description: 'Get points for participation and redeem exclusive offers from local businesses',
    color: '#0FA878',
  },
];

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 max-w-md mx-auto">
      {/* Logo */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#16A34A] to-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-[#111827] text-2xl">Hayyak</h1>
        <p className="text-[#16A34A] text-sm">ROSHN Smart Community</p>
      </div>

      {/* Content */}
      <motion.div 
        key={currentSlide}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex flex-col items-center justify-center text-center"
      >
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: `${slide.color}20` }}
        >
          <Icon className="w-12 h-12" style={{ color: slide.color }} />
        </div>

        <h2 className="text-[#111827] text-xl mb-3">{slide.title}</h2>
        <p className="text-[#6B7280] leading-relaxed max-w-sm">
          {slide.description}
        </p>
      </motion.div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mb-6">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-6 bg-[#16A34A]' : 'w-1.5 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Action Button */}
      <Button
        onClick={handleNext}
        className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl h-11 shadow-md"
      >
        {currentSlide < slides.length - 1 ? (
          <>
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </>
        ) : (
          'Get Started'
        )}
      </Button>

      {/* Skip */}
      {currentSlide < slides.length - 1 && (
        <Button
          variant="ghost"
          onClick={onComplete}
          className="w-full mt-3 text-[#6B7280] hover:text-[#111827] text-sm"
        >
          Skip
        </Button>
      )}
    </div>
  );
}
