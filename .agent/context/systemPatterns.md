# System Patterns — SOLNR Studio

## P-12: Animation Library — motion/react (not framer-motion)
**Decision:** Import all animations from "motion/react", not "framer-motion".
**Reason:** framer-motion was renamed to "motion" for React 19 compatibility. 
Using framer-motion in React 19 causes build warnings and bundle duplication.
**Rule:** Always import: `import { motion, AnimatePresence } from "motion/react"` 
Never import from "framer-motion". If you see framer-motion imports anywhere, 
replace them with "motion/react".
