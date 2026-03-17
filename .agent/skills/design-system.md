# Skill: design-system

## What This Skill Is
This is the visual judgment system for SOLNR Studio.
Read this file whenever you are building UI components, writing Tailwind classes,
implementing animations, or making layout decisions.
This is what separates SOLNR from a generic AI-generated ecommerce template.

## The Core Principle
Quiet luxury is not a color palette. It is restraint as a design decision.
Every element on screen should feel like it has earned its space.
If something can be removed and the page still communicates clearly, remove it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — WHAT MAKES AN ECOMMERCE LOOK GENERIC (AVOID ALL OF THESE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
These are the patterns that make AI-generated ecommerces look like templates.
Never produce any of these:

- Rounded cards everywhere (border-radius on every single element)
  → SOLNR uses sharp corners (rounded-none or max rounded-sm) for product surfaces.
  Rounding is reserved for pills/tags only.

- Generic CTA buttons with full-width rounded and drop shadow
  → SOLNR buttons: uppercase, letter-spacing wide, thin border, no shadow, no rounding.

- Grid product cards with centered text below the image
  → SOLNR product cards: text left-aligned, minimal (name + price only), price in muted color.
  No stars, no "Add to cart" button on the card itself.

- Gradient backgrounds or glass morphism effects
  → SOLNR uses flat surfaces only. No gradients. No backdrop-blur gimmicks.

- "NEW", "SALE", "HOT" badges with bright colors
  → SOLNR badges are mono labels: uppercase, small, border-only, using --color-border.

- Page headers with centered titles and subtitle + decorative divider
  → SOLNR section headers are left-aligned, editorial, often intentionally sparse.

- Navbar with logo center, hamburger right
  → SOLNR navbar: logo left (all-caps text, not an image), nav links center, icons right.

- Hero with full-viewport video background and blurred overlay text
  → SOLNR hero: editorial layout, large serif headline overlapping a partial image,
  or image on one side, copy on the other. Never text over blurred image.

- Footer with 5 columns of links and social icons in colored circles
  → SOLNR footer: minimal, 2–3 columns max, no colored circles, mono font for meta.

- Loading spinners (circular animated spinner)
  → SOLNR uses skeleton loaders with --color-elevated background, subtle pulse animation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — SPACING PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Quiet luxury is defined more by space than by decoration.

Base spacing unit: 4px (Tailwind default)
Section padding (vertical): py-24 to py-40 (96px–160px)
Container max-width: max-w-[1280px], horizontal padding px-6 md:px-12 lg:px-16
Grid gap: gap-6 to gap-8 for product grids. Never gap-4 or less — it looks cheap.
Component internal padding: generous. A product card: p-6 minimum.
Text blocks: max-w-[640px] for reading comfort. Never full-width paragraphs.

The rule: when in doubt, add more vertical space. 
Cramped layouts communicate discount/fast-fashion. Open layouts communicate premium.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — TYPOGRAPHY RULES (IMPLEMENTATION LEVEL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hero headline:
  font-family: Playfair Display
  font-size: text-6xl to text-8xl (clamp if needed)
  font-weight: font-normal (NOT bold — bold serif looks aggressive, not luxury)
  line-height: leading-none or leading-tight
  color: --color-text-primary
  letter-spacing: tracking-tight

Section titles:
  font-family: Playfair Display
  font-size: text-4xl to text-5xl
  font-weight: font-normal
  color: --color-text-primary

Body copy:
  font-family: Inter
  font-size: text-base (16px)
  font-weight: font-normal or font-light
  line-height: leading-relaxed (1.625)
  color: --color-text-secondary
  max-width: max-w-[600px]

Navigation links:
  font-family: Inter
  font-size: text-sm
  font-weight: font-normal
  letter-spacing: tracking-wide
  text-transform: uppercase
  color: --color-text-secondary
  hover: color --color-text-primary, transition-colors duration-200

Buttons — Primary:
  font-family: Inter
  font-size: text-xs
  font-weight: font-medium
  letter-spacing: tracking-widest
  text-transform: uppercase
  padding: px-8 py-3
  border: 1px solid --color-accent
  color: --color-accent
  background: transparent
  hover: bg-[--color-accent] text-[--color-base]
  transition: all 200ms easeOutExpo

Buttons — Secondary / Ghost:
  Same as primary but with --color-border instead of --color-accent.

Meta labels / tags (SKU, size, category):
  font-family: JetBrains Mono
  font-size: text-[10px] or text-xs
  letter-spacing: tracking-widest
  text-transform: uppercase
  color: --color-text-muted

Price display:
  font-family: Inter
  font-size: text-sm
  font-weight: font-normal
  color: --color-text-secondary (NOT primary — price should not scream)
  format: "$180" not "$180.00" not "USD 180"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — COLOR USAGE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
--color-base: page background. Nothing else.
--color-surface: cards, panels, sidebars, drawers.
--color-elevated: hover states on surfaces, skeleton loaders, code blocks.
--color-border: all dividers, card borders, input borders.
--color-text-primary: headings, important labels, active states.
--color-text-secondary: body copy, descriptions, prices, nav links.
--color-text-muted: placeholders, disabled, timestamps, meta.
--color-accent: ONE accent use per viewport. Primary CTA only.
  Do not use accent on more than one element per screen section.
  The brass/gold must feel rare to feel precious.
--color-accent-hover: only on hover state of accent elements.

Errors: use red-400 (Tailwind) — this is the one exception to no arbitrary colors.
Success: use emerald-400.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — COMPONENT BEHAVIOR STANDARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Product Card:
  - Image: aspect-[3/4] (portrait, not square). overflow-hidden. No rounding.
  - On hover: image scales to scale-[1.03] over 600ms easeOutExpo.
    A thin accent border (1px --color-accent) appears on the container.
  - Text area: pt-4 pb-0 px-0 (no padding sides — card edge aligns to grid)
  - Product name: text-sm font-normal text-[--color-text-primary] uppercase tracking-wide
  - Category: text-[10px] font-mono text-[--color-text-muted] uppercase tracking-widest
  - Price: text-sm text-[--color-text-secondary]
  - No "Add to Cart" button on the card. Click goes to PDP.

Navbar:
  - Background: bg-[--color-base]/90 backdrop-blur-sm (subtle blur, not heavy)
  - Border bottom: 1px solid --color-border (only when scrolled — add via scroll listener)
  - Height: h-16 (64px)
  - Logo: "SOLNR" in uppercase Inter tracking-[0.3em] text-sm
  - Transition between transparent (top) and bg-[--color-base]/90 (scrolled): 300ms

CartDrawer:
  - Slides from right: x: "100%" → x: 0, duration 0.45s easeOutExpo
  - Background: bg-[--color-surface], not bg-[--color-base]
  - Width: w-[420px] on desktop, w-full on mobile
  - Overlay: fixed inset-0 bg-black/40, click closes drawer

Inputs / Forms:
  - Border: 1px solid --color-border
  - Background: bg-[--color-surface]
  - Focus: border-[--color-text-secondary], no focus ring (outline-none)
  - No rounded corners (rounded-none)
  - Padding: px-4 py-3
  - Label: text-xs uppercase tracking-widest font-mono text-[--color-text-muted]
    placed ABOVE the input, not inside it

## SECTION 6 — CRAFT QA CHECKLIST (run on every component before marking done)

This checklist is not about features. It is about craft — the difference between
a component that looks built and a component that looks designed.

### Spacing & Layout
[ ] Is every padding and gap value intentional, not default?
    Minimum card padding: p-6. Minimum section vertical padding: py-24.
    If you used p-4 or gap-4 on anything visible, justify it or increase it.
[ ] Is the max-width of text content capped at ~640px for reading comfort?
[ ] Are the grid columns appropriate for the content?
    Product grid: 2 cols mobile, 3 cols tablet, 4 cols desktop — never 1 col on tablet.
[ ] Is there enough visual breathing room between sections?
    Consecutive sections should feel like turning a page, not scrolling a feed.

### Typography
[ ] Is every font assignment correct per P-06?
    Playfair Display → heroes and section titles only.
    Inter → everything else.
    JetBrains Mono → meta labels, tags, SKU, timestamps only.
[ ] Are hero headings font-normal (not font-bold)?
    Bold serif = aggressive. Normal weight serif = luxury.
[ ] Does the type scale create clear hierarchy?
    There should be an obvious visual difference between h1, h2, body, and meta.
[ ] Is letter-spacing applied correctly?
    Nav links and buttons: tracking-widest.
    Body copy: tracking-normal.
    Hero headlines: tracking-tight.

### Color
[ ] Is every color coming from a CSS variable, not a hardcoded value?
    Exception: Tailwind's red-400 for errors, emerald-400 for success.
[ ] Is --color-accent used at most once per viewport section?
    If you used it on 2+ elements in the same visible area, remove one.
[ ] Does the dark background create depth through the layer system?
    base → surface → elevated: each step should be subtly lighter.
    If everything is the same shade, the layout feels flat.

### Motion
[ ] Are all animation curves easeOutExpo (cubic-bezier(0.16, 1, 0.3, 1))?
[ ] Are all durations in the 300ms–700ms range?
[ ] Does any animation feel playful, bouncy, or aggressive?
    If yes, it is wrong for this brand. Remove spring physics, reduce duration.
[ ] Are micro-interactions (hover states) subtle?
    Scale: max 1.03. Never 1.1 or higher on product cards.
[ ] Is the motion purposeful — does it guide the eye or confirm an action?
    Motion for its own sake = amateur. Motion that communicates = craft.

### Borders & Surfaces
[ ] Are rounded corners used only where intentional?
    Product images: none. Buttons: none. Inputs: none.
    Tags/pills: rounded-full only. Modals/drawers: none.
[ ] Are borders using --color-border (not gray-700 or similar Tailwind defaults)?
[ ] Are box shadows absent from product surfaces?
    Shadows make things look like Bootstrap cards. SOLNR uses elevation via color, not shadow.

### Mobile Behavior
[ ] Does the component maintain the premium feel on a 390px screen?
    A layout that looks luxury on desktop but cramped on mobile is not done.
[ ] Is touch target size adequate? Minimum 44px height for interactive elements.
[ ] Does the type scale adapt properly?
    Hero: text-4xl on mobile (not text-8xl). Section titles: text-3xl on mobile.

## SECTION 7 — THE WORLD-CLASS STANDARD

This project is not a template. It is not a tutorial project. It is not a
"good for a junior dev" project. It is a portfolio piece that needs to make
a senior developer or creative director in Zurich, Oslo, San Francisco, or
Sydney stop scrolling and think: "who built this?"

### What world-class e-commerce looks like in 2026
Study these references mentally when building SOLNR:
- Dover Street Market digital presence: editorial hierarchy, extreme whitespace,
  no visual noise, photography-first layout.
- Mr Porter product experience: clean PDP with generous padding, subtle hover states,
  typography that earns your trust before you read a word.
- Aesop's website: prose-heavy, slow, confident. The design communicates that
  the brand does not need to shout.
- Bottega Veneta digital: near-brutalist restraint. Enormous type, minimal color,
  the product is the only decoration.

### The 3 questions to ask before shipping any page or component
1. Would a creative director at a luxury agency think this was built with care,
   or would they immediately see shortcuts and AI-generated defaults?
2. Does every design decision communicate that SOLNR is a premium brand,
   or does it just look "dark mode + some gold"?
3. If this screenshot appeared on Awwwards or Behance, would it get attention
   for the right reasons — craft, restraint, intentionality — or would it
   blend into the sea of Next.js portfolio clones?

### What "world-class" means technically for this project
- Zero generic patterns: no Bootstrap-style grids, no floating action buttons,
  no colored badges with emoji, no modal overlays with heavy blur.
- Every component is custom: if it could have come from Shadcn or a template,
  rebuild it with more intention.
- Performance is part of the craft: Core Web Vitals green on Vercel.
  A luxury experience does not have a 3-second LCP.
  Images optimized, fonts preloaded, no layout shift.
- Accessibility is part of the craft: keyboard navigable, proper aria labels,
  sufficient color contrast even on dark surfaces.
  A client who asks "is this accessible?" gets a yes with evidence.
- The admin dashboard is as polished as the storefront.
  Most portfolio projects have a beautiful storefront and a generic admin.
  SOLNR's admin should look like it was designed by the same person who
  designed the storefront — because it was.

### The developer behind this project
Adrian Oliver is a 20-year-old full-stack developer from Bolivia building
projects that compete at the international level. Every decision in this
codebase is intentional. When a US or European client reviews this portfolio,
they should feel they are looking at work from someone who has shipped
production systems for real businesses — because they are.
The code is clean, the architecture is considered, the design is premium.
This is not a junior developer's first project. This is a statement.
