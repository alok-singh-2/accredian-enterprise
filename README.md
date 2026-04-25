# Accredian Enterprise — Next.js Clone

A pixel-close partial clone of [enterprise.accredian.com](https://enterprise.accredian.com/) built with **Next.js 14 App Router**, **Tailwind CSS**, and a mock API route.

🔗 **Live Demo:** https://accredian-enterprise-navy.vercel.app/ 


---

## 📸 Sections Covered

| Section | Status |
|---|---|
| Navigation (sticky, responsive) | ✅ |
| Hero with animated stats dashboard | ✅ |
| Platform Features (8 cards) | ✅ |
| Stats with count-up animation | ✅ |
| How It Works (5-step process) | ✅ |
| Programs with category filter | ✅ |
| Testimonials (interactive) | ✅ |
| Academic & Corporate Partners | ✅ |
| Contact / Lead Gen Form | ✅ |
| Footer with links | ✅ |

---

 Setup Instructions

 Prerequisites
- Node.js 18+ installed
- npm or yarn

 Clone the Repository

```bash


### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

### 4. Build for Production

```bash
npm run build
npm start
```

---

Deploy on Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js and configures everything.

### Option B — GitHub Integration

1. Push code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — no configuration needed

---

Approach Taken

### Architecture

```
accredian-enterprise/
├── app/
│   ├── layout.js          # Root layout — fonts, metadata
│   ├── page.js            # Assembles all section components
│   ├── globals.css        # Tailwind + custom CSS variables & animations
│   └── api/
│       └── contact/
│           └── route.js   # Mock POST endpoint for lead form
├── components/
│   ├── Navbar.js          # Sticky nav with scroll detection, mobile menu
│   ├── Hero.js            # Animated hero with live stats card
│   ├── Features.js        # 8-card features grid
│   ├── Stats.js           # Count-up animated statistics
│   ├── HowItWorks.js      # 5-step process cards
│   ├── Programs.js        # Filterable programs grid
│   ├── Testimonials.js    # Interactive testimonial selector
│   ├── Partners.js        # Academic + corporate partner grid
│   ├── ContactForm.js     # Full lead gen form with API call
│   └── Footer.js          # Multi-column footer
├── tailwind.config.js
├── next.config.js
└── package.json
```

### Key Design Decisions

- **App Router** (Next.js 14) used throughout for modern routing and server components
- **`'use client'`** applied only to interactive components (Navbar, Hero, Programs, Testimonials, ContactForm, Stats) — other components are React Server Components by default
- **Tailwind CSS** for utility-first styling, extended with custom color tokens, keyframe animations, and component classes
- **Custom CSS variables** for brand colors (`--brand-primary`, `--accent`, etc.) ensuring easy theming
- **Reusable component pattern** — each section is a self-contained component with its own data, making it easy to maintain and extend
- **API Route** at `/api/contact` handles form POSTs. In production, replace the mock with a database write + email notification (e.g., Supabase + Resend)

### Responsiveness Strategy
- Mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Navbar collapses to hamburger on mobile
- Grids reflow from 1 → 2 → 4 columns depending on viewport
- Hero hides the analytics card on mobile to preserve readability
- Contact form fields stack on mobile, go 2-column on sm+

---

 AI Usage Explanation



 Where AI Helped

| Area | AI Contribution |
|---|---|
| **Component scaffolding** | Generated boilerplate for all 10 components with correct Next.js App Router patterns |
| **Tailwind class selection** | Suggested responsive class combinations for complex layouts (hero grid, stats cards, form) |
| **Animation CSS** | Wrote `@keyframes` definitions for `fadeUp`, `float`, `gradientShift`, `shimmer` |
| **Content writing** | Filled in realistic copy for programs, testimonials, and feature descriptions based on the real Accredian Enterprise site |
| **API route structure** | Generated the Next.js Route Handler (`app/api/contact/route.js`) with proper request validation |
| **Count-up hook** | Generated the `useCountUp` custom hook using `requestAnimationFrame` for smooth stat animations |
| **Intersection Observer** | Suggested the `useEffect` + `IntersectionObserver` pattern to trigger animations on scroll |

### What Was Manually Reviewed & Improved

- **Color palette** — manually tuned brand colors and gradient directions for visual cohesion
- **Section ordering** — reordered sections (Stats moved between Features and HowItWorks) for better narrative flow
- **Programs filter logic** — reviewed and tested the category filter state logic
- **Form UX** — added the success state with "What happens next" steps for better conversion UX
- **Mobile menu animation** — adjusted the `max-h` transition approach for smoother open/close
- **Footer content** — manually structured the link categories to match Accredian's actual site structure

---

 Improvements With More Time

### Technical
- [ ] Add **Framer Motion** for scroll-triggered animations (currently CSS-only)
- [ ] Integrate **real database** (Supabase or PlanetScale) for lead form submissions
- [ ] Add **email notifications** via Resend or SendGrid when a form is submitted
- [ ] Implement **CRM integration** (HubSpot API) to push leads automatically
- [ ] Add **image optimisation** using `next/image` with real partner logos
- [ ] Add **React Query / SWR** for client-side data fetching of programs from an API
- [ ] Write **unit tests** with Jest + React Testing Library for key components

### Design & UX
- [ ] Add **scroll progress indicator** at the top of the page
- [ ] Implement **program comparison table** with side-by-side feature comparison
- [ ] Add a **live chat widget** (Intercom or Crisp) for immediate sales engagement
- [ ] Build a **ROI calculator** as an interactive widget in the contact section
- [ ] Add **video testimonials** with modal playback

### SEO & Performance
- [ ] Add `sitemap.xml` and `robots.txt` via Next.js metadata API
- [ ] Implement **OpenGraph images** for social sharing
- [ ] Add **structured data** (JSON-LD) for organization and course schema
- [ ] Lazy load below-the-fold sections for better LCP score

---

## 📦 Tech Stack

| Tech | Purpose |
|---|---|
| Next.js 14 | Framework (App Router) |
| React 18 | UI library |
| Tailwind CSS 3 | Styling |
| Google Fonts | Typography (Playfair Display + DM Sans) |
| Vercel | Deployment |

---

## 📄 License

MIT — free to use, modify, and distribute.
