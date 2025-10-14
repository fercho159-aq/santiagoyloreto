import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/i18n-config";

type AccommodationSectionProps = {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    button: string;
  }
}

const accommodationImage = {
  id: "jw-marriott",
  description: "Luxury area of JW Marriott hotel",
  imageUrl: "https://picsum.photos/seed/jwmarriott/600/400",
  imageHint: "luxury hotel resort"
};


export default function AccommodationSection({ lang, dictionary }: AccommodationSectionProps) {
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
                <h2 className="font-headline text-4xl md:text-5xl text-primary">{dictionary.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                    {dictionary.subtitle}
                </p>
                <Button asChild size="lg" className="mt-8 text-lg">
                    <Link href={`/${lang}/alojamiento`}>
                        {dictionary.button}
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
