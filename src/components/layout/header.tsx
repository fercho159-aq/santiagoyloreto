"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import LocaleSwitcher from "./lang-switcher";
import Image from "next/image";

type HeaderProps = {
  dictionary: {
    agenda: string;
    campus: string;
    hospedaje: string;
    viaje: string;
    vestimenta: string;
    'otras-actividades': string;
    cdmx: string;
    dudas: string;
    rsvp: string;
  }
}

export default function Header({ dictionary }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const lang = pathname.split('/')[1];

  const navLinks = [
    { name: dictionary.agenda, href: `/${lang}/agenda` },
    { name: dictionary.campus, href: `/${lang}/#campus` },
    { name: dictionary.hospedaje, href: `/${lang}/alojamiento` },
    { name: dictionary.viaje, href: `/${lang}/viaje` },
    { name: dictionary.vestimenta, href: `/${lang}/vestimenta` },
    { name: dictionary["otras-actividades"], href: `/${lang}/otras-actividades` },
    { name: dictionary.cdmx, href: `/${lang}/cdmx` },
    { name: dictionary.dudas, href: `/${lang}/#dudas` },
    { name: dictionary.rsvp, href: `/${lang}/#rsvp` },
  ];
  
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
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <Image src="/images/Logo/hol.png" alt="Wedding Rings" width={24} height={24} className="text-primary" />
          <span className="font-headline text-xl font-semibold text-primary">
            L & S
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background p-6">
               <SheetHeader>
                 <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                 <div className="flex items-center justify-between">
                   <Link href={`/${lang}`} className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image src="/images/Logo/hol.png" alt="Wedding Rings" width={24} height={24} className="text-primary" />
                    <span className="font-headline text-xl font-semibold text-primary">
                      Loreto & Santiago
                    </span>
                  </Link>
                </div>
               </SheetHeader>
                <nav className="mt-12 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-xl font-normal text-primary/80 transition-colors hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
