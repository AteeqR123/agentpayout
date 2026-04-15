import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Send, ShieldCheck, ArrowRight, Activity, Terminal } from 'lucide-react';

const steps = [
  {
    id: 'fund',
    title: 'Pre-fund your corporate wallet',
    description: 'Instantly top up your OMAYA account using global banking rails or mobile money (M-PESA, EVC Plus). Our multi-currency ledger auto-reconciles your balance.',
    icon: ShieldCheck,
    visual: 'wallet'
  },
  {
    id: 'api',
    title: 'Dispatch via API or Dashboard',
    description: 'Trigger payouts individually or in bulk. Use our REST API for programmatic control, or upload a CSV directly into the OMAYA dashboard.',
    icon: Terminal,
    visual: 'code'
  },
  {
    id: 'disburse',
    title: 'Instant Agent Disbursement',
    description: 'Funds are routed to the optimal agent in Mogadishu, Hargeisa, or regional hubs in under 4 seconds. Recipients get SMS confirmation instantly.',
    icon: Send,
    visual: 'dashboard'
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 bg-background-subtle relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-20">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Workflow
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-medium text-foreground tracking-tight leading-tight mb-6">
            Engineered for <br/>
            <span className="text-foreground-subtle">high-velocity payouts.</span>
          </h3>
          <p className="text-lg text-foreground-muted">
            Move money across borders directly to local agents. Built on an immutable ledger with bank-grade security, tailored for the Horn of Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Interactive Steps */}
          <div className="lg:col-span-5 space-y-4 relative">
            {/* Connection line */}
            <div className="absolute left-6 top-10 bottom-10 w-px bg-border" />
            
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left relative p-6 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-border' 
                      : 'hover:bg-accent/50'
                  }`}
                >
                  <div className="flex gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                        isActive ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-muted text-foreground-subtle border border-border'
                      }`}>
                        <step.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-xl font-heading font-medium mb-2 transition-colors ${
                        isActive ? 'text-foreground' : 'text-foreground-muted'
                      }`}>
                        {step.title}
                      </h4>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-foreground-muted leading-relaxed pt-2">
                              {step.description}
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary cursor-pointer hover:text-primary-hover transition-colors">
                              Explore documentation <ArrowRight className="w-4 h-4" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visuals */}
          <div className="lg:col-span-7 relative h-[500px] w-full bg-surface-dark rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* Mac window controls */}
            <div className="absolute top-0 inset-x-0 h-12 bg-surface-dark/50 backdrop-blur border-b border-white/5 flex items-center px-4 z-20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-surface-dark-muted/50" />
                <div className="w-3 h-3 rounded-full bg-surface-dark-muted/50" />
                <div className="w-3 h-3 rounded-full bg-surface-dark-muted/50" />
              </div>
            </div>

            <div className="absolute inset-0 pt-12">
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div
                    key="wallet"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full p-8 flex items-center justify-center"
                  >
                    <div className="w-full max-w-md bg-surface-dark-elevated rounded-2xl border border-border p-6 shadow-2xl">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <p className="text-surface-dark-muted text-sm mb-1">Corporate Ledger Balance</p>
                          <h4 className="text-4xl font-heading font-medium text-surface-dark-foreground">$142,500.00</h4>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                          <Activity className="text-primary w-6 h-6" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-4 bg-surface-dark/50 rounded-xl border border-border flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">ACH</div>
                            <div>
                              <p className="text-surface-dark-foreground text-sm font-medium">Standard Chartered</p>
                              <p className="text-surface-dark-muted text-xs">Today, 09:41 AM</p>
                            </div>
                          </div>
                          <span className="text-success text-sm font-medium">+$50,000.00</span>
                        </div>
                        <div className="p-4 bg-surface-dark/50 rounded-xl border border-border flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">WRE</div>
                            <div>
                              <p className="text-surface-dark-foreground text-sm font-medium">Barclays UK</p>
                              <p className="text-surface-dark-muted text-xs">Yesterday</p>
                            </div>
                          </div>
                          <span className="text-success text-sm font-medium">+$92,500.00</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full p-6 text-sm font-mono text-slate-300 overflow-hidden"
                  >
                    <div className="flex gap-4 mb-4 border-b border-slate-800 pb-2">
                      <span className="text-primary border-b border-primary pb-2 -mb-2">payout.ts</span>
                      <span className="text-slate-600">bulk-csv.ts</span>
                    </div>
                    <pre className="text-left overflow-x-auto text-[13px] leading-relaxed">
                      <code>
                        <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> omaya.<span className="text-blue-400">payouts</span>.<span className="text-amber-200">create</span>(&#123;{'\n'}
                        {'  '}amount: <span className="text-orange-400">50000</span>,{'\n'}
                        {'  '}currency: <span className="text-emerald-300">'USD'</span>,{'\n'}
                        {'  '}destination: &#123;{'\n'}
                        {'    '}type: <span className="text-emerald-300">'agent_network'</span>,{'\n'}
                        {'    '}agentId: <span className="text-emerald-300">'agt_891f3a'</span>,{'\n'}
                        {'    '}region: <span className="text-emerald-300">'BANAADIR'</span>{'\n'}
                        {'  '}&#125;,{'\n'}
                        {'  '}metadata: &#123;{'\n'}
                        {'    '}reference: <span className="text-emerald-300">'Q3_VENDOR_PAY'</span>{'\n'}
                        {'  '}&#125;{'\n'}
                        &#125;);{'\n'}
                        {'\n'}
                        <span className="text-slate-500">// Returns:</span>{'\n'}
                        <span className="text-slate-500">// &#123; id: "po_993h2", status: "processing", eta: "4s" &#125;</span>
                      </code>
                    </pre>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full p-8 flex items-center justify-center relative"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,135,81,0.15),transparent_70%)]" />
                    <div className="relative w-full max-w-md bg-surface-dark-elevated rounded-2xl border border-border p-6 shadow-2xl">
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/20 text-success mb-4 border border-success/30">
                          <Send className="w-8 h-8 ml-1" />
                        </div>
                        <h4 className="text-xl font-heading font-medium text-surface-dark-foreground mb-1">Funds Disbursed</h4>
                        <p className="text-surface-dark-muted text-sm">Agent #891f3a (Hodan District)</p>
                      </div>

                      <div className="space-y-4">
                        <div className="h-2 w-full bg-surface-dark-muted/50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: "100%" }} 
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-success"
                          />
                        </div>
                        
                        <div className="flex justify-between text-xs font-medium text-surface-dark-muted">
                          <span>Initiated</span>
                          <span>Compliance Check</span>
                          <span className="text-success">Available</span>
                        </div>
                        
                        <div className="mt-6 p-4 bg-success-light rounded-lg border border-success/20 flex gap-4 items-start">
                          <ShieldCheck className="w-5 h-5 text-success shrink-0 mt-0.5" />
                          <div>
                            <p className="text-success-foreground text-sm font-medium mb-1">AML Cleared & Settled</p>
                            <p className="text-success text-xs opacity-70">Transaction logged to immutable ledger. Receipt automatically forwarded to recipient.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}