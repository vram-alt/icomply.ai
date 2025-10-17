import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactFormModal from '@/components/ContactFormModal';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Target, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Database,
  Shield,
  Monitor,
  BarChart3,
  Globe,
  Zap,
  Clock,
  TrendingUp,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Minus,
  Eye,
  Settings,
  Lock,
  Unlock,
  RefreshCw
} from 'lucide-react';

// Interactive Module Showcase Component
const ModuleShowcase = ({ module, isActive, onActivate }: any) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  
  const moduleIcons = {
    assessments: FileText,
    program: Target,
    aigovernance: Shield,
    monitoring: Monitor,
    humanrights: Users,
    sandbox: Database
  };

  const Icon = moduleIcons[module.id as keyof typeof moduleIcons];

  return (
    <motion.div
      className={`relative cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={() => onActivate(module.id)}
      whileHover={{ y: -5 }}
      layout
    >
      <Card className={`h-full transition-all duration-500 ${
        isActive 
          ? 'bg-[#F47F21]/10 border-[#F47F21] shadow-2xl shadow-[#F47F21]/20' 
          : 'bg-[#0F172A]/50 border-white/10 hover:border-[#F47F21]/50'
      }`}>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <motion.div 
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                isActive ? 'bg-[#F47F21] text-white' : 'bg-[#F47F21]/20 text-[#F47F21]'
              }`}
              animate={{ rotate: isActive ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold">{module.name}</h3>
              <p className="text-sm text-gray-400">{module.status}</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{module.description}</p>
          
          <div className="space-y-2">
            {module.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                className={`text-xs p-2 rounded transition-all cursor-pointer ${
                  hoveredFeature === feature 
                    ? 'bg-[#F47F21]/20 text-[#F47F21]' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onMouseEnter={() => setHoveredFeature(feature)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ x: 5 }}
              >
                • {feature}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Interactive Role Switcher
const RoleSwitcher = () => {
  const [activeRole, setActiveRole] = useState('dpo');
  
  const roles = {
    dpo: {
      title: 'DPO / Privacy',
      outcomes: [
        'Cut DSAR cycle times with routing & SLA',
        'Generate RoPA and DPIA packs in clicks',
        'Publish consent & cookie preferences consistently'
      ],
      metric: '>50% faster request fulfillment'
    },
    security: {
      title: 'Security & GRC',
      outcomes: [
        'Evidence locker and approval trails',
        'Program scoring with dashboards',
        'Incident runbooks and breach timeline'
      ],
      metric: 'Audit prep in days, not weeks'
    },
    legal: {
      title: 'Legal',
      outcomes: [
        'Map articles to obligations and actions',
        'Export regulator-ready documentation',
        'Keep an immutable record of decisions'
      ],
      metric: 'Fewer back-and-forth with auditors'
    },
    data: {
      title: 'Data/IT',
      outcomes: [
        'Integrations for identity, CRM and data stores',
        'APIs for ingesting events and publishing status',
        'Low-ops: single pane of truth for privacy work'
      ],
      metric: 'Less custom glue; fewer tickets'
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">Built for real teams, not checklists.</h2>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(roles).map(([key, role]) => (
            <motion.button
              key={key}
              onClick={() => setActiveRole(key)}
              className={`p-4 rounded-lg text-left transition-all ${
                activeRole === key
                  ? 'bg-[#F47F21] text-white'
                  : 'bg-[#0F172A]/50 text-gray-300 hover:bg-[#0F172A]/80'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-medium">{role.title}</div>
            </motion.button>
          ))}
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0F172A]/30 backdrop-blur-md rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6 text-[#F47F21]">
            {roles[activeRole as keyof typeof roles].title}
          </h3>
          <ul className="space-y-4 mb-6">
            {roles[activeRole as keyof typeof roles].outcomes.map((outcome, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>{outcome}</span>
              </motion.li>
            ))}
          </ul>
          <div className="bg-[#F47F21]/10 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-1">Typical outcome:</div>
            <div className="font-bold text-[#F47F21]">
              {roles[activeRole as keyof typeof roles].metric}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Interactive Framework Matrix
const FrameworkMatrix = () => {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);
  
  const frameworks = ['EU AI Act', 'ISO/IEC 42001', 'NIST AI RMF', 'GDPR-AI', 'Canada AIDA', 'China PIPL', 'Singapore'];
  const modules = ['Risk Assessments', 'Compliance Program', 'AI Documentation', 'Monitoring', 'Human Rights', 'Sandbox'];
  
  const support = {
    'Risk Assessments-EU AI Act': 'full',
    'Risk Assessments-ISO/IEC 42001': 'full',
    'Risk Assessments-NIST AI RMF': 'full',
    'Risk Assessments-GDPR-AI': 'full',
    'Risk Assessments-Canada AIDA': 'full',
    'Compliance Program-EU AI Act': 'full',
    'Compliance Program-ISO/IEC 42001': 'full',
    'Compliance Program-NIST AI RMF': 'full',
    'Compliance Program-GDPR-AI': 'full',
    'Compliance Program-Canada AIDA': 'full',
    'Compliance Program-China PIPL': 'full',
    'AI Documentation-EU AI Act': 'full',
    'AI Documentation-ISO/IEC 42001': 'full',
    'AI Documentation-NIST AI RMF': 'full',
    'AI Documentation-GDPR-AI': 'full',
    'Monitoring-EU AI Act': 'full',
    'Monitoring-ISO/IEC 42001': 'full',
    'Monitoring-NIST AI RMF': 'full',
    'Monitoring-GDPR-AI': 'full',
    'Human Rights-EU AI Act': 'full',
    'Human Rights-GDPR-AI': 'full',
    'Sandbox-EU AI Act': 'full',
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-4"></th>
            {frameworks.map((framework) => (
              <th key={framework} className="text-center p-2 text-xs font-medium text-gray-400">
                {framework}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modules.map((module) => (
            <tr key={module}>
              <td className="p-4 font-medium">{module}</td>
              {frameworks.map((framework) => {
                const key = `${module}-${framework}`;
                const supportLevel = support[key as keyof typeof support];
                
                return (
                  <td 
                    key={framework} 
                    className="text-center p-2 relative"
                    onMouseEnter={() => setHoveredCell(key)}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <motion.div
                      className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center cursor-pointer ${
                        supportLevel === 'full' ? 'bg-green-500/20 text-green-400' :
                        supportLevel === 'addon' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-500'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {supportLevel === 'full' ? <CheckCircle className="w-4 h-4" /> :
                       supportLevel === 'addon' ? <Plus className="w-4 h-4" /> :
                       <Minus className="w-4 h-4" />}
                    </motion.div>
                    
                    <AnimatePresence>
                      {hoveredCell === key && supportLevel && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-10 bg-[#0F172A] border border-white/20 rounded-lg p-3 text-xs w-48 -translate-x-1/2 left-1/2 top-full mt-2"
                        >
                          {supportLevel === 'full' ? 'Native support' : 
                           supportLevel === 'addon' ? 'Available as addon' : 'Not applicable'}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Advanced DSAR Process Flow Visualizer
const DemoFlowVisualizer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubStep, setActiveSubStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const processFlow = [
    {
      name: 'Request Intake',
      icon: Users,
      color: 'bg-blue-500',
      duration: '< 1 min',
      subSteps: [
        { name: 'Form Submission', description: 'Multi-language intake form with validation', time: '30s' },
        { name: 'Auto-Classification', description: 'AI categorizes request type (Access, Portability, Erasure)', time: '15s' },
        { name: 'Initial Triage', description: 'System assigns priority and routing rules', time: '10s' }
      ],
      details: {
        inputs: ['Personal details', 'Request type', 'Supporting documents'],
        outputs: ['Case ID', 'Initial classification', 'SLA timeline'],
        automations: ['Duplicate detection', 'Fraud scoring', 'Language detection']
      }
    },
    {
      name: 'Identity Verification',
      icon: Shield,
      color: 'bg-yellow-500',
      duration: '2-24 hrs',
      subSteps: [
        { name: 'Document Check', description: 'ID verification against submitted documents', time: '5 min' },
        { name: 'Multi-Factor Auth', description: 'Email/SMS verification with security questions', time: '10 min' },
        { name: 'Risk Assessment', description: 'Fraud detection and compliance scoring', time: '2 min' },
        { name: 'Manual Review', description: 'Human verification for high-risk cases', time: '1-24 hrs' }
      ],
      details: {
        inputs: ['Government ID', 'Proof of address', 'Biometric data'],
        outputs: ['Verification status', 'Risk score', 'Approved identity'],
        automations: ['OCR document scanning', 'Face matching', 'Address validation']
      }
    },
    {
      name: 'Data Discovery',
      icon: Database,
      color: 'bg-purple-500',
      duration: '1-4 hrs',
      subSteps: [
        { name: 'System Mapping', description: 'Identify all systems containing personal data', time: '30 min' },
        { name: 'Data Scanning', description: 'Automated search across databases and files', time: '2 hrs' },
        { name: 'Cross-Reference', description: 'Link data across systems using identifiers', time: '45 min' },
        { name: 'Classification', description: 'Categorize data by sensitivity and source', time: '30 min' }
      ],
      details: {
        inputs: ['User identifiers', 'System credentials', 'Search parameters'],
        outputs: ['Data inventory', 'Source mapping', 'Sensitivity classification'],
        automations: ['API integrations', 'Database queries', 'File system scanning']
      }
    },
    {
      name: 'Data Compilation',
      icon: FileText,
      color: 'bg-green-500',
      duration: '30 min - 2 hrs',
      subSteps: [
        { name: 'Data Extraction', description: 'Pull relevant data from identified sources', time: '45 min' },
        { name: 'Format Conversion', description: 'Standardize data formats for delivery', time: '20 min' },
        { name: 'Redaction Process', description: 'Remove third-party or sensitive information', time: '30 min' },
        { name: 'Package Creation', description: 'Generate secure, downloadable package', time: '15 min' }
      ],
      details: {
        inputs: ['Raw data extracts', 'Redaction rules', 'Format preferences'],
        outputs: ['Compiled dataset', 'Redaction log', 'Delivery package'],
        automations: ['Data anonymization', 'Format conversion', 'Encryption']
      }
    },
    {
      name: 'Legal Review',
      icon: CheckCircle,
      color: 'bg-orange-500',
      duration: '1-3 days',
      subSteps: [
        { name: 'Completeness Check', description: 'Verify all requested data is included', time: '2 hrs' },
        { name: 'Legal Assessment', description: 'Review for legal compliance and exemptions', time: '4 hrs' },
        { name: 'Risk Evaluation', description: 'Assess disclosure risks and mitigation', time: '2 hrs' },
        { name: 'Final Approval', description: 'Legal sign-off for data release', time: '1 hr' }
      ],
      details: {
        inputs: ['Compiled data', 'Legal framework', 'Risk assessment'],
        outputs: ['Approval decision', 'Legal opinion', 'Release authorization'],
        automations: ['Compliance checking', 'Risk scoring', 'Approval workflows']
      }
    },
    {
      name: 'Secure Delivery',
      icon: ArrowRight,
      color: 'bg-red-500',
      duration: '< 30 min',
      subSteps: [
        { name: 'Encryption', description: 'End-to-end encryption of data package', time: '5 min' },
        { name: 'Delivery Method', description: 'Secure portal or encrypted email delivery', time: '10 min' },
        { name: 'Access Control', description: 'Time-limited access with download tracking', time: '5 min' },
        { name: 'Confirmation', description: 'Delivery confirmation and case closure', time: '5 min' }
      ],
      details: {
        inputs: ['Approved package', 'Delivery preferences', 'Security requirements'],
        outputs: ['Encrypted package', 'Access credentials', 'Delivery receipt'],
        automations: ['Encryption protocols', 'Delivery tracking', 'Access logging']
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (activeSubStep < processFlow[activeStep].subSteps.length - 1) {
          setActiveSubStep(prev => prev + 1);
        } else if (activeStep < processFlow.length - 1) {
          setActiveStep(prev => prev + 1);
          setActiveSubStep(0);
        } else {
          setActiveStep(0);
          setActiveSubStep(0);
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isPlaying, activeStep, activeSubStep, processFlow.length]);

  const currentStep = processFlow[activeStep];

  return (
    <div className="bg-[#0F172A]/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">Advanced DSAR Process Flow</h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">Complete end-to-end data subject access request workflow</p>
        </div>
        <div className="flex space-x-2 sm:space-x-3">
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
            size="sm"
            className="border-gray-500 text-gray-300 text-xs sm:text-sm"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            {showDetails ? 'Hide' : 'Show'} Details
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="outline"
            size="sm"
            className="border-[#F47F21] text-[#F47F21] text-xs sm:text-sm"
          >
            {isPlaying ? <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />}
            {isPlaying ? 'Playing' : 'Play Demo'}
          </Button>
        </div>
      </div>
      
      {/* Main Process Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {processFlow.map((step, index) => (
          <motion.div
            key={step.name}
            className="relative cursor-pointer"
            onClick={() => {
              setActiveStep(index);
              setActiveSubStep(0);
            }}
          >
            <motion.div
              className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all ${
                index === activeStep 
                  ? 'border-[#F47F21] bg-[#F47F21]/10' 
                  : index < activeStep 
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-gray-600 bg-gray-600/10'
              }`}
              animate={{ 
                scale: index === activeStep ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 ${
                    index === activeStep ? 'bg-[#F47F21] text-white' :
                    index < activeStep ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}
                  animate={{ 
                    rotate: index === activeStep ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <div className="text-xs sm:text-sm font-medium">{step.name}</div>
                <div className="text-xs text-gray-400 mt-1">{step.duration}</div>
              </div>
            </motion.div>
            
            {/* Connection Line - Hidden on mobile */}
            {index < processFlow.length - 1 && (
              <motion.div
                className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#F47F21] to-gray-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: index < activeStep ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Sub-Steps Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-[#0A0F1A]/50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h4 className="text-lg sm:text-xl font-bold text-[#F47F21]">{currentStep.name}</h4>
            <div className="text-xs sm:text-sm text-gray-400">Duration: {currentStep.duration}</div>
          </div>
          
          {/* Sub-Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {currentStep.subSteps.map((subStep, index) => (
              <motion.div
                key={index}
                className={`p-3 sm:p-4 rounded-lg border transition-all ${
                  index === activeSubStep 
                    ? 'border-[#F47F21] bg-[#F47F21]/10' 
                    : index < activeSubStep
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-600 bg-gray-600/10'
                }`}
                animate={{ 
                  scale: index === activeSubStep ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === activeSubStep ? 'bg-[#F47F21] text-white' :
                    index < activeSubStep ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium">{subStep.name}</div>
                </div>
                <p className="text-xs text-gray-400 mb-2">{subStep.description}</p>
                <div className="text-xs text-[#F47F21]">⏱ {subStep.time}</div>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{Math.round(((activeSubStep + 1) / currentStep.subSteps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                className="bg-[#F47F21] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((activeSubStep + 1) / currentStep.subSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Detailed Information Panel */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-3 gap-6 bg-[#0A0F1A]/30 rounded-lg p-6">
              <div>
                <h5 className="font-bold text-green-400 mb-3 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Inputs
                </h5>
                <ul className="space-y-2">
                  {currentStep.details.inputs.map((input, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <div className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {input}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-bold text-blue-400 mb-3 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Automations
                </h5>
                <ul className="space-y-2">
                  {currentStep.details.automations.map((automation, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {automation}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-bold text-[#F47F21] mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Outputs
                </h5>
                <ul className="space-y-2">
                  {currentStep.details.outputs.map((output, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <div className="w-1 h-1 bg-[#F47F21] rounded-full mt-2 mr-2 flex-shrink-0" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#F47F21]">6</div>
          <div className="text-xs text-gray-400">Main Steps</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-green-400">21</div>
          <div className="text-xs text-gray-400">Sub-Processes</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-blue-400">95%</div>
          <div className="text-xs text-gray-400">Automation Rate</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-yellow-400">&lt; 72h</div>
          <div className="text-xs text-gray-400">Avg Completion</div>
        </div>
      </div>
    </div>
  );
};

const IComplyNew = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeModule, setActiveModule] = useState('assessments');
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [pricingTab, setPricingTab] = useState<'mid-market' | 'enterprise'>('mid-market');
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  
  const modules = {
    assessments: {
      id: 'assessments',
      name: 'AI Risk Assessments',
      status: 'EU AI Act Ready',
      description: 'Comprehensive AI risk assessments including FRIA (Fundamental Rights Impact Assessment), conformity assessments, and impact analysis for high-risk AI systems.',
      features: [
        'EU AI Act assessment templates',
        'Fundamental Rights Impact Assessment (FRIA)',
        'Multi-stage workflows, roles & approvers',
        'Evidence collection & attestations',
        'Integration with AppsBee for AI system data'
      ]
    },
    program: {
      id: 'program',
      name: 'Regulatory Compliance Program',
      status: 'Multi-Regulation Support',
      description: 'Turn AI regulations into living compliance programs across entities and regions. Track EU AI Act, GDPR-AI dependencies, and other AI regulations.',
      features: [
        'EU AI Act obligation tracking (Articles & Annexes)',
        'GDPR-AI Act dependency mapping',
        'Evidence locker; audit & attestation packs',
        'Program scoring & compliance dashboards',
        'Cross-regulation alignment tracking'
      ]
    },
    aigovernance: {
      id: 'aigovernance',
      name: 'AI System Documentation',
      status: 'Audit-Ready',
      description: 'Automated documentation for AI systems pulling data directly from AppsBee for audit readiness and regulatory compliance.',
      features: [
        'Technical documentation generation',
        'AppsBee integration for real-time AI data',
        'Audit trail and compliance evidence',
        'Automated report generation for regulators',
        'Version control and change tracking'
      ]
    },
    monitoring: {
      id: 'monitoring',
      name: 'Continuous Monitoring',
      status: 'Real-Time Compliance',
      description: 'Monitor AI systems for compliance drift, regulatory changes, and risk indicators with automated alerts and remediation workflows.',
      features: [
        'Post-market monitoring for AI systems',
        'Regulatory change notifications',
        'Risk indicator tracking and alerts',
        'Incident management and reporting',
        'Integration with AppsBee observability'
      ]
    },
    humanrights: {
      id: 'humanrights',
      name: 'Human Rights & Bias Detection',
      status: 'FRIA Support',
      description: 'Track and mitigate fundamental rights impacts and bias in AI systems as required by EU AI Act Article 27.',
      features: [
        'Fundamental rights impact tracking',
        'Bias detection and mitigation workflows',
        'Sensitive data processing safeguards',
        'Human oversight documentation',
        'Transparency and explainability records'
      ]
    },
    sandbox: {
      id: 'sandbox',
      name: 'Regulatory Sandbox Management',
      status: 'Innovation Support',
      description: 'Manage AI regulatory sandbox testing with compliance tracking and documentation for controlled environments.',
      features: [
        'Sandbox testing documentation',
        'Data processing consent management',
        'Public interest alignment tracking',
        'Exit strategy and compliance transition',
        'Regulator communication workflows'
      ]
    }
  };


  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Navigation />
      
      {/* Page Navigation Breadcrumb */}
      <div className="bg-[#0F172A]/30 border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <a href="/" className="hover:text-white">InfoComply.ai</a>
            <span>/</span>
            <a href="/tools/icomply" className="text-[#F47F21]">iComply</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 pb-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E2A47] via-[#0A0F1A] to-[#1A0F0A]" />
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F47F21' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  AI Compliance <span className="text-[#F47F21]">Automation</span>.
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Automate AI regulatory compliance, risk management, and audit readiness for EU AI Act and beyond. Integrated with AppsBee for complete AI governance.
                </p>
              </motion.div>

              {/* Badge Chips */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {['EU AI Act', 'Risk Assessments', 'FRIA', 'Audit Ready', 'AppsBee Integration', 'Evidence'].map((badge, index) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Badge variant="outline" className="border-[#F47F21]/50 text-[#F47F21] hover:bg-[#F47F21]/10">
                      {badge}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white font-medium px-8 py-4 relative overflow-hidden group"
                  onClick={() => setContactModalOpen(true)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#F47F21] to-[#FF6B35]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Contact Us
                  </span>
                </Button>
              </motion.div>

              {/* Trust Line */}
              <motion.p 
                className="text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Supports EU AI Act, ISO/IEC 42001, NIST AI RMF, and all AI regulations.
              </motion.p>
            </motion.div>

            {/* Right Visual - Device Mockup Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-[#0F172A]/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/10 to-transparent" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">iComply Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Module Carousel */}
                  <div className="space-y-4">
                    {Object.values(modules).slice(0, 4).map((module, index) => (
                      <motion.div
                        key={module.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 1 }}
                        className="bg-[#0A0F1A]/30 rounded-lg p-4 border border-white/5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#F47F21]/20 rounded-lg flex items-center justify-center">
                              <div className="w-2 h-2 bg-[#F47F21] rounded-full" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">{module.name}</div>
                              <div className="text-xs text-gray-400">{module.status}</div>
                            </div>
                          </div>
                          <div className="text-xs text-green-400">Active</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Switcher Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <RoleSwitcher />
        </div>
      </section>

      {/* Interactive Modules Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Six modules. Complete AI compliance coverage.</h2>
            <p className="text-xl text-gray-300">Click each module to explore AI compliance features. Integrates with AppsBee for seamless governance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Object.values(modules).map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ModuleShowcase 
                  module={module} 
                  isActive={activeModule === module.id}
                  onActivate={setActiveModule}
                />
              </motion.div>
            ))}
          </div>

          {/* Demo Flow Visualizer */}
          <DemoFlowVisualizer />
        </div>
      </section>

      {/* Framework Matrix */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">AI Regulation Coverage Across All Frameworks.</h2>
            <p className="text-xl text-gray-300">Comprehensive support for EU AI Act, ISO/IEC 42001, NIST AI RMF, and global AI regulations. Automate compliance regardless of the regulation.</p>
          </motion.div>

          <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <FrameworkMatrix />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AppsBee + iComply Integration Section */}
      <section className="py-20 bg-gradient-to-br from-[#F47F21]/10 via-[#0A0F1A] to-[#0E2A47]/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[#F47F21]">AppsBee + iComply</span>: Complete AI Governance & Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              The power of iComply is amplified when combined with AppsBee. Every compliance requirement can be automatically validated with real-time data from your AI systems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* AppsBee Side */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-[#F47F21]/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F47F21] rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">AppsBee</h3>
                    <p className="text-gray-400">AI Governance Platform</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  AppsBee tracks models, agents, prompts, guardrails, and AI system performance in real-time.
                </p>
                <ul className="space-y-3">
                  {[
                    'Model catalog & lineage tracking',
                    'Prompt versioning & change management',
                    'Real-time guardrail monitoring',
                    'AI system observability & metrics',
                    'Human-in-the-loop workflows',
                    'Bias detection & mitigation'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* iComply Side */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-[#F47F21]/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F47F21] rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">iComply</h3>
                    <p className="text-gray-400">AI Compliance Automation</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  iComply automates compliance documentation, risk assessments, and audit readiness using AppsBee's data.
                </p>
                <ul className="space-y-3">
                  {[
                    'EU AI Act FRIA with AppsBee data',
                    'Automated technical documentation',
                    'Real-time compliance monitoring',
                    'Audit-ready evidence generation',
                    'Regulatory obligation tracking',
                    'Continuous risk assessment'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Integration Benefits */}
          <Card className="bg-[#F47F21]/10 backdrop-blur-md border-[#F47F21]/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Use Both Together?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F47F21] mb-3">Real-Time</div>
                  <p className="text-gray-300">
                    Compliance validation happens automatically as your AI systems operate. No manual data collection.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F47F21] mb-3">Audit-Ready</div>
                  <p className="text-gray-300">
                    Every compliance requirement is backed by actual evidence from AppsBee—not just documents.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F47F21] mb-3">Complete</div>
                  <p className="text-gray-300">
                    From AI governance to regulatory compliance—one integrated solution for the entire lifecycle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Works with your existing stack.</h2>
            <p className="text-xl text-gray-300">Connect to identity providers, ITSM tools, data stores, and more.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Identity & CRM */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Identity & CRM</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Okta</div>
                <div className="bg-white/5 p-3 rounded-lg">Azure AD</div>
                <div className="bg-white/5 p-3 rounded-lg">Salesforce</div>
                <div className="bg-white/5 p-3 rounded-lg">HubSpot</div>
              </div>
            </div>

            {/* ITSM & Workflows */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">ITSM & Workflows</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">ServiceNow</div>
                <div className="bg-white/5 p-3 rounded-lg">Jira</div>
                <div className="bg-white/5 p-3 rounded-lg">Zapier</div>
                <div className="bg-white/5 p-3 rounded-lg">Monday.com</div>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Data & Analytics</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Snowflake</div>
                <div className="bg-white/5 p-3 rounded-lg">BigQuery</div>
                <div className="bg-white/5 p-3 rounded-lg">Databricks</div>
                <div className="bg-white/5 p-3 rounded-lg">Tableau</div>
              </div>
            </div>

            {/* Messaging & Collab */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Messaging & Collab</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Slack</div>
                <div className="bg-white/5 p-3 rounded-lg">Teams</div>
                <div className="bg-white/5 p-3 rounded-lg">Gmail</div>
                <div className="bg-white/5 p-3 rounded-lg">Outlook</div>
              </div>
            </div>

            {/* Security/Observability */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Security/Observability</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Splunk</div>
                <div className="bg-white/5 p-3 rounded-lg">DataDog</div>
                <div className="bg-white/5 p-3 rounded-lg">AWS CloudTrail</div>
                <div className="bg-white/5 p-3 rounded-lg">Azure Monitor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cases Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Results & Proof</h2>
            <p className="text-xl text-gray-300">Real outcomes from organizations using iComply</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-4">90%</div>
                <h3 className="text-xl font-semibold mb-2">Faster EU AI Act Compliance</h3>
                <p className="text-gray-300">Time to audit readiness reduced from 6 months to 3 weeks</p>
                <div className="mt-4 text-sm text-gray-400">
                  "iComply + AppsBee gave us instant audit-ready documentation"
                  <br />— AI Compliance Officer, Tech Unicorn
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-4">$3.2M</div>
                <h3 className="text-xl font-semibold mb-2">Annual Cost Savings</h3>
                <p className="text-gray-300">Reduced compliance costs and avoided regulatory fines</p>
                <div className="mt-4 text-sm text-gray-400">
                  "Automated compliance saved us millions in consulting fees"
                  <br />— Chief AI Officer, Healthcare Platform
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-4">100%</div>
                <h3 className="text-xl font-semibold mb-2">AI Audit Pass Rate</h3>
                <p className="text-gray-300">Zero findings in EU AI Act assessments across all clients</p>
                <div className="mt-4 text-sm text-gray-400">
                  "Regulators praised our real-time compliance evidence"
                  <br />— Chief Compliance Officer, Global AI Firm
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Pricing & Getting started</h2>
            <div className="flex justify-center mb-8">
              <div className="bg-white/5 p-1 rounded-lg">
                <button 
                  onClick={() => setPricingTab('mid-market')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    pricingTab === 'mid-market' 
                      ? 'bg-[#F47F21] text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Mid-market
                </button>
                <button 
                  onClick={() => setPricingTab('enterprise')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    pricingTab === 'enterprise' 
                      ? 'bg-[#F47F21] text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Enterprise
                </button>
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={pricingTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto text-center"
            >
              {pricingTab === 'mid-market' ? (
                <>
                  <p className="text-xl text-gray-300 mb-8">
                    Implementation typically takes 4-8 weeks depending on your existing systems and data complexity. 
                    Pricing starts at <span className="text-[#F47F21] font-semibold">$2,500/month</span> for mid-market organizations.
                  </p>
                  <p className="text-lg text-gray-400 mb-12">
                    Perfect for companies with 200-2,000 employees. Includes core compliance modules, 
                    standard integrations, and business hours support. Most customers see ROI within 6 months.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-[#F47F21] mb-2">4-8 weeks</div>
                      <div className="text-sm text-gray-400">Implementation</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-[#F47F21] mb-2">$2.5K+</div>
                      <div className="text-sm text-gray-400">Starting price/month</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-[#F47F21] mb-2">6 months</div>
                      <div className="text-sm text-gray-400">Typical ROI</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xl text-gray-300 mb-8">
                    Enterprise implementation takes 8-16 weeks with dedicated success management. 
                    Pricing varies based on <span className="text-[#F47F21] font-semibold">employee count, data volume, and compliance requirements</span>.
                  </p>
                  <p className="text-lg text-gray-400 mb-12">
                    For organizations with 2,000+ employees requiring advanced features, custom integrations, 
                    24/7 support, and dedicated compliance expertise. Contact us for custom pricing.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-[#F47F21] mb-2">8-16 weeks</div>
                      <div className="text-sm text-gray-400">Implementation</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-[#F47F21] mb-2">Custom</div>
                      <div className="text-sm text-gray-400">Pricing</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-[#F47F21] mb-2">24/7</div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">See iComply in action</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a personalized demo and see how iComply can transform your compliance operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>30-minute personalized walkthrough</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>Custom demo environment with your use cases</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>Implementation timeline and pricing discussion</span>
                </div>
              </div>
            </div>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Work Email *</label>
                    <Input type="email" className="bg-white/5 border-white/10" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <Input className="bg-white/5 border-white/10" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Title</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Size</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Primary Interest</label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="What brings you here?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gdpr">GDPR Compliance</SelectItem>
                        <SelectItem value="ccpa">CCPA/CPRA Compliance</SelectItem>
                        <SelectItem value="dsar">DSAR Automation</SelectItem>
                        <SelectItem value="ropa">RoPA Management</SelectItem>
                        <SelectItem value="breach">Breach Response</SelectItem>
                        <SelectItem value="audit">Audit Preparation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your compliance challenges..."
                      className="bg-white/5 border-white/10"
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox className="mt-1" />
                    <label className="text-sm text-gray-300">
                      I agree to receive marketing communications from InfoComply.ai. 
                      You can unsubscribe at any time. <a href="#" className="text-[#F47F21] hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white">
                    Book Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about iComply</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      How long does implementation take?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>Typical implementation takes 4-8 weeks depending on your existing systems and data complexity. We provide dedicated implementation support and can often accelerate timelines for urgent compliance needs.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      What AI regulations does iComply support?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>iComply supports all major AI regulations including EU AI Act, ISO/IEC 42001, NIST AI Risk Management Framework, and GDPR-AI dependencies. We can automate compliance for any AI regulation—our platform is regulation-agnostic and adaptable to emerging frameworks worldwide including Canada's AIDA, China's PIPL, and Singapore's AI governance framework.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      Can iComply integrate with our existing tools?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>Yes, iComply integrates with 200+ tools including identity providers (Okta, Azure AD), ITSM platforms (ServiceNow, Jira), data stores (Snowflake, BigQuery), and communication tools (Slack, Teams).</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      What's the difference between iComply and AppsBee?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>AppsBee focuses on AI governance (models, agents, prompts), while iComply handles AI compliance automation (risk assessments, audit readiness, regulatory obligations). Together they provide complete coverage—AppsBee tracks your AI systems in real-time, and iComply uses that data to automate compliance documentation and evidence generation for EU AI Act and other regulations.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      Do you offer professional services?
                      <ChevronDown className="w-5 h-5 group-content:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>Yes, we offer assessment services, managed compliance operations, and audit readiness support. Our team includes former regulators and compliance experts who can guide your program.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                      What kind of support do you provide?
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-gray-300">
                      <p>We provide 24/7 technical support, dedicated customer success managers, regular training sessions, and access to our compliance expert network for complex regulatory questions.</p>
                    </div>
                  </details>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell Banner */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 border-y border-[#F47F21]/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Need AI Governance for Your Models & Agents?</h3>
              <p className="text-sm sm:text-base text-gray-300">Complete your compliance with AppsBee—real-time AI system tracking for automated evidence generation</p>
            </div>
            <Link to="/tools/appsbee" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#F47F21] hover:bg-[#F47F21]/90 text-white">
                Explore AppsBee →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType={null}
      />
    </div>
  );
};

export default IComplyNew;
