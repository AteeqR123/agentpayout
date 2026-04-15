import { Building2, Globe2, Network, ShieldCheck, ArrowRight, Link as LinkIcon, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

export function MethodLocalBanks() {
  const regions = [
    { country: 'Somalia', status: 'Premier Banks', color: 'bg-emerald-500' },
    { country: 'Kenya', status: 'RTGS / EFT', color: 'bg-green-500' },
    { country: 'Ethiopia', status: 'Local Clearing', color: 'bg-teal-500' },
    { country: 'Djibouti', status: 'Direct Integration', color: 'bg-lime-500' }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="max-w-3xl">
          <Breadcrumb items={[{ label: 'Methods', path: '/services' }, { label: 'Local Bank Transfers' }]} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <Building2 className="h-4 w-4 text-emerald-600" />
              <span className="text-[10px] sm:text-xs font-medium text-emerald-700 uppercase tracking-wide">
                Payout Method
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium text-foreground tracking-tight mb-4 sm:mb-6">
              Local Bank Transfers.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed mb-6 sm:mb-8">
              B2B scale requires institutional infrastructure. Connect directly to regional clearing networks and tier-1 commercial banks across East Africa without setting up local entities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/developers" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-white bg-primary hover:bg-emerald-700 transition-colors shadow-sm w-full sm:w-auto">
                View API Docs
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-border dark:border-surface-dark-elevated text-sm sm:text-base font-medium rounded-full text-foreground bg-background dark:bg-surface-dark hover:bg-muted transition-colors shadow-sm w-full sm:w-auto">
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Regional Banking Coverage */}
      <div className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-medium mb-4 md:mb-6">Regional Coverage</h2>
          <p className="text-sm md:text-base text-slate-400 font-sans max-w-2xl mx-auto mb-10 md:mb-16">
            We abstract away fragmented local SWIFT/RTGS systems and provide a unified settlement interface.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {regions.map((reg, i) => (
              <motion.div 
                key={reg.country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 md:p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm relative overflow-hidden text-left sm:text-center"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${reg.color}`}></div>
                <div className="text-lg md:text-xl font-heading font-medium text-slate-200">{reg.country}</div>
                <div className="text-slate-400 text-xs md:text-sm mt-1 md:mt-2">{reg.status}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Clearing Networks Value Prop */}
      <div className="bg-muted dark:bg-surface-dark-elevated py-16 md:py-24 border-y border-border dark:border-surface-dark-elevated">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Globe2, title: 'No Local Entity Required', text: 'Distribute funds to businesses and vendors without setting up a corporate presence in every country.' },
              { icon: Network, title: 'Intelligent Routing', text: 'Our engine selects the fastest clearing network (RTGS, EFT, or API-direct) based on the recipient bank.' },
              { icon: Briefcase, title: 'Corporate Treasury', text: 'Handle high-volume payroll, vendor settlements, and supplier payments reliably.' }
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
            <h2 className="text-2xl md:text-3xl font-heading font-medium mb-4 md:mb-6">Standardized Bank API</h2>
            <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed mb-6">
              Skip the fragmented legacy banking systems. Provide the account number and bank code; we handle the formatting, clearing, and reconciliation.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <LinkIcon className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0" />
                <span>Standardized bank code format</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0" />
                <span>Enterprise compliance reporting</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0" />
                <span>Async webhooks for settlement status</span>
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
  "amount": 25000,
  "currency": "KES",
  "method": "bank_transfer",
  "destination": {
    "account_number": "1234567890",
    "bank_code": "KCB-KE",
    "account_name": "Supplier LTD"
  },
  "sender": {
    "entity_name": "Global Corp",
    "registration_number": "C1234"
  },
  "purpose": "Invoice Settlement"
}`}
</pre>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}