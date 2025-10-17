import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, DollarSign, Shield, FileCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuadrantData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  kpis: { label: string; value: string; trend: 'up' | 'down' | 'stable' }[];
  howWeFix: string[];
}

const quadrants: QuadrantData[] = [
  {
    id: 'notifications',
    title: 'Notifications Tracker & Release Management',
    description: 'Real-time monitoring and coordinated release management across your AI agent ecosystem',
    icon: Bell,
    color: 'from-blue-500 to-cyan-500',
    kpis: [
      { label: 'Active Releases', value: '23', trend: 'up' },
      { label: 'Success Rate', value: '94%', trend: 'up' },
      { label: 'Avg Deploy Time', value: '12m', trend: 'down' }
    ],
    howWeFix: [
      'Automated release coordination across all AI agents',
      'Real-time deployment status tracking',
      'Rollback automation with failure detection',
      'Change impact analysis and risk assessment'
    ]
  },
  {
    id: 'adoption',
    title: 'Adoption & Spend Management',
    description: 'Optimize costs and maximize ROI across your AI agent portfolio',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    kpis: [
      { label: 'Monthly Spend', value: '$127K', trend: 'down' },
      { label: 'Cost per Query', value: '$0.08', trend: 'down' },
      { label: 'ROI Improvement', value: '34%', trend: 'up' }
    ],
    howWeFix: [
      'Granular cost tracking per AI agent and use case',
      'Automated spend alerts and budget controls',
      'Usage optimization recommendations',
      'ROI measurement and reporting dashboard'
    ]
  },
  {
    id: 'risk',
    title: 'Risk Management',
    description: 'Proactive risk detection and mitigation for AI agent operations',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    kpis: [
      { label: 'Risk Score', value: '23/100', trend: 'down' },
      { label: 'Open Incidents', value: '5', trend: 'stable' },
      { label: 'MTTR', value: '4.2h', trend: 'down' }
    ],
    howWeFix: [
      'Continuous risk scoring and threat detection',
      'Automated incident response workflows',
      'Hallucination detection and prevention',
      'Security vulnerability scanning'
    ]
  },
  {
    id: 'compliance',
    title: 'Data Compliance',
    description: 'Ensure regulatory compliance and data governance across all AI agents',
    icon: FileCheck,
    color: 'from-purple-500 to-violet-500',
    kpis: [
      { label: 'Compliance Score', value: '98%', trend: 'up' },
      { label: 'Audit Readiness', value: '100%', trend: 'stable' },
      { label: 'Policy Violations', value: '3', trend: 'down' }
    ],
    howWeFix: [
      'Automated compliance monitoring and reporting',
      'Data lineage tracking and audit trails',
      'Policy enforcement and violation alerts',
      'Regulatory change management'
    ]
  }
];

const Apps360Wheel = () => {
  const [currentQuadrant, setCurrentQuadrant] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through quadrants
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentQuadrant((prev) => (prev + 1) % quadrants.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentData = quadrants[currentQuadrant];

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Left Information Panel */}
        <motion.div
          key={`${currentData.id}-left`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center lg:text-left">
            <div className={`w-16 h-16 bg-gradient-to-br ${currentData.color} rounded-2xl flex items-center justify-center shadow-xl mx-auto lg:mx-0 mb-4`}>
              <currentData.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-2 mb-3">
              {currentData.title}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {currentData.description}
            </p>
          </div>
          
          {/* KPIs */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Key Metrics</h4>
            <div className="space-y-3">
              {currentData.kpis.map((kpi, index) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-card/60 rounded-xl border border-white/10 shadow-lg"
                >
                  <span className="text-muted-foreground font-medium">{kpi.label}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-brand-2 font-display">{kpi.value}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      kpi.trend === 'up' ? 'bg-success' : 
                      kpi.trend === 'down' ? 'bg-danger' : 'bg-warning'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center Wheel */}
        <div className="relative w-96 h-96 mx-auto">
          {/* Central Hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-32 h-32 glass-interactive rounded-full flex flex-col items-center justify-center text-center p-4 shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              <div className="text-accent font-display font-bold text-lg mb-1">APPS360</div>
              <div className="text-sm text-muted-foreground font-medium">AI AGENTS</div>
              <div className="text-xs text-brand-2 mt-1">
                {isAutoPlaying ? 'Auto-cycling' : 'Click to resume'}
              </div>
              <motion.div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                animate={{ rotate: isAutoPlaying ? 360 : 0 }}
                transition={{ 
                  duration: isAutoPlaying ? 4 : 0.3, 
                  repeat: isAutoPlaying ? Infinity : 0, 
                  ease: "linear" 
                }}
              >
                <ArrowRight className="w-5 h-5 text-accent drop-shadow-lg" />
              </motion.div>
            </motion.div>
          </div>

          {/* Quadrants */}
          {quadrants.map((quadrant, index) => {
            const angle = (index * 90) - 45; // Start from top-right, go clockwise
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const isActive = currentQuadrant === index;

            return (
              <motion.button
                key={quadrant.id}
                className={`absolute w-24 h-24 glass-interactive rounded-xl flex flex-col items-center justify-center group cursor-pointer shadow-lg transition-all duration-500 ${
                  isActive ? 'ring-4 ring-brand-2 ring-offset-2 ring-offset-background scale-110 z-10' : 'hover:scale-105'
                }`}
                style={{
                  left: `calc(50% + ${x}px - 3rem)`,
                  top: `calc(50% + ${y}px - 3rem)`,
                }}
                onClick={() => {
                  setCurrentQuadrant(index);
                  setIsAutoPlaying(false);
                }}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  boxShadow: isActive 
                    ? '0 20px 60px -10px rgba(59, 130, 246, 0.3)' 
                    : '0 8px 32px 0 rgba(31, 38, 135, 0.5)'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${quadrant.color} rounded-xl flex items-center justify-center mb-1 shadow-lg transition-all duration-500 ${
                  isActive ? 'shadow-2xl' : ''
                }`}>
                  <quadrant.icon className="w-7 h-7 text-white drop-shadow-sm" />
                </div>
                <div className={`text-xs text-center font-medium px-1 leading-tight transition-colors duration-500 ${
                  isActive ? 'text-brand-2' : 'text-muted-foreground'
                }`}>
                  {quadrant.title.split(' ')[0]}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Information Panel */}
        <motion.div
          key={`${currentData.id}-right`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">How We Fix It</h4>
            <div className="space-y-4">
              {currentData.howWeFix.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-card/30 rounded-lg border border-white/10 shadow-lg"
                >
                  <div className="w-2 h-2 bg-brand-2 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center lg:justify-start space-x-3 pt-4">
            {quadrants.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuadrant(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentQuadrant === index 
                    ? 'bg-brand-2 scale-125 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Apps360Wheel;