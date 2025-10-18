import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    serviceInterest: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

const today = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});
    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      role: formData.role,
      message: formData.message,
      serviceInterest: formData.serviceInterest.join(", "),
      today,
    };

    try {
      await emailjs.send(
        'service_c2qz36w',
        'template_wjc02w4',
        templateParams,
        'EshlqpZ1b4Shzy4L1'
      );

      
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        message: "",
        serviceInterest: [],
      });

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      console.error("Email send error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={className}
    >
      <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
        <CardContent className="p-8">
          <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
          
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-green-400">Message Sent!</h3>
              <p className="text-gray-300">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  className="border-white/10 bg-white/5"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-white/10 bg-white/5"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Company"
                  className="border-white/10 bg-white/5"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  required
                />
                <Input
                  placeholder="Role"
                  className="border-white/10 bg-white/5"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium">Service Interest</label>
                <div className="space-y-2">
                  {['Assessment', 'Managed Governance', 'Audit Readiness'].map(service => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        checked={formData.serviceInterest.includes(service)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({...formData, serviceInterest: [...formData.serviceInterest, service]});
                          } else {
                            setFormData({...formData, serviceInterest: formData.serviceInterest.filter(s => s !== service)});
                          }
                        }}
                      />
                      <label className="text-sm">{service}</label>
                    </div>
                  ))}
                </div>
              </div>

              <Textarea
                placeholder="Tell us about your current challenges..."
                className="border-white/10 bg-white/5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={3}
              />

              <Button
                type="submit"
                className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  'Contact Us'
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
