import Image from "next/image"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MapPin } from "lucide-react"

type MapSectionProps = {
    dictionary: {
        title: string;
        subtitle: string;
    },
    locations: {
        id: string;
        name: string;
        address: string;
        events: string[];
        position: { top: string; left: string; };
    }[];
}

const mapImage = {
  id: "map-illustration",
  description: "Hand-drawn cartography style map of the wedding locations",
  imageUrl: "https://picsum.photos/seed/mapa/1200/900",
  imageHint: "cartography map sketch"
};

export default function MapSection({ dictionary, locations }: MapSectionProps) {
  return (
    <section id="campus" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">{dictionary.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {dictionary.subtitle}
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-4 border-secondary">
          <Image
            src="https://picsum.photos/seed/mapa/1200/900"
            alt={mapImage.description}
            fill
            className="object-cover"
            data-ai-hint={mapImage.imageHint}
          />

          {locations.map((location) => (
             <Popover key={location.id}>
                <PopoverTrigger asChild>
                    <div 
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        style={{ top: location.position.top, left: location.position.left }}
                        aria-label={`Ver detalles de ${location.name}`}
                    >
                        <MapPin className="w-8 h-8 text-primary drop-shadow-lg transition-transform hover:scale-125" fill="hsl(var(--primary-foreground))" />
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-64 border-primary/50 bg-background">
                    <div className="space-y-2">
                        <h3 className="font-headline text-lg font-bold text-primary">{location.name}</h3>
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                        {location.events.length > 0 && (
                            <div>
                                <h4 className="text-sm font-semibold text-foreground">Eventos aquí:</h4>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                                    {location.events.map(event => <li key={event}>{event}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </PopoverContent>
             </Popover>
          ))}
        </div>
      </div>
    </section>
  )
}
