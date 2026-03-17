import * as m from "framer-motion/m";

export default function Manifesto() {
  return (
    <section className="bg-[--color-surface] px-6 py-24 lg:px-12 lg:py-40">
      <div className="container mx-auto flex max-w-4xl flex-col items-center text-center space-y-12">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-[--color-text-muted]">
            The Manifesto
          </span>
          <h2 className="font-display text-3xl font-normal leading-tight text-[--color-text-primary] lg:text-5xl">
            We believe that true luxury is not heard, but felt. It is the weight 
            of a seam, the texture of a fiber, and the confidence found in 
            absolute restraint.
          </h2>
          <div className="mx-auto h-px w-20 bg-[--color-accent]/30" />
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-[--color-text-secondary]">
            SOLNR is founded on the principle of the "Finished Article." 
            Each piece is a singular study in proportion and material, 
            crafted to outlast trends and endure as a staple in the modern 
            wardrobe.
          </p>
        </m.div>
      </div>
    </section>
  );
}
