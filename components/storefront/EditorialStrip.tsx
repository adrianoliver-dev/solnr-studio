"use client"

import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import { Container, Button } from "@/components/ui";
import Link from "next/link";

export function EditorialStrip() {
  return (
    <section className="bg-[--color-surface] border-y border-[--color-border] py-24 md:py-32">
      <LazyMotion features={domAnimation}>
        <Container>
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12"
          >
            {/* Left Side */}
            <div className="max-w-2xl">
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[--color-accent] mb-4">
                On Craft
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal leading-tight text-[--color-text-primary]">
                We build slowly. <br className="hidden md:block" />
                We build once.
              </h2>
              <p className="mt-6 font-sans text-sm text-[--color-text-muted]">
                — SOLNR Studio, 2026
              </p>
            </div>

            {/* Right Side */}
            <div className="hidden md:block">
              <Link href="/about">
                <Button variant="secondary" size="md">
                  Our Philosophy
                </Button>
              </Link>
            </div>
            
            {/* Mobile Button */}
            <div className="md:hidden">
              <Link href="/about">
                <Button variant="secondary" size="sm">
                  Our Philosophy
                </Button>
              </Link>
            </div>
          </m.div>
        </Container>
      </LazyMotion>
    </section>
  );
}
