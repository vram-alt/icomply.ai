import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle, Building2, Mail, User, Phone, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    industry: '',
    primaryInterest: '',
    challenges: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    setStep(3); // Show success message
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#0A0F1A] rounded-2xl shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Step indicator */}
            {step < 3 && (
              <div className="flex items-center justify-center gap-2 pt-8 pb-4 px-8">
                <div className={`h-2 w-2 rounded-full ${step === 1 ? 'bg-[#F47F21]' : 'bg-white/20'}`} />
                <div className={`h-2 w-2 rounded-full ${step === 2 ? 'bg-[#F47F21]' : 'bg-white/20'}`} />
              </div>
            )}

            <div className="p-8">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3">Get Started with Free Assessment</h2>
                    <p className="text-gray-400">Tell us about yourself and we'll provide a personalized compliance readiness check</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Business Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!formData.firstName || !formData.lastName || !formData.email}
                      className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Company Information */}
              {step === 2 && (
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3">Tell Us About Your Organization</h2>
                    <p className="text-gray-400">Help us understand your compliance needs</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-sm font-medium flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Job Title *
                    </Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize" className="text-sm font-medium">Company Size *</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                      <SelectTrigger className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1,000 employees</SelectItem>
                        <SelectItem value="1001-5000">1,001-5,000 employees</SelectItem>
                        <SelectItem value="5000+">5,000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primaryInterest" className="text-sm font-medium">Primary Interest *</Label>
                    <Select value={formData.primaryInterest} onValueChange={(value) => handleInputChange('primaryInterest', value)}>
                      <SelectTrigger className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]">
                        <SelectValue placeholder="What are you most interested in?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-governance">AI Governance (AppsBee)</SelectItem>
                        <SelectItem value="compliance-automation">Compliance Automation (iComply)</SelectItem>
                        <SelectItem value="both">Both AI Governance & Compliance</SelectItem>
                        <SelectItem value="assessment">Free Assessment Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenges" className="text-sm font-medium">What challenges are you facing? (Optional)</Label>
                    <Textarea
                      id="challenges"
                      value={formData.challenges}
                      onChange={(e) => handleInputChange('challenges', e.target.value)}
                      className="bg-[#0F172A] border-white/10 focus:border-[#F47F21] min-h-[100px]"
                      placeholder="Tell us about your compliance or AI governance challenges..."
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="border-white/20 hover:bg-white/10"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!formData.company || !formData.jobTitle || !formData.companySize || !formData.primaryInterest}
                      className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                    >
                      Get Free Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Thank You, {formData.firstName}!</h2>
                    <p className="text-gray-400 mb-6">
                      We've received your information and will send your free compliance assessment to <span className="text-[#F47F21]">{formData.email}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Our team will also reach out within 24 hours to discuss your specific needs.
                    </p>
                  </div>

                  <Button
                    onClick={onClose}
                    className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                  >
                    Close
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetStartedModal;

