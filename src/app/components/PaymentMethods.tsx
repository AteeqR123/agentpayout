import { Smartphone, Building2, Coins, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function PaymentMethods() {
  const methods = [
    {
      icon: Smartphone,
      title: 'Mobile Money',
      description: 'Direct deposits to popular mobile money wallets including EVC Plus, Zaad, Sahal, and M-Pesa. Instant clearing and settlement.',
    },
    {
      icon: Building2,
      title: 'Bank Deposits',
      description: 'Seamless transfers to local bank accounts in Somalia, Kenya, Ethiopia, and Djibouti. We handle the local clearing networks.',
    },
    {
      icon: Coins,
      title: 'USDT Settlements',
      description: 'Leverage the speed and stability of USDT (TRC20 & ERC20) for instant cross-border liquidity. Bypass traditional banking delays.',
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-background-subtle border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-subtle border border-success-light">
              <span className="text-[10px] sm:text-xs font-medium text-success-foreground uppercase tracking-wide">
                Flexible Rails
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-medium tracking-tight text-foreground md:text-5xl"
          >
            Omnichannel payouts.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-foreground-muted font-sans"
          >
            Connect to East Africa's preferred financial ecosystems with a single integration. We abstract away the complexity of local liquidity.
          </motion.p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-6 sm:gap-x-8 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
            {methods.map((method, index) => (
              <motion.div 
                key={method.title} 
                className="flex flex-col bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <dt className="flex items-center gap-x-3 text-xl font-heading font-medium text-foreground">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d8751]/10 text-[#1d8751]">
                    <method.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {method.title}
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-slate-600 font-sans">
                  <p className="flex-auto">{method.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-[#1d8751] hover:text-emerald-700 flex items-center">
                      View documentation <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}