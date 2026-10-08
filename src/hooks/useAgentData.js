import { useState, useEffect } from 'react';
import { agentAPI } from '../lib/agentClient';

export const useAgentStatus = () => {
  const [data, setData] = useState({
    research: 92,
    risk: 87,
    execution: 95,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      setLoading(true);
      try {
        const status = await agentAPI.getAgentStatus();
        setData(status);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Poll every 5 seconds
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};

export const usePortfolioData = () => {
  const [data, setData] = useState({
    totalValue: 2840000,
    change: 12.6,
    agents: { research: 92, risk: 87, execution: 95 },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      try {
        const portfolio = await agentAPI.getPortfolioData();
        setData(portfolio);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
    // Poll every 3 seconds
    const interval = setInterval(fetchPortfolio, 3000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};
