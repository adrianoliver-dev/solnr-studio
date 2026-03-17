import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STATIC_PRODUCTS } from '@/lib/data/products';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Link from 'next/link';
import { PDPGallery, PDPInfo, ProductCard } from '@/components/storefront';

interface PDPPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return STATIC_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PDPPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = STATIC_PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) return { title: 'Product Not Found — SOLNR Studio' };

  return {
    title: `${product.name} — SOLNR Studio`,
    description: product.description.slice(0, 155),
  };
}

export default async function ProductPage({ params }: PDPPageProps) {
  const resolvedParams = await params;
  const product = STATIC_PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Find related products (same category, excluding current)
  let relatedProducts = STATIC_PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  
  // If fewer than 4, add random products to fill up to 4
  if (relatedProducts.length < 4) {
    const otherProducts = STATIC_PRODUCTS.filter(
      (p) => p.category !== product.category && p.slug !== product.slug
    );
    relatedProducts = [...relatedProducts, ...otherProducts.sort(() => 0.5 - Math.random())].slice(0, 4);
  } else {
    relatedProducts = relatedProducts.slice(0, 4);
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-[--color-border]">
        <Container className="py-4">
          <nav className="font-mono text-[10px] uppercase tracking-widest text-[--color-text-muted]">
            <Link href="/catalog" className="hover:text-[--color-text-primary] transition-colors">
              Shop
            </Link>
            {" / "}
            <Link 
              href={`/catalog?category=${encodeURIComponent(product.category.toLowerCase())}`} 
              className="hover:text-[--color-text-primary] transition-colors"
            >
              {product.category}
            </Link>
            {" / "}
            <span className="text-[--color-text-primary]">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Main Content Composition */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-16 items-start">
          <PDPGallery images={product.images} name={product.name} />
          <PDPInfo product={product} />
        </div>
      </Container>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-[--color-border]">
          <Container className="py-16">
            <Heading level={2} className="text-2xl font-normal font-display mb-8">
              You May Also Like
            </Heading>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
