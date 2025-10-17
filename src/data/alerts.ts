export interface Alert {
  id: string;
  type: 'hallucination' | 'policy' | 'cost-spike' | 'security' | 'compliance';
  severity: 'low' | 'medium' | 'high' | 'critical';
  appId: string;
  appName: string;
  title: string;
  description: string;
  status: 'open' | 'investigating' | 'resolved';
  createdAt: Date;
  recommendedAction: string;
  impact: string;
  metadata?: Record<string, any>;
}

export const alerts: Alert[] = [
  {
    id: 'alert-001',
    type: 'hallucination',
    severity: 'high',
    appId: 'openai-gpt',
    appName: 'OpenAI GPT-4',
    title: 'Potential Hallucination Detected',
    description: 'AI agent provided factually incorrect information about financial regulations in customer interaction',
    status: 'open',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    recommendedAction: 'Require source citation for regulatory advice',
    impact: 'High - could lead to compliance violations',
    metadata: {
      confidence: 0.87,
      customerImpacted: true,
      domain: 'financial_regulations'
    }
  },
  {
    id: 'alert-002',
    type: 'cost-spike',
    severity: 'critical',
    appId: 'aws-bedrock',
    appName: 'AWS Bedrock',
    title: 'Unusual Cost Increase',
    description: 'Usage costs increased 340% in the last 24 hours due to model fine-tuning operations',
    status: 'investigating',
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    recommendedAction: 'Review and approve large-scale training operations',
    impact: 'Critical - potential budget overrun',
    metadata: {
      costIncrease: 340,
      estimatedMonthlyImpact: 38400,
      triggerThreshold: 200
    }
  },
  {
    id: 'alert-003',
    type: 'policy',
    severity: 'medium',
    appId: 'anthropic-claude',
    appName: 'Anthropic Claude',
    title: 'Policy Violation: Data Retention',
    description: 'Customer data retained beyond 90-day policy limit in conversation logs',
    status: 'open',
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    recommendedAction: 'Configure automatic data purging after 90 days',
    impact: 'Medium - compliance risk',
    metadata: {
      dataAge: 127,
      recordsAffected: 2340,
      policyLimit: 90
    }
  },
  {
    id: 'alert-004',
    type: 'security',
    severity: 'high',
    appId: 'github-copilot',
    appName: 'GitHub Copilot',
    title: 'Sensitive Data Exposure Risk',
    description: 'Code suggestions may have included API keys or credentials in recommendations',
    status: 'open',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    recommendedAction: 'Implement pre-commit hooks for secret scanning',
    impact: 'High - potential credential leak',
    metadata: {
      patternMatches: 12,
      repositoriesAffected: 3,
      secretTypes: ['api_key', 'database_url']
    }
  },
  {
    id: 'alert-005',
    type: 'compliance',
    severity: 'critical',
    appId: 'salesforce',
    appName: 'Salesforce CRM',
    title: 'GDPR Data Processing Violation',
    description: 'EU customer data processed without explicit consent documentation',
    status: 'open',
    createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    recommendedAction: 'Suspend EU data processing until consent audit complete',
    impact: 'Critical - regulatory violation risk',
    metadata: {
      jurisdiction: 'EU',
      customersAffected: 1247,
      regulation: 'GDPR',
      violationType: 'consent_missing'
    }
  },
  {
    id: 'alert-006',
    type: 'hallucination',
    severity: 'medium',
    appId: 'openai-gpt',
    appName: 'OpenAI GPT-4',
    title: 'Inconsistent Medical Information',
    description: 'Chatbot provided conflicting drug interaction warnings in healthcare queries',
    status: 'resolved',
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    recommendedAction: 'Implement medical knowledge base validation',
    impact: 'Medium - healthcare accuracy concern',
    metadata: {
      medicalDomain: true,
      conflictType: 'drug_interactions',
      patientsAffected: 0
    }
  },
  {
    id: 'alert-007',
    type: 'policy',
    severity: 'low',
    appId: 'slack',
    appName: 'Slack Enterprise',
    title: 'Message Retention Policy Update',
    description: 'New messages not following updated 7-year retention policy',
    status: 'open',
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    recommendedAction: 'Update workspace retention settings',
    impact: 'Low - administrative cleanup needed',
    metadata: {
      messagesAffected: 45000,
      newPolicyDays: 2557, // 7 years
      oldPolicyDays: 365
    }
  }
];

export const getOpenAlerts = () => 
  alerts.filter(alert => alert.status === 'open');

export const getCriticalAlerts = () => 
  alerts.filter(alert => alert.severity === 'critical');

export const getAlertsByApp = (appId: string) => 
  alerts.filter(alert => alert.appId === appId);

export const getAlertsByType = (type: Alert['type']) => 
  alerts.filter(alert => alert.type === type);