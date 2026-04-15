import { Shield, Lock, Eye, FileCheck, AlertCircle, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Multi-Factor Authentication',
      description: 'Enforce 2FA across your organization. Support for SMS, hardware tokens, and biometric verification.'
    },
    {
      icon: Lock,
      title: 'Device Binding',
      description: 'Cryptographic device management prevents unauthorized access. Automatic alerts for unusual login attempts.'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Define custom roles with granular permissions. Separate duties between finance, operations, and IT.'
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: 'Track every API call and transaction as it happens. Configure webhooks for threshold breaches.'
    },
    {
      icon: FileCheck,
      title: 'Immutable Audit Trails',
      description: 'Complete cryptographic history of all operations. Export SOC2-compliant reports instantly.'
    },
    {
      icon: AlertCircle,
      title: 'Fraud Engine',
      description: 'Machine learning identifies suspicious patterns tailored to East African corridors. Automatic review workflows.'
    }
  ];

  return (
    <section id="security" className="py-16 md:py-24 lg:py-32 bg-surface-dark relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,135,81,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end justify-between mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark-elevated border border-border mb-4 md:mb-6">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-success" />
              <span className="text-[10px] sm:text-xs font-medium text-surface-dark-muted uppercase tracking-wide">
                Security & Compliance
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-surface-dark-foreground mb-4 md:mb-6 tracking-tight">
              Bank-grade infrastructure for <br className="hidden sm:block" />
              <span className="text-surface-dark-muted">financial operations.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-surface-dark-muted font-sans leading-relaxed">
              OMAYA exceeds Somalia's regulatory requirements with enterprise-grade security protocols, ensuring your capital is protected at every layer.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center gap-6 shrink-0"
          >
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-heading font-medium text-success mb-1">99.99%</div>
              <div className="text-[10px] sm:text-sm font-medium text-surface-dark-muted uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-border" />
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-heading font-medium text-success mb-1">SOC 2</div>
              <div className="text-[10px] sm:text-sm font-medium text-surface-dark-muted uppercase tracking-wider">Type II Certified</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl bg-surface-dark-elevated/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-surface-dark-elevated border border-border text-success group-hover:border-success/50 group-hover:bg-success-light transition-colors mb-4 sm:mb-6">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-heading font-medium text-surface-dark-foreground mb-2 sm:mb-3 group-hover:text-success transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-surface-dark-muted font-sans text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}