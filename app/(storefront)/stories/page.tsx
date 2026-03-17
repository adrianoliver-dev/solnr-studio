import { STATIC_STORIES } from "@/lib/data/stories";
import { StoryCard } from "@/components/storefront";
import Link from "next/link";
import Image from "next/image";

export default function StoriesPage() {
  const featuredStory = STATIC_STORIES.find((s) => s.featured) || STATIC_STORIES[0];
  const otherStories = STATIC_STORIES.filter((s) => s.id !== featuredStory.id);

  return (
    <main className="min-h-screen bg-[--color-base]">
      {/* Page Header */}
      <header className="container mx-auto px-6 pt-32 pb-16 lg:px-12">
        <span className="mb-3 block font-mono text-[10px] uppercase tracking-widest text-[--color-accent]">
          Editorial
        </span>
        <h1 className="font-display text-5xl font-normal text-[--color-text-primary] md:text-6xl">
          Stories
        </h1>
        <p className="mt-3 max-w-md font-sans text-sm text-[--color-text-muted]">
          On craft, material, and the philosophy of making things well.
        </p>
      </header>

      {/* Featured Story */}
      <section className="container mx-auto px-6 pb-16 lg:px-12">
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[16/9] md:aspect-auto">
            <Image
              src={featuredStory.coverImage}
              alt={featuredStory.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Content Panel */}
          <div className="flex flex-col justify-center bg-[--color-surface] p-10 md:p-16 lg:p-20">
            <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest text-[--color-accent]">
              <span>{featuredStory.category}</span>
              <span className="text-[--color-text-muted]">/</span>
              <span>{featuredStory.readTime}</span>
            </div>
            
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[--color-text-primary] md:text-4xl lg:text-5xl">
              {featuredStory.title}
            </h2>
            
            <p className="mt-4 font-sans text-base leading-relaxed text-[--color-text-secondary]">
              {featuredStory.subtitle}
            </p>
            
            <span className="mt-6 font-mono text-[10px] text-[--color-text-muted]">
              {featuredStory.date}
            </span>
            
            <Link 
              href={`/stories/${featuredStory.slug}`}
              className="mt-8 inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-[--color-accent] transition-opacity hover:opacity-70"
            >
              Read Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="container mx-auto px-6 pb-32 lg:px-12">
        <div className="mb-16 border-t border-[--color-border]" />
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {otherStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>
    </main>
  );
}
