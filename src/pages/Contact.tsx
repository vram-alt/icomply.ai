import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Touch
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your AI governance and compliance? Let's talk about how we can help.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left Side - Company Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <p className="text-gray-300 mb-8">
                      We're here to help you navigate AI governance, privacy compliance, and enterprise security.
                    </p>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#F47F21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Office Address</h3>
                      <p className="text-gray-300">
                        InfoComply Technologies<br />
                        123 Business Avenue<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#F47F21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-gray-300">
                        +1 (555) 123-4567<br />
                        Toll Free: +1 (800) 123-4567
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#F47F21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-300">
                        General: info@infocomply.ai<br />
                        Sales: sales@infocomply.ai<br />
                        Support: support@infocomply.ai
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#F47F21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 4:00 PM PST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info Card */}
              <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Support?</h3>
                  <p className="text-gray-300 mb-6">
                    For urgent matters or existing customer support, please reach out through your dedicated support channel or call our priority hotline.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
                  >
                    Visit Support Center
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#F47F21] mx-auto mb-4" />
                <p className="text-gray-300">Interactive map coming soon</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
