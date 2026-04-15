import { Shield, User, Users, ArrowLeft, Moon, Sun } from 'lucide-react';
import agentLogo from '../../assets/agent_logo.png';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';

export function Login() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-muted flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to site
        </Link>
      </div>

      <div className="absolute top-8 right-8">
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
      </div>
      
      <div className="w-full max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-[2rem] border border-border shadow-xl overflow-hidden p-8 sm:p-10"
        >
          <div className="flex justify-center mb-8">
            <img src={agentLogo} alt="OMAYA Agent Pay" className="h-14 object-contain" />
          </div>
          
          <h1 className="text-3xl font-heading font-medium text-foreground text-center mb-2 tracking-tight">
            Welcome to OMAYA
          </h1>
          <p className="text-muted-foreground text-center font-sans mb-10 text-sm">
            Secure B2B agent payout operations
          </p>

          <div className="space-y-4">
            <button type="button" className="w-full group flex items-center p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 bg-card transition-all text-left cursor-default">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                <Users className="h-5 w-5" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-heading font-medium text-foreground group-hover:text-primary text-base">Log in as Agent</div>
                <div className="text-xs text-muted-foreground font-sans mt-0.5">Access your local payout dashboard</div>
              </div>
            </button>

            <button type="button" className="w-full group flex items-center p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-accent bg-card transition-all text-left cursor-default">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                <User className="h-5 w-5" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-heading font-medium text-foreground text-base">Log in as Admin</div>
                <div className="text-xs text-muted-foreground font-sans mt-0.5">Manage enterprise operations</div>
              </div>
            </button>
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground font-sans">
            By logging in, you agree to our{' '}
            <Link to="#" className="text-primary hover:text-primary/80 transition-colors">Terms of Service</Link>
            {' '}and{' '}
            <Link to="#" className="text-primary hover:text-primary/80 transition-colors">Privacy Policy</Link>.
          </div>
        </motion.div>
      </div>
    </div>
  );
}