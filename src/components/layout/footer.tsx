import React from "react";
import { WeddingRingIcon } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 py-8 text-center text-sm text-secondary-foreground">
        <WeddingRingIcon className="h-6 w-6" />
        <p className="font-headline text-lg">Loreto & Santiago</p>
        <p className="font-sans">San José del Cabo | 08.11.2025</p>
      </div>
    </footer>
  );
}
