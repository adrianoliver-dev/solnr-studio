"use client";

import { useEffect, useState } from "react";
import { Navbar, Footer } from "@/components/layout";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-[--color-base]">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
