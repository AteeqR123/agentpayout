import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert, BarChart3, Globe, Zap } from 'lucide-react';

export function Overview() {
  return (
    <div id="platform" className="py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-subtle border border-primary-light mb-6 text-sm font-medium text-primary uppercase tracking-wide"
          >
            Platform Overview
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-foreground mb-6 font-heading font-medium tracking-tight max-w-3xl"
          >
            Everything you need to <span className="text-primary">scale operations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted max-w-2xl font-sans"
          >
            OMAYA Agent Pay combines military-grade compliance with lightning-fast agent workflows, giving you total control over your payout network across East Africa.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Compliance (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-card-elevated border border-border p-8 flex flex-col md:flex-row gap-8 items-center hover:border-primary/30 transition-colors"
          >
            <div className="flex-1 space-y-4">
              <div className="w-12 h-12 bg-card rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-medium text-card-foreground">Automated Compliance</h3>
              <p className="text-foreground-muted font-sans text-base leading-relaxed">
                Built-in KYC/KYB workflows, real-time AML screening against global watchlists, and automated risk scoring. Scale across Somalia with zero compliance headaches.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 bg-card border border-border rounded-md text-xs font-medium text-foreground-muted">Biometric Verification</span>
                <span className="px-3 py-1 bg-card border border-border rounded-md text-xs font-medium text-foreground-muted">Sanctions Check</span>
              </div>
            </div>
            
            {/* Visual element */}
            <div className="w-full md:w-64 h-48 bg-card rounded-2xl shadow-inner border border-border p-4 flex flex-col gap-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
              <div className="flex items-center gap-3 pb-2 border-b border-border">
                <div className="w-8 h-8 rounded-full bg-muted" />
                <div className="flex-1">
                  <div className="h-2 w-20 bg-muted-foreground/30 rounded-full mb-1" />
                  <div className="h-2 w-12 bg-muted-foreground/20 rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-success-subtle rounded-lg border border-success-light">
                <span className="text-xs font-medium text-success-foreground">Risk Score: Low</span>
                <ShieldAlert className="w-4 h-4 text-success" />
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-muted rounded-lg border border-border">
                <span className="text-xs font-medium text-foreground-muted">AML Status</span>
                <span className="text-xs font-medium text-success">Cleared</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Network (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-surface-dark border border-border p-8 flex flex-col hover:border-border-hover transition-colors"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,135,81,0.15),transparent_50%)]" />
            <div className="w-12 h-12 bg-surface-dark-elevated rounded-xl border border-border flex items-center justify-center text-primary mb-6 relative z-10">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-medium text-surface-dark-foreground mb-4 relative z-10">Agent Network</h3>
            <p className="text-surface-dark-muted font-sans text-base leading-relaxed mb-8 flex-1 relative z-10">
              Onboard, train, and monitor agents in real-time. Track performance tiers and issue digital certificates instantly.
            </p>
            <a href="#network" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors relative z-10 text-sm">
              View agent portal <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 3: Settlements (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-primary border border-primary-hover p-8 flex flex-col"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.1),transparent)]" />
            <div className="w-12 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center text-white mb-6 relative z-10">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-medium text-white mb-4 relative z-10">Instant Settlements</h3>
            <p className="text-white/90 font-sans text-base leading-relaxed mb-8 flex-1 relative z-10">
              Real-time ledger updates, automated commission calculations, and instant withdrawal approvals.
            </p>
            <a href="#ledger" className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors relative z-10 text-sm">
              Explore ledger <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 4: Analytics (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-card-elevated border border-border p-8 flex flex-col md:flex-row-reverse gap-8 items-center hover:border-primary/30 transition-colors"
          >
            <div className="flex-1 space-y-4">
              <div className="w-12 h-12 bg-card rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-medium text-card-foreground">Enterprise Analytics</h3>
              <p className="text-foreground-muted font-sans text-base leading-relaxed">
                Make data-driven decisions with real-time volume charts, corridor analytics, and risk heatmaps. Export reports for stakeholders in one click.
              </p>
            </div>
            
            {/* Visual element */}
            <div className="w-full md:w-72 h-48 bg-card rounded-2xl shadow-inner border border-border p-4 flex items-end gap-2 relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="text-sm font-medium text-foreground">Volume (30d)</span>
                <div className="text-2xl font-heading font-medium text-primary">$2.4M</div>
              </div>
              {/* Fake chart bars */}
              {[40, 25, 60, 30, 80, 45, 90, 65, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.05), duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-success to-primary rounded-t-sm opacity-80"
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}