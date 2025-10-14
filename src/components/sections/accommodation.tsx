import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AccommodationSection() {
  const accommodationImage = PlaceHolderImages.find((img) => img.id === "jw-marriott");

  return (
    <section id="hospedaje" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                 {accommodationImage && (
                    <Image
                        src={accommodationImage.imageUrl}
                        alt={accommodationImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={accommodationImage.imageHint}
                    />
                 )}
            </div>
            <div className="text-center md:text-left">
                <h2 className="font-headline text-4xl md:text-5xl text-primary">Alojamiento</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                    Hemos seleccionado una variedad de hoteles con tarifas especiales para ustedes. Exploren las opciones y encuentren el lugar perfecto para su estancia durante nuestro fin de semana de bodas.
                </p>
                <Button asChild size="lg" className="mt-8 text-lg">
                    <Link href="/alojamiento">
                        Ver Hoteles y Tarifas
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}