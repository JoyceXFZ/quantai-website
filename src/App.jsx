import React, { useState } from "react";

const agents = [
  {
    title: "Research Agent",
    verdict: "RESEARCH",
    description: "Market analysis & signal discovery",
    icon: "🔍",
    stat: "98.4% accuracy",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Strategy Agent",
    verdict: "STRATEGY",
    description: "Pattern recognition & backtesting",
    icon: "📊",
    stat: "4.7x sharper",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Risk Agent",
    verdict: "RISK",
    description: "Portfolio monitoring & alerts",
    icon: "⚠️",
    stat: "-22% reduction",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Execution Agent",
    verdict: "EXECUTE",
    description: "Smart order routing & optimization",
    icon: "⚡",
    stat: "12ms response",
    color: "from-orange-500 to-amber-500",
  },
];

const metrics = [
  { label: "Markets Tracked", value: "240+" },
  { label: "Signals/Day", value: "12.4M" },
  { label: "System Uptime", value: "99.98%" },
  { label: "Avg Return", value: "+31.2%" },
];

const features = [
  "Real-time market intelligence",
  "Multi-asset coverage",
  "Risk-aware execution",
  "Automated alerts",
  "Backtesting engine",
  "API integration",
];

const faq = [
  {
    q: "How does the Research Agent work?",
    a: "It scans 240+ markets, analyzes macro trends, and identifies trading signals with 98.4% accuracy.",
  },
  {
    q: "Can I backtest strategies?",
    a: "Yes. The Strategy Agent builds and tests signal combinations across multiple timeframes.",
  },
  {
    q: "What's included in the free tier?",
    a: "Limited daily queries, basic signal feed, and email alerts. Upgrade for priority access and advanced features.",
  },
  {
    q: "Does it support crypto and stocks?",
    a: "Yes, full coverage of equities, crypto, forex, and commodities in a single unified system.",
  },
];

function VerdictCard({ agent }) {
  return (
    <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 hover:border-blue-300 hover:shadow-xl transition duration-300 cursor-pointer h-full">
      <div className="text-5xl mb-4">{agent.icon}</div>
      <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r text-white text-sm font-bold" 
           style={{
             backgroundImage: `linear-gradient(to right, rgb(${agent.color.includes('blue') ? '59, 130, 246' : agent.color.includes('purple') ? '147, 51, 234' : agent.color.includes('green') ? '34, 197, 94' : '249, 115, 22'}))`
           }}>
        {agent.verdict}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{agent.title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{agent.description}</p>
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">Performance</p>
        <p className="text-lg font-bold text-gray-900 mt-1">{agent.stat}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between hover:text-blue-600 transition"
      >
        <span className="text-lg font-semibold text-gray-900 text-left">{question}</span>
        <span className={`text-2xl transition transform ${isOpen ? 'rotate-180' : ''}`}>+</span>
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function App() {
  const [marketInput, setMarketInput] = useState("");
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = () => {
    if (marketInput.trim()) {
      setSelectedAgent(agents[Math.floor(Math.random() * agents.length)]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              Q
            </div>
            <span className="text-2xl font-bold text-gray-900">QuantAILab</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button className="text-gray-600 hover:text-gray-900 font-medium">Features</button>
            <button className="text-gray-600 hover:text-gray-900 font-medium">How it works</button>
            <button className="text-gray-600 hover:text-gray-900 font-medium">Pricing</button>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 font-medium">Sign in</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
              Get started
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-black text-gray-900 leading-tight mb-6">
                AI Agents That Trade Smarter
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get real-time market analysis, intelligent execution, and risk management powered by autonomous AI agents.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                  Start analyzing →
                </button>
                <button className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-full font-semibold hover:border-gray-400 transition">
                  View demo
                </button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                {metrics.slice(0, 3).map((m, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-gray-900">{m.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 border-2 border-blue-100">
              <p className="text-sm text-gray-500 font-semibold mb-4">ANALYZE MARKET</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter market symbol (e.g., BTC, SPY, AAPL)..."
                  value={marketInput}
                  onChange={(e) => setMarketInput(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-lg"
                />
                <button
                  onClick={handleSearch}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition text-lg"
                >
                  Analyze
                </button>
              </div>
              {selectedAgent && (
                <div className="mt-8 bg-white rounded-2xl p-6 border-2 border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">AI VERDICT</p>
                  <div className="inline-block px-4 py-2 rounded-full text-white font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500">
                    {selectedAgent.verdict}
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">{selectedAgent.title}</p>
                  <p className="text-gray-600 text-sm">{selectedAgent.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                  <p className="text-sm text-gray-500 font-semibold">{m.label}</p>
                  <p className="text-4xl font-black text-gray-900 mt-2">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-16">
            <p className="text-blue-600 font-bold text-sm mb-4">THE AGENT STACK</p>
            <h2 className="text-5xl font-black text-gray-900">Four intelligent agents working together</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, i) => (
              <VerdictCard key={i} agent={agent} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-400 font-bold text-sm mb-4">FEATURES</p>
                <h2 className="text-5xl font-black text-white mb-8">Everything you need to trade with confidence</h2>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
                      <span className="text-white text-lg">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-3xl p-12 border border-white/20">
                <p className="text-white/60 text-sm font-bold mb-4">LIVE ANALYSIS</p>
                <div className="space-y-4">
                  {[
                    ["Market Trend", "Bullish ↑", "text-green-400"],
                    ["Volatility", "Moderate", "text-yellow-400"],
                    ["Liquidity", "High", "text-blue-400"],
                    ["Risk Level", "Low", "text-green-400"],
                  ].map(([label, value, color], i) => (
                    <div key={i} className="flex items-center justify-between text-white">
                      <span className="text-white/70">{label}</span>
                      <span className={`font-bold ${color}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-16 text-center">
            <p className="text-blue-600 font-bold text-sm mb-4">PRICING</p>
            <h2 className="text-5xl font-black text-gray-900">Simple, transparent pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "Free",
                desc: "For individual traders",
                cta: "Get started",
                featured: false,
              },
              {
                name: "Pro",
                price: "$79/mo",
                desc: "For active traders & teams",
                cta: "Start free trial",
                featured: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "For institutions",
                cta: "Talk to us",
                featured: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 border-2 ${
                  plan.featured
                    ? "border-blue-600 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl"
                    : "border-gray-200 bg-white"
                }`}
              >
                <p className="text-sm font-bold text-gray-600 mb-2">{plan.name}</p>
                <p className="text-4xl font-black text-gray-900 mb-2">{plan.price}</p>
                <p className="text-gray-600 mb-8">{plan.desc}</p>
                <button
                  className={`w-full py-3 rounded-full font-bold transition ${
                    plan.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-12 text-center">
              <p className="text-blue-600 font-bold text-sm mb-4">FAQ</p>
              <h2 className="text-4xl font-black text-gray-900">Common questions</h2>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              {faq.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black text-white mb-6">Ready to trade smarter?</h2>
            <p className="text-xl text-white/90 mb-8">Join thousands of traders using AI agents for intelligent market decisions.</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
              Start free trial →
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-white font-bold mb-4">QuantAILab</p>
              <p className="text-sm">AI-powered market analysis platform</p>
            </div>
            <div>
              <p className="text-white font-bold mb-4">Product</p>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-4">Company</p>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-4">Legal</p>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">© 2024 QuantAILab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
