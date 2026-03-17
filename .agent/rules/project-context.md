# SOLNR Studio — Project Context

## What This Project Is
SOLNR Studio is a fictional quiet-luxury menswear DTC e-commerce brand
based in Austin, TX. This is a portfolio project built to demonstrate
full-stack capability to US/EU clients. It includes a public storefront
and an internal ops/admin dashboard — both in the same Next.js app.

## Developer
- Name: Adrian Oliver
- Location: Santa Cruz de la Sierra, Bolivia (GMT-4)
- Level: Junior full-stack (transitioning to international freelance)
- Stack owner: builds everything solo with AI assistance via Antigravity

## Stack (ABSOLUTE — NEVER DEVIATE)
- Framework: Next.js 15 App Router. NEVER Pages Router. NEVER.
- Language: TypeScript strict mode. tsconfig must have "strict": true.
  Zero .js or .jsx files anywhere in this project.
- Database / Auth / Storage: Supabase
  - Client package: @supabase/ssr (NOT @supabase/auth-helpers — deprecated)
  - Browser client: lib/supabase/client.ts
  - Server client: lib/supabase/server.ts
- Styling: Tailwind CSS v4
  - Use @theme directive in globals.css for all design tokens
  - Never use tailwind.config.js for theme customization
  - Never use arbitrary values like [#abc123] in className
  - All color tokens live as CSS variables under @theme
- Animation: motion/react (import from "motion/react", NOT "framer-motion")
  Curves: easeOutExpo cubic-bezier(0.16,1,0.3,1). No bounce. Subtle only.
- Validation: Zod for all form schemas
- Deploy: Vercel

## Route Architecture
app/
  (storefront)/     → Public store: homepage, catalog, PDP, about, stories, legal
  account/          → Authenticated customer area: orders, wishlist
  admin/            → Ops dashboard: products, orders, inventory, content
  api/              → Route handlers for webhooks only

## Component Architecture
components/
  ui/               → Primitives only: Button, Heading, Container, Badge, Input, Separator
  layout/           → Navbar, Footer (shared across storefront)
  storefront/       → Feature components: Hero, ProductCard, CartDrawer, etc.
  admin/            → Admin-specific: Sidebar, DataTable, ProductForm, StatCard, etc.

## Library Architecture
lib/
  supabase/         → client.ts (browser) and server.ts (server)
  auth/             → getCurrentUser(), isAdmin() helpers
  validations/      → Zod schemas (product.ts, order.ts, checkout.ts)
  analytics/        → trackEvent helpers (events.ts, types.ts)

## Design System Tokens
Colors (CSS variables in globals.css under @theme):
  --color-base: #060708
  --color-surface: #0F1014
  --color-elevated: #161820
  --color-border: #1E2028
  --color-text-primary: #F2EDE6
  --color-text-secondary: #A09A94
  --color-text-muted: #6B7280
  --color-accent: #C9963A
  --color-accent-hover: #E2AC46

Typography:
  --font-display: 'Playfair Display'  (heroes and section titles only)
  --font-sans: 'Inter'                (body, labels, nav, buttons)
  --font-mono: 'JetBrains Mono'       (meta labels: size, category, SKU)

Fonts loaded via next/font/google in app/layout.tsx.
Never use @import in CSS to load fonts.

## Data Model (Supabase tables)
products            → id, name, slug, description, price_cents, currency, status, created_at, updated_at
product_images      → id, product_id, url, sort_order
categories          → id, name, slug, description
product_categories  → product_id, category_id
orders              → id, customer_id, status, total_cents, created_at
order_items         → id, order_id, product_id, quantity, unit_price_cents
customers           → id, auth_user_id, email, name, is_admin, created_at
cms_blocks          → id, key, title, body, meta (JSONB)

## Notion Workspace
- SOLNR Project root: 326a9019b85181a796e4d8e90e849344
- Feature Board: https://www.notion.so/a0bcb95be2cd47e99d0cc63f094f2fff
- Roadmap: https://www.notion.so/2552df073f0c4a52a6ac45056c52fee9
- Dev Log: 326a9019b851811e9867ed4d648168fc

## GitHub
- Repo: https://github.com/adrianoliver-dev/solnr-studio
- Branch: main (direct commits for blocks, no PRs needed)

## Supabase
- Project: https://supabase.com/dashboard/project/oeucpytmdjrqlcwaygxh

## ⚠️ AGENT WRITE PROTECTION — READ THIS EVERY SESSION
These files are READ-ONLY. Never write, truncate, or overwrite them:
  - .agent/rules/project-context.md       ← THIS FILE
  - .agent/rules/memory-format.md
  - .agent/skills/design-system.md
  - .agent/skills/startblock.md
Writable files (append/update only):
  - .agent/context/activeContext.md
  - .agent/context/systemPatterns.md
Violation of this rule corrupts the entire project memory system.