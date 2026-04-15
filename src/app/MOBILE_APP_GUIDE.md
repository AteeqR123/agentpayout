# OMAYA Agent Portal - Mobile App Guide

Complete mobile-first responsive implementation transforming the Agent Portal into a full-featured mobile application.

## 📱 Mobile App Features

### Two-Mode Experience

#### 🖥️ **Desktop Mode** (md breakpoint and up)
- Traditional dashboard layout
- Full sidebar navigation
- Hover interactions
- Multi-column layouts
- Large typography and spacing

#### 📱 **Mobile Mode** (below md breakpoint)
- Native app-like experience
- Bottom navigation bar (6 main tabs)
- Hamburger menu for additional features
- Touch-optimized interactions
- Single/dual column layouts
- Compact typography

---

## 🎨 Mobile Layout Components

### 1. AgentMobileLayout
**Location:** `/src/app/layouts/AgentMobileLayout.tsx`

Wrapper component providing mobile structure:
- **MobileHeader** - Top app bar with logo, menu, theme toggle
- **Main Content** - Scrollable content area
- **MobileBottomNav** - Fixed bottom navigation

```tsx
import { AgentMobileLayout } from '../layouts/AgentMobileLayout';

<AgentMobileLayout title="Dashboard">
  {/* page content */}
</AgentMobileLayout>
```

**Props:**
- `title?: string` - Page title shown in mobile header
- `children: ReactNode` - Page content

---

### 2. MobileHeader
**Location:** `/src/app/components/agent/MobileHeader.tsx`

Fixed top header (only visible on mobile):

**Features:**
- Hamburger menu button
- OMAYA logo + page title
- Theme toggle (light/dark)
- Notification bell with badge indicator
- Auto-hidden on desktop (`md:hidden`)

**Layout:**
- Height: `h-14` (56px)
- Fixed position: `fixed top-0 z-40`
- Backdrop blur: `backdrop-blur-lg bg-card/95`

---

### 3. MobileBottomNav
**Location:** `/src/app/components/agent/MobileBottomNav.tsx`

Fixed bottom navigation bar with 6 tabs:

| Tab | Icon | Route | Label |
|-----|------|-------|-------|
| Home | LayoutGrid | `/agent` | Home |
| Queue | ListChecks | `/agent/queue` | Queue |
| Active | Clock | `/agent/active` | Active |
| History | History | `/agent/history` | History |
| Earnings | DollarSign | `/agent/earnings` | Earnings |
| Profile | User | `/agent/profile` | Profile |

**Features:**
- Active tab indicator (top border animation)
- Icon + label format
- Smooth transitions with motion/react
- Auto-hidden on desktop (`md:hidden`)

**Layout:**
- Height: `h-16` (64px)
- Fixed position: `fixed bottom-0 z-50`
- 6-column grid: `grid-cols-6`

---

### 4. Hamburger Menu Drawer

Slide-in menu from left with:

**Header Section:**
- User avatar (gradient circle with initials)
- Agent name + ID
- Tier badge + trust score
- Quick stats (Balance, Active assignments)

**Quick Access Menu:**
- Performance
- Leaderboard
- Withdrawals
- Certificate
- Notifications (with badge count)
- Documents

**Settings Section:**
- Settings
- Help & Support

**Footer:**
- Sign Out button
- App version

**Animations:**
- Slide from left: `x: -300 → 0`
- Backdrop fade: `opacity: 0 → 1`
- Spring transition (no bounce)

---

## 📐 Responsive Design Patterns

### Container Padding
```tsx
// Desktop: 24px (1.5rem), Mobile: 16px (1rem)
<div className="px-4 md:px-6">

// Bottom padding accounts for bottom nav
<div className="pb-4 md:pb-12">
```

### Vertical Spacing
```tsx
// Stack spacing
<div className="space-y-4 md:space-y-6">

// Grid gaps
<div className="gap-3 md:gap-4">
```

### Grid Columns
```tsx
// KPI Cards (2 cols mobile, 4 desktop)
<div className="grid grid-cols-2 lg:grid-cols-4">

// Content Cards (1 col mobile, 2 tablet, 3 desktop)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

### Typography
```tsx
// Page titles
<h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">

// Section titles  
<h2 className="text-base md:text-lg">

// Body text
<p className="text-sm md:text-base">

// Small text
<span className="text-xs md:text-sm">

// Tiny text
<span className="text-[10px] md:text-xs">
```

### Component Sizing
```tsx
// Padding
p-3 md:p-4 lg:p-6
px-3 md:px-4 lg:px-5

// Rounded corners
rounded-lg md:rounded-xl lg:rounded-2xl

// Icons
w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6

// Avatar/Icon containers
w-10 h-10 md:w-12 md:h-12
```

### Interactive States
```tsx
// Mobile uses :active, Desktop uses :hover
<button className="active:bg-accent md:hover:bg-accent">

// Shadow effects
<div className="active:shadow-lg md:hover:shadow-lg">

// Transforms
<div className="group-active:translate-x-1 md:group-hover:translate-x-1">
```

### Touch Targets
```tsx
// Minimum 44px height for touch
<button className="min-h-[44px] py-2.5">

// Full width on mobile
<button className="w-full md:w-auto">
```

---

## 📄 Updated Pages

All 11 Agent Portal pages are fully mobile-optimized:

### ✅ Core Pages
1. **AgentPortal.tsx** - Dashboard with KPIs, charts, quick actions
2. **AgentQueue.tsx** - Transaction queue with filters & search
3. **AgentActive.tsx** - Active assignments with timers
4. **AgentHistory.tsx** - Transaction history with status filters

### ✅ Finance Pages
5. **AgentEarnings.tsx** - Balance, earnings chart, breakdown
6. **AgentWithdrawals.tsx** - Withdrawal history and new request

### ✅ Performance Pages
7. **AgentPerformance.tsx** - Analytics with charts & metrics
8. **AgentLeaderboard.tsx** - Rankings with podium display

### ✅ Profile Pages
9. **AgentCertificate.tsx** - Digital certificate display
10. **AgentNotifications.tsx** - Notifications center
11. **AgentProfile.tsx** - Account settings & preferences

---

## 🎯 Mobile-Specific Optimizations

### Page Headers
Desktop headers are hidden on mobile (shown in MobileHeader instead):

```tsx
// Hide on mobile, show on desktop
<div className="hidden md:flex flex-col md:flex-row justify-between">
  <div>
    <h1>Page Title</h1>
    <p>Description</p>
  </div>
  <div className="flex gap-3">
    {/* action buttons */}
  </div>
</div>
```

### Mobile Quick Actions
Add compact action buttons below mobile header:

```tsx
<div className="md:hidden flex gap-2">
  <Link to="/path" className="flex-1 px-4 py-2.5 ...">
    Action
  </Link>
</div>
```

### Tables
All tables wrapped for horizontal scrolling:

```tsx
<div className="overflow-x-auto">
  <table className="w-full">
    {/* table content */}
  </table>
</div>
```

### Charts
Responsive chart heights:

```tsx
<div className="h-[200px] md:h-[320px]">
  <ResponsiveContainer width="100%" height="100%">
    {/* chart */}
  </ResponsiveContainer>
</div>
```

### Period Selectors
Abbreviated labels on mobile:

```tsx
{['week', 'month', 'year'].map(period => (
  <button className="px-3 md:px-4 py-1.5 md:py-2">
    {/* Mobile: W/M/Y, Desktop: Week/Month/Year */}
    <span className="hidden md:inline">{period}</span>
    <span className="md:hidden">{period[0].toUpperCase()}</span>
  </button>
))}
```

### Modal Dialogs
Responsive modal sizing:

```tsx
<motion.div className="w-full max-w-sm md:max-w-lg lg:max-w-2xl max-h-[90vh] overflow-y-auto">
  {/* modal content */}
</motion.div>
```

---

## 🎨 Theme Support

Both light and dark modes fully supported on mobile:

### Theme Toggle
Located in MobileHeader:
```tsx
<button onClick={toggleTheme}>
  {isDarkMode ? <Sun /> : <Moon />}
</button>
```

### Dark Mode Classes
```tsx
// Background
bg-card dark:bg-card

// Text
text-foreground dark:text-foreground

// Borders
border-border dark:border-border

// Component variants
bg-blue-50 dark:bg-blue-950/30
text-blue-600 dark:text-blue-400
```

---

## 📊 Mobile Performance

### Optimizations Applied
✅ **Touch-optimized interactions** - 44px minimum touch targets  
✅ **Smooth animations** - Spring-based transitions with motion/react  
✅ **Lazy loading** - AnimatePresence for conditional renders  
✅ **Efficient layouts** - CSS Grid & Flexbox  
✅ **Backdrop blur** - Modern glass-morphism effects  
✅ **Reduced motion** - Respects prefers-reduced-motion  

### Bundle Size Considerations
- Motion/react: Tree-shakeable animations
- Lucide icons: Individual icon imports
- Recharts: Code-split chart components

---

## 🚀 Usage Example

### Basic Page Template

```tsx
import React from 'react';
import { AgentMobileLayout } from '../layouts/AgentMobileLayout';
import { motion } from 'motion/react';

export function YourPage() {
  return (
    <AgentMobileLayout title="Your Page">
      <div className="max-w-[1600px] mx-auto space-y-4 md:space-y-6 pb-4 md:pb-12 px-4 md:px-6">
        
        {/* Desktop Header - Hidden on mobile */}
        <div className="hidden md:flex justify-between">
          <div>
            <h1 className="text-3xl font-heading font-medium">
              Your Page
            </h1>
            <p className="text-foreground-muted">
              Description
            </p>
          </div>
          <div className="flex gap-3">
            {/* Desktop actions */}
          </div>
        </div>

        {/* Mobile Quick Actions */}
        <div className="md:hidden flex gap-2">
          <button className="flex-1 px-4 py-2.5 ...">
            Action
          </button>
        </div>

        {/* KPI Cards - 2 cols mobile, 4 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10">
                  <kpi.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
              </div>
              <div className="text-foreground-subtle text-xs md:text-sm mb-1">
                {kpi.label}
              </div>
              <div className="text-xl md:text-2xl font-heading font-semibold">
                {kpi.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Cards - 1 col mobile, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {/* cards */}
        </div>

        {/* Table with horizontal scroll */}
        <div className="bg-card border border-border rounded-lg md:rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* table content */}
            </table>
          </div>
        </div>

      </div>
    </AgentMobileLayout>
  );
}
```

---

## 📱 Testing

### Breakpoints
```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets / Desktop switch */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile Testing Checklist
- [ ] Bottom nav visible and functional
- [ ] Hamburger menu slides in smoothly
- [ ] All touch targets ≥ 44px
- [ ] Text readable without zooming
- [ ] Tables scroll horizontally
- [ ] Charts render correctly
- [ ] Modals fit screen with scrolling
- [ ] Theme toggle works
- [ ] Notifications badge visible
- [ ] All pages accessible via nav

### Device Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13/14 (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] Android (360px - 414px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)

---

## 🎯 Key Mobile Improvements

### Before (Desktop-Only)
❌ Single layout for all screens  
❌ Hover-only interactions  
❌ Small touch targets  
❌ No mobile navigation  
❌ Tables overflow without scroll  
❌ Text too small on mobile  
❌ Excessive whitespace on mobile  

### After (Mobile-First)
✅ Adaptive layouts (mobile + desktop)  
✅ Touch + hover interactions  
✅ 44px minimum touch targets  
✅ Bottom nav + hamburger menu  
✅ Horizontal scroll tables  
✅ Responsive typography  
✅ Optimized mobile spacing  
✅ Native app-like experience  

---

## 🔧 Customization

### Changing Bottom Nav Items
Edit `/src/app/components/agent/MobileBottomNav.tsx`:

```tsx
const navItems = [
  { path: '/agent', icon: LayoutGrid, label: 'Home' },
  // Add/remove/modify items
];
```

### Changing Hamburger Menu Items
Edit `/src/app/components/agent/MobileHeader.tsx`:

```tsx
const menuItems = [
  { icon: TrendingUp, label: 'Performance', path: '/agent/performance' },
  // Add/remove/modify items
];
```

### Adjusting Breakpoints
Modify Tailwind classes:
- `md:` → `lg:` for larger mobile breakpoint
- `sm:` → `md:` for earlier tablet breakpoint

---

## 📚 Resources

- **Motion/React Docs:** https://motion.dev
- **Lucide Icons:** https://lucide.dev
- **Tailwind CSS:** https://tailwindcss.com
- **React Router:** https://reactrouter.com

---

## ✅ Completion Status

**Total Pages:** 11  
**Mobile-Optimized:** 11 (100%)  
**Mobile Components:** 3 (Layout, Header, BottomNav)  
**Theme Support:** Full (Light + Dark)  
**Touch Optimization:** Complete  
**Responsive Patterns:** Implemented  

---

**Mobile App Ready** ✨

The OMAYA Agent Portal is now a complete, production-ready mobile application with native app-like experience, full feature parity across all screen sizes, and optimized touch interactions.
