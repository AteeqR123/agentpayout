import { motion } from 'motion/react';

export function TrustedBy() {
  const partners = [
    'HORMUUD',
    'SOMTEL',
    'TELESOM',
    'AMAL BANK',
    'PREMIER BANK',
    'DAHABSHIIL'
  ];

  return (
    <div className="py-16 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-medium text-foreground-subtle uppercase tracking-widest">
            Connected to leading regional networks
          </p>
        </motion.div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-foreground text-xl font-heading font-bold tracking-tight opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}