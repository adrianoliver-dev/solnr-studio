import { 
  Hero, 
  Manifesto, 
  FeaturedCapsules, 
  EditorialStrip, 
  ProductGrid 
} from "@/components/storefront";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      <FeaturedCapsules />
      <EditorialStrip />
      <ProductGrid />
      <Manifesto />
    </main>
  );
}
