import { Code2, Terminal, Activity, Server, Workflow, Plus, Minus, Copy, Check, ChevronRight, Zap, ArrowRight, Github, Key, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

export function Developers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('nodejs');

  const faqs = [
    {
      q: "What is your rate limit?",
      a: "Our standard enterprise API has a rate limit of 100 requests per second (RPS) per API key. We support burst traffic up to 200 RPS for short durations. Custom limits are available upon request for dedicated enterprise tiers."
    },
    {
      q: "Do you support idempotency?",
      a: "Yes. All POST requests (like initiating a payout) require an Idempotency-Key header. We guarantee that requests with the same key will not be processed twice within a 24-hour window, preventing accidental duplicate charges."
    },
    {
      q: "How are webhooks secured?",
      a: "Webhook payloads are signed using HMAC-SHA256. We provide a webhook secret in your dashboard which you should use to verify the signature in the Omaya-Signature header before processing any event."
    },
    {
      q: "Are test environments available?",
      a: "Absolutely. We provide a sandbox environment that perfectly mirrors production. Sandbox API keys allow you to simulate edge cases, failed transactions, and delayed webhooks without risking real funds."
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install @omaya/node");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const codeSnippets = {
    nodejs: (
      <>
<span className="text-muted-foreground">import</span> {'{'} Omaya {'}'} <span className="text-muted-foreground">from</span> <span className="text-emerald-400">'@omaya/node'</span>;

<span className="text-muted-foreground">const</span> omaya = <span className="text-muted-foreground">new</span> Omaya(<span className="text-emerald-400">'om_prod_123456789...'</span>);

<span className="text-muted-foreground">const</span> payout = <span className="text-muted-foreground">await</span> omaya.payouts.<span className="text-blue-400">create</span>({'{'}
  amount: <span className="text-orange-400">5000</span>,
  currency: <span className="text-emerald-400">'USD'</span>,
  method: <span className="text-emerald-400">'mobile_money'</span>,
  destination: {'{'}
    network: <span className="text-emerald-400">'evc_plus'</span>,
    phone_number: <span className="text-emerald-400">'+252610000000'</span>
  {'}'},
  metadata: {'{'}
    order_id: <span className="text-emerald-400">'ord_88291'</span>
  {'}'}
{'}'});

<span className="text-muted-foreground">console</span>.<span className="text-blue-400">log</span>(payout.status); <span className="text-muted-foreground">// 'processing'</span>
      </>
    ),
    python: (
      <>
<span className="text-muted-foreground">import</span> omaya

client = omaya.<span className="text-blue-400">Client</span>(<span className="text-emerald-400">"om_prod_123456789..."</span>)

payout = client.payouts.<span className="text-blue-400">create</span>(
    amount=<span className="text-orange-400">5000</span>,
    currency=<span className="text-emerald-400">"USD"</span>,
    method=<span className="text-emerald-400">"mobile_money"</span>,
    destination={'{'}
        <span className="text-emerald-400">"network"</span>: <span className="text-emerald-400">"evc_plus"</span>,
        <span className="text-emerald-400">"phone_number"</span>: <span className="text-emerald-400">"+252610000000"</span>
    {'}'},
    metadata={'{'}<span className="text-emerald-400">"order_id"</span>: <span className="text-emerald-400">"ord_88291"</span>{'}'}
)

<span className="text-blue-400">print</span>(payout.status) <span className="text-muted-foreground"># 'processing'</span>
      </>
    ),
    curl: (
      <>
<span className="text-blue-400">curl</span> -X POST https://api.omaya.com/v1/payouts \
  -H <span className="text-emerald-400">"Authorization: Bearer om_prod_123456789..."</span> \
  -H <span className="text-emerald-400">"Content-Type: application/json"</span> \
  -H <span className="text-emerald-400">"Idempotency-Key: idemp_abc123"</span> \
  -d <span className="text-emerald-400">'{'{'}
    "amount": 5000,
    "currency": "USD",
    "method": "mobile_money",
    "destination": {'{'}
      "network": "evc_plus",
      "phone_number": "+252610000000"
    {'}'}
  {'}'}'</span>
      </>
    )
  };

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      {/* Hero Section */}
      <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-muted dark:bg-surface-dark-elevated border-b border-border dark:border-surface-dark-elevated">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#1d8751] opacity-20 blur-[100px]"></div>
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <Breadcrumb items={[{ label: 'Developer Platform' }]} />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6 md:mb-8 shadow-sm">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wide">
                  Developer Platform
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-foreground tracking-tight mb-6 md:mb-8 leading-[1.1]">
                Code for the <br className="hidden sm:block" />
                <span className="text-primary">Horn of Africa.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
                Integrate OMAYA's payout infrastructure directly into your product. Designed for scale, built by engineers who understand local liquidity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/20 text-sm sm:text-base">
                  Read API Reference <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="inline-flex justify-center items-center gap-2 bg-background dark:bg-surface-dark hover:bg-muted text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all border border-border dark:border-surface-dark-elevated shadow-sm text-sm sm:text-base">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" /> GitHub Repositories
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Code Snippet & Quick Start */}
      <div className="py-24 relative bg-background dark:bg-surface-dark border-b border-border dark:border-surface-dark-elevated">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6 text-foreground">Quick Start</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8 text-lg">
                Install our official Node.js SDK to get started. You'll need your secret API key from the developer dashboard.
              </p>
              
              <div className="bg-muted dark:bg-surface-dark-elevated rounded-xl p-4 mb-10 border border-border dark:border-surface-dark-elevated font-mono text-sm flex items-center justify-between shadow-inner">
                <span className="text-primary">$ npm install @omaya/node</span>
                <button 
                  onClick={handleCopy}
                  className="p-2 hover:bg-slate-200 rounded-md transition-colors text-muted-foreground hover:text-foreground flex items-center gap-2"
                  title="Copy to clipboard"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-50 border border-emerald-100 rounded-full p-2">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Idempotent by default</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Safely retry requests without accidentally double-charging your users.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-50 border border-emerald-100 rounded-full p-2">
                    <Workflow className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Comprehensive Webhooks</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Listen for status changes, liquidity updates, and compliance events in real-time.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-slate-800 bg-[#0d1117] overflow-hidden shadow-2xl dark:shadow-none relative">
                {/* macOS style window controls */}
                <div className="absolute top-0 left-0 w-full h-12 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                
                {/* Language Tabs */}
                <div className="flex px-4 pt-12 pb-0 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400 gap-1 overflow-x-auto">
                  {[
                    { id: 'nodejs', label: 'Node.js' },
                    { id: 'python', label: 'Python' },
                    { id: 'curl', label: 'cURL' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 border-b-2 transition-colors ${
                        activeTab === tab.id 
                          ? 'border-emerald-400 text-emerald-400 bg-slate-800/50' 
                          : 'border-transparent hover:text-slate-200 hover:bg-slate-800/30'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                {/* Code Window */}
                <div className="p-6 overflow-x-auto text-sm font-mono text-slate-300 relative group">
                  <pre className="!bg-transparent !p-0 !m-0">
                    <code>
                      {codeSnippets[activeTab as keyof typeof codeSnippets]}
                    </code>
                  </pre>
                  <button className="absolute top-4 right-4 p-2 bg-slate-800/80 text-slate-400 hover:text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Companion Information Blocks */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-muted dark:bg-surface-dark-elevated border border-border dark:border-surface-dark-elevated rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-background dark:bg-surface-dark border border-border dark:border-surface-dark-elevated flex items-center justify-center text-primary mb-4 shadow-sm">
                    <Key className="w-5 h-5" />
                  </div>
                  <h3 className="text-foreground font-medium mb-2">Authentication</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Grab your live or sandbox secret keys from the developer dashboard to authenticate API requests.
                  </p>
                  <Link to="/developers" className="text-primary hover:text-emerald-700 text-sm font-medium flex items-center gap-1 group/link">
                    Get your API keys <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="bg-[#0d1117] border border-slate-800 rounded-2xl p-6 shadow-xl dark:shadow-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 mb-4 shadow-sm relative z-10">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-medium mb-3 relative z-10">Response payload</h3>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 font-mono text-xs text-emerald-400/80 relative z-10">
                    {`{
  "id": "po_89123xyz",
  "status": "processing",
  "amount": 5000,
  "currency": "USD"
}`}
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>

      {/* SDKs & Resources */}
      <div className="py-24 bg-muted text-foreground">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-medium text-foreground mb-6">Official Libraries</h2>
            <p className="text-lg text-muted-foreground font-sans">
              Connect to our API securely in your preferred language. All libraries support automatic retries and error handling.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            {[
              { lang: 'Node.js', ver: 'v2.4.1', type: 'Server' },
              { lang: 'Python', ver: 'v1.8.0', type: 'Server' },
              { lang: 'Go', ver: 'v1.2.5', type: 'Server' },
              { lang: 'PHP', ver: 'v2.1.0', type: 'Server' }
            ].map((sdk, i) => (
              <motion.div
                key={sdk.lang}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group border border-border dark:border-surface-dark-elevated rounded-3xl p-8 text-center hover:border-primary/50 hover:shadow-xl dark:shadow-none dark:hover:shadow-none dark:hover:bg-surface-dark-elevated transition-all transition-all bg-background dark:bg-surface-dark cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto bg-muted dark:bg-surface-dark-elevated border border-border dark:border-surface-dark-elevated rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {sdk.lang === 'Node.js' && (
                      <svg viewBox="0 0 128 128" width="28" height="28">
                        <path fill="#339933" d="M10.9 94.1V33.9l53.1-30.6 53.1 30.6v60.2L64 124.7zM64 109l42.6-24.6V39.6L64 15 21.4 39.6v44.8zm22.4-38.6H64v12.9h22.4v12.9H41.6V57.5h44.8v12.9H64v-12.9H41.6v38.6z" />
                      </svg>
                    )}
                    {sdk.lang === 'Python' && (
                      <svg viewBox="0 0 128 128" width="28" height="28">
                        <path fill="#3776AB" d="M64.6 6.3c-28 0-26.6 12.1-26.6 12.1l-.1 12.5h27.3v3.9H37.3S21.6 34.2 21.6 62.4c0 28.2 13.7 27.3 13.7 27.3h12.5v-13s-.2-15 15.1-15h14.7s14.2.3 14.2-13.8V33.2s1.5-26.9-27.2-26.9zm-13.4 8.7c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z"/>
                        <path fill="#FFD43B" d="M63.4 121.7c28 0 26.6-12.1 26.6-12.1l.1-12.5H62.7v-3.9h28.1s15.6.6 15.6-27.6c0-28.2-13.7-27.3-13.7-27.3H79.8v13s.2 15-15.1 15H50.1s-14.2-.3-14.2 13.8v34.8s-1.5 26.8 27.5 26.8zm13.4-8.7c-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z"/>
                      </svg>
                    )}
                    {sdk.lang === 'Go' && (
                      <svg viewBox="0 0 128 128" width="36" height="36">
                        <path fill="#00ADD8" d="M37 66.8c-8.9 0-16.1-7.2-16.1-16.1s7.2-16.1 16.1-16.1c4.2 0 7.9 1.6 10.9 4.2l-5.6 6.3c-1.5-1.2-3.3-2-5.3-2-4.5 0-8 3.5-8 8s3.5 8 8 8c2.9 0 5.4-1.5 6.7-3.8H37v-7.6h15.4v3.1c-.5 9-7.9 16-15.4 16zm26.9-2.3c-6.1 0-11.2-5-11.2-11.2 0-6.1 5-11.2 11.2-11.2 6.1 0 11.2 5 11.2 11.2 0 6.1-5 11.2-11.2 11.2zm0-16.3c-2.7 0-5 2.3-5 5.1s2.3 5.1 5 5.1 5-2.3 5-5.1-2.3-5.1-5-5.1zm32.8 14l-4.5-18.4h6.5l2 8.4 2.1-8.4h6l-4.7 18.4h-7.4zM86.8 46.1h20.5v5.3H86.8z"/>
                      </svg>
                    )}
                    {sdk.lang === 'PHP' && (
                      <svg viewBox="0 0 128 128" width="36" height="36">
                        <path fill="#777BB4" d="M64 21.3C28.7 21.3 0 40.3 0 64c0 23.7 28.7 42.7 64 42.7 35.3 0 64-19.1 64-42.7 0-23.7-28.7-42.7-64-42.7zM36.1 79.5h-5.9l2.7-14.7H26l-2.7 14.7h-5.9l4.8-26.6H31c4.4 0 7 1.8 7 5.6 0 3.7-1.9 6.2-4.7 6.2h3.5l-2.7 14.8zm31.7 0h-5.9l2.7-14.7H57.7l-2.7 14.7h-5.9l4.8-26.6h5.9l-1.9 10.3h6.9l1.9-10.3h5.9l-4.8 26.6zm31.8-15.3c0 3.8-2.6 5.6-7 5.6H84l-1.7 9.7H76.4l4.8-26.6h8.8c4.4 0 7 1.8 7 5.6 0 1.2-.3 2.5-.8 3.5-.5 1-1.3 1.9-2.3 2.4.9-.1 2.3.6 2.7 1.6V64.2zm-12.8-5h3.6c1.6 0 2.6.5 2.6 1.9 0 1.4-1 1.9-2.6 1.9h-3.6l.7-3.8zm-65.4 0h3.6c1.6 0 2.6.5 2.6 1.9 0 1.4-1 1.9-2.6 1.9h-3.6l.7-3.8z"/>
                      </svg>
                    )}
                  </div>
                  <div className="font-heading font-medium text-xl text-foreground mb-1">{sdk.lang}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{sdk.type} · {sdk.ver}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Real-time Status */}
          <div className="bg-slate-950 border border-slate-800 shadow-2xl dark:shadow-none rounded-[2.5rem] p-10 md:p-16 mb-32 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,#1d8751_0%,transparent_50%)] opacity-30 -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 relative z-10">
              <div>
                <h2 className="text-3xl font-heading font-medium mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] animate-pulse"></div>
                  System Status
                </h2>
                <p className="text-slate-400 font-sans">Real-time telemetry from our primary production clusters.</p>
              </div>
              <button className="text-emerald-400 font-medium hover:text-emerald-300 text-sm flex items-center gap-1 group bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20 transition-colors">
                View detailed metrics <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {[
                { icon: Activity, title: 'API Uptime (90d)', value: '99.999%', status: 'Operational' },
                { icon: Server, title: 'Avg API Latency', value: '145ms', status: 'Optimal' },
                { icon: Workflow, title: 'Webhook Delivery', value: '100%', status: 'Real-time' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 border border-slate-800 shadow-inner p-8 rounded-3xl relative backdrop-blur-sm hover:bg-slate-900/80 transition-colors"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center shadow-sm">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 uppercase tracking-wider">
                      <Check className="w-3 h-3" />
                      {stat.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-slate-400 font-sans mb-2">{stat.title}</h3>
                  <div className="text-4xl font-heading font-medium text-white">{stat.value}</div>
                  
                  {/* Decorative sparkline-like bar */}
                  <div className="mt-6 flex items-end gap-1 h-8 opacity-40">
                    {[40, 70, 45, 90, 65, 85, 60, 100, 75, 80, 50, 95].map((h, j) => (
                      <div key={j} className="flex-1 bg-emerald-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical FAQ */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-medium text-foreground mb-12 text-center">Technical FAQ</h2>
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
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1d8751_0%,transparent_70%)] opacity-20"></div>
          <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 px-8 py-20 md:p-24 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6">
              Start building today.
            </h2>
            <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto mb-10">
              Get instant access to our sandbox environment and start testing our API within minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/developers" className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/25">
                Generate API Keys <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-medium transition-all border border-slate-700">
                Contact Enterprise Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}