/**
 * OMAYA Theme Utilities
 * 
 * Provides helper functions to access theme colors programmatically
 * for use in charts, animations, and other JavaScript-based styling.
 */

/**
 * Get a CSS custom property value from the document root
 */
function getCSSVariable(variable: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

/**
 * Theme color tokens that can be accessed programmatically
 */
export const themeColors = {
  // Backgrounds
  background: () => getCSSVariable('--background'),
  backgroundElevated: () => getCSSVariable('--background-elevated'),
  backgroundSubtle: () => getCSSVariable('--background-subtle'),
  
  // Foreground
  foreground: () => getCSSVariable('--foreground'),
  foregroundMuted: () => getCSSVariable('--foreground-muted'),
  foregroundSubtle: () => getCSSVariable('--foreground-subtle'),
  
  // Cards
  card: () => getCSSVariable('--card'),
  cardForeground: () => getCSSVariable('--card-foreground'),
  cardElevated: () => getCSSVariable('--card-elevated'),
  cardHover: () => getCSSVariable('--card-hover'),
  
  // Primary
  primary: () => getCSSVariable('--primary'),
  primaryHover: () => getCSSVariable('--primary-hover'),
  primaryForeground: () => getCSSVariable('--primary-foreground'),
  primaryLight: () => getCSSVariable('--primary-light'),
  primarySubtle: () => getCSSVariable('--primary-subtle'),
  
  // Secondary
  secondary: () => getCSSVariable('--secondary'),
  secondaryForeground: () => getCSSVariable('--secondary-foreground'),
  secondaryHover: () => getCSSVariable('--secondary-hover'),
  
  // Muted
  muted: () => getCSSVariable('--muted'),
  mutedForeground: () => getCSSVariable('--muted-foreground'),
  
  // Accent
  accent: () => getCSSVariable('--accent'),
  accentForeground: () => getCSSVariable('--accent-foreground'),
  accentHover: () => getCSSVariable('--accent-hover'),
  
  // Success
  success: () => getCSSVariable('--success'),
  successHover: () => getCSSVariable('--success-hover'),
  successForeground: () => getCSSVariable('--success-foreground'),
  successLight: () => getCSSVariable('--success-light'),
  successSubtle: () => getCSSVariable('--success-subtle'),
  
  // Warning
  warning: () => getCSSVariable('--warning'),
  warningHover: () => getCSSVariable('--warning-hover'),
  warningForeground: () => getCSSVariable('--warning-foreground'),
  warningLight: () => getCSSVariable('--warning-light'),
  warningSubtle: () => getCSSVariable('--warning-subtle'),
  warningBg: () => getCSSVariable('--warning-bg'),
  
  // Destructive
  destructive: () => getCSSVariable('--destructive'),
  destructiveHover: () => getCSSVariable('--destructive-hover'),
  destructiveForeground: () => getCSSVariable('--destructive-foreground'),
  destructiveLight: () => getCSSVariable('--destructive-light'),
  destructiveSubtle: () => getCSSVariable('--destructive-subtle'),
  destructiveBg: () => getCSSVariable('--destructive-bg'),
  
  // Info
  info: () => getCSSVariable('--info'),
  infoHover: () => getCSSVariable('--info-hover'),
  infoForeground: () => getCSSVariable('--info-foreground'),
  infoLight: () => getCSSVariable('--info-light'),
  infoSubtle: () => getCSSVariable('--info-subtle'),
  infoBg: () => getCSSVariable('--info-bg'),
  
  // Status
  statusActive: () => getCSSVariable('--status-active'),
  statusPending: () => getCSSVariable('--status-pending'),
  statusInactive: () => getCSSVariable('--status-inactive'),
  statusError: () => getCSSVariable('--status-error'),
  
  // Borders
  border: () => getCSSVariable('--border'),
  borderHover: () => getCSSVariable('--border-hover'),
  borderStrong: () => getCSSVariable('--border-strong'),
  
  // Inputs
  input: () => getCSSVariable('--input'),
  inputBackground: () => getCSSVariable('--input-background'),
  inputHover: () => getCSSVariable('--input-hover'),
  
  // Surface Dark
  surfaceDark: () => getCSSVariable('--surface-dark'),
  surfaceDarkElevated: () => getCSSVariable('--surface-dark-elevated'),
  surfaceDarkForeground: () => getCSSVariable('--surface-dark-foreground'),
  surfaceDarkMuted: () => getCSSVariable('--surface-dark-muted'),
  
  // Charts
  chart1: () => getCSSVariable('--chart-1'),
  chart2: () => getCSSVariable('--chart-2'),
  chart3: () => getCSSVariable('--chart-3'),
  chart4: () => getCSSVariable('--chart-4'),
  chart5: () => getCSSVariable('--chart-5'),
  chart6: () => getCSSVariable('--chart-6'),
};

/**
 * Get chart colors array for use in chart libraries
 * @example
 * const colors = getChartColors();
 * <Bar dataKey="value" fill={colors[0]} />
 */
export function getChartColors(): string[] {
  return [
    themeColors.chart1(),
    themeColors.chart2(),
    themeColors.chart3(),
    themeColors.chart4(),
    themeColors.chart5(),
    themeColors.chart6(),
  ];
}

/**
 * Get a semantic color set for a specific purpose
 */
export const semanticColors = {
  success: () => ({
    main: themeColors.success(),
    hover: themeColors.successHover(),
    foreground: themeColors.successForeground(),
    light: themeColors.successLight(),
    subtle: themeColors.successSubtle(),
  }),
  
  warning: () => ({
    main: themeColors.warning(),
    hover: themeColors.warningHover(),
    foreground: themeColors.warningForeground(),
    light: themeColors.warningLight(),
    subtle: themeColors.warningSubtle(),
    bg: themeColors.warningBg(),
  }),
  
  destructive: () => ({
    main: themeColors.destructive(),
    hover: themeColors.destructiveHover(),
    foreground: themeColors.destructiveForeground(),
    light: themeColors.destructiveLight(),
    subtle: themeColors.destructiveSubtle(),
    bg: themeColors.destructiveBg(),
  }),
  
  info: () => ({
    main: themeColors.info(),
    hover: themeColors.infoHover(),
    foreground: themeColors.infoForeground(),
    light: themeColors.infoLight(),
    subtle: themeColors.infoSubtle(),
    bg: themeColors.infoBg(),
  }),
};

/**
 * Convert hex color to RGB values
 * Useful for creating rgba colors with opacity
 * @example
 * const rgb = hexToRgb('#1d8751');
 * const color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`;
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Get theme-aware rgba color with opacity
 * @example
 * const color = getRgbaColor('--primary', 0.5);
 */
export function getRgbaColor(cssVariable: string, opacity: number): string {
  const color = getCSSVariable(cssVariable);
  const rgb = hexToRgb(color);
  if (rgb) {
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
  }
  return color;
}
