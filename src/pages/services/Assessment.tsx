import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactFormModal from '@/components/ContactFormModal';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Search, FileText, AlertTriangle, Target } from 'lucide-react';

const Assessment = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              AI Compliance <span className="text-gradient">Assessment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive evaluation of your current AI compliance posture, risk exposure, 
              and regulatory readiness across all AI systems and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Assess */}
      <section className="py-12 sm:py-16 md:py-20 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              What We <span className="text-gradient">Assess</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive assessment covers all critical aspects of AI compliance and governance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Inventory",
                description: "Complete catalog of all AI systems, models, and applications",
                icon: Search,
                items: ["AI system discovery", "Model cataloging", "Data flow mapping", "Usage patterns"]
              },
              {
                title: "Risk Assessment",
                description: "Identification and evaluation of compliance and operational risks",
                icon: AlertTriangle,
                items: ["Risk identification", "Impact analysis", "Probability scoring", "Risk prioritization"]
              },
              {
                title: "Compliance Gap Analysis",
                description: "Current state vs. regulatory requirements comparison",
                icon: FileText,
                items: ["GDPR compliance", "AI Act readiness", "Industry standards", "Internal policies"]
              },
              {
                title: "Remediation Roadmap",
                description: "Prioritized action plan for achieving compliance",
                icon: Target,
                items: ["Quick wins", "Medium-term goals", "Long-term strategy", "Resource planning"]
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <area.icon className="w-12 h-12 mb-4 text-brand-2" />
                    <h3 className="text-xl font-display font-bold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{area.description}</p>
                    <ul className="space-y-1">
                      {area.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Assessment <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures comprehensive coverage and actionable insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Automated scanning and manual discovery of all AI systems",
                duration: "1-2 weeks"
              },
              {
                step: "02",
                title: "Analysis",
                description: "Deep dive assessment of compliance gaps and risks",
                duration: "2-3 weeks"
              },
              {
                step: "03",
                title: "Reporting",
                description: "Comprehensive findings and recommendations report",
                duration: "1 week"
              },
              {
                step: "04",
                title: "Planning",
                description: "Prioritized roadmap and implementation planning",
                duration: "1 week"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-brand-2 mb-4 opacity-80">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground mb-2">{phase.description}</p>
                <div className="text-accent font-medium text-sm">{phase.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12 sm:py-16 md:py-20 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              What You <span className="text-gradient">Receive</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-2">Executive Summary Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Current compliance posture overview",
                    "Key risk areas and exposure levels",
                    "Regulatory readiness assessment",
                    "Strategic recommendations",
                    "Investment priorities and ROI projections"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Technical Implementation Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Detailed remediation roadmap",
                    "Technical implementation specifications",
                    "Policy and procedure templates",
                    "Monitoring and alerting setup",
                    "Training and change management plan"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Assessment</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a comprehensive understanding of your AI compliance posture in just 4-6 weeks.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-2 hover:bg-brand-2/90 text-white font-medium px-8 py-4 text-lg"
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

export default Assessment;

