import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Countdown from "../countdown";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section id="home" className="relative h-dvh min-h-[600px] text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl drop-shadow-md">
          Loreto & Santiago
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-sans tracking-wider">
          08.11.2025 | San José del Cabo
        </p>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg md:text-xl font-sans">
            ¡No podemos esperar a celebrar nuestro amor con ustedes en un fin de semana inolvidable en Los Cabos! Hemos creado esta guía con toda la información para que su única preocupación sea disfrutar.
          </p>
        </div>
        
        <Countdown />

        <div className="absolute bottom-10 animate-bounce">
          <a href="#agenda" aria-label="Scroll to next section">
            <ChevronDown className="h-10 w-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
