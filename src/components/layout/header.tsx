"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { WeddingRingIcon } from "../icons";

const navLinks = [
  { name: "Agenda", href: "/#agenda" },
  { name: "Campus", href: "/#campus" },
  { name: "Hospedaje", href: "/alojamiento" },
  { name: "Viaje", href: "/viaje" },
  { name: "Vestimenta", href: "/vestimenta" },
  { name: "Otras Actividades", href: "/otras-actividades" },
  { name: "Dudas", href: "/#dudas" },
  { name: "RSVP", href: "/#rsvp" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <WeddingRingIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-semibold text-primary">
            L & S
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-semibold text-primary/80 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <WeddingRingIcon className="h-6 w-6 text-primary" />
                    <span className="font-headline text-xl font-semibold text-primary">
                      Loreto & Santiago
                    </span>
                  </Link>
                </div>
                <nav className="mt-12 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-xl font-semibold text-primary/80 transition-colors hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
