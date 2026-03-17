import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Button } from '@/components/ui'
import { FadeInSection } from '@/components/storefront'

export const metadata: Metadata = {
  title: 'About — SOLNR Studio',
  description: 'SOLNR Studio builds permanent pieces for considered wardrobes.',
}

export default function AboutPage() {
  return (
    <main className="bg-[--color-base] text-[--color-text-primary]">
      {/* SECTION 1: HERO STATEMENT */}
      <section className="min-h-screen flex items-end pb-24">
        <Container max-w-4xl>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[--color-accent] mb-6">
            About SOLNR
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-[--color-text-primary]">
            We build slowly.<br />
            We build once.<br />
            We build to last.
          </h1>
          <div className="mt-12 border-t border-[--color-border] pt-8">
            <div className="grid grid-cols-2 gap-8 max-w-2xl">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted]">
                  Est. 2026
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted]">
                  Austin, TX
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section className="py-32 border-t border-[--color-border]">
        <Container className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="md:sticky md:top-32 self-start font-mono text-[10px] uppercase tracking-widest text-[--color-accent]">
            Philosophy
          </div>
          <FadeInSection>
            <div className="max-w-2xl">
              <p className="font-sans text-base leading-[1.8] text-[--color-text-secondary] mb-8">
                SOLNR Studio exists because we got tired of choosing between quality and aesthetics. 
                The market offered two options: technically excellent but visually dull, or visually 
                considered but structurally poor. We decided to disagree with that premise.
              </p>
              <p className="font-sans text-base leading-[1.8] text-[--color-text-secondary] mb-8">
                Every piece we make begins with a question: will someone want to own this in twenty years? 
                If the answer is uncertain, we do not make it. This eliminates trend entirely. 
                What remains is form, material, and the logic of the garment.
              </p>
              <p className="font-sans text-base leading-[1.8] text-[--color-text-secondary]">
                We are not a heritage brand. We have no archive to point to, no founding myth to sell. 
                What we have is a standard we hold ourselves to, and the willingness to leave a season 
                empty rather than fill it with pieces we do not believe in.
              </p>
            </div>
          </FadeInSection>
        </Container>
      </section>

      {/* SECTION 3: MATERIAL STANDARDS */}
      <section className="py-32 border-t border-[--color-border] bg-[--color-surface]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start mb-12">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[--color-accent]">
              Materials
            </div>
            <FadeInSection>
              <p className="font-sans text-base text-[--color-text-secondary] leading-[1.8] max-w-2xl">
                We work with a small number of suppliers. Each is chosen for a single reason: 
                they make the best version of one specific thing. We do not diversify for price. 
                We do not substitute for availability.
              </p>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[--color-border]">
            <FadeInSection delay={0.1} className="bg-[--color-surface] p-8">
              <div className="font-mono text-[10px] text-[--color-accent] mb-4">01</div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[--color-text-primary] mb-3">Wool</h3>
              <p className="font-sans text-sm leading-relaxed text-[--color-text-secondary]">
                Grade-A merino under 18.5 microns for knitwear. Italian and British wool for tailoring. 
                No synthetic blends.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2} className="bg-[--color-surface] p-8">
              <div className="font-mono text-[10px] text-[--color-accent] mb-4">02</div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[--color-text-primary] mb-3">Cotton</h3>
              <p className="font-sans text-sm leading-relaxed text-[--color-text-secondary]">
                Two-ply minimum for shirting. Sourced from Thomas Mason and Albini Group mills. 
                Long-staple only.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.3} className="bg-[--color-surface] p-8">
              <div className="font-mono text-[10px] text-[--color-accent] mb-4">03</div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[--color-text-primary] mb-3">Leather</h3>
              <p className="font-sans text-sm leading-relaxed text-[--color-text-secondary]">
                Vegetable-tanned full-grain calf for footwear and accessories. No corrected grain. No PU.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.4} className="bg-[--color-surface] p-8">
              <div className="font-mono text-[10px] text-[--color-accent] mb-4">04</div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[--color-text-primary] mb-3">Linings</h3>
              <p className="font-sans text-sm leading-relaxed text-[--color-text-secondary]">
                Cupro or silk. Never polyester. The interior of a garment matters as much as the exterior.
              </p>
            </FadeInSection>
          </div>
        </Container>
      </section>

      {/* SECTION 4: APPROACH */}
      <section className="py-32 border-t border-[--color-border]">
        <Container className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[--color-accent]">
            Approach
          </div>
          <FadeInSection>
            <div className="max-w-2xl">
              <p className="font-sans text-base leading-[1.8] text-[--color-text-secondary] mb-8">
                We release two collections per year. Spring/Summer and Autumn/Winter. Each collection 
                contains between twelve and eighteen pieces. When a piece sells out, it is not restocked 
                unless we can make it identically. Substitutions signal compromise. We would rather 
                disappoint a customer than lower a standard.
              </p>
              <p className="font-sans text-base leading-[1.8] text-[--color-text-secondary]">
                We do not have a sales team. We do not attend trade shows. We do not wholesale. 
                Every piece is sold directly, which means we know exactly who buys SOLNR and why. 
                That relationship is the only marketing we do.
              </p>
            </div>
          </FadeInSection>
        </Container>
      </section>

      {/* SECTION 5: CLOSING CTA */}
      <section className="py-32 border-t border-[--color-border]">
        <FadeInSection>
          <Container className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <div className="max-w-md">
              <h2 className="font-display text-4xl md:text-5xl font-normal text-[--color-text-primary] leading-tight">
                The collection is open.
              </h2>
            </div>
            <div className="flex flex-col gap-4 items-start md:items-end w-full md:w-auto">
              <Link href="/catalog" className="w-full md:w-auto">
                <Button variant="primary" size="lg" className="w-full md:w-auto">
                  Shop the Collection
                </Button>
              </Link>
              <Link href="/stories" className="w-full md:w-auto">
                <Button variant="secondary" size="md" className="w-full md:w-auto">
                  Read the Stories
                </Button>
              </Link>
            </div>
          </Container>
        </FadeInSection>
      </section>
    </main>
  )
}
