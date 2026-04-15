import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Trustability() {
  const testimonials = [
    {
      quote: "We reduced payout processing time from 3 days to 4 seconds. OMAYA's agent network gives us unmatched reach in Somalia.",
      author: "Mohamud Hassan",
      role: "CFO",
      company: "FinTech Somalia",
      initials: "MH",
      bg: "bg-card",
      dark: false
    },
    {
      quote: "The compliance features are remarkable. Full KYC/AML automation means we spend zero time on manual audits.",
      author: "Sofia El-Nour",
      role: "COO",
      company: "Danford Group",
      initials: "SE",
      bg: "bg-primary",
      dark: true
    },
    {
      quote: "OMAYA handled over $2M in payout volume for our field staff with zero failed transactions. Truly bulletproof infrastructure.",
      author: "Ahmed Ibrahim",
      role: "Operations Lead",
      company: "SafeZone Aid",
      initials: "AI",
      bg: "bg-card",
      dark: false
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end justify-between mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-foreground tracking-tight mb-4 md:mb-6">
              Trusted by the region's <br className="hidden sm:block" />
              <span className="text-foreground-subtle">leading enterprises.</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground-muted font-sans leading-relaxed">
              From international NGOs to Tier 1 telecoms, organizations rely on OMAYA to safely route capital across East Africa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 sm:p-8 md:p-10 rounded-[2rem] ${testimonial.bg} border ${testimonial.dark ? 'border-primary-hover' : 'border-border'} flex flex-col relative group hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6 md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 fill-success text-success`} />
                ))}
              </div>
              
              {/* Quote */}
              <p className={`text-base sm:text-lg leading-relaxed mb-8 md:mb-12 flex-1 font-sans ${testimonial.dark ? 'text-white/90' : 'text-foreground-muted'}`}>
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className={`border-t ${testimonial.dark ? 'border-white/10' : 'border-border'} pt-6 flex items-center gap-3 sm:gap-4`}>
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center font-heading font-medium text-sm sm:text-base shrink-0 ${testimonial.dark ? 'bg-white/10 text-white' : 'bg-muted text-foreground'}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className={`font-heading font-medium text-sm sm:text-base ${testimonial.dark ? 'text-white' : 'text-foreground'}`}>
                    {testimonial.author}
                  </div>
                  <div className={`text-xs sm:text-sm font-sans mt-0.5 ${testimonial.dark ? 'text-white/70' : 'text-foreground-muted'}`}>
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}