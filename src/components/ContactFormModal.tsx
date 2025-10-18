import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";
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

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // TODO: Implement form submission logic
  //   console.log('Contact form submitted:', formData);
  //   setIsSubmitted(true);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

const today = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});
    const templateParams = {
      name: formData.firstName+' '+formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      role: formData.jobTitle,
      message: formData.message,
      serviceInterest: formData.service,
      today,
    };

    try {
      await emailjs.send(
        'service_c2qz36w',
        'template_wjc02w4',
        templateParams,
        'EshlqpZ1b4Shzy4L1'
      );

      
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

    } catch (err) {
      console.error("Email send error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitted(false);
    }
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-[#0A0F1A] shadow-2xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 z-10 rounded-full p-1.5 transition-colors hover:bg-white/10 sm:right-4 sm:top-4 sm:p-2"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="p-8">
              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="mb-8 text-center">
                    <h2 className="mb-3 text-3xl font-bold">Contact Us</h2>
                    <p className="text-gray-400">
                      {serviceType === 'advisory' 
                        ? 'Learn more about our Advisory & Architecture services'
                        : serviceType === 'managed'
                        ? 'Learn more about our Managed Services'
                        : 'Get in touch with our team to discuss your AI governance needs'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium">
                          <User className="h-4 w-4" />
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="border-white/10 bg-[#0F172A] focus:border-[#F47F21]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium">
                          <User className="h-4 w-4" />
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="border-white/10 bg-[#0F172A] focus:border-[#F47F21]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                        <Mail className="h-4 w-4" />
                        Business Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-white/10 bg-[#0F172A] focus:border-[#F47F21]"
                        required
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                          <Phone className="h-4 w-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="border-white/10 bg-[#0F172A] focus:border-[#F47F21]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="flex items-center gap-2 text-sm font-medium">
                          <Building2 className="h-4 w-4" />
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="border-white/10 bg-[#0F172A] focus:border-[#F47F21]"
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
                        className="border-white/10 bg-[#0F172A] focus:border-[#F47F21]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">Service Interest *</Label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => handleInputChange('service', value)}
                      >
                        <SelectTrigger className="border-white/10 bg-[#0F172A] focus:border-[#F47F21]">
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
                      <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                        <MessageSquare className="h-4 w-4" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="min-h-[120px] border-white/10 bg-[#0F172A] focus:border-[#F47F21]"
                        placeholder="Tell us about your AI governance needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.jobTitle || !formData.service}
                      className="w-full bg-[#F47F21] text-white hover:bg-[#F47F21]/90"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-6 py-12 text-center"
                >
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="mb-3 text-3xl font-bold">Thank You, {formData.firstName}!</h2>
                    <p className="mb-6 text-gray-400">
                      We've received your inquiry and will get back to you within 24 hours at{' '}
                      <span className="text-[#F47F21]">{formData.email}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Our team is excited to discuss how we can help with your AI governance needs.
                    </p>
                  </div>

                  <Button
                    onClick={handleClose}
                    className="bg-[#F47F21] text-white hover:bg-[#F47F21]/90"
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

