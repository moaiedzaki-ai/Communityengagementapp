import { useState } from 'react';
import { ArrowLeft, Sparkles, Volume2, ThermometerSun, AlertTriangle, Activity, Upload, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import type { MainScreen } from '../MainApp';

interface ReportFlowScreenProps {
  onNavigate: (screen: MainScreen) => void;
}

const categories = [
  { id: 'cleanliness', label: 'Cleanliness', icon: Sparkles, color: '#0FA878' },
  { id: 'noise', label: 'Noise', icon: Volume2, color: '#F59E0B' },
  { id: 'comfort', label: 'Comfort', icon: ThermometerSun, color: '#3B82F6' },
  { id: 'hazard', label: 'Safety Hazard', icon: AlertTriangle, color: '#EF4444' },
  { id: 'activity', label: 'Activity', icon: Activity, color: '#8B5CF6' },
];

export default function ReportFlowScreen({ onNavigate }: ReportFlowScreenProps) {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onNavigate('report-tracking');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-4 bg-[#F8F9FA]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => step === 1 ? onNavigate('home') : setStep(step - 1)}
          className="text-[#4B5563] hover:text-[#111827] hover:bg-[#F7F9FA] rounded-xl h-8 w-8"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex-1">
          <h1 className="text-[#111827] text-xl">Submit Report</h1>
          <p className="text-[#6B7280] text-xs">Step {step} of 3</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-1.5 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-all ${
              s <= step ? 'bg-[#16A34A]' : 'bg-[#D1D5DB]'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Category Selection */}
      {step === 1 && (
        <div className="flex-1">
          <h2 className="text-[#111827] text-lg mb-3">Select Category</h2>
          <div className="grid grid-cols-2 gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Card
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`p-4 cursor-pointer transition-all shadow-sm ${
                    category === cat.id
                      ? 'bg-white border-[#16A34A] ring-2 ring-[#16A34A] ring-opacity-20'
                      : 'bg-white border-[#D1D5DB] hover:border-[#9CA3AF]'
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: `${cat.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <p className="text-[#111827] text-center text-sm">{cat.label}</p>
                </Card>
              );
            })}
          </div>
          <Button
            onClick={() => setStep(2)}
            disabled={!category}
            className="w-full mt-6 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm rounded-xl h-10 shadow-md disabled:bg-[#9CA3AF] disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}

      {/* Step 2: Description & Photo */}
      {step === 2 && (
        <div className="flex-1">
          <h2 className="text-[#111827] text-lg mb-3">Add Details</h2>
          <Card className="bg-white border-[#D1D5DB] p-4 mb-3 shadow-sm">
            <div className="space-y-4">
              <div>
                <Label htmlFor="description" className="text-[#111827] text-sm mb-1.5 block">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you'd like to report..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-[#F7F9FA] border-[#D1D5DB] text-[#111827] text-sm placeholder:text-[#9CA3AF] focus:border-[#16A34A] rounded-xl min-h-24"
                />
              </div>

              <div>
                <Label className="text-[#111827] text-sm mb-1.5 block">Photo (Optional)</Label>
                {!photo ? (
                  <label htmlFor="photo" className="block">
                    <div className="border-2 border-dashed border-[#D1D5DB] rounded-xl p-6 text-center cursor-pointer hover:border-[#16A34A]/50 transition-colors bg-[#F7F9FA]">
                      <Upload className="w-8 h-8 text-[#6B7280] mx-auto mb-2" />
                      <p className="text-[#6B7280] text-xs">Upload a photo</p>
                    </div>
                    <input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="relative rounded-xl overflow-hidden">
                    <img src={photo} alt="Preview" className="w-full h-40 object-cover" />
                    <Button
                      size="sm"
                      onClick={() => setPhoto(null)}
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white text-[#111827] text-xs h-7 shadow-md border border-[#D1D5DB]"
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
          <Button
            onClick={() => setStep(3)}
            disabled={!description}
            className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm rounded-xl h-10 shadow-md disabled:bg-[#9CA3AF] disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}

      {/* Step 3: Confirm Location */}
      {step === 3 && (
        <div className="flex-1">
          <h2 className="text-[#111827] text-lg mb-3">Confirm Location</h2>
          <Card className="bg-white border-[#D1D5DB] p-4 mb-3 shadow-sm">
            <div className="relative h-48 bg-[#F2F4F5] rounded-xl overflow-hidden mb-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-[#16A34A]" />
              </div>
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(22, 163, 74, 0.2) 0%, transparent 50%)`,
              }} />
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#16A34A] mt-0.5" />
              <div>
                <p className="text-[#111827] text-sm">Current Location</p>
                <p className="text-[#6B7280] text-xs">ROSHN Community, Block A2</p>
              </div>
            </div>
          </Card>

          {/* Summary */}
          <Card className="bg-white border-[#D1D5DB] p-4 mb-3 shadow-sm">
            <h3 className="text-[#111827] text-sm mb-2">Report Summary</h3>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Category:</span>
                <span className="text-[#111827] capitalize">{category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Description:</span>
                <span className="text-[#111827] text-right flex-1 ml-4">{description.substring(0, 40)}...</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Photo:</span>
                <span className="text-[#111827]">{photo ? 'Attached' : 'None'}</span>
              </div>
            </div>
          </Card>

          <Button
            onClick={handleSubmit}
            className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm rounded-xl h-10 shadow-md"
          >
            Submit Report
          </Button>
        </div>
      )}

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-white border-[#D1D5DB] max-w-sm mx-auto shadow-lg">
          <DialogHeader>
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-full bg-[#16A34A]/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#16A34A]" />
              </div>
            </div>
            <DialogTitle className="text-[#111827] text-center text-lg">
              Report Submitted!
            </DialogTitle>
            <DialogDescription className="text-[#6B7280] text-center text-sm">
              Thank you for helping improve our community. You earned 10 points!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
