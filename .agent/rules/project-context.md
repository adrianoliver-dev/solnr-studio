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
- Animation: Framer Motion. Curves: easeOutExpo. No bounce. Subtle only.
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
  --color-base: #060708              ← deepest background
  --color-surface: #0F1014           ← cards, panels
  --color-elevated: #161820          ← elevated surfaces
  --color-border: #1E2028            ← dividers and borders
  --color-text-primary: #F2EDE6      ← main text (warm off-white)
  --color-text-secondary: #A09A94    ← secondary text
  --color-text-muted: #6B7280        ← disabled, placeholder
  --color-accent: #C9963A            Gold CTAs
  --color-accent-hover: #E2AC46      ← accent hover state

Typography:
  --font-display: 'Playfair Display' ← serif, heroes and section titles
  --font-sans: 'Inter'               ← body text and labels
  --font-mono: 'JetBrains Mono'      ← meta labels (size, category, SKU)

Fonts are loaded via next/font/google in app/layout.tsx.
Never use @import in CSS to load fonts.

## Data Model (Supabase tables)
products            → id, name, slug, description, price_cents, currency, status, created_at, updated_at
product_images      → id, product_id, url, sort_order
categories          → id, name, slug, description
product_categories  → product_id, category_id (junction table)
orders              → id, customer_id, status, total_cents, created_at
order_items         → id, order_id, product_id, quantity, unit_price_cents
customers           → id, auth_user_id (FK to auth.users), email, name, created_at
cms_blocks          → id, key, title, body, meta (JSONB)

## RLS Policy Summary
- products, categories, product_images, product_categories: public read, admin-only write
- orders, order_items: user reads own rows, admin reads all
- customers: user reads/writes own row, admin reads all
- cms_blocks: public read, admin-only write
- Admin detection: is_admin boolean on customers table

## Rendering Strategy
- (storefront)/ pages: Static with ISR (revalidate on product change)
- catalog, products/[slug]: ISR with on-demand revalidation
- account/, admin/: dynamic (no cache, server components with auth check)

## MCP Tools Available in This Project
Four MCPs are active and connected. Use them proactively — they give you
real-time access to infrastructure that no file-based context can replace.

### GitHub MCP (@modelcontextprotocol/server-github)
Repo: https://github.com/adrianoliver-dev/solnr-studio
Use for:
- Reading the latest commit state before starting a task
- Verifying which files were last modified
- Pushing completed work after block completion
- Searching code patterns across the repo

Key tools: list_commits, get_file_contents, push_files, search_code

### Supabase MCP (supabase-mcp-remote)
Use for:
- Applying database migrations (never write raw SQL in files — apply via MCP)
- Generating TypeScript types from the live schema → write to types/db.ts
- Executing SQL to verify data after seeding
- Reading table structure before writing queries in Server Components
- Checking RLS advisors to verify policies are correctly configured

Key tools: apply_migration, generate_typescript_types, execute_sql,
list_tables, get_advisors, list_migrations

### Vercel MCP (@vercel/mcp-server)
Use for:
- Checking deployment status after a push
- Reading runtime logs when debugging production errors
- Verifying environment variables are set (never expose values, only verify presence)

Key tools: quick_status, project_health_check, get_runtime_logs

### Notion MCP (@notionhq/mcp-server)
Used sparingly — Perplexity handles Notion updates externally.
Only use when explicitly asked to update a block status.
Notion page IDs:
- SOLNR Project root: 326a9019b85181a796e4d8e90e849344
- Feature Board: https://www.notion.so/a0bcb95be2cd47e99d0cc63f094f2fff
- Roadmap: https://www.notion.so/2552df073f0c4a52a6ac45056c52fee9
- Dev Log: 326a9019b851811e9867ed4d648168fc

### MCP Usage Mindset
- MCPs give you ground truth. A file you read locally might be stale.
  The Supabase MCP tells you what the schema actually is right now.
  The GitHub MCP tells you what code actually exists in the repo right now.
- Before writing any Supabase query: verify the table schema via list_tables.
- Before starting any block: read latest commits via list_commits.
- After completing a block: push via push_files if the developer confirms.
- Never guess schema or column names. Always verify via MCP first.
