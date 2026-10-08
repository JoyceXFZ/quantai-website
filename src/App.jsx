import React, { useState, useEffect } from "react";
import { usePortfolioData, useAgentStatus } from "./hooks/useAgentData";

const agents = [
  {
    title: "Research Agent",
    description: "Scans market signals, macro data, and alternative inputs to identify alpha opportunities.",
    accent: "from-cyan-400 to-blue-500",
    badge: "Live signal feed",
    stat: "98.4% context accuracy",
  },
  {
    title: "Strategy Agent",
    description: "Builds and tests signal combinations across timeframes to improve conviction and execution.",
    accent: "from-violet-400 to-purple-500",
    badge: "Backtest ready",
    stat: "4.7x sharper entries",
  },
  {
    title: "Risk Agent",
    description: "Continuously monitors portfolio drift, volatility, and exposure to protect capital.",
    accent: "from-emerald-400 to-green-500",
    badge: "Auto alerts",
    stat: "-22% downside reduction",
  },
  {
    title: "Execution Agent",
    description: "Routes orders based on liquidity, slippage, and timing to optimize fill quality.",
    accent: "from-amber-400 to-orange-500",
    badge: "Smart routing",
    stat: "12 ms response time",
  },
];

const metrics = [
  { label: "Markets tracked", value: "240+" },
  { label: "Signals processed", value: "12.4M" },
  { label: "Avg. model uptime", value: "99.98%" },
  { label: "Portfolio uplift", value: "+31.2%" },
];

const features = [
  "AI-driven market intelligence",
  "Real-time portfolio monitoring",
  "Risk-aware strategy execution",
  "Adaptive research workflows",
  "Multi-asset coverage",
  "Actionable decision layers",
];

const pricing = [
  {
    name: "Starter",
    price: "$19",
    desc: "For individuals building quant workflows.",
    cta: "Try free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$79",
    desc: "For teams running live signal and risk systems.",
    cta: "Start now",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For institutions scaling AI automation globally.",
    cta: "Talk to sales",
    featured: false,
  },
];

// Modal Component
function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-md w-full mx-4 rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const portfolioData = usePortfolioData();
  const agentStatus = useAgentStatus();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const portfolio = portfolioData.data || {};
  const agents_status = agentStatus.data || {};

  // Navigation functions
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sign in handler
  const handleSignIn = () => {
    setShowAuthModal(true);
  };

  // Get started handler
  const handleGetStarted = () => {
    setShowPricingModal(true);
  };

  // Demo booking handler
  const handleBookDemo = () => {
    setShowDemoModal(true);
  };

  // Pricing plan selection
  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),transparent_20%)]" />
      
      <header className="relative z-10 mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 font-bold text-slate-950">
              Q
            </div>
            <div className="text-lg font-semibold tracking-wide">QuantAI</div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <button onClick={() => scrollToSection("agents")} className="hover:text-cyan-300 transition cursor-pointer">Agents</button>
            <button onClick={() => scrollToSection("platform")} className="hover:text-cyan-300 transition cursor-pointer">Platform</button>
            <button onClick={() => scrollToSection("research")} className="hover:text-cyan-300 transition cursor-pointer">Research</button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-cyan-300 transition cursor-pointer">Pricing</button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleSignIn}
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5 transition md:inline-block"
            >
              Sign in
            </button>
            <button 
              onClick={handleGetStarted}
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition"
            >
              Get started
            </button>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                AI agents for smarter quant decisions
              </div>

              <h1 className="max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
                Build sharper strategies with intelligent market agents.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                QuantAI brings together research, execution, risk, and strategy intelligence into a unified system designed to help teams act with precision.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button 
                  onClick={handleGetStarted}
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition"
                >
                  Start free
                </button>
                <button 
                  onClick={handleBookDemo}
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition"
                >
                  Book demo
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
                <div>
                  <div className="text-2xl font-bold text-white">2.4M+</div>
                  <div>signals analyzed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">3.1x</div>
                  <div>faster research cycles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div>agent monitoring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 right-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute -bottom-10 left-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio overview</div>
                    <div className="mt-1 text-xl font-bold text-white">
                      ${(portfolio.totalValue / 1000000).toFixed(2)}M
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                    +{portfolio.change || 12.6}%
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1728] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm text-slate-400">AI agent stack</div>
                    <div className="text-xs text-cyan-300">{agentStatus.loading ? 'LOADING' : 'ONLINE'}</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Research Agent", value: agents_status.research || 92, color: "bg-cyan-500" },
                      { label: "Risk Agent", value: agents_status.risk || 87, color: "bg-violet-500" },
                      { label: "Execution Agent", value: agents_status.execution || 95, color: "bg-emerald-500" },
                    ].map(({ label, value, color }) => (
                      <div key={label}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-slate-300">{label}</span>
                          <span className="font-medium text-white">{value}%</span>
                        </div>
                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                          <div
                            className={`h-full rounded-full ${color} transition-all`}
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                      <div className="text-xs text-slate-400">Alpha signal</div>
                      <div className="mt-2 text-xl font-bold text-cyan-300">+8.4%</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                      <div className="text-xs text-slate-400">Exposure</div>
                      <div className="mt-2 text-xl font-bold text-violet-300">36.1%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-5 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-cyan-400/30 transition"
              >
                <div className="text-3xl font-black text-white">{metric.value}</div>
                <div className="mt-2 text-sm text-slate-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="agents" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 text-center">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Agent platform</div>
            <h2 className="mt-4 text-4xl font-black text-white">A full stack for intelligent market operations</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {agents.map((agent) => (
              <div
                key={agent.title}
                className="group rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className={`mb-5 h-10 w-16 rounded-xl bg-gradient-to-r ${agent.accent}`} />
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{agent.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    {agent.badge}
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-300">{agent.description}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Performance</div>
                  <div className="mt-2 text-lg font-bold text-white">{agent.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">Why teams choose us</div>
              <h3 className="mt-4 text-4xl font-black text-white">
                Transform market noise into informed action.
              </h3>

              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                      ✓
                    </div>
                    <span className="text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-[#0d1728] to-[#101b2f] p-5">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Live strategy</div>
                  <div className="mt-2 text-2xl font-bold text-white">Macro + crypto + equities</div>
                </div>
                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                  Momentum +12.4%
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm text-slate-400">Decision layer</div>
                  <div className="text-sm font-medium text-cyan-300">Confidence 91%</div>
                </div>

                <div className="space-y-3">
                  {[
                    ["Trend", "Bullish", "text-emerald-300"],
                    ["Volatility", "Moderate", "text-amber-300"],
                    ["Liquidity", "High", "text-cyan-300"],
                    ["Risk posture", "Neutral / Hedged", "text-violet-300"],
                  ].map(([label, value, color]) => (
                    <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <span className="text-slate-300">{label}</span>
                      <span className={`font-medium ${color}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-xs text-slate-400">Sharpe</div>
                  <div className="mt-2 text-xl font-bold text-white">2.34</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-xs text-slate-400">Win rate</div>
                  <div className="mt-2 text-xl font-bold text-white">68%</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-xs text-slate-400">Drawdown</div>
                  <div className="mt-2 text-xl font-bold text-white">-4.2%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-10 text-center">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Plans</div>
            <h2 className="mt-4 text-4xl font-black text-white">Choose the right operating layer</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[28px] border p-6 transition ${
                  plan.featured
                    ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-slate-900 shadow-xl shadow-cyan-500/10"
                    : "border-white/10 bg-white/5 hover:border-cyan-400/20"
                }`}
              >
                <div className="text-sm uppercase tracking-[0.25em] text-slate-400">{plan.name}</div>
                <div className="mt-5 text-4xl font-black text-white">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg text-slate-400">/mo</span>}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{plan.desc}</p>

                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`mt-8 w-full rounded-full px-5 py-3 font-semibold transition ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30"
                      : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24 pt-8">
          <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-8 text-center">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Start now</div>
            <h2 className="mt-4 text-4xl font-black text-white">Let your AI agents turn research into action.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Explore market intelligence, automate decisioning, and manage portfolio risk without slowing down execution.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={handleGetStarted}
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 transition"
              >
                Try free
              </button>
              <button 
                onClick={handleBookDemo}
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Talk to an expert
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Modals */}
      <Modal 
        isOpen={showAuthModal} 
        title="Sign in to QuantAI" 
        onClose={() => setShowAuthModal(false)}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
          >
            Sign in
          </button>
        </form>
      </Modal>

      <Modal 
        isOpen={showDemoModal} 
        title="Book a Demo" 
        onClose={() => setShowDemoModal(false)}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Company</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              placeholder="Your company"
            />
          </div>
          <button 
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
          >
            Request Demo
          </button>
        </form>
      </Modal>

      <Modal 
        isOpen={showPricingModal} 
        title={selectedPlan ? `Selected: ${selectedPlan}` : "Choose Your Plan"} 
        onClose={() => {
          setShowPricingModal(false);
          setSelectedPlan(null);
        }}
      >
        {selectedPlan ? (
          <div className="space-y-4">
            <p className="text-slate-300">
              You've selected the <span className="font-bold text-cyan-300">{selectedPlan}</span> plan.
            </p>
            <p className="text-sm text-slate-400">
              Enter your email to get started with your free trial.
            </p>
            <input 
              type="email" 
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              placeholder="you@example.com"
            />
            <button 
              className="w-full mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => setSelectedPlan(null)}
              className="w-full border border-white/15 text-white py-2 rounded-lg hover:bg-white/5 transition"
            >
              Back to Plans
            </button>
          </div>
        ) : (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {pricing.map((plan) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full p-4 rounded-lg text-left transition border ${
                  plan.featured
                    ? "border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-white">{plan.name}</div>
                <div className="text-sm text-slate-300">{plan.price}</div>
              </button>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
}
