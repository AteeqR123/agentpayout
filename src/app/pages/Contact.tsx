import { Mail, MapPin, Phone, Building2, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Breadcrumb } from '../components/Breadcrumb';

export function Contact() {
  return (
    <div className="bg-muted min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-muted dark:bg-surface-dark-elevated border-b border-border dark:border-surface-dark-elevated">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#1d8751] opacity-20 blur-[100px]"></div>
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <Breadcrumb items={[{ label: 'Contact Sales' }]} />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6 md:mb-8 shadow-sm">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wide">
                  Enterprise Partnerships
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-foreground tracking-tight mb-6 md:mb-8 leading-[1.1]">
                Let's scale your <br className="hidden sm:block" />
                <span className="text-primary">operations.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                Whether you need direct API access or a managed agent payout solution, our team is ready to design the perfect infrastructure for your business in East Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background dark:bg-surface-dark border border-border dark:border-surface-dark-elevated shadow-sm p-6 sm:p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-heading font-medium text-foreground mb-6">Send an Inquiry</h2>
          <form className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-border dark:border-surface-dark-elevated focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-border dark:border-surface-dark-elevated focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Work Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-border dark:border-surface-dark-elevated focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="jane@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-border dark:border-surface-dark-elevated focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Acme Corp" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border dark:border-surface-dark-elevated focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us about your payout volume and technical requirements..."></textarea>
            </div>
            <Button className="w-full bg-primary hover:bg-emerald-700 text-white rounded-xl h-12 text-base font-medium shadow-sm transition-all">
              Submit Inquiry
            </Button>
          </form>
        </motion.div>

        {/* Office Locations & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10 md:space-y-12"
        >
          <div>
            <h2 className="text-2xl font-heading font-medium text-foreground mb-6">Direct Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Email Us</div>
                  <a href="mailto:partners@omaya.io" className="text-primary hover:text-emerald-700 text-sm">partners@omaya.io</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Call Support</div>
                  <a href="tel:+252610000000" className="text-muted-foreground hover:text-foreground text-sm">+252 61 000 0000</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-medium text-foreground mb-6">Our Offices</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-muted dark:bg-surface-dark-elevated border border-border dark:border-surface-dark-elevated p-5 sm:p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-foreground" />
                  <h3 className="font-heading font-medium text-foreground">Mogadishu HQ</h3>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Maka Al Mukarama Road,<br />
                  Hodan District,<br />
                  Mogadishu, Somalia
                </p>
              </div>
              <div className="bg-muted dark:bg-surface-dark-elevated border border-border dark:border-surface-dark-elevated p-5 sm:p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Globe2 className="w-5 h-5 text-foreground" />
                  <h3 className="font-heading font-medium text-foreground">Nairobi Hub</h3>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Westlands,<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}