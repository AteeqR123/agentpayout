import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <div className="relative py-32 bg-surface-dark overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(29,135,81,0.15),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-dark-elevated border border-border backdrop-blur-xl rounded-[2.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl mb-6 font-heading font-medium text-surface-dark-foreground tracking-tight relative z-10">
            Ready to streamline your <span className="text-success">agent payouts?</span>
          </h2>
          
          <p className="text-lg text-surface-dark-muted mb-10 max-w-2xl mx-auto font-sans leading-relaxed relative z-10">
            Join the leading enterprises across East Africa using OMAYA's secure ledger to dispatch funds at scale. No hidden fees, instant settlements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 relative z-10">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/20 group">
              Start dispatching
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-border hover:bg-accent text-surface-dark-foreground rounded-full px-8 h-14 text-base font-medium">
              Talk to an expert
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-surface-dark-muted relative z-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Zero setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Full API access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>24/7 dedicated support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}