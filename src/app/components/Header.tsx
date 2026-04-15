import { Shield, ArrowRight, Menu, X, Moon, Sun } from 'lucide-react';
import agentLogo from '../../assets/agent_logo.png';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-3 transition-transform hover:scale-105 duration-200"
          >
            <img src={agentLogo} alt="OMAYA Agent Pay" className="h-10 object-contain" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-x-8">
            <Link to="/services" className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link to="/developers" className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors">Developers</Link>
            <Link to="/compliance" className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors">Compliance</Link>
            <Link to="/about" className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
            <Link to="/login">
              <Button variant="ghost" className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full px-4">
                Log in
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-surface-dark hover:bg-surface-dark-elevated text-surface-dark-foreground rounded-full px-5 text-sm font-medium shadow-sm transition-all hover:shadow-md">
                Contact Sales
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
            <button 
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6 shadow-inner">
              <Link to="/services" className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">Services</Link>
              <Link to="/developers" className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">Developers</Link>
              <Link to="/compliance" className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">Compliance</Link>
              <Link to="/about" className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">About</Link>
              <Link to="/contact" className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10">Contact</Link>
              <div className="pt-4 pb-2 border-t border-border mt-2 grid grid-cols-2 gap-4">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full justify-center">Log in</Button>
                </Link>
                <Link to="/contact" className="w-full">
                  <Button className="w-full justify-center bg-surface-dark text-surface-dark-foreground hover:bg-surface-dark-elevated">Sales</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}