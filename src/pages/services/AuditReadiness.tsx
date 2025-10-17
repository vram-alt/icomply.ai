import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactFormModal from '@/components/ContactFormModal';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, FileText, Clock, Award } from 'lucide-react';

const AuditReadiness = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-1/10 to-brand-2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Audit <span className="text-gradient">Readiness</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Prepare your organization for regulatory audits with comprehensive documentation, 
              evidence collection, and expert guidance to ensure compliance confidence.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-2 hover:bg-brand-2/90 text-white px-8 py-4"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to audit preparation that ensures you're ready for any regulatory examination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Documentation Review",
                description: "Comprehensive review of all AI governance documentation and policies"
              },
              {
                icon: Shield,
                title: "Evidence Collection",
                description: "Systematic collection and organization of compliance evidence and audit trails"
              },
              {
                icon: Clock,
                title: "Mock Audits",
                description: "Practice audits to identify gaps and prepare your team for the real examination"
              },
              {
                icon: Award,
                title: "Remediation Support",
                description: "Expert guidance to address any identified gaps or compliance issues"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all text-center">
                  <CardContent className="p-8">
                    <item.icon className="w-16 h-16 mx-auto mb-6 text-brand-2" />
                    <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliverables Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Key <span className="text-gradient">Deliverables</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to confidently face regulatory audits and demonstrate compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Audit Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Complete compliance documentation library",
                      "Organized evidence repository with audit trails",
                      "Policy and procedure documentation",
                      "Risk assessment and mitigation records",
                      "Training and awareness documentation",
                      "Incident response and remediation logs"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Readiness Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Comprehensive readiness scorecard",
                      "Gap analysis with remediation priorities",
                      "Mock audit findings and recommendations",
                      "Team preparation and training materials",
                      "Response templates and communication guides",
                      "Ongoing monitoring and maintenance plan"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Typical <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures thorough preparation within 4-8 weeks
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  week: "Week 1-2",
                  title: "Assessment",
                  description: "Current state analysis and gap identification"
                },
                {
                  week: "Week 3-4",
                  title: "Documentation",
                  description: "Evidence collection and documentation review"
                },
                {
                  week: "Week 5-6",
                  title: "Mock Audit",
                  description: "Practice audit and team preparation"
                },
                {
                  week: "Week 7-8",
                  title: "Finalization",
                  description: "Final preparations and readiness validation"
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.week}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-brand-2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-2 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{phase.week}</h3>
                  <h4 className="font-semibold mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-brand-1/20 to-brand-2/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready for Your Next <span className="text-gradient">Audit</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Don't let audit anxiety hold you back. Get prepared with our comprehensive 
              audit readiness program and face regulatory examinations with confidence.
            </p>
            
            <Button 
              size="lg" 
              className="bg-brand-2 hover:bg-brand-2/90 text-white px-8 py-4"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType="advisory"
      />
    </div>
  );
};

export default AuditReadiness;

