# Memory Format Rules

## Code Generation Rules (enforce on every output)

### TypeScript
- Every file is .ts or .tsx. Zero exceptions.
- tsconfig strict: true is always assumed.
- No `any` type. Use `unknown` and narrow it.
- All props must have explicit TypeScript interfaces or types.
- Function return types must be explicit on all exported functions.

### React / Next.js
- Server Components by default. Only add 'use client' when the component:
  (a) uses React state (useState, useReducer)
  (b) uses React hooks that require the browser (useEffect, useRef, useCallback with events)
  (c) attaches DOM event listeners directly
- Never make a component 'use client' just to avoid an error — fix the architecture instead.
- All data fetching happens in Server Components using the Supabase server client.
- Client Components receive data as props from their Server Component parent.
- All mutations use Server Actions (app/admin/actions/ or app/account/actions/).
  No API routes for CRUD operations.
- Images: always use next/image with explicit width and height. Never <img>.
- Fonts: always next/font/google. Never @import in CSS.
- Links: always next/link. Never <a href> for internal navigation.

### Supabase
- Browser client (lib/supabase/client.ts): only in 'use client' components.
- Server client (lib/supabase/server.ts): only in Server Components and Server Actions.
- Always check user authentication before any data operation.
- Never expose the SERVICE_ROLE_KEY to the browser.
- RLS is always enabled. Never bypass RLS in application code.

### Tailwind CSS v4
- All design tokens live in @theme block in globals.css.
- Use token-based classes: bg-[--color-base], text-[--color-text-primary].
- No arbitrary hex values in className. All colors go through CSS variables.
- No tailwind.config.js theme customization.

### Components
- No external component libraries. No Shadcn, Radix, Chakra, MUI, Headless UI.
  Build all primitives from scratch in components/ui/.
- All primitives accept a className prop for extension via cn() utility.
- No inline styles attribute. Tailwind only.

### Code Quality
- No pseudocode. Every output must be complete and immediately copy-pasteable.
- No placeholder comments like "// add logic here" — either implement it or leave a typed shell.
- No console.log in production code. Use proper error boundaries.
- Error handling: always try/catch with typed errors in Server Actions.
- No TODO comments in implementation files — only in shell/placeholder files.

## Session Behavior Rules

### At the start of every session:
1. Read .agent/context/activeContext.md to know current block and state.
2. Read .agent/rules/project-context.md to recall architecture.
3. DO NOT start writing code until you confirm the current block and next action.

### During a session:
- Work on ONE block at a time. Never mix code from different blocks.
- After completing a task, update .agent/context/activeContext.md with new state.
- If you detect an architectural decision that should be remembered, add it to
  .agent/context/systemPatterns.md.

### At the end of every session:
- Update .agent/context/activeContext.md: current block, what was done, next action.
- Offer to update the corresponding Notion page via MCP.

## What NOT to Do (hard blockers)
- NEVER use Pages Router
- NEVER use @supabase/auth-helpers (deprecated)
- NEVER install Shadcn, Radix, or any external component library
- NEVER write .js or .jsx files
- NEVER use tailwind.config.js for theme tokens
- NEVER add 'use client' to avoid a TypeScript or data-fetching error
- NEVER expose Supabase SERVICE_ROLE_KEY in browser code
- NEVER bypass Supabase RLS
- NEVER write pseudocode or partial implementations in final output
