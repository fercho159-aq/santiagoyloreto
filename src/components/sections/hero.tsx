import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Countdown from "../countdown";
import { ChevronDown } from "lucide-react";

type HeroSectionProps = {
  dictionary: {
    title: string;
    date: string;
    welcome: string;
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    }
  }
}

export default function HeroSection({ dictionary }: HeroSectionProps) {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section id="home" className="relative h-dvh min-h-[700px] text-white">
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
          {dictionary.title}
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-sans tracking-wider">
          {dictionary.date}
        </p>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg md:text-xl font-sans">
            {dictionary.welcome}
          </p>
        </div>
        
        <Countdown dictionary={dictionary.countdown} />

        <div className="absolute bottom-10 animate-bounce">
          <a href="#campus" aria-label="Scroll to next section">
            <ChevronDown className="h-10 w-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
