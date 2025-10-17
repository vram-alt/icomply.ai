import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GetStartedModal from './GetStartedModal';

const SplitRevealHero = () => {
  const [dragPosition, setDragPosition] = useState(50);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  const headlines = [
    "While you build AI Agents, who governs them?",
    "Your AI Agents need oversight. Who's watching?",
    "AI Agents everywhere. Governance nowhere?",
    "Who oversees your AI Agents?"
  ];

  // Rotate headlines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDragPosition(percentage);
  };

  const chaosProblems = [
    "Cost spikes: $47K untracked",
    "Latency issues: 2.3s avg",
    "Policy violations: 12 open",
    "Compliance gaps: GDPR risk",
    "Shadow AI: 23 unmanaged"
  ];

  const solutionMetrics = [
    "Cost optimized: -34% spend",
    "Latency improved: 340ms avg",
    "Policies enforced: 100%",
    "Compliance ready: 98%",
    "Full visibility: 247 apps"
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[80vh] py-8 sm:py-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 md:space-y-12 lg:pr-8"
          >
            {/* Animated Headline */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-56 mb-6 sm:mb-8 md:mb-12">
              {headlines.map((headline, index) => (
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: currentHeadline === index ? 1 : 0,
                    y: currentHeadline === index ? 0 : -20
                  }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-[1.2] ${
                    currentHeadline === index ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                >
                  <span className="text-gradient">{headline}</span>
                </motion.h1>
              ))}
            </div>

            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mt-4 sm:mt-6 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Business with Responsible AI. Trusted partner.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-brand-2 hover:bg-brand-2/90 text-white font-medium px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl group shadow-xl"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                See Governance in Action
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-brand-2 text-brand-2 hover:bg-brand-2 hover:text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl group shadow-xl"
                onClick={() => setIsGetStartedOpen(true)}
              >
                Get Started
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Split View */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:pl-8"
          >
            <div 
              className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] glass rounded-xl sm:rounded-2xl overflow-hidden cursor-col-resize shadow-2xl"
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            >
              {/* Solution Side (Left) - Now Green */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 p-4 sm:p-6 md:p-8"
                style={{ clipPath: `inset(0 ${100 - dragPosition}% 0 0)` }}
              >
                <div className="text-green-400 font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">With InfoComply.ai</div>
                <div className="space-y-3 sm:space-y-4">
                  {solutionMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-green-500/20 border-2 border-green-500/30 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full shadow-lg flex-shrink-0" />
                        <span className="text-green-200 font-medium">{metric}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Problem Side (Right) - Now Red */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 p-4 sm:p-6 md:p-8"
                style={{ clipPath: `inset(0 0 0 ${dragPosition}%)` }}
              >
                <div className="text-red-400 font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">Current State: Chaos</div>
                <div className="space-y-3 sm:space-y-4">
                  {chaosProblems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-red-500/20 border-2 border-red-500/30 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse shadow-lg flex-shrink-0" />
                        <span className="text-red-200 font-medium">{problem}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Drag Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 sm:w-2 bg-white/40 cursor-col-resize z-10 shadow-lg"
                style={{ left: `${dragPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-12 sm:w-8 sm:h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-white/20">
                  <div className="w-1 h-6 sm:w-1.5 sm:h-8 bg-gray-400 rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
              ← Drag to compare: Solution vs Problem →
            </div>
          </motion.div>
        </div>
      </div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
    </section>
  );
};

export default SplitRevealHero;