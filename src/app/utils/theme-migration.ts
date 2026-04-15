/**
 * Theme Migration Helper
 * 
 * This file contains mappings from hardcoded Tailwind colors to theme tokens.
 * Use this as a reference when migrating components to use the theme system.
 */

export const colorMigrationMap = {
  // Background replacements
  'bg-white': 'bg-card or bg-background',
  'bg-slate-50': 'bg-muted or bg-background-elevated',
  'bg-slate-100': 'bg-secondary or bg-background-subtle',
  'bg-slate-900': 'bg-surface-dark',
  'bg-slate-950': 'bg-background (in dark mode)',
  
  // Text replacements
  'text-white': 'text-foreground (context dependent)',
  'text-slate-900': 'text-foreground',
  'text-slate-800': 'text-foreground',
  'text-slate-700': 'text-foreground',
  'text-slate-600': 'text-foreground-muted',
  'text-slate-500': 'text-foreground-muted',
  'text-slate-400': 'text-foreground-subtle',
  
  // Border replacements
  'border-slate-200': 'border-border',
  'border-slate-300': 'border-border-hover',
  'border-slate-800': 'border-border (in dark contexts)',
  
  // Green/Emerald (Success/Primary) replacements
  'bg-emerald-50': 'bg-success-subtle',
  'bg-emerald-100': 'bg-success-light',
  'bg-emerald-500': 'bg-success or bg-primary',
  'bg-emerald-600': 'bg-success-hover or bg-primary-hover',
  'text-emerald-500': 'text-success',
  'text-emerald-600': 'text-success',
  
  // Amber (Warning) replacements
  'bg-amber-50': 'bg-warning-bg',
  'bg-amber-100': 'bg-warning-subtle',
  'bg-amber-200': 'bg-warning-light',
  'bg-amber-500': 'bg-warning',
  'bg-amber-600': 'bg-warning-hover',
  'text-amber-500': 'text-warning',
  'text-amber-600': 'text-warning',
  'text-amber-700': 'text-warning',
  'text-amber-800': 'text-warning-foreground',
  'text-amber-900': 'text-warning-foreground',
  'border-amber-200': 'border-warning-light',
  
  // Red (Destructive/Error) replacements
  'bg-red-50': 'bg-destructive-bg',
  'bg-red-100': 'bg-destructive-subtle',
  'bg-red-200': 'bg-destructive-light',
  'bg-red-500': 'bg-destructive',
  'bg-red-600': 'bg-destructive-hover',
  'bg-rose-50': 'bg-destructive-bg',
  'bg-rose-600': 'bg-destructive',
  'text-red-500': 'text-destructive',
  'text-red-600': 'text-destructive',
  'text-rose-700': 'text-destructive',
  'border-red-200': 'border-destructive-light',
  'border-rose-200': 'border-destructive-light',
  
  // Blue (Info) replacements
  'bg-blue-50': 'bg-info-bg',
  'bg-blue-100': 'bg-info-subtle',
  'bg-blue-500': 'bg-info',
  'bg-blue-600': 'bg-info-hover',
  'text-blue-500': 'text-info',
  'text-blue-600': 'text-info',
  'border-blue-200': 'border-info-light',
};

/**
 * Component-specific migration patterns
 */
export const componentPatterns = {
  card: {
    before: 'bg-white border border-slate-200 text-slate-900',
    after: 'bg-card border border-border text-card-foreground',
    description: 'Standard card with border',
  },
  
  cardElevated: {
    before: 'bg-slate-50',
    after: 'bg-card-elevated',
    description: 'Elevated/raised card',
  },
  
  darkHero: {
    before: 'bg-slate-900 text-white',
    after: 'bg-surface-dark text-surface-dark-foreground',
    description: 'Dark hero section',
  },
  
  darkCard: {
    before: 'bg-slate-900 border border-slate-800 text-white',
    after: 'bg-surface-dark border border-border text-surface-dark-foreground',
    description: 'Dark card component',
  },
  
  warningBanner: {
    before: 'bg-amber-50 border border-amber-200 text-amber-800',
    after: 'bg-warning-bg border border-warning-light text-warning-foreground',
    description: 'Warning banner/alert',
  },
  
  successBadge: {
    before: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    after: 'bg-success-light text-success border border-success-subtle',
    description: 'Success badge',
  },
  
  errorBadge: {
    before: 'bg-red-100 text-red-700 border border-red-200',
    after: 'bg-destructive-subtle text-destructive border border-destructive-light',
    description: 'Error badge',
  },
  
  primaryButton: {
    before: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    after: 'bg-primary hover:bg-primary-hover text-primary-foreground',
    description: 'Primary action button',
  },
  
  secondaryButton: {
    before: 'bg-slate-100 hover:bg-slate-200 text-slate-900',
    after: 'bg-secondary hover:bg-secondary-hover text-secondary-foreground',
    description: 'Secondary button',
  },
  
  input: {
    before: 'bg-white border border-slate-300 text-slate-900',
    after: 'bg-input-background border border-input text-foreground',
    description: 'Input field',
  },
  
  section: {
    before: 'bg-slate-50',
    after: 'bg-background-subtle',
    description: 'Section background',
  },
  
  mutedText: {
    before: 'text-slate-500',
    after: 'text-foreground-muted',
    description: 'Secondary/muted text',
  },
  
  subtleText: {
    before: 'text-slate-400',
    after: 'text-foreground-subtle',
    description: 'Tertiary/subtle text',
  },
};

/**
 * Regular expressions to find hardcoded colors in code
 * Use these to search your codebase for colors that need updating
 */
export const searchPatterns = [
  // Backgrounds
  /bg-(?:slate|gray|zinc|neutral|stone)-(?:\d+|white|black)/g,
  /bg-(?:emerald|green)-(?:\d+)/g,
  /bg-(?:amber|yellow|orange)-(?:\d+)/g,
  /bg-(?:red|rose)-(?:\d+)/g,
  /bg-(?:blue|sky|cyan)-(?:\d+)/g,
  
  // Text
  /text-(?:slate|gray|zinc|neutral|stone)-(?:\d+|white|black)/g,
  /text-(?:emerald|green)-(?:\d+)/g,
  /text-(?:amber|yellow|orange)-(?:\d+)/g,
  /text-(?:red|rose)-(?:\d+)/g,
  /text-(?:blue|sky|cyan)-(?:\d+)/g,
  
  // Borders
  /border-(?:slate|gray|zinc|neutral|stone)-(?:\d+)/g,
  /border-(?:emerald|green)-(?:\d+)/g,
  /border-(?:amber|yellow|orange)-(?:\d+)/g,
  /border-(?:red|rose)-(?:\d+)/g,
  /border-(?:blue|sky|cyan)-(?:\d+)/g,
];

/**
 * Helper function to suggest theme token replacement
 */
export function suggestReplacement(hardcodedClass: string): string | null {
  return colorMigrationMap[hardcodedClass as keyof typeof colorMigrationMap] || null;
}

/**
 * Example usage:
 * 
 * // Find a replacement
 * const suggestion = suggestReplacement('bg-slate-900');
 * console.log(suggestion); // 'bg-surface-dark'
 * 
 * // Get component pattern
 * const pattern = componentPatterns.card;
 * console.log(pattern.before); // Old classes
 * console.log(pattern.after);  // New theme-aware classes
 */
