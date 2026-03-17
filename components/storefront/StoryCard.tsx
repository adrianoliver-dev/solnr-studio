import Link from "next/link";
import Image from "next/image";
import type { StaticStory } from "@/lib/data/stories";

interface StoryCardProps {
  story: StaticStory;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link 
      href={`/stories/${story.slug}`} 
      className="group flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Text Content */}
      <div className="pt-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[--color-accent]">
            {story.category}
          </span>
          <span className="font-mono text-[10px] text-[--color-text-muted]">
            {story.readTime}
          </span>
        </div>
        
        <h3 className="font-sans text-base leading-snug text-[--color-text-primary] transition-colors duration-200 group-hover:text-[--color-text-secondary]">
          {story.title}
        </h3>
        
        <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-[--color-text-muted]">
          {story.excerpt}
        </p>
      </div>
    </Link>
  );
}
