import { MapPin, Users, Clock, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function AgentNetwork() {
  return (
    <section id="network" className="py-32 bg-background-subtle relative overflow-hidden">
      {/* Decorative background map-like lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="contour" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 100 Q 25 50 50 100 T 100 100 M 0 50 Q 25 0 50 50 T 100 50 M 0 0 Q 25 -50 50 0 T 100 0" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#contour)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-subtle border border-success-light mb-6">
                <MapPin className="h-4 w-4 text-success" />
                <span className="text-xs font-medium text-success-foreground uppercase tracking-wide">
                  Agent Network
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-6 tracking-tight leading-tight">
                Local presence, <br />
                <span className="text-foreground-subtle">global standards.</span>
              </h2>
              
              <p className="text-lg text-foreground-muted font-sans leading-relaxed mb-10">
                Our vetted network of 234+ cash-out locations ensures your payees can access their funds instantly, anywhere from Mogadishu to Hargeisa. Every agent is strictly audited for AML compliance.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Users, value: '234+', label: 'Verified Agents', sublabel: 'KYC certified' },
                  { icon: MapPin, value: '18', label: 'Major Hubs', sublabel: 'Across East Africa' },
                  { icon: ShieldCheck, value: 'Tier 1', label: 'Compliance', sublabel: 'CBE regulated' },
                  { icon: TrendingUp, value: '99.9%', label: 'Success Rate', sublabel: 'First-time match' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative flex flex-col p-5 sm:p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-foreground mb-1 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {stat.label}
                      </div>
                      <div className="text-xs text-foreground-muted font-sans mt-1">
                        {stat.sublabel}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual side - Fake Map UI */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-surface-dark rounded-[2.5rem] border border-border p-8 overflow-hidden shadow-2xl"
            >
              {/* Decorative map grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)]" />

              {/* Map points / Nodes */}
              <div className="absolute top-1/4 left-1/4 group cursor-pointer">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150" />
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-surface-dark shadow-[0_0_15px_rgba(29,135,81,0.5)] z-10 relative" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-card text-card-foreground text-xs font-medium px-2 py-1 rounded shadow-lg">
                  Hargeisa Hub
                </div>
              </div>

              <div className="absolute top-1/2 left-2/3 group cursor-pointer">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150" />
                <div className="w-5 h-5 bg-primary rounded-full border-2 border-surface-dark shadow-[0_0_15px_rgba(29,135,81,0.5)] z-10 relative">
                  <div className="absolute inset-0 rounded-full border border-primary animate-ping" />
                </div>
                <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card text-card-foreground text-xs font-medium px-2 py-1 rounded shadow-lg z-20">
                  Mogadishu (Active)
                </div>
              </div>

              <div className="absolute bottom-1/3 left-1/3 group cursor-pointer">
                <div className="w-3 h-3 bg-success/50 rounded-full border-2 border-surface-dark z-10 relative" />
              </div>

              <div className="absolute bottom-1/4 right-1/4 group cursor-pointer">
                <div className="w-3 h-3 bg-success/50 rounded-full border-2 border-surface-dark z-10 relative" />
              </div>

              {/* UI Overlay Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-surface-dark-foreground/10 backdrop-blur-xl border border-border rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-surface-dark-foreground text-sm font-medium">Banaadir Region</p>
                    <p className="text-surface-dark-muted text-xs">84 active endpoints</p>
                  </div>
                </div>
                <div className="px-2 sm:px-3 py-1 bg-success/20 border border-success/30 rounded-full text-success text-[10px] sm:text-xs font-medium whitespace-nowrap">
                  Optimal latency
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}