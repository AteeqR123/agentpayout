// Calculate transaction score based on amount (0-100 scale)
export function calculateTransactionScore(amount: number | string): number {
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Score brackets based on transaction amount
  if (numAmount >= 2000) return 100;
  if (numAmount >= 1500) return 95;
  if (numAmount >= 1000) return 85;
  if (numAmount >= 750) return 75;
  if (numAmount >= 500) return 65;
  if (numAmount >= 250) return 50;
  if (numAmount >= 100) return 35;
  if (numAmount >= 50) return 20;
  return 10;
}

// Get score color and label
export function getScoreDisplay(score: number): {
  color: string;
  bgColor: string;
  label: string;
} {
  if (score >= 90) {
    return {
      color: 'text-violet-600 dark:text-violet-400',
      bgColor: 'bg-violet-50 dark:bg-violet-950/30',
      label: 'Premium'
    };
  }
  if (score >= 75) {
    return {
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      label: 'High'
    };
  }
  if (score >= 50) {
    return {
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      label: 'Good'
    };
  }
  if (score >= 25) {
    return {
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      label: 'Standard'
    };
  }
  return {
    color: 'text-slate-600 dark:text-slate-400',
    bgColor: 'bg-slate-50 dark:bg-slate-950/30',
    label: 'Basic'
  };
}
