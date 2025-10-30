import React from "react";
import Image from "next/image";

type FooterProps = {
  dictionary: {
    location: string;
  }
}

export default function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 py-8 text-center text-sm text-secondary-foreground">
        <Image src="/images/Logo/22a3c9_fef01496bf6045d38e0f13b8ae37f452~mv2 (2).png" alt="Wedding Rings" width={50} height={50} />
        <p className="font-headline text-lg">Loreto & Santiago</p>
        <p className="font-sans">{dictionary.location}</p>
      </div>
    </footer>
  );
}
