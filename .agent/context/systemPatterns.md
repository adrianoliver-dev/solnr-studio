# System Patterns — SOLNR Studio

## P-12: Animation Library — motion/react (not framer-motion)
**Decision:** Import all animations from "motion/react", not "framer-motion".
**Reason:** framer-motion was renamed to "motion" for React 19 compatibility. 
6: Using framer-motion in React 19 causes build warnings and bundle duplication.
**Rule:** Always import: `import { motion, AnimatePresence } from "motion/react"` 
Never import from "framer-motion". If you see framer-motion imports anywhere, 
replace them with "motion/react".

## P-13: next/image requires remotePatterns for external domains
**Rule:** Any external image hostname must be whitelisted in next.config.ts
under images.remotePatterns before next/image will load it.
Never use <img> tags — always next/image, always add the domain here.
