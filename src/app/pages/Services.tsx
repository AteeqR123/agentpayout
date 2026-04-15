import { Layers, Zap, CheckCircle2, Globe2, Building2, Users, ArrowRight, ShieldCheck, Activity, Smartphone, Landmark, Coins, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

export function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const useCases = [
    { icon: Users, title: 'Global Payroll', desc: 'Pay remote teams and contractors in local currency instantly, bypassing correspondent banks.' },
    { icon: Building2, title: 'Vendor Payments', desc: 'Settle invoices with local suppliers via mobile money or bank transfer in real-time.' },
    { icon: Globe2, title: 'Aid Disbursement', desc: 'Distribute humanitarian aid directly to beneficiary wallets with complete transparency.' }
  ];

  return (
    <div className="bg-background-subtle min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background-subtle">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#1d8751] opacity-20 blur-[100px]"></div>
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <Breadcrumb items={[{ label: 'Enterprise Services' }]} />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-subtle border border-success-light mb-6 md:mb-8 shadow-sm">
                <Layers className="h-4 w-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                  Enterprise Services
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-foreground tracking-tight mb-6 md:mb-8 leading-[1.1]">
                The unified layer for <br className="hidden sm:block" />
                <span className="text-primary">instant clearing.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted font-sans leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10">
                We abstract away the complexity of local liquidity. Connect to East Africa's preferred financial ecosystems with a single integration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/25 text-sm sm:text-base">
                  Talk to Sales <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link to="/developers" className="inline-flex justify-center items-center gap-2 bg-card hover:bg-accent text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all border border-border shadow-sm text-sm sm:text-base">
                  Read the Docs
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Unified Layer */}
      <div className="py-24 md:py-32 relative overflow-hidden bg-background border-b border-border">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-foreground">Solving the Last Mile</h2>
              <p className="text-lg text-foreground-muted font-sans leading-relaxed mb-8">
                Traditional rails force you to manage multiple integrations, currency conversions, and reconciliation processes. OMAYA acts as a single, unified layer that instantly routes capital to the most efficient local rail.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Single API for all regional payouts', desc: 'Write code once, pay anywhere in the region.' },
                  { title: 'Automated FX and liquidity', desc: 'Deep liquidity pools ensure optimal rates 24/7.' },
                  { title: 'Real-time tracking & webhooks', desc: 'Granular status updates down to the millisecond.' },
                  { title: 'Bank-grade compliance engine', desc: 'Automated AML screening and KYC checks.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-success-subtle rounded-full p-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">{item.title}</h4>
                      <p className="text-foreground-muted text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3 scale-105"></div>
              <div className="bg-surface-dark border border-border p-8 rounded-3xl shadow-2xl relative">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="bg-surface-dark-elevated border border-border px-6 py-4 rounded-xl text-surface-dark-foreground font-medium flex items-center gap-3">
                      <Activity className="w-5 h-5 text-success" />
                      Your Application
                    </div>
                  </div>
                  
                  <div className="relative h-16 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-px h-full bg-gradient-to-b from-border via-success to-border"></div>
                    </div>
                    <div className="bg-success/10 border border-success/30 text-success px-4 py-2 rounded-full text-xs font-mono font-medium backdrop-blur-md relative z-10 flex items-center gap-2 shadow-[0_0_15px_rgba(29,135,81,0.3)]">
                      <Zap className="w-3 h-3" /> OMAYA API
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-surface-dark-elevated border border-border rounded-xl p-5 hover:border-success/50 transition-colors group">
                      <Smartphone className="w-6 h-6 text-surface-dark-muted group-hover:text-success mx-auto mb-3" />
                      <div className="text-sm font-medium text-surface-dark-foreground">Mobile Money</div>
                      <div className="text-xs text-surface-dark-muted mt-1">EVC Plus, M-Pesa</div>
                    </div>
                    <div className="bg-surface-dark-elevated border border-border rounded-xl p-5 hover:border-success/50 transition-colors group">
                      <Landmark className="w-6 h-6 text-surface-dark-muted group-hover:text-success mx-auto mb-3" />
                      <div className="text-sm font-medium text-surface-dark-foreground">Local Banks</div>
                      <div className="text-xs text-surface-dark-muted mt-1">Direct RTGS</div>
                    </div>
                    <div className="bg-surface-dark-elevated border border-border rounded-xl p-5 hover:border-success/50 transition-colors group">
                      <Coins className="w-6 h-6 text-surface-dark-muted group-hover:text-success mx-auto mb-3" />
                      <div className="text-sm font-medium text-surface-dark-foreground">Crypto</div>
                      <div className="text-xs text-surface-dark-muted mt-1">USDT Settlement</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Supported Rails */}
      <div className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-medium text-foreground mb-6">Unrivaled Network Access</h2>
          <p className="text-lg text-foreground-muted font-sans">
            Our infrastructure connects directly to the most critical payment nodes across the region, minimizing hops and maximizing speed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Mobile Money', 
              icon: Smartphone,
              desc: 'Direct-to-wallet integration with the region\'s dominant payment methods.', 
              networks: ['EVC Plus', 'Zaad', 'Sahal', 'M-Pesa'],
              path: '/methods/mobile-money' 
            },
            { 
              title: 'Local Banks', 
              icon: Landmark,
              desc: 'Seamless transfers across regional clearing networks and central banks.', 
              networks: ['Premier Bank', 'IBS Bank', 'Salaam Bank', 'Dahabshil'],
              path: '/methods/local-banks' 
            },
            { 
              title: 'USDT Settlements', 
              icon: Coins,
              desc: 'Crypto-fiat infrastructure via TRC20 & ERC20 networks for instant cross-border liquidity.', 
              networks: ['Tron (TRC20)', 'Ethereum (ERC20)', 'Polygon', 'Solana'],
              path: '/methods/usdt' 
            }
          ].map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all p-8 rounded-3xl flex flex-col h-full group"
            >
              <div className="w-14 h-14 bg-muted border border-border rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                <method.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-medium text-foreground mb-4">{method.title}</h3>
              <p className="text-foreground-muted font-sans leading-relaxed mb-6">{method.desc}</p>
              
              <div className="mb-8 flex-grow">
                <div className="text-xs font-bold text-foreground-subtle uppercase tracking-wider mb-3">Supported Networks</div>
                <div className="flex flex-wrap gap-2">
                  {method.networks.map((net, j) => (
                    <span key={j} className="px-3 py-1 bg-muted border border-border rounded-full text-xs font-medium text-foreground-muted">
                      {net}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link to={method.path} className="inline-flex items-center text-primary font-medium hover:text-primary-hover text-sm group/link">
                View documentation 
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases - Rich Layout */}
      <div className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1d8751_0%,transparent_30%)] opacity-20" />
        <div className="px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-heading font-medium mb-6">Built for Scale</h2>
              <p className="text-lg text-slate-400 font-sans">
                OMAYA provides the infrastructure for global businesses to operate locally without establishing local entities or correspondent banking relationships.
              </p>
            </div>
            <Link to="/contact" className="shrink-0 bg-white text-slate-950 hover:bg-slate-100 px-6 py-3 rounded-lg font-medium transition-colors">
              Discuss your use case
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-emerald-400 flex items-center justify-center mb-6">
                  <uc.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-medium text-white mb-3">{uc.title}</h3>
                <p className="text-slate-400 font-sans leading-relaxed text-sm">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps to Instant Settlement */}
      <div className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-heading font-medium text-foreground mb-6">The Path to Instant Settlement</h2>
          <p className="text-lg text-foreground-muted font-sans">
            From API request to beneficiary wallet in under 3 seconds.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[28px] md:left-1/2 md:-ml-px top-8 bottom-8 w-px bg-gradient-to-b from-primary/10 via-primary to-primary/10"></div>
          
          {[
            { step: '01', title: 'Initiate Payout', desc: 'Submit a simple POST request with recipient details and amount. We support Idempotency to prevent duplicate charges.' },
            { step: '02', title: 'Compliance Engine', desc: 'OMAYA automatically screens the transaction against local and global watchlists in milliseconds.' },
            { step: '03', title: 'Liquidity Routing', desc: 'Funds are instantly converted via our internal ledgers and routed to the optimal local payout rail.' },
            { step: '04', title: 'Instant Settlement', desc: 'Beneficiary receives funds in seconds, and your application receives a cryptographically signed webhook.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 mb-16 relative z-10 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`flex-1 w-full pl-16 md:pl-0 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-heading font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground-muted font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
              
              <div className="absolute left-0 md:relative md:left-auto w-14 h-14 rounded-full bg-surface-dark text-white flex items-center justify-center font-heading font-medium text-xl shrink-0 shadow-[0_0_0_8px] shadow-background border border-border">
                {item.step}
              </div>
              
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="py-24 bg-background border-y border-border">
        <div className="px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground-muted font-sans text-lg">Everything you need to know about our services and billing.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What payment methods are supported?",
                a: "We currently support major mobile money networks including EVC Plus, Zaad, Sahal, and M-Pesa, as well as direct RTGS transfers to local banks like Premier Bank, IBS Bank, and Salaam Bank."
              },
              {
                q: "How fast are the settlements?",
                a: "Mobile money payouts and USDT settlements are processed instantly, typically settling in under 3 seconds. Local bank transfers depend on the regional clearing network but usually settle within the same business day."
              },
              {
                q: "Do I need a local entity to use OMAYA?",
                a: "No. OMAYA acts as your merchant of record for local clearing. You can integrate our API and fund your account via international wire or USDT without needing a local corporate entity in East Africa."
              },
              {
                q: "Are you compliant with international AML regulations?",
                a: "Yes. Our compliance engine screens all transactions against OFAC, UN, EU, and local watchlists in real-time. We are fully licensed and regulated by the Central Bank of Somalia."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className={`bg-card border rounded-2xl overflow-hidden cursor-pointer transition-all ${
                  openFaq === i ? 'border-primary/30 shadow-md ring-1 ring-primary/5' : 'border-border shadow-sm hover:border-border-hover'
                }`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="px-8 py-6 flex items-center justify-between">
                  <h3 className={`font-heading font-medium text-lg ${openFaq === i ? 'text-primary' : 'text-foreground'}`}>
                    {faq.q}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-primary/10' : 'bg-muted'}`}>
                    {openFaq === i 
                      ? <Minus className="w-4 h-4 text-primary" /> 
                      : <Plus className="w-4 h-4 text-foreground-subtle" />
                    }
                  </div>
                </div>
                {openFaq === i && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-8 pb-8 text-foreground-muted font-sans leading-relaxed text-lg"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-surface-dark rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1d8751_0%,transparent_70%)] opacity-20"></div>
          <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 px-8 py-20 md:p-24 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-surface-dark-foreground mb-6">
              Ready to scale your liquidity?
            </h2>
            <p className="text-xl text-surface-dark-muted font-sans max-w-2xl mx-auto mb-10">
              Get in touch with our enterprise team to design the perfect payout infrastructure for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/25">
                Contact Sales <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/developers" className="inline-flex justify-center items-center gap-2 bg-surface-dark-elevated hover:bg-surface-dark-muted text-surface-dark-foreground px-8 py-4 rounded-xl font-medium transition-all border border-border">
                Explore the API
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}