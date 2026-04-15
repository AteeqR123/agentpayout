import { ShieldCheck, FileCheck, Lock, Activity, Map, Fingerprint, Database, Eye, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

export function Compliance() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const engine = [
    { icon: Fingerprint, title: 'Identity Verification (eKYC)', text: 'Automated biometric checks and ID validation against local government databases.' },
    { icon: Eye, title: 'Sanctions Screening', text: 'Real-time cross-referencing against OFAC, UN, EU, and local PEP watchlists.' },
    { icon: Activity, title: 'Transaction Monitoring', text: 'AI-driven behavioral analysis to detect anomalies, velocity spikes, and structured payments.' },
    { icon: FileCheck, title: 'Automated Reporting', text: 'Auto-generated Suspicious Activity Reports (SARs) and regulatory filings for Central Banks.' }
  ];

  const faqs = [
    {
      q: "Are you licensed by the Central Bank of Somalia?",
      a: "Yes, OMAYA operates under a full Money Transfer Business (MTB) license issued by the Central Bank of Somalia, ensuring we meet all capital and compliance requirements."
    },
    {
      q: "How do you handle data privacy?",
      a: "We adhere to strict data sovereignty laws. Customer PII is encrypted at rest using AES-256 and is only processed in compliant jurisdictions. We do not sell data to third parties."
    },
    {
      q: "Can I bring my own compliance provider?",
      a: "OMAYA acts as the merchant of record for local clearing, meaning all transactions must pass through our compliance engine. However, we provide full webhook visibility so you can mirror the checks in your own systems."
    }
  ];

  return (
    <div className="bg-muted min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-muted dark:bg-surface-dark-elevated border-b border-border dark:border-surface-dark-elevated">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#1d8751] opacity-20 blur-[100px]"></div>
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <Breadcrumb items={[{ label: 'Compliance' }]} />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6 md:mb-8 shadow-sm">
                <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wide">
                  Bank-grade Compliance
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-foreground tracking-tight mb-6 md:mb-8 leading-[1.1]">
                Regulated across <br className="hidden sm:block" />
                <span className="text-primary">borders.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                OMAYA operates under strict Central Bank regulations. We enforce multi-tier KYC/AML protocols to protect your business and your beneficiaries.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Security Protocols */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-medium mb-6">Military-Grade Security</h2>
              <p className="text-lg text-slate-400 font-sans leading-relaxed mb-6">
                Our infrastructure is built to exceed the security standards of global financial institutions. From endpoint to database, your data and funds are cryptographically secured.
              </p>
              <div className="space-y-6 mt-12">
                <div className="flex gap-4">
                  <Lock className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h3 className="font-heading font-medium text-lg">Encryption in Transit & at Rest</h3>
                    <p className="text-slate-400 font-sans text-sm mt-1">All network traffic is secured with TLS 1.3. Databases and backups are encrypted using AES-256 block-level encryption.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Database className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h3 className="font-heading font-medium text-lg">Data Sovereignty</h3>
                    <p className="text-slate-400 font-sans text-sm mt-1">We maintain isolated data environments to comply with local residency laws and GDPR-equivalent frameworks in East Africa.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1117] border border-slate-800 rounded-2xl shadow-2xl dark:shadow-none relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              {/* Header */}
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-inner"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-inner"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-inner"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Lock className="w-3 h-3 text-emerald-400" /> payload_verification.json
                </div>
                <div className="w-10"></div> {/* Spacer for centering */}
              </div>
              <div className="p-6 relative z-10">
                <pre className="text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <span className="text-muted-foreground">{`{`}</span>{`\n`}
                  <span className="text-sky-400">  "transaction_id"</span><span className="text-muted-foreground">:</span> <span className="text-emerald-400">"tx_987654321"</span>{`,\n`}
                  <span className="text-sky-400">  "security_context"</span><span className="text-muted-foreground">: {`{`}</span>{`\n`}
                  <span className="text-sky-400">    "tls_version"</span><span className="text-muted-foreground">:</span> <span className="text-emerald-400">"1.3"</span>{`,\n`}
                  <span className="text-sky-400">    "cipher_suite"</span><span className="text-muted-foreground">:</span> <span className="text-emerald-400">"TLS_AES_256_GCM_SHA384"</span>{`,\n`}
                  <span className="text-sky-400">    "hmac_verified"</span><span className="text-muted-foreground">:</span> <span className="text-amber-400">true</span>{`,\n`}
                  <span className="text-sky-400">    "ip_whitelisted"</span><span className="text-muted-foreground">:</span> <span className="text-amber-400">true</span>{`\n`}
                  <span className="text-muted-foreground">  {`}`}</span>{`,\n`}
                  <span className="text-sky-400">  "compliance_status"</span><span className="text-muted-foreground">: {`{`}</span>{`\n`}
                  <span className="text-sky-400">    "aml_cleared"</span><span className="text-muted-foreground">:</span> <span className="text-amber-400">true</span>{`,\n`}
                  <span className="text-sky-400">    "sanctions_check"</span><span className="text-muted-foreground">:</span> <span className="text-emerald-400">"passed"</span>{`,\n`}
                  <span className="text-sky-400">    "risk_score"</span><span className="text-muted-foreground">:</span> <span className="text-purple-400">0.02</span>{`\n`}
                  <span className="text-muted-foreground">  {`}`}</span>{`\n`}
                  <span className="text-muted-foreground">{`}`}</span>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Automated Compliance Engine */}
      <div className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100">
            <Activity className="w-4 h-4" /> Real-Time Engine
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-6">Automated Compliance Engine</h2>
          <p className="text-muted-foreground font-sans text-lg">
            Every transaction passes through our proprietary risk engine in milliseconds, ensuring you stay compliant without sacrificing user experience.
          </p>
        </div>

        <div className="relative">
          {/* Connector lines for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-slate-200 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-full origin-left animate-[pulse_3s_ease-in-out_infinite]"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {engine.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-background dark:bg-surface-dark border border-border dark:border-surface-dark-elevated shadow-xl dark:shadow-none shadow-slate-200/20 p-8 rounded-3xl hover:border-emerald-300 hover:shadow-2xl dark:shadow-none dark:hover:shadow-none dark:hover:bg-surface-dark-elevated transition-all hover:-translate-y-1 transition-all group relative"
              >
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-muted border border-border dark:border-surface-dark-elevated text-foreground flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:bg-emerald-50 group-hover:text-primary group-hover:border-emerald-100 transition-colors shadow-inner relative bg-background dark:bg-surface-dark">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-heading font-medium text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{feature.text}</p>
                
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Active
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Regulatory Map Placeholder */}
      <div className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d8751_0%,transparent_60%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">Global Regulatory Coverage</h2>
            <p className="text-slate-400 font-sans text-lg">
              We work directly with central banks and regulators to establish fully compliant, direct clearing pathways.
            </p>
          </div>
          
          <div className="relative rounded-[2.5rem] bg-slate-900/50 border border-slate-800 p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            <Map className="absolute -right-20 -top-20 w-[600px] h-[600px] text-foreground/30 rotate-12 pointer-events-none" strokeWidth={0.5} />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { region: 'Somalia', reg: 'Central Bank of Somalia', status: 'Fully Licensed', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                { region: 'Kenya', reg: 'Central Bank of Kenya', status: 'Partnered', badge: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
                { region: 'Ethiopia', reg: 'National Bank of Ethiopia', status: 'In Progress', badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
                { region: 'Djibouti', reg: 'Central Bank of Djibouti', status: 'Active', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' }
              ].map((loc, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-950/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all hover:bg-slate-900 group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                      <Map className="w-4 h-4 text-slate-400" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${loc.badge}`}>
                      {loc.status}
                    </span>
                  </div>
                  <div className="font-heading font-medium text-xl text-white mb-2">{loc.region}</div>
                  <div className="text-sm text-muted-foreground font-sans leading-tight">{loc.reg}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance FAQ */}
      <div className="py-24 px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-12 text-center">Compliance FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-background border rounded-2xl overflow-hidden cursor-pointer transition-all ${
                openFaq === i ? 'border-primary/30 shadow-md ring-1 ring-primary/5' : 'border-border dark:border-surface-dark-elevated shadow-sm hover:border-border dark:border-surface-dark-elevated'
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
                    : <Plus className="w-4 h-4 text-slate-400" />
                  }
                </div>
              </div>
              {openFaq === i && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-8 pb-8 text-muted-foreground font-sans leading-relaxed text-lg"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-emerald-950 rounded-[2.5rem] relative overflow-hidden border border-emerald-900/50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1d8751_0%,transparent_70%)] opacity-30"></div>
          <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 px-8 py-20 md:p-24 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6">
              Compliance built for scale.
            </h2>
            <p className="text-xl text-emerald-100/70 font-sans max-w-2xl mx-auto mb-10">
              Stop worrying about cross-border compliance. Integrate OMAYA and let our regulated infrastructure handle the rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/25">
                Contact Compliance Team <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/developers" className="inline-flex justify-center items-center gap-2 bg-emerald-900/50 hover:bg-emerald-800/50 text-white px-8 py-4 rounded-xl font-medium transition-all border border-emerald-700/50">
                View API Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}