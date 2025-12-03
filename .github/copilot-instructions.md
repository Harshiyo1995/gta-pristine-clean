# GTA Pristine Clean - Copilot Instructions

## Project Overview
Landing page for a cleaning service company (GTA Pristine Clean) built with React + TypeScript + Vite. Single-page application with static content showcasing services, pricing, testimonials, and contact forms. Uses Tailwind CSS for styling and lucide-react for icons.

## Architecture & Key Patterns

### Component Structure (`/components`)
- **Page sections as components**: Each major page section is its own functional component (Hero, Services, Pricing, Testimonials, etc.)
- **Data-driven rendering**: Components consume data from `constants.tsx` and render dynamically via `.map()`
- **Stateless by default**: Most components are presentational; only `Navbar.tsx` and `Contact.tsx` use local state (menu toggle, form inputs)
- **No prop drilling**: Components self-import constants; global context not needed at this scale

### Data Architecture
- `constants.tsx`: Single source of truth for all dynamic content (services array, pricing plans, testimonials, service areas)
- `types.ts`: TypeScript interfaces (ServiceItem, Testimonial, PricingPlan) imported into components and constants
- `metadata.json`: Contains app metadata (currently not referenced in code)

### Styling & Design System
- **Tailwind CSS**: All styling via utility classes; no CSS files
- **Color scheme** (defined in `constants.tsx`):
  - Primary: `#0F2C59` (dark blue, used in navbar, buttons, headers)
  - Secondary: `#84A7D8` (light blue, accents)
  - Soft grey: `#f8f8f8` (backgrounds)
  - Accent: `#F4A261` (warm contrast)
- **Responsive grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` pattern for responsive layouts
- **Rounded cards**: `rounded-2xl p-8 shadow-sm hover:shadow-xl` applied to service/pricing cards consistently

### Component Patterns
- **Icon usage**: Icons from lucide-react passed as React components (e.g., `<service.icon className="..." />`)
- **Smooth scroll anchors**: Section IDs match navbar links (`#services`, `#pricing`, etc.) with `scroll-mt-24` offset for fixed navbar
- **Form handling**: Contact form uses React state with `onChange` handlers; submission preventDefault + alert + state reset
- **Mobile-first responsive**: Hidden md: classes, then show desktop; mobile menu toggle in Navbar
- **Hover animations**: `group-hover:` classes for coordinated icon/background transitions

## Build & Development

### Scripts
- `npm run dev`: Start Vite dev server on `localhost:3005`
- `npm run build`: Vite build for production (outputs to `dist/`)
- `npm run preview`: Preview production build locally

### Key Configuration
- **Vite config**: Path alias `@/` resolves to project root for cleaner imports
- **API Integration**: `vite.config.ts` injects `GEMINI_API_KEY` from `.env.local` as `process.env.GEMINI_API_KEY` (currently unused in components)
- **TypeScript**: Target ES2022, React JSX mode, `noEmit: true` (type-check only, Vite handles compilation)

## Critical Developer Workflows

### Adding New Content
1. **New service**: Add entry to `SERVICES` array in `constants.tsx` with id, title, description, and lucide icon
2. **New section**: Create component in `/components`, import constants/types, render with `.map()`, add to `App.tsx` in order
3. **Update pricing/testimonials**: Edit arrays in `constants.tsx`; components auto-update

### Modifying Contact Form
- Form state lives in `Contact.tsx` local state
- Update `formState` object to add fields
- Service options in select match service IDs in constants
- Currently submissions alert only; integrate backend API here if needed

### Styling Updates
- Use Tailwind utility classes throughout; no CSS modules
- Update color hex values in `constants.tsx` COLORS object to cascade to styled components
- Test responsive breakpoints: `md:` (768px), `lg:` (1024px)

## Dependencies & Integration Points
- **React 19.2.0**: Latest; uses React JSX transform (no React import required)
- **lucide-react 0.555.0**: Icon library; icons are React components
- **Tailwind CSS**: No direct import; assumed to be available via build process
- **Node 22+ recommended**: Per devDeps `@types/node: ^22.14.0`

## Common Pitfalls to Avoid
1. **Hardcoded content in components**: Pull from `constants.tsx` and use types from `types.ts`
2. **Inline styles**: Use Tailwind utilities; never add `style={{...}}`
3. **Missing `scroll-mt-24`**: All section IDs need this to account for fixed navbar height
4. **Icon type mismatch**: Always import/use icons as React components; lucide-react exports types as `LucideIcon`
5. **Form state reset**: Contact form resets on submit for UX; don't store form data outside component

## File Organization Notes
- No separate config files for constants beyond `constants.tsx`
- No API layer/services directory (API calls not yet implemented)
- Components are flat (no nested subdirectories); keep it simple at this scale
- TypeScript enabled but compiler only type-checks; no type-aware tooling configured
