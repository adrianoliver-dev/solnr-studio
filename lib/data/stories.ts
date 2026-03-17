export interface StaticStory {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  coverImage: string
  excerpt: string
  content: string
  featured: boolean
}

export const STATIC_STORIES: StaticStory[] = [
  {
    id: "01",
    slug: "on-the-permanence-of-wool",
    title: "On the Permanence of Wool",
    subtitle: "Why the oldest textile is still the most honest one.",
    category: "Material",
    date: "March 2026",
    readTime: "4 min",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    excerpt: "There is a reason wool has outlasted every synthetic alternative. It is not nostalgia. It is physics.",
    content: `There is a reason wool has outlasted every synthetic alternative. It is not nostalgia. It is physics.

Wool is a protein fibre — the same molecular family as human skin. It breathes with the body, regulating temperature across a range that synthetic fibres cannot approach. A merino shirt worn in October is appropriate in March. This is not a marketing claim. It is thermodynamics.

The crimp in a wool fibre — that microscopic wave — is what makes it resilient. Each fibre can be bent thirty thousand times before it breaks. Cotton breaks at three thousand. The longevity is not a feature. It is the nature of the thing.

**What we look for**

When we source wool for SOLNR, we are looking at three numbers: micron count, staple length, and country of origin. Micron count determines softness — anything under 18.5 microns is classified as superfine. Staple length determines durability — longer fibres pill less. Country of origin determines traceability.

We currently work with two suppliers. One in the Prato region of Italy, producing a double-faced flannel we use for our tailored trousers. One in New Zealand, a Merino station that has been family-owned since 1952.

**On care**

Wool does not need to be washed as often as you think. Hang it after wearing. Let it air. A superfine merino knitwear piece worn regularly can go four to six wears before washing, if cared for correctly. When you do wash it — cold water, no agitation, flat to dry.

This is not inconvenient. This is the opposite of fast fashion. The garment lasts. The ritual matters.`,
    featured: true
  },
  {
    id: "02",
    slug: "the-case-for-one-coat",
    title: "The Case for One Coat",
    subtitle: "On buying less and choosing better.",
    category: "Philosophy",
    date: "February 2026",
    readTime: "3 min",
    coverImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80",
    excerpt: "The question is not which coat to buy. The question is whether you need more than one.",
    content: `The question is not which coat to buy. The question is whether you need more than one.

The wardrobe maximalism of the early 2000s left a specific kind of damage: the idea that having options is the same as having taste. It is not. Options are noise. Taste is signal.

A single coat — one that fits correctly, that is made from a material that ages well, that works across the range of occasions your life actually requires — is not a compromise. It is a decision. It says something about how you think.

**The mathematics of cost-per-wear**

A coat at $200 that you wear twenty times costs $10 per wear. A coat at $890 that you wear two hundred times costs $4.45 per wear. This is not a luxury argument. It is arithmetic.

The $890 coat also requires no replacement. The $200 coat will need to be replaced — probably three times in the same period. You will spend $600 and own nothing worth keeping.

**What one coat looks like**

It is neutral. Not because neutral is safe, but because neutral compounds. It works with everything you already own. It has no detail that dates it — no oversized lapel that signals a specific season, no hardware that will look wrong in three years.

It is structured but not stiff. The shoulder sits naturally. The length is mid-thigh or longer — long enough to cover a blazer, short enough to work with trousers.

It is wool. Double-faced or melton. No synthetic lining — fully lined in cupro or silk, which breathes and slides cleanly over layers underneath.

This is what we tried to make with ours. Whether we succeeded is for you to decide.`,
    featured: true
  },
  {
    id: "03",
    slug: "goodyear-welt-what-it-means",
    title: "Goodyear Welt: What It Actually Means",
    subtitle: "The construction method that makes shoes last decades.",
    category: "Craft",
    date: "January 2026",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=1200&q=80",
    excerpt: "The Goodyear welt is not a feature. It is a commitment to a different relationship with objects.",
    content: `The Goodyear welt is not a feature. It is a commitment to a different relationship with objects.

In a Goodyear-welted shoe, the upper, insole, and welt are stitched together in a way that allows the sole to be replaced entirely — multiple times — without compromising the upper. The shoe becomes, effectively, immortal, provided it is made from good leather and the upper is cared for.

This is not a modern innovation. The method was patented by Charles Goodyear Jr. in 1869. It remained standard in quality footwear until the 1970s, when cemented (glued) construction allowed for faster, cheaper production. Most shoes sold today are cemented. They cannot be resoled. They are, by design, temporary.

**The anatomy of the welt**

The welt is a strip of leather that runs around the perimeter of the shoe. It is stitched to the upper and insole on the inside, and to the sole on the outside. The space between the insole and outsole — the holdfast — is filled with a cork compound that compresses over time to the shape of the wearer's foot. This is why Goodyear-welted shoes get more comfortable with wear, not less.

**What to look for**

On the outside of a Goodyear-welted shoe, you should see a visible stitching line running around the welt. On the insole, you should see a second line of stitching — sometimes covered by a leather sock liner, but present. The sole should feel substantial. If the shoe feels light and flexible directly out of the box, it is almost certainly cemented.

Our Derby is welted on a last we developed over fourteen months. The break-in period is real. By the third wear, you will understand why.`,
    featured: false
  }
]
