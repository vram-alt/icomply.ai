import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Shield, 
  Monitor, 
  Users, 
  TrendingUp,
  FileText,
  AlertTriangle,
  Clock,
  Database,
  Zap,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  Calculator,
  BarChart3,
  Target,
  Award
} from 'lucide-react';

// Interactive ROI Calculator Component
const ROICalculator = () => {
  const [employees, setEmployees] = useState([1000]);
  const [dsarPerMonth, setDsarPerMonth] = useState([50]);
  const [vendors, setVendors] = useState([100]);
  const [auditDays, setAuditDays] = useState([30]);

  const calculateROI = () => {
    const hoursSaved = dsarPerMonth[0] * 1.2 + vendors[0] * 0.5 + auditDays[0] * 8;
    const monthlySavings = hoursSaved * 120; // $120 blended rate
    const annualSavings = monthlySavings * 12;
    const subscriptionCost = 50000; // Estimated annual cost
    const paybackMonths = subscriptionCost / monthlySavings;
    
    return {
      hoursSaved: Math.round(hoursSaved),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      paybackMonths: Math.round(paybackMonths * 10) / 10
    };
  };

  const roi = calculateROI();

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Number of employees</label>
            <Slider
              value={employees}
              onValueChange={setEmployees}
              max={10000}
              min={100}
              step={100}
              className="w-full"
            />
            <div className="text-sm text-gray-400 mt-1">{employees[0].toLocaleString()} employees</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">DSARs per month</label>
            <Slider
              value={dsarPerMonth}
              onValueChange={setDsarPerMonth}
              max={500}
              min={1}
              step={5}
              className="w-full"
            />
            <div className="text-sm text-gray-400 mt-1">{dsarPerMonth[0]} requests</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Number of vendors</label>
            <Slider
              value={vendors}
              onValueChange={setVendors}
              max={1000}
              min={10}
              step={10}
              className="w-full"
            />
            <div className="text-sm text-gray-400 mt-1">{vendors[0]} vendors</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Audit days per year</label>
            <Slider
              value={auditDays}
              onValueChange={setAuditDays}
              max={100}
              min={5}
              step={5}
              className="w-full"
            />
            <div className="text-sm text-gray-400 mt-1">{auditDays[0]} days</div>
          </div>
        </div>
        
        <div className="bg-[#F47F21]/10 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-bold text-[#F47F21]">Your ROI Estimate</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Hours saved/month:</span>
              <span className="font-bold">{roi.hoursSaved}</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly savings:</span>
              <span className="font-bold text-green-400">${roi.monthlySavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Annual savings:</span>
              <span className="font-bold text-green-400">${roi.annualSavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-t border-white/20 pt-3">
              <span>Payback period:</span>
              <span className="font-bold text-[#F47F21]">{roi.paybackMonths} months</span>
            </div>
          </div>
          <Button 
            className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
            onClick={() => setContactModalOpen(true)}
          >
            Contact Us for Estimate
          </Button>
        </div>
      </div>
    </div>
  );
};

// Regulation Card Component
const RegulationCard = ({ title, description, onCheck }: { title: string; description: string; onCheck: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all cursor-pointer">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute inset-0 bg-[#F47F21]/10 backdrop-blur-md rounded-lg flex items-center justify-center"
              >
                <Button 
                  size="lg" 
                  className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                  onClick={onCheck}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Run {title.includes('AI Act') ? 'AI Act' : 'ISO'} Check
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Module Explorer Component
const ModuleExplorer = ({ activeModule, setActiveModule, modules }: any) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Module Grid */}
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
        {Object.entries(modules).map(([key, module]: [string, any]) => (
          <motion.button
            key={key}
            onClick={() => setActiveModule(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-6 rounded-lg text-left transition-all ${
              activeModule === key
                ? 'bg-[#F47F21] text-white'
                : 'bg-[#0F172A]/50 text-gray-300 hover:bg-[#0F172A]/80'
            }`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                activeModule === key ? 'bg-white/20' : 'bg-[#F47F21]/20'
              }`}>
                <FileText className={`w-5 h-5 ${activeModule === key ? 'text-white' : 'text-[#F47F21]'}`} />
              </div>
              <h3 className="font-bold">{module.title}</h3>
            </div>
            <p className={`text-sm ${activeModule === key ? 'text-white/80' : 'text-gray-400'}`}>
              {module.description.split('•')[0]}...
            </p>
          </motion.button>
        ))}
      </div>
      
      {/* Active Module Details */}
      <div className="bg-[#0F172A]/50 backdrop-blur-md rounded-lg p-6 border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#F47F21]">
              {modules[activeModule].title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {modules[activeModule].description}
            </p>
            <div className="space-y-3">
              {modules[activeModule].description.split('•').slice(1).map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{feature.trim()}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Services Showcase Component
const ServicesShowcase = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  const services = [
    {
      id: 'assessments',
      title: 'Assessments',
      description: 'AI inventory, risk & gap analysis, remediation plan',
      timeline: '4-6 weeks',
      deliverables: ['Executive summary', 'Technical roadmap', 'Risk assessment', 'Compliance gaps']
    },
    {
      id: 'managed',
      title: 'Managed Governance',
      description: 'Ongoing monitoring with human-in-the-loop',
      timeline: 'Ongoing',
      deliverables: ['24/7 monitoring', 'Monthly reports', 'Incident response', 'Policy updates']
    },
    {
      id: 'audit',
      title: 'Audit Readiness',
      description: 'Evidence collection, reports and mock audits',
      timeline: '2-4 weeks',
      deliverables: ['Audit documentation', 'Evidence packages', 'Mock audit', 'Remediation plan']
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service) => (
        <motion.div
          key={service.id}
          onHoverStart={() => setHoveredService(service.id)}
          onHoverEnd={() => setHoveredService(null)}
          whileHover={{ y: -10 }}
          className="relative"
        >
          <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#F47F21]" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <AnimatePresence>
                {hoveredService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 pt-4 space-y-3">
                      <div>
                        <span className="text-sm font-medium text-[#F47F21]">Timeline: </span>
                        <span className="text-sm text-gray-300">{service.timeline}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-[#F47F21]">Deliverables:</span>
                        <ul className="mt-2 space-y-1">
                          {service.deliverables.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

// Business Cases Carousel Component
const BusinessCasesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const businessCases = [
    {
      title: 'Global compliance view',
      description: 'org model across regions → executive visibility & risk mitigation',
      icon: BarChart3,
      metric: '60% faster reporting'
    },
    {
      title: 'High-volume assessments',
      description: 'templates & workflows → faster implementation',
      icon: Zap,
      metric: '75% time savings'
    },
    {
      title: 'Dashboards & Office exports',
      description: 'less manual reporting → quicker decisions',
      icon: TrendingUp,
      metric: '50% faster decisions'
    },
    {
      title: 'Action chaos → assignments',
      description: 'approvals & evidence → delivery time savings',
      icon: Target,
      metric: '80% process efficiency'
    },
    {
      title: 'Security questionnaires',
      description: 'publish trust evidence → faster deal cycles',
      icon: Shield,
      metric: '40% faster deals'
    },
    {
      title: '3rd-party sprawl',
      description: 'vendor repository & review → reduced vendor risk',
      icon: Users,
      metric: '90% vendor visibility'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % businessCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + businessCases.length) % businessCases.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <motion.div
          className="flex"
          animate={{ x: -currentSlide * 100 + '%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {businessCases.map((case_, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-8 text-center">
                  <case_.icon className="w-16 h-16 text-[#F47F21] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{case_.title}</h3>
                  <p className="text-gray-300 mb-4">{case_.description}</p>
                  <div className="text-[#F47F21] font-bold text-lg">{case_.metric}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="flex justify-center items-center space-x-4 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex space-x-2">
          {businessCases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#F47F21]' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

// Enhanced Readiness Assessment Component
const ReadinessAssessment = ({ mode, onClose, onModeChange }: { 
  mode: 'ai-act' | 'iso-42001'; 
  onClose: () => void; 
  onModeChange: (mode: 'ai-act' | 'iso-42001') => void;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const aiActQuestions = [
    {
      question: "What sector does your AI system operate in?",
      options: ["Healthcare", "Transportation", "Finance", "Education", "Other"]
    },
    {
      question: "What type of users interact with your AI system?",
      options: ["General public", "Employees only", "Customers", "Mixed audience"]
    },
    {
      question: "Do you have human oversight mechanisms in place?",
      options: ["Yes, comprehensive", "Partially implemented", "In planning", "Not yet"]
    },
    {
      question: "How do you handle training data provenance?",
      options: ["Fully documented", "Partially tracked", "Basic records", "No tracking"]
    },
    {
      question: "Do you log AI system decisions and outcomes?",
      options: ["Comprehensive logging", "Basic logging", "Minimal logging", "No logging"]
    }
  ];

  const isoQuestions = [
    {
      question: "Do you have an AI management policy in place?",
      options: ["Yes, comprehensive", "Basic policy", "In development", "No policy"]
    },
    {
      question: "Are AI roles and responsibilities clearly defined?",
      options: ["Fully defined", "Partially defined", "In progress", "Not defined"]
    },
    {
      question: "How do you manage AI-related risks?",
      options: ["Formal process", "Basic assessment", "Ad-hoc", "No process"]
    },
    {
      question: "Do you have AI lifecycle governance?",
      options: ["Full lifecycle", "Partial coverage", "Basic controls", "No governance"]
    },
    {
      question: "How often do you conduct AI system evaluations?",
      options: ["Continuous", "Regular intervals", "Occasionally", "Never"]
    }
  ];

  const questions = mode === 'ai-act' ? aiActQuestions : isoQuestions;

  const calculateScore = () => {
    const totalQuestions = questions.length;
    let score = 0;
    
    Object.values(answers).forEach(answer => {
      if (answer === questions[0].options[0]) score += 20;
      else if (answer === questions[0].options[1]) score += 15;
      else if (answer === questions[0].options[2]) score += 10;
      else score += 5;
    });
    
    return Math.min(100, Math.round(score));
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: "Audit-ready signals", color: "text-green-400" };
    if (score >= 50) return { level: "On the way", color: "text-yellow-400" };
    return { level: "Getting started", color: "text-red-400" };
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer });
  };

  if (showResults) {
    const score = calculateScore();
    const { level, color } = getScoreLevel(score);
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Your Readiness Results</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center py-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#374151"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#F47F21"
                strokeWidth="8"
                strokeDasharray={`${score * 3.14} 314`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{score}</span>
            </div>
          </div>
          
          <h4 className="text-2xl font-bold mb-2">
            Your readiness: <span className={color}>{score}/100 — {level}</span>
          </h4>
        </div>

        <div className="bg-[#F47F21]/10 rounded-lg p-6">
          <h4 className="font-bold mb-4 text-[#F47F21]">Key Recommendations:</h4>
          <ul className="space-y-2">
            {score < 50 && (
              <>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Establish foundational governance policies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Implement basic risk assessment processes</span>
                </li>
              </>
            )}
            {score >= 50 && score < 80 && (
              <>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Enhance documentation and evidence collection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Strengthen monitoring and oversight mechanisms</span>
                </li>
              </>
            )}
            {score >= 80 && (
              <>
                <li className="flex items-start space-x-2">
                  <Award className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Maintain continuous improvement processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Award className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Consider advanced automation opportunities</span>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="flex space-x-4">
          <Button 
            className="flex-1 bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
            onClick={() => {
              // Simulate PDF download
              alert('Downloading your personalized checklist...');
            }}
          >
            Download Checklist PDF
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
            onClick={() => {
              onClose();
              // Could trigger demo form with results attached
            }}
          >
            Book Demo with Results
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">
          {mode === 'ai-act' ? 'EU AI Act' : 'ISO/IEC 42001'} Readiness Check
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Mode Selector */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => onModeChange('ai-act')}
          className={`p-4 rounded-lg border text-left transition-all ${
            mode === 'ai-act'
              ? 'border-[#F47F21] bg-[#F47F21]/10'
              : 'border-white/20 hover:border-white/40'
          }`}
        >
          <h4 className="font-medium mb-2">EU AI Act</h4>
          <p className="text-sm text-gray-400">High-risk AI system compliance</p>
        </button>
        <button
          onClick={() => onModeChange('iso-42001')}
          className={`p-4 rounded-lg border text-left transition-all ${
            mode === 'iso-42001'
              ? 'border-[#F47F21] bg-[#F47F21]/10'
              : 'border-white/20 hover:border-white/40'
          }`}
        >
          <h4 className="font-medium mb-2">ISO/IEC 42001</h4>
          <p className="text-sm text-gray-400">AI Management System standard</p>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Question {currentStep + 1} of {questions.length}</span>
          <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% complete</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-[#F47F21] h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-[#0A0F1A] rounded-lg p-6">
        <h4 className="text-xl font-bold mb-6">{questions[currentStep].question}</h4>
        <div className="space-y-3">
          {questions[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full p-4 text-left rounded-lg border transition-all ${
                answers[currentStep] === option
                  ? 'border-[#F47F21] bg-[#F47F21]/10 text-white'
                  : 'border-white/20 hover:border-white/40 text-gray-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="border-white/20"
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={!answers[currentStep]}
          className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
        >
          {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

const NewIndex = () => {
  const [activeTab, setActiveTab] = useState<'appsbee' | 'icomply'>('appsbee');
  const [activeModule, setActiveModule] = useState('assessments');
  const [readinessModalOpen, setReadinessModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [readinessMode, setReadinessMode] = useState<'ai-act' | 'iso-42001'>('ai-act');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const modules = {
    assessments: {
      title: 'Assessments',
      description: 'Template library for GDPR/CCPA/LGPD/NIST/ISO • configurable workflows & approvals • evidence export'
    },
    program: {
      title: 'Program',
      description: 'Org/regulation model • article tracking • evidence locker & program scoring'
    },
    requests: {
      title: 'Requests (DSAR)',
      description: 'Public intake form • routing & SLA • fulfillment packet'
    },
    consent: {
      title: 'Consent & Preferences',
      description: 'Central consent master • cookie & purpose mgmt • integrations'
    },
    breach: {
      title: 'Breach',
      description: 'Multi-intake • rule-based actions • timeline & reporting'
    },
    ropa: {
      title: 'RoPA/Dataflow',
      description: 'Records of processing • discovery map • risk indicators'
    }
  };

  const faqItems = [
    {
      question: "Is this legal advice?",
      answer: "No. InfoComply.ai provides software and guidance to help operationalize compliance. Always consult your legal counsel for interpretations."
    },
    {
      question: "How does AppsBee relate to iComply?",
      answer: "AppsBee governs AI agents and infrastructure; iComply automates privacy & security compliance. They're better together, but you can adopt either."
    },
    {
      question: "Can we integrate with our existing tools?",
      answer: "Yes. We offer connectors and APIs for CRMs, ITSM, data platforms and observability tools."
    },
    {
      question: "How fast can we see value?",
      answer: "Most teams run an initial assessment in days and publish their first evidence pack within weeks."
    },
    {
      question: "Where is data stored?",
      answer: "Deployed on enterprise-grade cloud with regional options. Contact us for details."
    },
    {
      question: "Do you support custom frameworks?",
      answer: "Yes. Upload or compose frameworks and map them to controls and workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Navigation />
      
      {/* Announcement Bar */}
      <div className="bg-[#F47F21]/10 border-b border-[#F47F21]/20 py-2">
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm">
            New: EU AI Act & ISO/IEC 42001 readiness check now available.
          </span>
          <button 
            onClick={() => setReadinessModalOpen(true)}
            className="ml-2 text-[#F47F21] hover:underline text-sm font-medium"
          >
            Run check →
          </button>
        </div>
      </div>

      {/* Enhanced Interactive Hero Section */}
      <section className="min-h-[100vh] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E2A47] via-[#0A0F1A] to-[#1A0F0A]" />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="w-full h-full animate-pulse"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F47F21' stroke-width='1' opacity='0.1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 50h100M50 0v100'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}
            />
          </div>
          
          {/* Subtle Data Flow Lines */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#F47F21]/20 to-transparent"
                style={{
                  top: `${20 + i * 10}%`,
                  left: '10%',
                  right: '10%',
                }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scaleX: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Enhanced Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Interactive Product Tabs */}
              <div className="relative mb-12">
                <div className="flex space-x-2 bg-[#0F172A]/50 backdrop-blur-md p-2 rounded-xl border border-white/10">
                  <motion.button
                    onClick={() => setActiveTab('appsbee')}
                    className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all relative ${
                      activeTab === 'appsbee' 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === 'appsbee' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#F47F21] rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center">
                      <Shield className="w-5 h-5 mr-2" />
                      AI Governance (AppsBee)
                    </span>
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab('icomply')}
                    className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all relative ${
                      activeTab === 'icomply' 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === 'icomply' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#F47F21] rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Compliance Automation (iComply)
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Animated Headlines */}
              <div>
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-block">Operationalize</span>{' '}
                  <motion.span 
                    className="text-[#F47F21] inline-block"
                    animate={{ 
                      textShadow: [
                        "0 0 0px #F47F21",
                        "0 0 20px #F47F21",
                        "0 0 0px #F47F21"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AI & Compliance
                  </motion.span>
                  <span className="inline-block">. Prove Trust.</span>
                </motion.h1>
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Govern agents, apps, and data across your enterprise while staying audit-ready for{' '}
                  <span className="text-[#F47F21] font-semibold">EU AI Act</span>, {' '}
                  <span className="text-[#F47F21] font-semibold">ISO/IEC 42001</span>, {' '}
                  <span className="text-[#F47F21] font-semibold">GDPR</span>, CCPA & more.
                </motion.p>
              </div>

              {/* Enhanced Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="bg-[#0F172A]/30 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                >
                  {activeTab === 'appsbee' ? (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-[#F47F21]/20 rounded-xl flex items-center justify-center">
                          <Shield className="w-6 h-6 text-[#F47F21]" />
                        </div>
                        <h3 className="text-2xl font-bold">AI Governance Features</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          { icon: AlertTriangle, text: "Guardrails & hallucination control with human-in-the-loop checks" },
                          { icon: Monitor, text: "Change management for models, prompts, tools & MCPs" },
                          { icon: BarChart3, text: "Usage, latency & cost observability across your AI stack" }
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start space-x-4 p-4 bg-[#0A0F1A]/50 rounded-lg hover:bg-[#0A0F1A]/70 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                          >
                            <item.icon className="w-6 h-6 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <span className="text-lg">{item.text}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-[#F47F21]/20 rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-[#F47F21]" />
                        </div>
                        <h3 className="text-2xl font-bold">Compliance Automation Features</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          { icon: CheckCircle, text: "Assessments & workflows with evidence and approvals" },
                          { icon: Database, text: "RoPA/Dataflow mapping, breach intake & automated response" },
                          { icon: Users, text: "DSAR automation, consent & preference center" }
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start space-x-4 p-4 bg-[#0A0F1A]/50 rounded-lg hover:bg-[#0A0F1A]/70 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                          >
                            <item.icon className="w-6 h-6 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <span className="text-lg">{item.text}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Enhanced CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button size="lg" className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white font-medium px-8 py-6 text-lg relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#F47F21] to-[#FF6B35]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      <Play className="w-6 h-6 mr-3" />
                      Book a demo
                    </span>
                    <div className="text-sm opacity-80 mt-1 relative z-10">Get a tailored 30-minute walkthrough</div>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-2 border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white px-8 py-6 text-lg backdrop-blur-md bg-[#0F172A]/50"
                    onClick={() => setReadinessModalOpen(true)}
                  >
                    <Calculator className="w-6 h-6 mr-3" />
                    Run readiness check
                  </Button>
                </motion.div>
              </motion.div>

              {/* Enhanced Trust Strip */}
              <motion.div 
                className="pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-sm text-gray-400 mb-6 text-center">Ecosystem integrations available</p>
                <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
                  {[
                    { name: 'Salesforce', color: '#00A1E0' },
                    { name: 'Workday', color: '#F7931E' },
                    { name: 'SAP', color: '#0FAAFF' },
                    { name: 'Oracle', color: '#F80000' },
                    { name: 'Microsoft', color: '#00BCF2' },
                    { name: 'AWS', color: '#FF9900' },
                    { name: 'Azure', color: '#0078D4' },
                    { name: 'GCP', color: '#4285F4' }
                  ].map((logo, index) => (
                    <motion.div 
                      key={logo.name}
                      className="bg-[#0F172A]/50 backdrop-blur-md rounded-lg p-3 border border-white/10 hover:border-[#F47F21]/50 transition-all cursor-pointer group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <div className="text-xs text-gray-400 group-hover:text-white transition-colors text-center font-medium">
                        {logo.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Interactive Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {activeTab === 'appsbee' ? (
                  <motion.div
                    key="appsbee-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* AI Governance Dashboard */}
                    <div className="bg-[#0F172A]/50 backdrop-blur-md rounded-3xl p-6 border border-white/10 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="w-full h-full bg-gradient-to-br from-[#F47F21]/20 to-transparent" />
                      </div>
                      
                      <div className="relative z-10 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#F47F21]/20 rounded-lg flex items-center justify-center">
                              <Shield className="w-4 h-4 text-[#F47F21]" />
                            </div>
                            <span className="text-sm font-semibold">AI Governance Dashboard</span>
                          </div>
                          <motion.span 
                            className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            ✓ All Systems Monitored
                          </motion.span>
                        </div>
                        
                        {/* AI Models Status */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Active AI Models</h4>
                          {[
                            { name: 'GPT-4 Customer Service', status: 'healthy', risk: 'low', requests: '2.4k' },
                            { name: 'Claude HR Assistant', status: 'monitored', risk: 'medium', requests: '890' },
                            { name: 'Custom Legal Analyzer', status: 'review', risk: 'high', requests: '156' }
                          ].map((model, i) => (
                            <motion.div
                              key={model.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                              className="bg-[#0A0F1A]/30 rounded-lg p-3 border border-white/5 hover:border-white/10 transition-all"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className={`w-2 h-2 rounded-full ${
                                    model.status === 'healthy' ? 'bg-green-400' :
                                    model.status === 'monitored' ? 'bg-yellow-400' : 'bg-red-400'
                                  }`} />
                                  <div>
                                    <div className="text-xs font-medium">{model.name}</div>
                                    <div className="text-xs text-gray-400">{model.requests} requests today</div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className={`text-xs px-2 py-1 rounded ${
                                    model.risk === 'low' ? 'bg-green-500/20 text-green-400' :
                                    model.risk === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                                    'bg-red-500/20 text-red-400'
                                  }`}>
                                    {model.risk} risk
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Governance Metrics */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-[#0A0F1A]/30 rounded-lg p-3 border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">Compliance Score</div>
                            <div className="flex items-center space-x-2">
                              <motion.div 
                                className="text-lg font-bold text-green-400"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                94%
                              </motion.div>
                              <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-green-400 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '94%' }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#0A0F1A]/30 rounded-lg p-3 border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">Policy Violations</div>
                            <motion.div 
                              className="text-lg font-bold text-yellow-400"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            >
                              3 pending
                            </motion.div>
                          </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Recent Activity</h4>
                          <div className="space-y-2">
                            {[
                              { action: 'Hallucination detected & blocked', time: '2m ago', type: 'warning' },
                              { action: 'Model updated with approval', time: '1h ago', type: 'success' },
                              { action: 'Cost threshold exceeded', time: '3h ago', type: 'info' }
                            ].map((activity, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 1 }}
                                className="flex items-center space-x-2 text-xs"
                              >
                                <div className={`w-1 h-1 rounded-full ${
                                  activity.type === 'warning' ? 'bg-yellow-400' :
                                  activity.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                                }`} />
                                <span className="text-gray-300 flex-1">{activity.action}</span>
                                <span className="text-gray-500">{activity.time}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="icomply-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Compliance Operations Dashboard */}
                    <div className="bg-[#0F172A]/50 backdrop-blur-md rounded-3xl p-6 border border-white/10 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="w-full h-full bg-gradient-to-br from-[#F47F21]/20 to-transparent" />
                      </div>
                      
                      <div className="relative z-10 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#F47F21]/20 rounded-lg flex items-center justify-center">
                              <FileText className="w-4 h-4 text-[#F47F21]" />
                            </div>
                            <span className="text-sm font-semibold">Compliance Operations</span>
                          </div>
                          <motion.span 
                            className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            ✓ GDPR Compliant
                          </motion.span>
                        </div>
                        
                        {/* Active Requests */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Active Requests</h4>
                          {[
                            { type: 'DSAR', subject: 'Data Subject Access Request', priority: 'high', due: '2 days', status: 'processing' },
                            { type: 'Consent', subject: 'Cookie Consent Update', priority: 'medium', due: '5 days', status: 'pending' },
                            { type: 'Breach', subject: 'Security Incident Report', priority: 'urgent', due: '6 hours', status: 'active' }
                          ].map((request, i) => (
                            <motion.div
                              key={request.subject}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                              className="bg-[#0A0F1A]/30 rounded-lg p-3 border border-white/5 hover:border-white/10 transition-all"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                                    request.type === 'DSAR' ? 'bg-blue-500/20 text-blue-400' :
                                    request.type === 'Consent' ? 'bg-purple-500/20 text-purple-400' : 
                                    'bg-red-500/20 text-red-400'
                                  }`}>
                                    {request.type}
                                  </div>
                                  <div>
                                    <div className="text-xs font-medium">{request.subject}</div>
                                    <div className="text-xs text-gray-400">Due in {request.due}</div>
                                  </div>
                                </div>
                                <div className={`w-2 h-2 rounded-full ${
                                  request.priority === 'urgent' ? 'bg-red-400' :
                                  request.priority === 'high' ? 'bg-yellow-400' : 'bg-green-400'
                                }`} />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Compliance Metrics */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-[#0A0F1A]/30 rounded-lg p-3 border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">DSAR Response Rate</div>
                            <div className="flex items-center space-x-2">
                              <motion.div 
                                className="text-lg font-bold text-green-400"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                98%
                              </motion.div>
                              <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-green-400 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '98%' }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#0A0F1A]/30 rounded-lg p-3 border border-white/5">
                            <div className="text-xs text-gray-400 mb-1">Avg Response Time</div>
                            <motion.div 
                              className="text-lg font-bold text-blue-400"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            >
                              12 hours
                            </motion.div>
                          </div>
                        </div>

                        {/* Recent Completions */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Recently Completed</h4>
                          <div className="space-y-2">
                            {[
                              { action: 'RoPA updated for new vendor', time: '1h ago', type: 'success' },
                              { action: 'Privacy assessment completed', time: '4h ago', type: 'success' },
                              { action: 'Consent preferences updated', time: '1d ago', type: 'info' }
                            ].map((activity, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 1 }}
                                className="flex items-center space-x-2 text-xs"
                              >
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                <span className="text-gray-300 flex-1">{activity.action}</span>
                                <span className="text-gray-500">{activity.time}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Legal Footnote */}
        <motion.div 
          className="absolute bottom-8 right-8 text-xs text-gray-500 bg-[#0F172A]/50 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Guidance simulation only — not legal advice.
        </motion.div>
      </section>

      {/* Problem → Outcome Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why companies choose InfoComply.ai</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[
              {
                problem: "AI everywhere, no central governance",
                outcome: "One pane of glass for agents, apps & policies"
              },
              {
                problem: "Audits slow down deals",
                outcome: "Evidence, approvals & reports on tap"
              },
              {
                problem: "Hallucinations create operational risk",
                outcome: "Guardrails + human review workflow"
              },
              {
                problem: "Manual privacy processes don't scale",
                outcome: "DSAR, consent & RoPA automation"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <CardContent className="p-6 h-full flex items-center justify-center [backface-visibility:hidden]">
                    <p className="text-center text-gray-300">{card.problem}</p>
                  </CardContent>
                  <CardContent className="absolute inset-0 p-6 h-full flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#F47F21]/10">
                    <p className="text-center text-[#F47F21] font-medium">{card.outcome}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm">
            Cut time-to-evidence and raise confidence across Security, Legal/Privacy, and the Business.
          </p>
        </div>
      </section>

      {/* Products Snapshot */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Two products. One trust platform.</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* AppsBee Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all">
                <CardHeader>
                  <div className="inline-block bg-[#F47F21]/20 text-[#F47F21] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    AI Governance
                  </div>
                  <CardTitle className="text-2xl">Keep your agents accountable</CardTitle>
                  <p className="text-gray-300">
                    From guardrails and oversight to change management and observability, AppsBee ensures your AI initiatives stay reliable, cost-efficient and compliant.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Hallucination triage & source-of-truth checks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Model/tool change approvals & audit trail</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Latency, spend & usage analytics</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white mt-6">
                    Explore AppsBee →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* iComply Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all">
                <CardHeader>
                  <div className="inline-block bg-[#F47F21]/20 text-[#F47F21] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Compliance Automation
                  </div>
                  <CardTitle className="text-2xl">Make compliance continuous</CardTitle>
                  <p className="text-gray-300">
                    Run assessments, map dataflows, satisfy requests and capture evidence — all in one place.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Assessments & workflows</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>RoPA/Dataflow & breach automation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>DSAR, consent & preferences</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white mt-6">
                    Explore iComply →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Calculate Your ROI</h2>
            <p className="text-xl text-gray-300">See how much InfoComply.ai can save your organization</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <ROICalculator />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Regulations Spotlight */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Be ready for new AI standards</h2>
            <p className="text-xl text-gray-300">Interactive compliance readiness assessment</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <RegulationCard
              title="EU AI Act readiness"
              description="Classify system risk, embed human oversight, log incidents, and export a documentation checklist — so you're prepared for high-risk obligations."
              onCheck={() => {
                setReadinessMode('ai-act');
                setReadinessModalOpen(true);
              }}
            />
            <RegulationCard
              title="ISO/IEC 42001 (AIMS) made practical"
              description="Map clauses to controls, track roles and risks, and demonstrate continual improvement inside day-to-day workflows."
              onCheck={() => {
                setReadinessMode('iso-42001');
                setReadinessModalOpen(true);
              }}
            />
          </div>
        </div>
      </section>

      {/* Interactive iComply Module Explorer */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Explore iComply Modules</h2>
            <p className="text-xl text-gray-300">Click each module to see what's inside</p>
          </motion.div>

          <ModuleExplorer activeModule={activeModule} setActiveModule={setActiveModule} modules={modules} />
        </div>
      </section>

      {/* Interactive Services Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Need expert hands?</h2>
            <p className="text-xl text-gray-300">Hover to see timelines and deliverables</p>
          </motion.div>

          <ServicesShowcase />
        </div>
      </section>

      {/* Interactive Business Cases Carousel */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Make the business case in minutes</h2>
            <p className="text-xl text-gray-300">Swipe through proven outcomes</p>
          </motion.div>

          <BusinessCasesCarousel />
        </div>
      </section>

      {/* Interactive Demo Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Get Started with InfoComply.ai</h2>
            <p className="text-xl text-gray-300">Book your personalized demo or run a quick readiness check</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Demo Form */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Book Your Demo</CardTitle>
                <p className="text-gray-300 text-center">Get a tailored 30-minute walkthrough</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input placeholder="John" className="bg-[#0A0F1A] border-white/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input placeholder="Doe" className="bg-[#0A0F1A] border-white/20" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Work Email *</label>
                  <Input type="email" placeholder="john.doe@company.com" className="bg-[#0A0F1A] border-white/20" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company *</label>
                  <Input placeholder="Your Company Name" className="bg-[#0A0F1A] border-white/20" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Title</label>
                    <Input placeholder="Chief Compliance Officer" className="bg-[#0A0F1A] border-white/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Size</label>
                    <Select>
                      <SelectTrigger className="bg-[#0A0F1A] border-white/20">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup (1-50)</SelectItem>
                        <SelectItem value="small">Small (51-200)</SelectItem>
                        <SelectItem value="medium">Medium (201-1000)</SelectItem>
                        <SelectItem value="large">Large (1001-5000)</SelectItem>
                        <SelectItem value="enterprise">Enterprise (5000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Interest</label>
                  <Select>
                    <SelectTrigger className="bg-[#0A0F1A] border-white/20">
                      <SelectValue placeholder="What are you most interested in?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eu-ai-act">EU AI Act</SelectItem>
                      <SelectItem value="iso-42001">ISO/IEC 42001</SelectItem>
                      <SelectItem value="dsar">DSAR Automation</SelectItem>
                      <SelectItem value="ropa">RoPA/Dataflow</SelectItem>
                      <SelectItem value="consent">Consent Management</SelectItem>
                      <SelectItem value="breach">Breach Management</SelectItem>
                      <SelectItem value="ai-governance">AI Governance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your compliance challenges and goals..."
                    className="bg-[#0A0F1A] border-white/20 min-h-[100px]"
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="gdpr-consent" className="mt-1" />
                  <label htmlFor="gdpr-consent" className="text-sm text-gray-300">
                    I agree to the processing of my information as described in the Privacy Notice. *
                  </label>
                </div>
                
                <Button className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white font-medium py-3">
                  Book my 30-min demo
                </Button>
                
                <p className="text-xs text-gray-400 text-center">
                  We'll email a calendar link shortly based on your interests.
                </p>
              </CardContent>
            </Card>

            {/* Readiness Check */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Quick Readiness Check</CardTitle>
                <p className="text-gray-300 text-center">Assess your compliance readiness in 5 minutes</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#F47F21]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Calculator className="w-12 h-12 text-[#F47F21]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Choose Your Assessment</h3>
                </div>
                
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full p-6 h-auto border-white/20 hover:border-[#F47F21] hover:bg-[#F47F21]/10 text-left"
                    onClick={() => {
                      setReadinessMode('ai-act');
                      setReadinessModalOpen(true);
                    }}
                  >
                    <div>
                      <h4 className="font-bold mb-2">EU AI Act Readiness</h4>
                      <p className="text-sm text-gray-400">
                        Assess your high-risk AI system compliance with the EU AI Act requirements
                      </p>
                    </div>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full p-6 h-auto border-white/20 hover:border-[#F47F21] hover:bg-[#F47F21]/10 text-left"
                    onClick={() => {
                      setReadinessMode('iso-42001');
                      setReadinessModalOpen(true);
                    }}
                  >
                    <div>
                      <h4 className="font-bold mb-2">ISO/IEC 42001 (AIMS)</h4>
                      <p className="text-sm text-gray-400">
                        Evaluate your AI Management System against ISO/IEC 42001 standard
                      </p>
                    </div>
                  </Button>
                </div>
                
                <div className="bg-[#F47F21]/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-[#F47F21]">What You'll Get:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Personalized readiness score</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Gap analysis and recommendations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Downloadable checklist PDF</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Priority action items</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Questions, answered</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <span className="font-medium">{item.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-[#F47F21]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-gray-300">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Readiness Check Modal */}
      <AnimatePresence>
        {readinessModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setReadinessModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0F172A] border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ReadinessAssessment 
                mode={readinessMode} 
                onClose={() => setReadinessModalOpen(false)}
                onModeChange={setReadinessMode}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0E2A47] py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/tools/appsbee" className="hover:text-white">AppsBee</a></li>
                <li><a href="/tools/icomply" className="hover:text-white">iComply</a></li>
                <li><a href="#" className="hover:text-white">EU AI Act</a></li>
                <li><a href="#" className="hover:text-white">ISO/IEC 42001</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">GDPR/CCPA/LGPD</a></li>
                <li><a href="#" className="hover:text-white">By Role</a></li>
                <li><a href="#" className="hover:text-white">Third-Party Risk</a></li>
                <li><a href="#" className="hover:text-white">Trust Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Business Cases</a></li>
                <li><a href="#" className="hover:text-white">Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="/partners" className="hover:text-white">Partners</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2013–2025 InfoComply.ai. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">DPA</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType={null}
      />
    </div>
  );
};

export default NewIndex;
