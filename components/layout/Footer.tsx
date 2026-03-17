import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[--color-border] bg-[--color-base] px-6 py-20 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* Brand Statement - High editorial impact */}
        <div className="mb-20">
          <p className="max-w-xl text-3xl font-normal leading-relaxed text-[--color-text-primary] font-display lg:text-4xl">
            Reserved for those who understand that restraint is the ultimate statement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Column 1: Navigation */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[--color-text-muted]">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/catalog" className="text-xs text-[--color-text-secondary] transition-colors hover:text-[--color-accent]">
                Shop All
              </Link>
              <Link href="/stories" className="text-xs text-[--color-text-secondary] transition-colors hover:text-[--color-accent]">
                Stories
              </Link>
              <Link href="/about" className="text-xs text-[--color-text-secondary] transition-colors hover:text-[--color-accent]">
                The Studio
              </Link>
              <Link href="/account" className="text-xs text-[--color-text-secondary] transition-colors hover:text-[--color-accent]">
                Account
              </Link>
            </div>
          </div>

          {/* Column 2: Legal & Social */}
          <div className="flex flex-col justify-between space-y-8 lg:text-right">
            <div className="space-y-6">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[--color-text-muted]">
                Connect
              </h4>
              <div className="flex space-x-8 lg:justify-end">
                <a href="#" className="text-xs text-[--color-text-secondary] transition-colors hover:text-[--color-accent]">
                  Instagram
                </a>
                <a href="#" className="text-xs text-[--color-text-secondary] transition-colors hover:text-[--color-accent]">
                  Threads
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Meta */}
        <div className="mt-20 flex flex-col items-start justify-between border-t border-[--color-border] pt-10 lg:flex-row lg:items-center">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[--color-text-muted]">
            © {currentYear} SOLNR STUDIO. All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-8 font-mono text-[9px] uppercase tracking-widest text-[--color-text-muted] lg:mt-0">
            <Link href="/legal/privacy" className="hover:text-[--color-text-primary]">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-[--color-text-primary]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
