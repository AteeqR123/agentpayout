import { ArrowRight, CheckCircle2, Shield, Activity, BarChart, ArrowUpRight, Send, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-muted pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1d8751_0%,transparent_40%)] opacity-[0.08] dark:opacity-[0.15]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-sm flex-wrap justify-center text-center">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 shrink-0">
                <Globe className="w-3 h-3 text-primary" />
              </div>
              <span className="text-[10px] md:text-xs font-medium text-card-foreground pr-2">
                Central Bank Licensed Money-Transfer Service
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-foreground tracking-tight leading-[1.1] mb-6 md:mb-8" 
          >
            Agent payouts for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              East Africa's economy
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans" 
          >
            Connect your business with 234+ verified agents across Somalia and the region. Process payouts in real-time with full compliance, AML screening, and an immutable ledger.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/20 group">
              Start dispatching
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-card border-border hover:bg-accent rounded-full px-8 h-14 text-base font-medium shadow-sm">
              Read the docs
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-muted-foreground" 
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Tier 1 Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>99.99% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              <span>4s Average Settlement</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Abstract Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 mx-auto max-w-5xl"
        >
          <div className="relative rounded-[2rem] bg-card p-2 shadow-2xl border border-border ring-1 ring-black/5 dark:ring-white/5">
            <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0" />
            <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0" />
            
            <div className="rounded-[1.5rem] overflow-hidden border border-border/50 bg-muted">
              <div className="h-12 bg-card border-b border-border flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="flex gap-4 text-xs font-medium text-muted-foreground">
                  <span className="text-foreground">Dashboard</span>
                  <span>Ledger</span>
                  <span className="hidden sm:inline">Agents</span>
                  <span className="hidden sm:inline">Developers</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-primary/20" />
              </div>
              
              <div className="p-4 sm:p-8 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  {/* Fake Chart Area */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Volume (30 Days)</h3>
                        <p className="text-3xl font-heading font-medium text-foreground">$4,250,000</p>
                      </div>
                      <div className="flex items-center gap-1 text-primary bg-primary/10 px-2 py-1 rounded text-xs font-medium border border-primary/20">
                        <ArrowUpRight className="w-3 h-3" /> 14.5%
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-2 group/chart">
                      {[40, 30, 45, 60, 50, 75, 45, 80, 65, 90, 100].map((h, i) => (
                        <div key={i} className="flex-1 h-full bg-muted rounded-t-sm relative group/bar flex flex-col justify-end cursor-crosshair hover:bg-accent transition-colors">
                          {/* Hover Tooltip */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-medium px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity z-10 whitespace-nowrap shadow-lg pointer-events-none">
                            ${(h * 12.5).toFixed(1)}k
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-2 border-transparent border-t-foreground" />
                          </div>
                          
                          {/* Actual Data Bar */}
                          <div 
                            className="bg-primary w-full rounded-t-sm transition-colors duration-300 relative overflow-hidden group-hover/bar:bg-primary/80" 
                            style={{height: `${h}%`}} 
                          >
                            {/* Inner gradient/shine effect on the bar */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <h3 className="text-sm font-medium text-foreground mb-4 font-heading">Live Dispatches</h3>
                    <div className="space-y-4">
                      {[
                        { agent: 'Hodan Global', loc: 'Mogadishu', amt: '$4,500' },
                        { agent: 'Hargeisa Express', loc: 'Hargeisa', amt: '$1,200' }
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                              <Send className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{tx.agent}</p>
                              <p className="text-xs text-muted-foreground">{tx.loc}</p>
                            </div>
                          </div>
                          <span className="text-sm font-heading font-medium text-foreground">{tx.amt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Balance Card */}
                  <div className="bg-surface-dark rounded-2xl p-6 border border-border shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                      <Globe className="w-16 h-16 text-surface-dark-foreground/5" />
                    </div>
                    <h3 className="text-sm font-medium text-surface-dark-muted mb-2">Corporate Wallet</h3>
                    <p className="text-3xl font-heading font-medium text-surface-dark-foreground mb-6">$142,500</p>
                    <button className="w-full py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium transition-colors">
                      Top up balance
                    </button>
                  </div>

                  {/* Compliance Status */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <h3 className="text-sm font-medium text-foreground mb-4 font-heading">System Status</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">API Gateway</span>
                        <span className="text-primary font-medium">Online</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">AML Engine</span>
                        <span className="text-primary font-medium">Active</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Failed TXNs</span>
                        <span className="text-foreground font-medium">0.01%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}