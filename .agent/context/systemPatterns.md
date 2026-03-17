# System Patterns — SOLNR Studio

This file records architectural decisions that MUST NOT be revisited
or changed without explicit developer instruction.

## P-01: Server Components as Default
**Decision:** All components are Server Components unless they require browser APIs.
**Rule:** Add 'use client' ONLY when: (a) useState/useReducer, (b) useEffect/useRef,
(c) direct DOM event listeners. If unsure, keep it server-side and pass data as props.

## P-02: Supabase Client Separation
**Decision:** Two separate Supabase clients, never mixed.
- lib/supabase/client.ts → browser client, only in 'use client' components
- lib/supabase/server.ts → server client, only in Server Components and Server Actions
**Rule:** Never import the browser client in a Server Component. Never import the server
client in a 'use client' component.

## P-03: All Mutations via Server Actions
**Decision:** No API routes for CRUD. All data mutations use Next.js Server Actions.
**Rule:** Action files live at: app/admin/actions/products.ts, etc.

## P-04: No External Component Libraries
**Decision:** All UI primitives built from scratch in components/ui/.
**Rule:** Never install Shadcn, Radix, Headless UI, MUI, Chakra, or Flowbite.
Build complex interactions from scratch using native HTML + motion/react.

## P-05: Tailwind v4 Token Architecture
**Decision:** All design tokens live as CSS custom properties inside @theme in globals.css.
**Rule:** Never add tailwind.config.js theme extensions. All tokens go in globals.css.
Reference as: bg-[--color-base], text-[--color-accent], etc.

## P-06: Typography Hierarchy
**Decision:** Three font roles, never mixed arbitrarily.
- Playfair Display → heroes and section titles only
- Inter → everything else: body, labels, nav, buttons
- JetBrains Mono → meta labels only: SKU, size, category, timestamps
**Rule:** Before using Playfair Display, ask: is this a hero/title moment? If no, use Inter.

## P-07: Motion Philosophy
**Decision:** All animations use easeOutExpo. No bounce, no spring physics.
**Rule:** Curve: cubic-bezier(0.16, 1, 0.3, 1). Duration range: 300ms–700ms.
Never animate more than 2 properties simultaneously on user interaction.

## P-08: Image Strategy
**Decision:** Product images via Supabase Storage. Editorial/hero images use
Unsplash URLs for development (replace with real assets before case study).
**Rule:** Always use next/image. Always provide width, height, and alt.
Never use <img> tags. For hero images: fill prop with object-cover.

## P-09: Admin Authentication Gate
**Decision:** Admin routes (/admin/*) protected by layout-level auth check
reading is_admin boolean from customers table.
**Rule:** app/admin/layout.tsx always calls getCurrentUser() + isAdmin().
Redirect to /account if not admin. Never rely on client-side route hiding.

## P-10: ISR Strategy
**Decision:** Storefront pages use ISR with revalidation tags, not time-based intervals.
**Rule:** When a product is updated in /admin, the Server Action calls
revalidateTag('products'). Catalog and PDP pages tagged with 'products'.

## P-12: Animation Library — motion/react (not framer-motion)
**Decision:** Import all animations from "motion/react", not "framer-motion".
**Reason:** framer-motion was renamed to "motion" for React 19 compatibility.
**Rule:** Always import: `import { motion, AnimatePresence } from "motion/react"`
Never import from "framer-motion". If you see framer-motion imports, replace them.

## P-13: next/image requires remotePatterns for external domains
**Rule:** Any external image hostname must be whitelisted in next.config.ts
under images.remotePatterns before next/image will load it.
Never use <img> tags — always next/image, always add the domain here.
