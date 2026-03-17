"use client"

import Link from "next/link";
import Image from "next/image";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import { Heading, Container } from "@/components/ui";

const CAPSULES = [
  {
    id: "01",
    category: "SS26 Collection",
    title: "The Silence Collection",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    href: "/catalog?capsule=silence"
  },
  {
    id: "02",
    category: "Essentials",
    title: "Foundation Pieces",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
    href: "/catalog?capsule=foundation"
  },
  {
    id: "03",
    category: "Limited",
    title: "The Archive Edit",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    href: "/catalog?capsule=archive"
  }
];

export function FeaturedCapsules() {
  return (
    <section className="py-24 md:py-32 bg-[--color-base]">
      <Container>
        <div className="mb-12">
          <Heading level={2} className="text-left">Current Capsules</Heading>
        </div>
        
        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPSULES.map((capsule, index) => (
              <m.div
                key={capsule.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1] // easeOutExpo
                }}
                className="group relative aspect-[2/3] overflow-hidden border border-[--color-border]"
              >
                <Link href={capsule.href} className="block w-full h-full">
                  <Image
                    src={capsule.image}
                    alt={capsule.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-[0.16,1,0.3,1] scale-[1.03] group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[--color-text-muted] mb-2">
                      {capsule.category}
                    </span>
                    <h3 className="font-display text-2xl font-normal text-white">
                      {capsule.title}
                    </h3>
                    <span className="inline-block mt-3 font-sans text-xs uppercase tracking-[0.2em] text-[--color-accent]">
                      Explore →
                    </span>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>
        </LazyMotion>
      </Container>
    </section>
  );
}
