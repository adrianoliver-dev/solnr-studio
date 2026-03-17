# Skill: /startblock

## What This Skill Is
This is the mandatory protocol for starting any development block on SOLNR Studio.
When the developer types /startblock [BLOCK_NAME], execute every step below in order.
Do not skip steps. Do not start writing code before Step 4 approval.

## Trigger
Developer types: /startblock [BLOCK_NAME]
Example: /startblock B1_DESIGN_SYSTEM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — LOAD CONTEXT (automatic, no approval needed)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Read these files in order:
1. .agent/rules/project-context.md → architecture, stack, design tokens, Notion IDs
2. .agent/rules/memory-format.md → code generation rules
3. .agent/context/activeContext.md → current block and open issues
4. .agent/context/systemPatterns.md → decisions already made

After reading, output a one-paragraph confirmation:
"Context loaded. Current block: [X]. Last completed: [Y]. Open issues: [Z]."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — READ CODEBASE STATE (automatic, no approval needed)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Using filesystem tools, verify the current state of files relevant to this block.
List which files exist, which are shells, and which have real implementation.
Output a short state report:

"Codebase state for [BLOCK_NAME]:
- [file]: [shell / implemented / missing]
- ..."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — PRODUCE IMPLEMENTATION PLAN (show, wait for approval)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Output a structured plan in this exact format:

**Block:** [BLOCK_NAME]
**Goal:** [one sentence — what this block achieves for the project]
**Portfolio impact:** [what a US/EU client will see or evaluate]

**Tasks:**
1. [Task name] — [files it touches] — [estimated complexity: S/M/L]
2. ...

**Constraints for this block:**
- [specific rules that apply — e.g., "no Supabase yet, static data only"]
- [any systemPatterns that are directly relevant]

**What this block does NOT include:**
- [explicit out-of-scope items to prevent scope creep]

DO NOT write any code until the developer replies "approved" or "OK proceed".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — EXECUTE (only after explicit approval)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
After developer approves the plan:
- Work task by task in the order listed.
- After each task, output: "Task [N] complete: [what was done]. Proceeding to [N+1]."
- Never mix tasks or work ahead of the current task.
- If a task requires a decision not covered by systemPatterns.md, stop and ask.
  Do not make architectural assumptions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 — BLOCK COMPLETION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When all tasks are done:

1. Run a self-QA pass:
   - Check all new files compile (no TypeScript errors by inspection)
   - Confirm all 'use client' additions are justified by memory-format.md rules
   - Confirm no design tokens were hardcoded (no hex values in className)
   - Confirm motion curves match P-07 (easeOutExpo, no bounce)
   - Confirm no external libraries were imported

2. Update .agent/context/activeContext.md:
   - Mark block as COMPLETE
   - Update "Next Action" to the next block
   - Add completed block to Block History table

3. If new architectural decisions were made, add them to systemPatterns.md
   following the P-XX pattern (P-11, P-12, etc.)

4. Output final summary:
   "Block [BLOCK_NAME] complete.
   Files modified: [list]
   systemPatterns updated: [yes/no — if yes, which patterns]
   Offer to update Notion page [ID] — proceed?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHEN NOT TO USE THIS SKILL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Do NOT use /startblock for:
- Quick one-file fixes or hotfixes → just do them directly
- Exploratory questions about architecture → answer directly without the full protocol
- Updating documentation only → update the file directly

