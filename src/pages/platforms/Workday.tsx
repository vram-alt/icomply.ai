import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, ArrowRight, Users, Lock, Eye, Zap, UserCheck, Database } from 'lucide-react';

const Workday = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Navigation />
      
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-white">InfoComply.ai</Link>
            <span>/</span>
            <Link to="/platforms" className="hover:text-white">Platforms</Link>
            <span>/</span>
            <span className="text-[#F47F21]">Workday</span>
          </div>
        </div>
      </div>

      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
              Workday Platform
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI Governance for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Workday AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Enhance Workday AI capabilities with comprehensive governance. InfoComply ensures fair, compliant AI in HR, finance, and enterprise planning while protecting sensitive employee data.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Workday AI Governance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive governance for Workday AI across HCM, Financial Management, and Planning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <UserCheck className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>HR AI Fairness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ensure fair, unbiased AI in recruiting, performance management, and compensation decisions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Hiring bias detection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance review monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Pay equity analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Employee Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Protect sensitive employee information in AI systems with comprehensive data governance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PII masking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Access controls</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data retention policies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Eye className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Financial AI Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Monitor AI in financial planning, forecasting, and expense management for accuracy and compliance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Forecast validation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> SOX compliance</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Anomaly detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Compliance Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Automated compliance checks for EEOC, GDPR, CCPA, and other HR/Finance regulations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> EEOC reporting</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> GDPR rights management</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Audit trail generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Data Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive data governance for sensitive HR and financial data used by Workday AI.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data classification</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Usage monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Users className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Managed Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  24/7 expert management of Workday AI governance, compliance, and monitoring.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Continuous monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Proactive remediation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Expert consultation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Fair Hiring</div>
                <p className="text-sm text-gray-300">Zero bias findings</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">80%</div>
                <div className="text-lg font-semibold mb-2">Faster Compliance</div>
                <p className="text-sm text-gray-300">Automated checks</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">Zero</div>
                <div className="text-lg font-semibold mb-2">Data Breaches</div>
                <p className="text-sm text-gray-300">Proactive protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Govern Your Workday AI</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how InfoComply enhances Workday AI with comprehensive governance for HR and Finance.
              </p>
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType="workday-platform"
      />
    </div>
  );
};

export default Workday;

