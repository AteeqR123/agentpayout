import { Mail, MapPin, Phone, MessageCircle, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router';
import agentLogo from '../../assets/agent_logo.png';
import appStoreBadge from '../../assets/appstore.png';
import appStoreQR from '../../assets/appstoreqr.png';
import googlePlayBadge from '../../assets/googleplay.png';
import googlePlayQR from '../../assets/googleplayqr.png';
import omayaTechLogo from '../../assets/omayatechlogo.png';

export function Footer() {
  const footerLinks = {
    PLATFORM: [
      { name: 'API Documentation', path: '/developers' },
      { name: 'Agent Network', path: '/' },
      { name: 'Features', path: '/' },
      { name: 'Overview', path: '/' }
    ],
    COMPANY: [
      { name: 'Blog', path: '#' },
      { name: 'Contact', path: '#' },
      { name: 'Careers', path: '#' },
      { name: 'About Us', path: '/about' }
    ],
    RESOURCES: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Compliance', path: '/compliance' },
      { name: 'Help Center', path: '#' }
    ]
  };

  return (
    <footer className="bg-background border-t border-border pt-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Follow Us */}
          <div className="w-full lg:w-[25%] flex flex-col">
            <Link to="/" className="mb-6 inline-block">
              <img src={agentLogo} alt="OMAYA Agent Pay" className="h-10 object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Licensed money-transfer payout operations platform serving Somalia with compliance-first approach.
            </p>
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">FOLLOW US</h4>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border hover:border-primary hover:bg-accent hover:text-primary text-muted-foreground transition-all"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center Links Container */}
          <div className="flex-1 flex flex-wrap lg:flex-nowrap justify-between gap-8">
            {/* Dynamic Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="w-[45%] sm:w-[30%] lg:w-auto">
                <h3 className="text-base text-foreground font-semibold uppercase tracking-wide mb-6">
                  {title}
                </h3>
                <ul className="space-y-4">
                  {links.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors block">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Us & App Links */}
            <div className="w-full sm:w-[50%] lg:w-auto flex flex-col lg:flex-row gap-10 lg:gap-12 pl-0 lg:pl-4">
              {/* Contact Info */}
              <div className="flex-1 min-w-[240px]">
                <h3 className="text-base text-foreground font-semibold uppercase tracking-wide mb-6">
                  CONTACT US
                </h3>
                <div className="space-y-5 text-sm font-medium text-foreground">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0" />
                    <span>+252771000777</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    <span>+252771000777</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0" />
                    <span>info@omaya.io</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      KM4, Taleh, Hodan District,<br />
                      Mogadishu, Somalia
                    </span>
                  </div>
                </div>
              </div>

              {/* App Links */}
              <div className="flex flex-row lg:flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                  <img src={appStoreBadge} alt="Download on App Store" className="h-[46px] object-contain cursor-pointer transition-transform hover:scale-105" />
                  <img src={appStoreQR} alt="App Store QR" className="w-[60px] h-[60px] object-cover rounded-md p-1 bg-white border border-border" />
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                  <img src={googlePlayBadge} alt="Get it on Google Play" className="h-[46px] object-contain cursor-pointer transition-transform hover:scale-105" />
                  <img src={googlePlayQR} alt="Google Play QR" className="w-[60px] h-[60px] object-cover rounded-md p-1 bg-white border border-border" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 pb-12 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex-1 hidden md:block"></div>
            <p className="text-sm text-foreground font-medium flex-1 text-center mb-4 md:mb-0">
              Copyright © 2026, OMAYA.io
            </p>
            <div className="flex-1 flex justify-center md:justify-end gap-6 text-sm font-medium text-muted-foreground">
              <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-[11px] text-muted-foreground font-medium">Powered By:</span>
            <img src={omayaTechLogo} alt="OMAYA TECHNOLOGIES" className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}