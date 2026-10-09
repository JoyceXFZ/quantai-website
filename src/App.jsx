import React, { useState } from "react";

const agents = [
  {
    id: "research",
    title: "Research Agent",
    icon: "🔍",
    description: "Market signals & alpha discovery",
    details: "Scans 240+ markets, analyzes macro trends, and identifies trading signals with 98.4% accuracy.",
    stats: [
      { label: "Context Accuracy", value: "98.4%" },
      { label: "Markets Scanned", value: "240+" },
      { label: "Signals/Day", value: "12.4M" },
    ],
  },
  {
    id: "strategy",
    title: "Strategy Agent",
    icon: "📊",
    description: "Pattern recognition & backtesting",
    details: "Builds and tests signal combinations across timeframes to improve conviction and execution.",
    stats: [
      { label: "Sharper Entries", value: "4.7x" },
      { label: "Backtest Speed", value: "Real-time" },
      { label: "Win Rate", value: "68%" },
    ],
  },
  {
    id: "risk",
    title: "Risk Agent",
    icon: "⚠️",
    description: "Portfolio monitoring & alerts",
    details: "Continuously monitors portfolio drift, volatility, and exposure to protect capital.",
    stats: [
      { label: "Downside Reduction", value: "-22%" },
      { label: "Alert Speed", value: "< 100ms" },
      { label: "Max Drawdown", value: "-4.2%" },
    ],
  },
  {
    id: "execution",
    title: "Execution Agent",
    icon: "⚡",
    description: "Smart order routing & optimization",
    details: "Routes orders based on liquidity, slippage, and timing to optimize fill quality.",
    stats: [
      { label: "Response Time", value: "12ms" },
      { label: "Slippage Saved", value: "34%" },
      { label: "Uptime", value: "99.98%" },
    ],
  },
];

const metrics = [
  { label: "Portfolio Uplift", value: "+31.2%" },
  { label: "System Uptime", value: "99.98%" },
  { label: "Avg Latency", value: "12ms" },
  { label: "Clients Active", value: "1,200+" },
];

const strategyLibrary = [
  {
    title: "Trend Following",
    type: "Systematic",
    description: "Captures momentum across equities, futures, and macro markets by following persistent directional moves.",
    tags: ["Momentum", "Macro", "Cross-Asset"],
    metrics: [
      { label: "Sharpe", value: "2.4" },
      { label: "Max Drawdown", value: "-8.1%" },
      { label: "Signal Window", value: "1-30d" },
    ],
  },
  {
    title: "Mean Reversion",
    type: "Statistical Arbitrage",
    description: "Identifies temporary dislocations relative to established pricing ranges and reversion bands.",
    tags: ["Pairs", "Relative Value", "Volatility"],
    metrics: [
      { label: "Sharpe", value: "1.9" },
      { label: "Win Rate", value: "61%" },
      { label: "Signal Window", value: "1-10d" },
    ],
  },
  {
    title: "Macro Strategy",
    type: "Macro",
    description: "Uses rates, inflation, policy, and geopolitical signals to position across currencies, rates, and commodities.",
    tags: ["Rates", "FX", "Macro"],
    metrics: [
      { label: "Sharpe", value: "2.1" },
      { label: "IR Sensitivity", value: "High" },
      { label: "Signal Window", value: "1-90d" },
    ],
  },
  {
    title: "Market Neutral",
    type: "Long/Short Equity",
    description: "Pairs long and short exposure to reduce beta while isolating idiosyncratic factor opportunities.",
    tags: ["Beta Neutral", "Factor", "Equity"],
    metrics: [
      { label: "Beta", value: "0.2" },
      { label: "Hit Rate", value: "57%" },
      { label: "Signal Window", value: "1-30d" },
    ],
  },
  {
    title: "Event-Driven",
    type: "Fundamental",
    description: "Monitors earnings, M&A, restructuring, and catalyst events to exploit transient pricing inefficiencies.",
    tags: ["Catalysts", "Corporate Actions", "Volatility"],
    metrics: [
      { label: "Portfolio Beta", value: "0.7" },
      { label: "Average Hold", value: "2-6w" },
      { label: "Conviction", value: "High" },
    ],
  },
  {
    title: "Multi-Strategy",
    type: "Platform",
    description: "Combines multiple research pods and execution styles to diversify risk while maximizing opportunity capture.",
    tags: ["Diversified", "Risk Parity", "Platform"],
    metrics: [
      { label: "Diversification", value: "High" },
      { label: "Correlation", value: "Low" },
      { label: "Alpha Source", value: "Multiple" },
    ],
  },
];

export default function App() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const isStrategyTab = selectedAgent.id === "strategy";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-slate-900 text-sm">
              Q
            </div>
            <span className="text-xl font-bold tracking-tight">QuantAILab</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className="text-slate-300 hover:text-white transition">Features</button>
            <button className="text-slate-300 hover:text-white transition">Pricing</button>
            <button className="text-slate-300 hover:text-white transition">Docs</button>
            <button
              onClick={() => setShowSignupModal(true)}
              className="bg-cyan-500 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
            >
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        <div className="w-24 border-r border-white/10 bg-slate-950/50 backdrop-blur flex flex-col items-center py-6 gap-4">
          <div className="text-xs text-slate-400 font-semibold mb-2">AGENTS</div>
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`w-16 h-16 flex flex-col items-center justify-center rounded-xl transition duration-300 text-2xl ${
                selectedAgent.id === agent.id
                  ? "bg-cyan-500/20 border border-cyan-400 shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
              title={agent.title}
            >
              <span>{agent.icon}</span>
              <span className="text-xs mt-1 font-semibold text-center leading-none">
                {agent.title.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto p-8">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{selectedAgent.icon}</div>
                <div>
                  <h1 className="text-4xl font-black tracking-tight mb-2">{selectedAgent.title}</h1>
                  <p className="text-xl text-slate-300">{selectedAgent.description}</p>
                </div>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">{selectedAgent.details}</p>
              <button
                onClick={() => setShowSignupModal(true)}
                className="bg-cyan-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                Learn More →
              </button>
            </div>

            {isStrategyTab ? (
              <>
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {selectedAgent.stats.map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                      <p className="text-2xl font-black text-cyan-400">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Strategy Library</h2>
                    <button className="text-cyan-400 text-sm font-medium">View all</button>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {strategyLibrary.map((strategy, index) => (
                      <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
                          <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">{strategy.type}</span>
                        </div>
                        <p className="text-slate-300 text-sm leading-6 mb-4">{strategy.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {strategy.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-400/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                          {strategy.metrics.map((metric) => (
                            <div key={metric.label}>
                              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{metric.label}</div>
                              <div className="mt-1 text-sm font-bold text-white">{metric.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 mb-10">
                  <h2 className="text-2xl font-bold mb-4">Strategy Stack</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { label: "Factor Modeling", value: "Live" },
                      { label: "Signal Fusion", value: "Multi-model" },
                      { label: "Execution Layer", value: "Adaptive" },
                    ].map((item) => (
                      <div key={item.label} className="bg-slate-900/60 border border-white/10 rounded-xl p-4">
                        <p className="text-slate-400 text-xs mb-1 uppercase tracking-[0.2em]">{item.label}</p>
                        <p className="text-lg font-bold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid md:grid-cols-3 gap-4 mb-16">
                  {selectedAgent.stats.map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition">
                      <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                      <p className="text-3xl font-black text-cyan-400">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Platform Metrics</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {metrics.map((m, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-slate-400 text-xs mb-2">{m.label}</p>
                    <p className="text-2xl font-black text-white">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">How {selectedAgent.title} Works</h2>
              <div className="space-y-4">
                {[
                  "Real-time data ingestion from 240+ markets",
                  "Advanced pattern recognition & machine learning",
                  "Signal generation with confidence scoring",
                  "Automated execution with risk controls",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-bold text-cyan-400 text-sm">
                      {i + 1}
                    </div>
                    <span className="text-slate-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-slate-300 mb-6">
                Access {selectedAgent.title} and 3 other intelligent agents with a single subscription.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Pro Plan</p>
                  <p className="text-3xl font-bold">$79<span className="text-lg text-slate-400">/mo</span></p>
                  <button
                    onClick={() => setShowSignupModal(true)}
                    className="mt-4 w-full bg-cyan-500 text-slate-900 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                  >
                    Start Free Trial
                  </button>
                </div>
                <div className="text-sm text-slate-300 space-y-2">
                  <div className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Unlimited signal access</div>
                  <div className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Real-time alerts</div>
                  <div className="flex items-center gap-2"><span className="text-cyan-400">✓</span> API access</div>
                  <div className="flex items-center gap-2"><span className="text-cyan-400">✓</span> 24/7 support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSignupModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6">Get Started with QuantAILab</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400">
                <option value="" className="bg-slate-900">Select plan</option>
                <option value="starter" className="bg-slate-900">Starter - Free</option>
                <option value="pro" className="bg-slate-900">Pro - $79/mo</option>
                <option value="enterprise" className="bg-slate-900">Enterprise - Custom</option>
              </select>
              <button
                onClick={() => setShowSignupModal(false)}
                className="w-full bg-cyan-500 text-slate-900 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                Start Free Trial
              </button>
              <p className="text-xs text-slate-400 text-center">No credit card required. 7-day free trial.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
