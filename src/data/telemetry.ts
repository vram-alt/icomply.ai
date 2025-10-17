export interface TelemetryData {
  timestamp: Date;
  appId: string;
  metrics: {
    cost: number;
    latency: number;
    requests: number;
    errors: number;
    violations: number;
    adoptionScore: number;
  };
}

export interface DashboardMetrics {
  totalCost: number;
  totalRequests: number;
  averageLatency: number;
  errorRate: number;
  complianceScore: number;
  activeAlerts: number;
  riskScore: number;
  adoptionRate: number;
}

// Generate time series data for the last 30 days
const generateTimeSeriesData = (appId: string, days: number = 30): TelemetryData[] => {
  const data: TelemetryData[] = [];
  const now = new Date();
  
  for (let i = days; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
    
    // Base metrics with some randomization
    const baseCost = appId === 'openai-gpt' ? 520 : appId === 'aws-bedrock' ? 380 : 150;
    const baseLatency = appId === 'openai-gpt' ? 1200 : appId === 'aws-bedrock' ? 2100 : 300;
    const baseRequests = appId === 'openai-gpt' ? 1500 : appId === 'slack' ? 5200 : 800;
    
    data.push({
      timestamp,
      appId,
      metrics: {
        cost: Math.max(0, baseCost + (Math.random() - 0.5) * 100),
        latency: Math.max(50, baseLatency + (Math.random() - 0.5) * 400),
        requests: Math.max(0, baseRequests + (Math.random() - 0.5) * 500),
        errors: Math.floor(Math.random() * 10),
        violations: Math.floor(Math.random() * 3),
        adoptionScore: Math.min(100, Math.max(0, 75 + (Math.random() - 0.5) * 30))
      }
    });
  }
  
  return data;
};

export const telemetryData: Record<string, TelemetryData[]> = {
  'openai-gpt': generateTimeSeriesData('openai-gpt'),
  'aws-bedrock': generateTimeSeriesData('aws-bedrock'),
  'anthropic-claude': generateTimeSeriesData('anthropic-claude'),
  'github-copilot': generateTimeSeriesData('github-copilot'),
  'salesforce': generateTimeSeriesData('salesforce'),
  'slack': generateTimeSeriesData('slack'),
  'microsoft-365': generateTimeSeriesData('microsoft-365')
};

export const getCurrentMetrics = (): DashboardMetrics => {
  const now = new Date();
  const recent = Object.values(telemetryData)
    .flat()
    .filter(data => now.getTime() - data.timestamp.getTime() < 24 * 60 * 60 * 1000); // Last 24 hours
  
  const totalCost = recent.reduce((sum, data) => sum + data.metrics.cost, 0);
  const totalRequests = recent.reduce((sum, data) => sum + data.metrics.requests, 0);
  const totalErrors = recent.reduce((sum, data) => sum + data.metrics.errors, 0);
  const avgLatency = recent.reduce((sum, data) => sum + data.metrics.latency, 0) / recent.length;
  const avgAdoption = recent.reduce((sum, data) => sum + data.metrics.adoptionScore, 0) / recent.length;
  
  return {
    totalCost: Math.round(totalCost),
    totalRequests: Math.round(totalRequests),
    averageLatency: Math.round(avgLatency),
    errorRate: totalRequests > 0 ? Math.round((totalErrors / totalRequests) * 100 * 100) / 100 : 0,
    complianceScore: Math.round(87 + Math.random() * 10), // Mock compliance score
    activeAlerts: 5, // From alerts data
    riskScore: Math.round(42 + Math.random() * 20),
    adoptionRate: Math.round(avgAdoption)
  };
};

export const getAppMetrics = (appId: string, days: number = 7) => {
  const appData = telemetryData[appId] || [];
  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  
  return appData.filter(data => data.timestamp >= cutoff);
};

// Mock real-time updates
export const generateRealtimeMetric = (appId: string): TelemetryData => {
  const baseData = telemetryData[appId]?.[0] || {
    timestamp: new Date(),
    appId,
    metrics: { cost: 100, latency: 500, requests: 1000, errors: 2, violations: 0, adoptionScore: 80 }
  };
  
  return {
    timestamp: new Date(),
    appId,
    metrics: {
      cost: Math.max(0, baseData.metrics.cost + (Math.random() - 0.5) * 20),
      latency: Math.max(50, baseData.metrics.latency + (Math.random() - 0.5) * 100),
      requests: Math.max(0, baseData.metrics.requests + Math.floor((Math.random() - 0.5) * 100)),
      errors: Math.floor(Math.random() * 5),
      violations: Math.floor(Math.random() * 2),
      adoptionScore: Math.min(100, Math.max(0, baseData.metrics.adoptionScore + (Math.random() - 0.5) * 5))
    }
  };
};