import Image from "next/image"

type MapSectionProps = {
    dictionary: {
        title: string;
        subtitle: string;
    },
}

const mapImage = {
  id: "map-illustration",
  description: "Hand-drawn cartography style map of the wedding locations",
  imageUrl: "/images/map.jpeg",
  imageHint: "cartography map sketch"
};

export default function MapSection({ dictionary }: MapSectionProps) {
  return (
    <section id="campus" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">{dictionary.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {dictionary.subtitle}
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-4 border-secondary">
          <Image
            src="/images/map.jpeg"
            alt={mapImage.description}
            fill
            className="object-cover"
            data-ai-hint={mapImage.imageHint}
          />
        </div>
      </div>
    </section>
  )
}
