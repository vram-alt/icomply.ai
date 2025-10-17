import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Shield, 
  TrendingUp, 
  X, 
  Minimize2,
  Maximize2,
  Settings,
  BarChart3,
  Activity,
  Users,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCurrentMetrics } from '@/data/telemetry';
import { getOpenAlerts, getCriticalAlerts } from '@/data/alerts';

interface MockAlert {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  resolved?: boolean;
}

const AutoDashboard = () => {
  const [metrics, setMetrics] = useState(getCurrentMetrics());
  const [alerts, setAlerts] = useState<MockAlert[]>([]);
  const [isRunning, setIsRunning] = useState(true);
  const [isMaximized, setIsMaximized] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      // Update metrics
      setMetrics(getCurrentMetrics());

      // Occasionally add new alerts
      if (Math.random() < 0.1) { // 10% chance every 2 seconds
        const newAlert: MockAlert = {
          id: Date.now().toString(),
          type: ['hallucination', 'cost-spike', 'security', 'policy'][Math.floor(Math.random() * 4)],
          severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)] as any,
          message: [
            'Hallucination suspected: require source confirmation',
            'Unusual cost spike detected in AI model usage',
            'Security policy violation: unauthorized data access',
            'Compliance check failed: missing audit trail'
          ][Math.floor(Math.random() * 4)],
          timestamp: new Date()
        };
        
        setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const resolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));

    // Remove resolved alert after 3 seconds
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== alertId));
    }, 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500/30 bg-red-500/10';
      case 'high': return 'border-orange-500/30 bg-orange-500/10';
      case 'medium': return 'border-yellow-500/30 bg-yellow-500/10';
      default: return 'border-blue-500/30 bg-blue-500/10';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <div className="desktop-dashboard min-h-screen">
      {/* Desktop Window Header */}
      <div className="desktop-toolbar h-14 sm:h-16 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-50">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-base sm:text-xl font-semibold text-white">
            Live Governance Dashboard
          </h1>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Status Indicator */}
          <div className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
            isRunning 
              ? 'bg-gray-600 text-gray-300' 
              : 'bg-gray-600 text-gray-300'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              isRunning ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
            }`} />
            <span>{isRunning ? 'Live' : 'Paused'}</span>
          </div>
          
          {/* Control Buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRunning(!isRunning)}
              className="bg-gray-600 border-gray-500 text-white hover:bg-gray-500 text-xs sm:text-sm px-2 sm:px-3"
            >
              {isRunning ? 'Pause' : 'Resume'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-gray-300 hover:bg-gray-600 hidden sm:inline-flex"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:bg-gray-600 hidden sm:inline-flex"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-3 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="metric-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Total Cost</p>
                <p className="text-lg sm:text-2xl font-bold text-emerald-400">${metrics.totalCost.toLocaleString()}</p>
              </div>
              <div className="p-2 sm:p-3 bg-emerald-500/20 rounded-xl">
                <DollarSign className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Risk Score</p>
                <p className="text-lg sm:text-2xl font-bold text-orange-400">{metrics.riskScore}/100</p>
              </div>
              <div className="p-2 sm:p-3 bg-orange-500/20 rounded-xl">
                <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Compliance</p>
                <p className="text-lg sm:text-2xl font-bold text-blue-400">{metrics.complianceScore}%</p>
              </div>
              <div className="p-2 sm:p-3 bg-blue-500/20 rounded-xl">
                <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Adoption</p>
                <p className="text-lg sm:text-2xl font-bold text-purple-400">{metrics.adoptionRate}%</p>
              </div>
              <div className="p-2 sm:p-3 bg-purple-500/20 rounded-xl">
                <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Panel - Alerts */}
          <div className="lg:col-span-5">
            <Card className="desktop-card h-[400px] sm:h-[500px] lg:h-[600px] flex flex-col">
              <CardHeader className="pb-3 sm:pb-4 border-b border-gray-600 p-3 sm:p-4">
                <CardTitle className="flex items-center justify-between text-base sm:text-lg font-semibold text-white">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    <span>Active Alerts</span>
                  </div>
                  <span className="text-xs sm:text-sm font-normal bg-gray-600 text-gray-300 px-2 sm:px-3 py-1 rounded-full">
                    {alerts.filter(a => !a.resolved).length} active
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-3 sm:p-4 overflow-y-auto">
                <div className="space-y-3">
                  <AnimatePresence>
                    {alerts.length === 0 ? (
                      <div className="text-center py-16 text-gray-400">
                        <CheckCircle className="w-12 h-12 mx-auto mb-3 text-gray-500" />
                        <p className="text-base">All systems operational</p>
                        <p className="text-sm text-gray-500">No active alerts detected</p>
                      </div>
                    ) : (
                      alerts.map((alert) => (
                        <motion.div
                          key={alert.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className={`border rounded-lg p-4 ${getSeverityColor(alert.severity)} ${
                            alert.resolved ? 'opacity-60' : ''
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 flex-1">
                              <div className="mt-1">
                                {alert.resolved ? (
                                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                                ) : (
                                  getSeverityIcon(alert.severity)
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-medium text-white capitalize text-sm">
                                    {alert.type.replace('-', ' ')}
                                  </span>
                                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                                    alert.severity === 'critical' ? 'bg-red-500/30 text-red-300 border border-red-500/50' :
                                    alert.severity === 'high' ? 'bg-orange-500/30 text-orange-300 border border-orange-500/50' :
                                    alert.severity === 'medium' ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-500/50' :
                                    'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                                  }`}>
                                    {alert.severity}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-300 mb-2 leading-relaxed">{alert.message}</p>
                                <p className="text-xs text-gray-400">
                                  {alert.timestamp.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                            {!alert.resolved && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => resolveAlert(alert.id)}
                                className="ml-2 text-xs bg-gray-600 border-gray-500 text-gray-200 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white"
                              >
                                Resolve
                              </Button>
                            )}
                          </div>
                        </motion.div>
                      ))
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Detailed Analytics */}
          <div className="lg:col-span-7">
            <Card className="desktop-card h-[400px] sm:h-[500px] lg:h-[600px]">
              <CardHeader className="pb-3 sm:pb-4 border-b border-gray-600 p-3 sm:p-4">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg font-semibold text-white">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span>Analytics Dashboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-4 sm:mb-6 bg-gray-700 text-xs sm:text-sm">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white">Overview</TabsTrigger>
                    <TabsTrigger value="cost" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white">Cost</TabsTrigger>
                    <TabsTrigger value="risk" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white">Risk</TabsTrigger>
                    <TabsTrigger value="compliance" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white">Compliance</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-300">System Health</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">CPU Usage</span>
                            <span className="text-sm font-medium text-white">47%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '47%' }}></div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">Memory Usage</span>
                            <span className="text-sm font-medium text-white">62%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '62%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-300">Performance Metrics</h4>
                        <div className="space-y-4">
                          <div className="text-center p-4 bg-gray-700 rounded-lg">
                            <div className="text-lg font-bold text-white">{metrics.averageLatency}ms</div>
                            <div className="text-sm text-gray-400">Avg Latency</div>
                          </div>
                          <div className="text-center p-4 bg-gray-700 rounded-lg">
                            <div className="text-lg font-bold text-white">{metrics.errorRate.toFixed(2)}%</div>
                            <div className="text-sm text-gray-400">Error Rate</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="cost">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="text-center p-6 bg-gray-700 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-emerald-400">${metrics.totalCost.toLocaleString()}</div>
                          <div className="text-sm text-gray-400 font-medium">Total Spend</div>
                        </div>
                        <div className="text-center p-6 bg-gray-700 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-blue-400">{metrics.totalRequests.toLocaleString()}</div>
                          <div className="text-sm text-gray-400 font-medium">Total Requests</div>
                        </div>
                        <div className="text-center p-6 bg-gray-700 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-purple-400">${(metrics.totalCost / metrics.totalRequests * 1000).toFixed(3)}</div>
                          <div className="text-sm text-gray-400 font-medium">Cost per 1K</div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="risk">
                    <div className="text-center space-y-6">
                      <div className="inline-block p-8 bg-gray-700 rounded-xl border border-gray-600">
                        <div className="text-4xl font-bold text-orange-400 mb-2">{metrics.riskScore}/100</div>
                        <div className="text-base text-gray-400 font-medium">Current Risk Score</div>
                      </div>
                      <div className="max-w-md mx-auto">
                        <div className="w-full bg-gray-600 rounded-full h-4">
                          <div 
                            className="bg-gradient-to-r from-emerald-400 to-orange-400 h-4 rounded-full transition-all duration-1000"
                            style={{ width: `${metrics.riskScore}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="compliance">
                    <div className="text-center space-y-6">
                      <div className="inline-block p-8 bg-gray-700 rounded-xl border border-gray-600">
                        <div className="text-4xl font-bold text-blue-400 mb-2">{metrics.complianceScore}%</div>
                        <div className="text-base text-gray-400 font-medium">Compliance Score</div>
                      </div>
                      <div className="max-w-md mx-auto">
                        <div className="w-full bg-gray-600 rounded-full h-4">
                          <div 
                            className="bg-blue-400 h-4 rounded-full transition-all duration-1000"
                            style={{ width: `${metrics.complianceScore}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoDashboard;