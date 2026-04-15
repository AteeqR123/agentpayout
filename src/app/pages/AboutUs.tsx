import { Users, Globe2, Building2, Zap, ShieldCheck, Heart, MapPin, Plus, Minus, ArrowRight, Target, Award, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

export function AboutUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where is OMAYA headquartered?",
      a: "Our global headquarters is in Mogadishu, Somalia, with our primary regional tech hub located in Nairobi, Kenya. This allows us to balance local operational expertise with world-class engineering talent."
    },
    {
      q: "How long has OMAYA been operating?",
      a: "OMAYA was founded by veterans of East African finance and global tech. We've been building the core infrastructure since 2023 and officially launched our unified enterprise API in 2024, processing millions in monthly volume."
    },
    {
      q: "Are you a bank?",
      a: "No, OMAYA is a licensed money-transfer and payment operations platform. We partner with Tier-1 banks and mobile money operators to provide the underlying rails, while we provide the software and liquidity layer on top."
    },
    {
      q: "How do you ensure compliance?",
      a: "We maintain a bank-grade compliance program. Every transaction is screened in real-time against OFAC, UN, and local sanctions lists using advanced ML models, ensuring zero compromise on regulatory requirements."
    }
  ];

  const team = [
    { name: "Ahmed Jama", role: "Chief Executive Officer", bg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { name: "Sarah Omondi", role: "Chief Technology Officer", bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { name: "Hassan Ali", role: "Head of Compliance", bg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
    { name: "David Kimani", role: "VP of Operations", bg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" }
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
              <Breadcrumb items={[{ label: 'About Us' }]} />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6 md:mb-8 shadow-sm">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium tracking-tight text-foreground mb-6 md:mb-8 leading-[1.1]">
                Redefining liquidity in <br className="hidden sm:block" />
                <span className="text-primary">East Africa.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                We are bridging the gap to the Horn of Africa. OMAYA is the modern financial infrastructure empowering global businesses to instantly distribute funds locally.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Last Mile Challenge */}
      <div className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-10">The "Last Mile" Challenge</h2>
              
              <div className="space-y-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-100">
                    <Target className="w-4 h-4" /> The Problem
                  </div>
                  <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                    Moving money into East Africa has historically been slow, opaque, and highly fragmented. Global enterprises struggle with disparate local clearing networks, incompatible mobile money systems, and a complete lack of unified APIs.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-emerald-500">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
                    <Zap className="w-4 h-4" /> The Solution
                  </div>
                  <p className="text-lg text-foreground font-medium font-sans leading-relaxed">
                    We abstract away this complexity. OMAYA provides a single, compliant layer that routes capital instantly to the hardest-to-reach places, turning a logistical nightmare into a simple API call.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 rounded-[2.5rem] transform rotate-3 scale-105"></div>
              <div className="bg-background dark:bg-surface-dark border border-border dark:border-surface-dark-elevated p-8 md:p-12 rounded-[2.5rem] shadow-xl dark:shadow-none relative">
                
                <div className="relative">
                  {/* Before OMAYA */}
                  <div className="mb-12 relative">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">Legacy Infrastructure</div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-inner z-10"><Globe2 className="w-8 h-8 text-slate-400"/></div>
                      <div className="flex-1 h-1 bg-slate-200 relative overflow-hidden">
                         <div className="absolute inset-0 bg-red-400 w-1/3 animate-pulse"></div>
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-inner z-10"><Building2 className="w-8 h-8 text-slate-400"/></div>
                      <div className="flex-1 h-1 bg-slate-200 relative overflow-hidden">
                         <div className="absolute inset-0 bg-red-400 w-1/3 animate-pulse delay-75"></div>
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-inner z-10"><MapPin className="w-8 h-8 text-slate-400"/></div>
                    </div>
                    <div className="flex justify-between mt-3 text-xs font-medium text-slate-400 px-2">
                      <span>Sender</span>
                      <span>Correspondent</span>
                      <span>Beneficiary</span>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-slate-200"></div>
                  
                  {/* With OMAYA */}
                  <div className="relative pt-12">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-6 text-center">The OMAYA Way</div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg z-10"><Globe2 className="w-8 h-8 text-white"/></div>
                      <div className="flex-1 h-2 bg-emerald-100 rounded-full relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-primary w-full origin-left animate-[pulse_2s_ease-in-out_infinite]"></div>
                      </div>
                      <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-xl dark:shadow-none shadow-primary/30 z-10 border-4 border-white"><Zap className="w-10 h-10 text-white"/></div>
                      <div className="flex-1 h-2 bg-emerald-100 rounded-full relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-400 w-full origin-left animate-[pulse_2s_ease-in-out_infinite] delay-150"></div>
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg z-10"><MapPin className="w-8 h-8 text-emerald-400"/></div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Coverage Network */}
      <div className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d8751_0%,transparent_50%)] opacity-10" />
        <div className="px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/20">
            <Globe2 className="w-4 h-4" /> Global Reach
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6">Unrivaled Coverage Network</h2>
          <p className="text-slate-400 font-sans text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            We operate across the Horn of Africa, maintaining deep liquidity pools and strategic partnerships in the region's most crucial and complex markets.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Somalia', status: 'Active Network', nodes: '45+ Nodes' },
              { name: 'Kenya', status: 'Active Network', nodes: '12+ Nodes' },
              { name: 'Ethiopia', status: 'Active Network', nodes: '8+ Nodes' },
              { name: 'Djibouti', status: 'Active Network', nodes: '5+ Nodes' }
            ].map((country, i) => (
              <motion.div 
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 hover:bg-slate-900 transition-all group backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <MapPin className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
                </div>
                <div className="text-2xl font-heading font-medium mb-2">{country.name}</div>
                <div className="text-emerald-400 text-sm font-medium mb-1">{country.status}</div>
                <div className="text-muted-foreground text-xs">{country.nodes}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CEO Message */}
      <div className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl dark:shadow-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-[2rem] border-4 border-slate-800 overflow-hidden relative z-10 shadow-2xl dark:shadow-none"
          >
            <img src={team[0].bg} alt={team[0].name} className="w-full h-full object-cover grayscale-[30%]" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative z-10"
          >
            <Quote className="w-12 h-12 text-emerald-500/30 mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-white leading-snug mb-8">
              "We didn't build OMAYA to just participate in the East African financial ecosystem. We built it to be the foundational layer that makes this entire region instantly accessible to the rest of the world."
            </h2>
            <div>
              <div className="font-heading font-medium text-emerald-400 text-xl mb-1">{team[0].name}</div>
              <div className="text-slate-400 font-sans">{team[0].role}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values Redesigned */}
      <div className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted dark:bg-surface-dark-elevated border border-border dark:border-surface-dark-elevated text-foreground text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <Award className="w-4 h-4 text-primary" /> Principles
              </div>
              <h2 className="text-4xl font-heading font-medium text-foreground mb-6">Our Core Values</h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                These are the unshakeable principles that guide our engineering standards, our daily operations, and our long-term strategic partnerships across the globe.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: 'Integrity First', text: 'Compliance and trust are the foundation of everything we build. We never compromise on security.', number: '01' },
              { icon: Zap, title: 'Relentless Speed', text: 'We believe capital should move at the exact speed of the internet, without unnecessary friction.', number: '02' },
              { icon: Heart, title: 'Radical Inclusion', text: 'Connecting the unbanked and under-served communities to the global digital economy.', number: '03' },
              { icon: Building2, title: 'Local Expertise', text: 'Built by teams who intimately understand the nuanced East African regulatory context.', number: '04' }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-background dark:bg-surface-dark p-8 md:p-10 rounded-[2.5rem] border border-border dark:border-surface-dark-elevated hover:border-emerald-300 hover:shadow-2xl dark:shadow-none dark:hover:shadow-none dark:hover:bg-surface-dark-elevated transition-all hover:shadow-emerald-900/5 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50/50 rounded-bl-[100px] -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700 ease-out pointer-events-none z-0"></div>
                
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-muted dark:bg-surface-dark-elevated border border-border dark:border-surface-dark-elevated text-foreground flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors shadow-inner group-hover:shadow-lg dark:hover:shadow-none dark:hover:bg-surface-dark-elevated transition-all">
                    <val.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="text-slate-100 font-heading text-5xl font-bold absolute top-6 right-8 pointer-events-none group-hover:text-emerald-50 transition-colors">
                      {val.number}
                    </div>
                    <h3 className="text-2xl font-heading font-medium text-foreground mb-4 sm:mt-2 group-hover:text-primary transition-colors">{val.title}</h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">{val.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto bg-muted dark:bg-surface-dark-elevated border-t border-border dark:border-surface-dark-elevated rounded-[3rem] my-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-heading font-medium text-foreground mb-6">Leadership Team</h2>
            <p className="text-lg text-muted-foreground font-sans">
              Guided by veterans of global finance, fintech scaling, and regional regulatory frameworks.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-emerald-700">
            Contact Leadership <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] rounded-[2rem] mb-6 overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={member.bg} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h3 className="font-heading font-medium text-foreground text-xl mb-1">{member.name}</h3>
              <p className="text-primary font-medium font-sans text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company FAQ */}
      <div className="py-24 md:py-32">
        <div className="px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-medium text-foreground mb-12 text-center">Company FAQ</h2>
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

      {/* CTA Section */}
      <div className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1d8751_0%,transparent_70%)] opacity-20"></div>
          <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 px-8 py-20 md:p-24 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6">
              Join our mission.
            </h2>
            <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto mb-10">
              We are actively hiring top talent and partnering with forward-thinking enterprises. Help us build the future of East African liquidity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/25">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex justify-center items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-medium transition-all border border-slate-700">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}