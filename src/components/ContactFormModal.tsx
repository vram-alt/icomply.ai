import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle, Building2, Mail, User, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: 'advisory' | 'managed' | null;
}

const ContactFormModal = ({ isOpen, onClose, serviceType = null }: ContactFormModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    service: serviceType || '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      service: serviceType || '',
      message: '',
    });
    onClose();
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
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#0A0F1A] rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="p-8">
              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
                    <p className="text-gray-400">
                      {serviceType === 'advisory' 
                        ? 'Learn more about our Advisory & Architecture services'
                        : serviceType === 'managed'
                        ? 'Learn more about our Managed Services'
                        : 'Get in touch with our team to discuss your AI governance needs'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid md:grid-cols-2 gap-4">
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
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobTitle" className="text-sm font-medium">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">Service Interest *</Label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => handleInputChange('service', value)}
                      >
                        <SelectTrigger className="bg-[#0F172A] border-white/10 focus:border-[#F47F21]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="advisory">Advisory & Architecture</SelectItem>
                          <SelectItem value="managed">Managed Services</SelectItem>
                          <SelectItem value="both">Both Services</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-[#0F172A] border-white/10 focus:border-[#F47F21] min-h-[120px]"
                        placeholder="Tell us about your AI governance needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.jobTitle || !formData.service}
                      className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </motion.div>
              ) : (
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
                      We've received your inquiry and will get back to you within 24 hours at{' '}
                      <span className="text-[#F47F21]">{formData.email}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Our team is excited to discuss how we can help with your AI governance needs.
                    </p>
                  </div>

                  <Button
                    onClick={handleClose}
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

export default ContactFormModal;

