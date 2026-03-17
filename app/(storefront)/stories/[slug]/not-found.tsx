import Link from "next/link";

export default function StoryNotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[--color-base] px-6 text-center">
      <span className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[--color-accent]">
        404
      </span>
      <h1 className="font-display text-4xl font-normal text-[--color-text-primary] sm:text-5xl">
        This story has been archived.
      </h1>
      <p className="mt-4 font-sans text-sm text-[--color-text-muted]">
        It may have been removed or never existed.
      </p>
      <Link
        href="/stories"
        className="mt-10 border border-[--color-border] px-8 py-4 font-mono text-[10px] uppercase tracking-widest text-[--color-text-primary] transition-colors hover:bg-[--color-text-primary] hover:text-[--color-base]"
      >
        Return to Editorial
      </Link>
    </main>
  );
}
