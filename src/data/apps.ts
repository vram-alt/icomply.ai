export interface App {
  id: string;
  name: string;
  category: string;
  owner: string;
  cost: number;
  monthlyUsage: number;
  complianceTier: 'low' | 'medium' | 'high';
  riskScore: number;
  adoptionRate: number;
  status: 'active' | 'monitoring' | 'at-risk';
}

export const apps: App[] = [
  {
    id: 'salesforce',
    name: 'Salesforce CRM',
    category: 'Sales',
    owner: 'Sales Team',
    cost: 12500,
    monthlyUsage: 89000,
    complianceTier: 'high',
    riskScore: 23,
    adoptionRate: 94,
    status: 'active'
  },
  {
    id: 'slack',
    name: 'Slack Enterprise',
    category: 'Communication',
    owner: 'IT Operations',
    cost: 8900,
    monthlyUsage: 156000,
    complianceTier: 'medium',
    riskScore: 35,
    adoptionRate: 87,
    status: 'active'
  },
  {
    id: 'openai-gpt',
    name: 'OpenAI GPT-4',
    category: 'AI/ML',
    owner: 'Engineering',
    cost: 15600,
    monthlyUsage: 45000,
    complianceTier: 'high',
    riskScore: 67,
    adoptionRate: 76,
    status: 'monitoring'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'Development',
    owner: 'Engineering',
    cost: 3400,
    monthlyUsage: 28000,
    complianceTier: 'medium',
    riskScore: 42,
    adoptionRate: 91,
    status: 'active'
  },
  {
    id: 'anthropic-claude',
    name: 'Anthropic Claude',
    category: 'AI/ML',
    owner: 'Product Team',
    cost: 9800,
    monthlyUsage: 32000,
    complianceTier: 'high',
    riskScore: 58,
    adoptionRate: 68,
    status: 'monitoring'
  },
  {
    id: 'jira',
    name: 'Atlassian Jira',
    category: 'Project Management',
    owner: 'Engineering',
    cost: 4200,
    monthlyUsage: 67000,
    complianceTier: 'medium',
    riskScore: 28,
    adoptionRate: 89,
    status: 'active'
  },
  {
    id: 'hubspot',
    name: 'HubSpot Marketing Hub',
    category: 'Marketing',
    owner: 'Marketing Team',
    cost: 7800,
    monthlyUsage: 45000,
    complianceTier: 'medium',
    riskScore: 31,
    adoptionRate: 82,
    status: 'active'
  },
  {
    id: 'notion',
    name: 'Notion Workspace',
    category: 'Collaboration',
    owner: 'Operations',
    cost: 2100,
    monthlyUsage: 89000,
    complianceTier: 'low',
    riskScore: 19,
    adoptionRate: 95,
    status: 'active'
  },
  {
    id: 'zapier',
    name: 'Zapier Platform',
    category: 'Automation',
    owner: 'Operations',
    cost: 1800,
    monthlyUsage: 34000,
    complianceTier: 'medium',
    riskScore: 45,
    adoptionRate: 73,
    status: 'monitoring'
  },
  {
    id: 'figma',
    name: 'Figma Organization',
    category: 'Design',
    owner: 'Design Team',
    cost: 4500,
    monthlyUsage: 56000,
    complianceTier: 'low',
    riskScore: 22,
    adoptionRate: 96,
    status: 'active'
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'Productivity',
    owner: 'IT Operations',
    cost: 18900,
    monthlyUsage: 234000,
    complianceTier: 'high',
    riskScore: 15,
    adoptionRate: 99,
    status: 'active'
  },
  {
    id: 'datadog',
    name: 'Datadog Monitoring',
    category: 'Infrastructure',
    owner: 'Engineering',
    cost: 6700,
    monthlyUsage: 78000,
    complianceTier: 'high',
    riskScore: 38,
    adoptionRate: 85,
    status: 'active'
  },
  {
    id: 'aws-bedrock',
    name: 'AWS Bedrock',
    category: 'AI/ML',
    owner: 'Data Science',
    cost: 11200,
    monthlyUsage: 23000,
    complianceTier: 'high',
    riskScore: 72,
    adoptionRate: 64,
    status: 'at-risk'
  },
  {
    id: 'tableau',
    name: 'Tableau Desktop',
    category: 'Analytics',
    owner: 'Business Intelligence',
    cost: 8400,
    monthlyUsage: 43000,
    complianceTier: 'medium',
    riskScore: 29,
    adoptionRate: 78,
    status: 'active'
  },
  {
    id: 'zendesk',
    name: 'Zendesk Support',
    category: 'Customer Service',
    owner: 'Support Team',
    cost: 5600,
    monthlyUsage: 67000,
    complianceTier: 'medium',
    riskScore: 26,
    adoptionRate: 92,
    status: 'active'
  }
];

export const getAppsByCategory = (category: string) => 
  apps.filter(app => app.category === category);

export const getHighRiskApps = () => 
  apps.filter(app => app.riskScore > 50);

export const getTotalSpend = () => 
  apps.reduce((total, app) => total + app.cost, 0);

export const getAverageAdoption = () => 
  apps.reduce((total, app) => total + app.adoptionRate, 0) / apps.length;