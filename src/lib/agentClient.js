import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
const AGENT_API_KEY = import.meta.env.VITE_AGENT_API_KEY;

const agentClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(AGENT_API_KEY && { 'Authorization': `Bearer ${AGENT_API_KEY}` }),
  },
});

// Agent endpoints
export const agentAPI = {
  // Research Agent
  getResearchSignals: async (params = {}) => {
    try {
      const response = await agentClient.get('/api/agents/research/signals', { params });
      return response.data;
    } catch (error) {
      console.error('Research Agent Error:', error);
      throw error;
    }
  },

  // Strategy Agent
  backtest: async (strategy) => {
    try {
      const response = await agentClient.post('/api/agents/strategy/backtest', strategy);
      return response.data;
    } catch (error) {
      console.error('Strategy Agent Error:', error);
      throw error;
    }
  },

  // Risk Agent
  getPortfolioRisk: async (portfolio) => {
    try {
      const response = await agentClient.post('/api/agents/risk/analyze', portfolio);
      return response.data;
    } catch (error) {
      console.error('Risk Agent Error:', error);
      throw error;
    }
  },

  // Execution Agent
  executeOrder: async (order) => {
    try {
      const response = await agentClient.post('/api/agents/execution/execute', order);
      return response.data;
    } catch (error) {
      console.error('Execution Agent Error:', error);
      throw error;
    }
  },

  // Get agent status
  getAgentStatus: async () => {
    try {
      const response = await agentClient.get('/api/agents/status');
      return response.data;
    } catch (error) {
      console.error('Agent Status Error:', error);
      return {
        research: 92,
        risk: 87,
        execution: 95,
      };
    }
  },

  // Get live portfolio data
  getPortfolioData: async () => {
    try {
      const response = await agentClient.get('/api/portfolio');
      return response.data;
    } catch (error) {
      console.error('Portfolio Data Error:', error);
      return {
        totalValue: 2840000,
        change: 12.6,
        agents: {
          research: 92,
          risk: 87,
          execution: 95,
        },
      };
    }
  },
};

export default agentClient;
