import { Coins, Zap, Shield, ArrowRight, Code2, Link as LinkIcon, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

export function MethodUSDT() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="max-w-3xl">
          <Breadcrumb items={[{ label: 'Methods', path: '/services' }, { label: 'USDT Settlements' }]} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <Coins className="h-4 w-4 text-emerald-600" />
              <span className="text-[10px] sm:text-xs font-medium text-emerald-700 uppercase tracking-wide">
                Payout Method
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium text-foreground tracking-tight mb-4 sm:mb-6">
              USDT Settlements
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed mb-6 sm:mb-8">
              Bypass traditional correspondent banking delays. Leverage our stablecoin infrastructure for instant, programmable cross-border liquidity into East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/developers" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-white bg-primary hover:bg-emerald-700 transition-colors shadow-sm w-full sm:w-auto">
                View API Docs
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-border dark:border-surface-dark-elevated text-sm sm:text-base font-medium rounded-full text-foreground bg-background dark:bg-surface-dark hover:bg-muted transition-colors shadow-sm w-full sm:w-auto">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-muted dark:bg-surface-dark-elevated py-16 md:py-24 border-y border-border dark:border-surface-dark-elevated">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: LinkIcon, title: 'Multi-chain Support', text: 'Natively accept USDT across Tron (TRC20), Ethereum (ERC20), and Polygon networks.' },
              { icon: RefreshCcw, title: 'Automated Off-ramping', text: 'USDT is instantly converted to local fiat via our OTC desks and routed to the beneficiary.' },
              { icon: Zap, title: 'T+0 Settlement', text: 'Transactions settle in minutes, not days. Eliminate weekend and holiday delays.' }
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background dark:bg-surface-dark border border-border dark:border-surface-dark-elevated text-primary flex items-center justify-center mb-4 md:mb-6 shadow-sm">
                  <feat.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-medium text-foreground mb-2 md:mb-3">{feat.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">{feat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-medium mb-4 md:mb-6">Seamless API Integration</h2>
            <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed mb-6">
              Initiate crypto-to-fiat payouts with a single API call. We handle the blockchain monitoring, confirmation blocks, and final fiat delivery.
            </p>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0" />
                <span>Automated wallet screening (Chainalysis)</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <Code2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0" />
                <span>Webhooks for block confirmations</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0" />
                <span>Guaranteed FX rates upon initiation</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl dark:shadow-none w-full"
          >
            <div className="flex px-3 py-2 sm:px-4 sm:py-3 bg-slate-900 border-b border-slate-800 text-[10px] sm:text-xs font-mono text-slate-400 gap-6 overflow-x-auto">
              <span className="text-emerald-400 border-b border-emerald-400 pb-2 -mb-3 px-2 whitespace-nowrap">POST /v1/payouts</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-300 custom-scrollbar">
<pre className="min-w-fit">
{`{
  "amount": 1000,
  "currency": "USDT",
  "network": "TRC20",
  "destination": {
    "type": "mobile_money",
    "network": "evc_plus",
    "phone_number": "+252610000000"
  }
}`}
</pre>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}