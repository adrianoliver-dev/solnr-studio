import { Navbar, Footer } from "@/components/layout";
import { CartProvider } from "@/lib/cart";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="relative flex min-h-screen flex-col bg-[--color-base]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
