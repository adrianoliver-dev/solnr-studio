# System Patterns — SOLNR Studio

This file records architectural decisions that have been made and MUST NOT be
revisited or changed without explicit instruction. When you start a session,
read this file to avoid replanning things that are already decided.

## P-01: Server Components as Default
**Decision:** All components are Server Components unless they require browser APIs.
**Reason:** Better performance, no client bundle bloat, aligns with Next.js 15 best practices.
**Rule:** Add 'use client' ONLY when: (a) useState/useReducer, (b) useEffect/useRef,
(c) direct DOM event listeners. If unsure, keep it server-side and pass data as props.

## P-02: Supabase Client Separation
**Decision:** Two separate Supabase clients, never mixed.
- lib/supabase/client.ts → browser client, only in 'use client' components
- lib/supabase/server.ts → server client, only in Server Components and Server Actions
**Reason:** @supabase/ssr requires this separation for correct cookie handling in Next.js 15.
**Rule:** Never import the browser client in a Server Component. Never import the server
client in a 'use client' component.

## P-03: All Mutations via Server Actions
**Decision:** No API routes for CRUD. All form submissions and data mutations use
Next.js Server Actions defined in dedicated action files per domain.
**Reason:** Type-safe end-to-end, no extra round-trip, works with progressive enhancement.
**Rule:** action files live at: app/admin/actions/products.ts, app/account/actions/orders.ts, etc.

## P-04: No External Component Libraries
**Decision:** All UI primitives built from scratch in components/ui/.
**Reason:** Shadcn/Radix components produce generic output. SOLNR requires a custom
design system that reflects quiet luxury — that cannot be achieved by restyling
pre-built components.
**Rule:** Never install Shadcn, Radix, Headless UI, MUI, Chakra, or Flowbite.
If you need a complex interaction (e.g., dialog, dropdown), build it from scratch
using native HTML elements + Framer Motion.

## P-05: Tailwind v4 Token Architecture
**Decision:** All design tokens (colors, fonts, spacing) live as CSS custom properties
inside the @theme block in app/globals.css.
**Reason:** Tailwind v4 no longer uses tailwind.config.js for theme — the @theme
directive is the canonical approach.
**Rule:** Never add a tailwind.config.js theme extension. All new tokens go in globals.css.
Reference them as: bg-[--color-base], text-[--color-accent], etc.

## P-06: Typography Hierarchy
**Decision:** Three font roles, never mixed arbitrarily.
- Playfair Display → display only: hero headlines, section titles, editorial pull quotes
- Inter → everything else: body copy, labels, nav, buttons, form fields
- JetBrains Mono → meta labels only: SKU, size tags, category pills, timestamps
**Reason:** This three-tier system is what creates the quiet luxury typographic feel.
Misusing display font on body text or mono on headings destroys the brand aesthetic.
**Rule:** Before using Playfair Display anywhere, ask: is this a hero/title/editorial moment?
If no, use Inter. If it's a tag/meta/pill, use JetBrains Mono.

## P-07: Motion Philosophy
**Decision:** All animations use easeOutExpo cubic-bezier. No bounce, no spring physics.
**Reason:** Bounce and spring = casual/playful. easeOutExpo = precise, confident, luxury.
**Rule:** Standard curve: cubic-bezier(0.16, 1, 0.3, 1). Duration range: 300ms–700ms.
Framer Motion usage:
- Page transitions: opacity 0→1 + y: 20→0, duration 0.5
- Card hovers: slight scale (1→1.02) + border color shift, duration 0.3
- Drawer open: x slide from right, duration 0.45
- Never animate more than 2 properties simultaneously on user interaction.

## P-08: Image Strategy
**Decision:** All product images via Supabase Storage. All editorial/hero images
use Unsplash URLs for development (replace with real assets before case study).
**Reason:** Supabase Storage gives a real CDN URL that works in production, making
the portfolio demo realistic and not visibly fake.
**Rule:** Always use next/image. Always provide width, height, and alt.
Never use <img> tags. For hero images: fill prop with object-cover.

## P-09: Admin Authentication Gate
**Decision:** Admin routes (/admin/*) are protected by a layout-level auth check
that reads the is_admin boolean from the customers table.
**Reason:** Simple, readable, and demonstrates real RBAC thinking to portfolio viewers.
**Rule:** app/admin/layout.tsx always calls getCurrentUser() + isAdmin() from lib/auth/index.ts.
Redirect to /account if not admin. Never rely on client-side route hiding alone.

## P-10: ISR Strategy
**Decision:** Storefront pages use ISR with revalidation tags, not time-based intervals.
**Reason:** Time-based ISR (revalidate: 60) is outdated. Tag-based revalidation
(revalidatePath/revalidateTag) from Server Actions is the correct Next.js 15 approach.
**Rule:** When a product is updated in /admin, the Server Action calls
revalidateTag('products'). Catalog and PDP pages are tagged with 'products'.
