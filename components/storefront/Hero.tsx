import Image from "next/image";
import * as m from "framer-motion/m";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-[--color-base] pt-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
        {/* Content Column */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 flex flex-col items-start space-y-8"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[--color-accent]">
            New Collection
          </span>
          <h1 className="max-w-xl font-display text-4xl font-normal leading-tight tracking-tight text-[--color-text-primary] md:text-5xl lg:text-7xl">
            The Art of Intentional <br /> Presence
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-[--color-text-secondary] lg:text-base">
            Silhouettes that speak through silence. Discover our latest series of 
            refined staples designed for the modern collector.
          </p>
          <div className="pt-4">
            <button className="group relative overflow-hidden border border-[--color-accent] bg-transparent px-10 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[--color-accent] transition-all duration-500 hover:text-[--color-base]">
              <span className="relative z-10">Explore Series</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-[--color-accent] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            </button>
          </div>
        </m.div>

        {/* Image Column */}
        <m.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[40vh] w-full overflow-hidden lg:h-[70vh]"
        >
          <Image
            src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=2000&auto=format&fit=crop"
            alt="SOLNR Studio Editorial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[--color-base]/40 to-transparent" />
        </m.div>
      </div>

      {/* Background Meta Label */}
      <div className="absolute bottom-12 right-12 hidden font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted]/30 lg:block">
        Ref. 2026_SERIES_01
      </div>
    </section>
  );
}
