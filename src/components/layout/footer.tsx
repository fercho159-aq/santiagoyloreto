import React from "react";
import { WeddingRingIcon } from "../icons";

type FooterProps = {
  dictionary: {
    location: string;
  }
}

export default function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 py-8 text-center text-sm text-secondary-foreground">
        <WeddingRingIcon className="h-6 w-6" />
        <p className="font-headline text-lg">Loreto & Santiago</p>
        <p className="font-sans">{dictionary.location}</p>
      </div>
    </footer>
  );
}
