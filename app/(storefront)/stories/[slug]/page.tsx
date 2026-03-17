import { STATIC_STORIES } from "@/lib/data/stories";
import { StoryCard } from "@/components/storefront";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return STATIC_STORIES.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = STATIC_STORIES.find((s) => s.slug === slug);

  if (!story) return {};

  return {
    title: `${story.title} — SOLNR Stories`,
    description: story.excerpt,
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, index) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      const headingText = trimmed.replace(/\*\*/g, "");
      return (
        <h3 key={index} className="mt-10 mb-4 font-display text-2xl font-normal text-[--color-text-primary]">
          {headingText}
        </h3>
      );
    }
    return (
      <p key={index} className="mb-6 font-sans text-base leading-[1.8] text-[--color-text-secondary]">
        {trimmed}
      </p>
    );
  });
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = STATIC_STORIES.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  const relatedStories = STATIC_STORIES
    .filter((s) => s.slug !== slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-[--color-base]">
      {/* Cover Image - Edge to Edge */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 pt-16 pb-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-[--color-accent]">
            <span>{story.category}</span>
            <span className="text-[--color-text-muted]">{story.readTime}</span>
          </div>
          
          <h1 className="mt-6 font-display text-4xl font-normal leading-tight text-[--color-text-primary] md:text-5xl lg:text-6xl">
            {story.title}
          </h1>
          
          <p className="mt-4 font-sans text-lg leading-relaxed text-[--color-text-secondary] md:text-xl">
            {story.subtitle}
          </p>
          
          <div className="mt-8 flex items-center gap-4 border-t border-[--color-border] pt-8 font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted]">
            SOLNR Studio · {story.date}
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-2xl">
          {renderContent(story.content)}
        </div>
      </section>

      {/* Footer / Navigation */}
      <footer className="container mx-auto px-6 pb-16 lg:px-12">
        <div className="mx-auto max-w-2xl border-t border-[--color-border] pt-8 mt-4 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted]">
            More Stories
          </span>
          <Link 
            href="/stories"
            className="font-mono text-[10px] uppercase tracking-widest text-[--color-accent] transition-opacity hover:opacity-70"
          >
            ← Back to Editorial
          </Link>
        </div>
      </footer>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="border-t border-[--color-border] bg-[--color-surface]/30 py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="mb-12 font-display text-3xl font-normal text-[--color-text-primary]">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedStories.map((s) => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
