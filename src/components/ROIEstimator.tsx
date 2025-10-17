import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Mail, ArrowRight, Play, Pause, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface ROIResults {
  estimatedSavings: number;
  riskReduction: number;
  servicePlan: string;
  monthlyFee: number;
  annualROI: number;
}

const ROIEstimator = () => {
  const [inputs, setInputs] = useState({
    numApps: 25,
    monthlyQueries: 100000,
    avgCostPerApp: 500,
    complianceTier: 'medium'
  });
  
  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isLiveMode, setIsLiveMode] = useState(true);
  const [userControlMode, setUserControlMode] = useState(false);

  // Live simulation effect
  useEffect(() => {
    if (!isLiveMode) return;

    const interval = setInterval(() => {
      // Simulate realistic changes in enterprise environment
      const variations = {
        numApps: Math.floor(Math.random() * 20) + 15, // 15-35 apps
        monthlyQueries: Math.floor(Math.random() * 200000) + 50000, // 50K-250K queries
        avgCostPerApp: Math.floor(Math.random() * 800) + 200, // $200-1000
        complianceTier: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
      };

      setInputs(variations);
      
      // Auto-calculate ROI with new values
      autoCalculateROI(variations);
    }, 3000); // Update every 3 seconds

    // Initial calculation
    autoCalculateROI(inputs);
    setShowResults(true);

    return () => clearInterval(interval);
  }, [isLiveMode]);

  const autoCalculateROI = (currentInputs: typeof inputs) => {
    const { numApps, monthlyQueries, avgCostPerApp, complianceTier } = currentInputs;
    
    // Savings calculation based on industry benchmarks
    const baseSpend = numApps * avgCostPerApp;
    const efficiencyGain = Math.min(0.35, 0.15 + (numApps / 100) * 0.2); // 15-35% efficiency
    const estimatedSavings = Math.round(baseSpend * 12 * efficiencyGain);
    
    // Risk reduction based on compliance tier
    const riskMultiplier = {
      low: 0.6,
      medium: 0.75,
      high: 0.9
    }[complianceTier] || 0.75;
    
    const riskReduction = Math.round(65 * riskMultiplier);
    
    // Service plan recommendation
    let servicePlan = 'Essential';
    let monthlyFee = 2500;
    
    if (numApps > 50 || complianceTier === 'high') {
      servicePlan = 'Enterprise';
      monthlyFee = 7500;
    } else if (numApps > 20 || monthlyQueries > 150000) {
      servicePlan = 'Professional';
      monthlyFee = 4500;
    }
    
    const annualFee = monthlyFee * 12;
    const annualROI = Math.round(((estimatedSavings - annualFee) / annualFee) * 100);
    
    const calculatedResults: ROIResults = {
      estimatedSavings,
      riskReduction,
      servicePlan,
      monthlyFee,
      annualROI
    };
    
    setResults(calculatedResults);
  };

  const calculateROI = () => {
    autoCalculateROI(inputs);
    setShowResults(true);
  };

  const handleTakeControl = () => {
    setIsLiveMode(false);
    setUserControlMode(true);
  };

  const handleResumeLive = () => {
    setIsLiveMode(true);
    setUserControlMode(false);
  };

  const handleEmailReport = () => {
    if (!results) return;
    
    // In a real app, this would send an email or navigate to contact form
    const reportData = {
      ...inputs,
      ...results,
      timestamp: new Date().toISOString()
    };
    
    console.log('ROI Report Data:', reportData);
    
    // Note: Report generated (toast notification removed)
    
    // Store in localStorage for contact form prefill
    localStorage.setItem('roiEstimate', JSON.stringify(reportData));
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-display font-bold mb-4">ROI Estimator</h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {isLiveMode 
            ? "Watch live simulated savings and ROI calculations based on real enterprise scenarios" 
            : "Get a personalized estimate of your potential savings and risk reduction with InfoComply.ai"
          }
        </p>
        
        {/* Mode Control */}
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium ${
            isLiveMode 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
              : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
          }`}>
            <div className={`w-2 h-2 rounded-full ${isLiveMode ? 'bg-emerald-400 animate-pulse' : 'bg-gray-400'}`} />
            <span>{isLiveMode ? 'Live Demo' : 'Custom Input'}</span>
          </div>
          
          {isLiveMode ? (
            <Button
              onClick={handleTakeControl}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Settings className="w-4 h-4 mr-2" />
              Customize Values
            </Button>
          ) : (
            <Button
              onClick={handleResumeLive}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Play className="w-4 h-4 mr-2" />
              Resume Live Demo
            </Button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className={`glass border-white/10 ${isLiveMode ? 'opacity-75' : 'opacity-100'} transition-opacity`}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calculator className="w-5 h-5" />
                <span>{isLiveMode ? 'Live Environment Simulation' : 'Your Environment'}</span>
              </div>
              {isLiveMode && (
                <div className="flex items-center space-x-2 text-sm text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>Auto-updating</span>
                </div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Number of Apps */}
            <div className="space-y-3">
              <Label htmlFor="numApps">Number of AI Agents & Apps: {inputs.numApps}</Label>
              <Slider
                id="numApps"
                min={5}
                max={500}
                step={5}
                value={[inputs.numApps]}
                onValueChange={(value) => !isLiveMode && setInputs(prev => ({ ...prev, numApps: value[0] }))}
                className="w-full"
                disabled={isLiveMode}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5</span>
                <span>500+</span>
              </div>
            </div>

            {/* Monthly Queries */}
            <div className="space-y-3">
              <Label htmlFor="monthlyQueries">Monthly Queries: {inputs.monthlyQueries.toLocaleString()}</Label>
              <Slider
                id="monthlyQueries"
                min={1000}
                max={10000000}
                step={1000}
                value={[inputs.monthlyQueries]}
                onValueChange={(value) => !isLiveMode && setInputs(prev => ({ ...prev, monthlyQueries: value[0] }))}
                className="w-full"
                disabled={isLiveMode}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1K</span>
                <span>10M+</span>
              </div>
            </div>

            {/* Average Cost per App */}
            <div className="space-y-2">
              <Label htmlFor="avgCost">Average Monthly Cost per App</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="avgCost"
                  type="number"
                  value={inputs.avgCostPerApp}
                  onChange={(e) => !isLiveMode && setInputs(prev => ({ ...prev, avgCostPerApp: parseInt(e.target.value) || 0 }))}
                  className="pl-8"
                  placeholder="500"
                  disabled={isLiveMode}
                />
              </div>
            </div>

            {/* Compliance Tier */}
            <div className="space-y-2">
              <Label htmlFor="compliance">Compliance Requirements</Label>
              <Select 
                value={inputs.complianceTier} 
                onValueChange={(value) => !isLiveMode && setInputs(prev => ({ ...prev, complianceTier: value }))}
                disabled={isLiveMode}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select compliance tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Basic governance</SelectItem>
                  <SelectItem value="medium">Medium - Industry standards</SelectItem>
                  <SelectItem value="high">High - Regulated industry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {!isLiveMode && (
              <Button 
                onClick={calculateROI}
                className="w-full gradient-brand text-white font-medium"
                size="lg"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculate ROI
              </Button>
            )}
            
            {isLiveMode && (
              <div className="text-center p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <div className="flex items-center justify-center space-x-2 text-emerald-400 mb-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Auto-calculating ROI...</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Values update every 3 seconds with realistic scenarios
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-green-400">
                      {isLiveMode ? 'Live ROI Simulation' : 'Your ROI Estimate'}
                    </span>
                    {isLiveMode && (
                      <div className="flex items-center space-x-2 text-sm text-emerald-400">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span>Live</span>
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                      <div className="text-2xl font-bold text-green-400">
                        ${results.estimatedSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                    </div>
                    
                    <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400">
                        {results.riskReduction}%
                      </div>
                      <div className="text-sm text-muted-foreground">Risk Reduction</div>
                    </div>
                  </div>

                  {/* Service Plan */}
                  <div className="p-4 bg-card/50 rounded-xl">
                    <h4 className="font-medium mb-2">Recommended Plan</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-brand-2">{results.servicePlan}</span>
                      <span className="text-muted-foreground">${results.monthlyFee.toLocaleString()}/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Annual ROI: <span className="text-green-400 font-bold">{results.annualROI}%</span>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Annual Spend</span>
                      <span>${(inputs.numApps * inputs.avgCostPerApp * 12).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projected Savings</span>
                      <span className="text-green-400">${results.estimatedSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">InfoComply.ai Annual Cost</span>
                      <span>${(results.monthlyFee * 12).toLocaleString()}</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between font-bold">
                      <span>Net Annual Benefit</span>
                      <span className="text-green-400">
                        ${(results.estimatedSavings - (results.monthlyFee * 12)).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleEmailReport}
                    className="w-full bg-brand-2 hover:bg-brand-2/90 text-white font-medium"
                    size="lg"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me This Report
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ROIEstimator;