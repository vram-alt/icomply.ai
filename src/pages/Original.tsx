import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import SplitRevealHero from '@/components/SplitRevealHero';
import PersonaSwitch from '@/components/PersonaSwitch';
import AutoDashboard from '@/components/AutoDashboard';
import ROIEstimator from '@/components/ROIEstimator';
import KPIBadge from '@/components/KPIBadge';
import ContactFormModal from '@/components/ContactFormModal';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, TrendingUp, Shield, DollarSign, Users, Play } from 'lucide-react';

const Original = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'advisory' | 'managed' | null>(null);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const openContactModal = (service: 'advisory' | 'managed') => {
    setSelectedService(service);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <SplitRevealHero />

      {/* Who Are We Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
              Who <span className="text-gradient">Are We</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
              InfoComply.ai is a trusted leader in AI governance consulting. Our team of experts helps organizations build and operate AI responsibly—ensuring compliance, reducing risk, and earning customer trust. With deep regulatory expertise and proven governance frameworks, we empower enterprises to confidently navigate complex AI regulations and accelerate responsible AI adoption.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Governance Experts',
                description: 'Our team ensures your AI systems are governed with continuous alignment on security, privacy, and compliance',
                icon: Shield
              },
              {
                title: 'Strategic Advisors',
                description: 'Executive-level insights and frameworks to accelerate responsible AI adoption across your organization',
                icon: TrendingUp
              },
              {
                title: 'Trusted Partners',
                description: 'Working alongside Fortune 500 teams to build and maintain robust AI governance programs',
                icon: Users
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <item.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-brand-2 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <h3 className="font-display font-bold text-lg sm:text-xl mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now - Problem Story */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
              The <span className="text-gradient">AI Governance Crisis</span> is Here
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              While enterprises rush to deploy AI agents, they're creating ungoverned 
              ecosystems that put compliance, costs, and customer trust at risk.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                stat: "73%",
                label: "of enterprises have untracked AI costs",
                trend: "up",
                color: "text-red-400"
              },
              {
                stat: "340ms",
                label: "average latency issues at scale",
                trend: "up", 
                color: "text-yellow-400"
              },
              {
                stat: "89%",
                label: "face hallucination risks unchecked",
                trend: "up",
                color: "text-red-400"
              },
              {
                stat: "67%",
                label: "have compliance gaps waiting to happen",
                trend: "up",
                color: "text-red-400"
              },
              {
                stat: "82%",
                label: "need continuous monitoring and adjusted guardrails to prevent security issues",
                trend: "up",
                color: "text-red-400"
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <KPIBadge
                  value={item.stat}
                  label={item.label}
                  trend={item.trend as "up" | "down" | "stable"}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pivot Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
              Two Ways We Help - <span className="text-gradient">Pick Your Path</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Whether you need strategic guidance or hands-on management, we have the 
              right approach for your AI governance needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Advisory & Architecture",
                description: "Industry-specific blueprints, guardrails, cost/latency modeling, and compliance planning.",
                features: ["Strategic AI governance framework design", "Industry-specific compliance blueprints", "Cost and performance optimization models", "Executive-level governance insights"],
                timeline: "4-12 weeks",
                deliverable: "Complete governance architecture & roadmap",
                highlight: "Strategic guidance"
              },
              {
                title: "Managed Services", 
                description: "24/7 monitoring, human-in-the-loop validation, change management, and audit readiness.",
                features: ["Continuous monitoring and alerting", "Human-in-the-loop validation processes", "Automated change management", "Ongoing compliance maintenance"],
                timeline: "Ongoing partnership",
                deliverable: "Fully managed governance operations",
                highlight: "Hands-on management"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
                      <CardTitle className="text-xl sm:text-2xl font-display text-brand-2">{service.title}</CardTitle>
                      <span className="text-xs font-semibold text-brand-2 bg-brand-2/10 px-3 py-1 rounded-full self-start sm:self-auto">
                        {service.highlight}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                    <div>
                      <h4 className="font-semibold mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-brand-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Timeline:</span>
                        <span className="text-sm font-medium">{service.timeline}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-muted-foreground">Deliverable:</span>
                        <span className="text-sm font-medium">{service.deliverable}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => openContactModal(service.title === "Advisory & Architecture" ? 'advisory' : 'managed')}
                      className="w-full group-hover:bg-brand-2 group-hover:text-white transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Tools Section */}
      <section id="tools" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
              Our <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 px-2">
              Agentic platforms that power our work instead of advanced
            </p>
          </motion.div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4">
              <Link to="/tools/appsbee" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-brand-2 hover:bg-brand-2/90 text-white px-6 sm:px-8 py-3 sm:py-4">
                  Explore AppsBee
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/tools/icomply" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                  Explore iComply
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
              Our <span className="text-gradient">Methodology</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              A proven approach to AI governance that balances innovation with compliance
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Assess",
                description: "Comprehensive evaluation of your current AI landscape and compliance posture"
              },
              {
                step: "02", 
                title: "Design",
                description: "Custom governance framework tailored to your industry and regulatory requirements"
              },
              {
                step: "03",
                title: "Implement", 
                description: "Deploy tools and processes with minimal disruption to existing workflows"
              },
              {
                step: "04",
                title: "Monitor",
                description: "Continuous monitoring and optimization to ensure ongoing compliance and performance"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all text-center">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-3xl sm:text-4xl font-bold text-brand-2 mb-3 sm:mb-4">{item.step}</div>
                    <h3 className="text-lg sm:text-xl font-display font-bold mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Advantage Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
              Our <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Why leading enterprises choose InfoComply.ai for their AI governance needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Regulatory Expertise",
                description: "Deep knowledge of AI regulations across jurisdictions, from EU AI Act to emerging frameworks",
                icon: Shield
              },
              {
                title: "Enterprise Scale",
                description: "Built for Fortune 500 complexity with enterprise-grade security and scalability",
                icon: TrendingUp
              },
              {
                title: "Proven ROI",
                description: "Average 300% ROI within 12 months through reduced compliance costs and faster deployments",
                icon: DollarSign
              },
              {
                title: "Industry Focus",
                description: "Specialized solutions for financial services, healthcare, and other regulated industries",
                icon: Users
              },
              {
                title: "Continuous Innovation",
                description: "Regular updates to stay ahead of evolving regulations and emerging AI risks",
                icon: Play
              },
              {
                title: "Expert Support",
                description: "Dedicated compliance experts and technical support to ensure your success",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-brand-2 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <h3 className="font-display font-bold text-lg sm:text-xl mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Hidden until content is ready */}
      {/* 
      <section className="py-24 bg-card/5">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about AI governance, compliance trends, and regulatory updates
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "EU AI Act Implementation: What Enterprises Need to Know",
                excerpt: "A comprehensive guide to preparing for the EU AI Act requirements and timelines",
                date: "Dec 15, 2024",
                readTime: "8 min read",
                category: "Regulation"
              },
              {
                title: "Building AI Governance for Financial Services",
                excerpt: "Best practices for implementing AI governance in regulated financial institutions",
                date: "Dec 12, 2024", 
                readTime: "6 min read",
                category: "Industry"
              },
              {
                title: "The ROI of AI Compliance: Beyond Risk Mitigation",
                excerpt: "How proper AI governance drives business value and competitive advantage",
                date: "Dec 10, 2024",
                readTime: "5 min read", 
                category: "Business"
              }
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-brand-2 bg-brand-2/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-xl mb-4 group-hover:text-brand-2 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="ghost" size="sm" className="group-hover:text-brand-2">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      */}

      {/* Persona Switch Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PersonaSwitch />
        </div>
      </section>

      {/* Auto Dashboard Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AutoDashboard />
        </div>
      </section>

      {/* ROI Estimator Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ROIEstimator />
        </div>
      </section>

      {/* Products Section - Hidden as it's redundant with Tools section */}
      {/* 
      <section className="py-24 bg-card/5">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced tools that power our consulting services and provide ongoing governance capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                <CardHeader>
                  <CardTitle className="text-3xl font-display text-brand-2">AppsBee</CardTitle>
                  <p className="text-lg text-muted-foreground">AI Governance & Risk Management Platform</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive AI governance platform that monitors, manages, and mitigates risks 
                    across your entire AI ecosystem. From model deployment to ongoing compliance.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {[
                        "Real-time AI model monitoring & alerting",
                        "Automated guardrails & policy enforcement", 
                        "Risk assessment & compliance scoring",
                        "Change management & approval workflows",
                        "Comprehensive audit trail generation"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-brand-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full group-hover:bg-brand-2 group-hover:text-white transition-colors">
                    Explore AppsBee
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                <CardHeader>
                  <CardTitle className="text-3xl font-display text-brand-2">iComply</CardTitle>
                  <p className="text-lg text-muted-foreground">Privacy & Compliance Automation Platform</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Automated privacy compliance platform that handles GDPR, CCPA, and other regulations. 
                    Streamline data subject requests, consent management, and breach response.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {[
                        "GDPR/CCPA compliance automation",
                        "Data subject request handling & workflows",
                        "Consent management & preference centers",
                        "Breach notification & incident response", 
                        "Privacy impact assessments & RoPA management"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-brand-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full group-hover:bg-brand-2 group-hover:text-white transition-colors">
                    Explore iComply
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              These platforms are available as part of our managed services or as standalone solutions
            </p>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-brand-1/20 to-brand-2/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
              Ready to Transform Your <span className="text-gradient">AI Governance</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 px-2">
              Join leading enterprises who trust InfoComply.ai to navigate the complex landscape 
              of AI compliance and governance. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-brand-2 hover:bg-brand-2/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                onClick={() => {
                  setSelectedService(null);
                  setContactModalOpen(true);
                }}
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              {/* Download Whitepaper - Disabled for now
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Download Whitepaper
              </Button>
              */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType={selectedService}
      />
    </div>
  );
};

export default Original;

