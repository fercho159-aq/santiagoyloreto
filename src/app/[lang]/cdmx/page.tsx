import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n-config";

type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const images: ImagePlaceholder[] = [
    {
      "id": "cdmx-soho-house",
      "description": "Soho House in Mexico City",
      "imageUrl": "https://picsum.photos/seed/sohohouse/800/600",
      "imageHint": "luxury hotel"
    },
    {
      "id": "cdmx-condesa-df",
      "description": "Condesa DF Hotel",
      "imageUrl": "https://picsum.photos/seed/condesadf/800/600",
      "imageHint": "boutique hotel"
    },
    {
      "id": "cdmx-octavia-casa",
      "description": "Octavia Casa hotel interior",
      "imageUrl": "https://picsum.photos/seed/octaviacasa/800/600",
      "imageHint": "minimalist hotel"
    },
    {
      "id": "cdmx-chapultepec",
      "description": "Chapultepec Castle",
      "imageUrl": "https://picsum.photos/seed/chapultepec/800/600",
      "imageHint": "castle cdmx"
    },
    {
      "id": "cdmx-frida-kahlo",
      "description": "Frida Kahlo Museum (Casa Azul)",
      "imageUrl": "https://picsum.photos/seed/fridakahlo/800/600",
      "imageHint": "frida kahlo"
    },
    {
      "id": "cdmx-desfile",
      "description": "Day of the Dead parade in Mexico City",
      "imageUrl": "https://picsum.photos/seed/diademuertos/800/600",
      "imageHint": "parade skulls"
    },
    {
      "id": "cdmx-casa-gilardi",
      "description": "Casa Gilardi by Luis Barragan",
      "imageUrl": "https://picsum.photos/seed/casagilardi/800/600",
      "imageHint": "modernist architecture"
    },
    {
      "id": "cdmx-bellas-artes",
      "description": "Palacio de Bellas Artes",
      "imageUrl": "https://picsum.photos/seed/bellasartes/800/600",
      "imageHint": "art deco"
    },
    {
      "id": "cdmx-panaderia-rosetta",
      "description": "Interior of Panaderia Rosetta",
      "imageUrl": "https://picsum.photos/seed/panaderiarosetta/800/600",
      "imageHint": "artisan bakery"
    },
    {
      "id": "cdmx-maizajo",
      "description": "Tacos from Maizajo",
      "imageUrl": "https://picsum.photos/seed/maizajo/800/600",
      "imageHint": "gourmet tacos"
    },
    {
      "id": "cdmx-expendio-maiz",
      "description": "Expendio de Maíz restaurant",
      "imageUrl": "https://picsum.photos/seed/expendiomaiz/800/600",
      "imageHint": "traditional mexican food"
    },
    {
      "id": "cdmx-rosetta",
      "description": "Rosetta restaurant dining room",
      "imageUrl": "https://picsum.photos/seed/rosetta/800/600",
      "imageHint": "italian restaurant"
    },
    {
      "id": "cdmx-maximo-bistrot",
      "description": "A dish from Máximo Bistrot",
      "imageUrl": "https://picsum.photos/seed/maximobistrot/800/600",
      "imageHint": "fine dining"
    },
    {
      "id": "cdmx-lardo",
      "description": "Lardo restaurant ambiance",
      "imageUrl": "https://picsum.photos/seed/lardo/800/600",
      "imageHint": "casual dining"
    },
    {
      "id": "cdmx-pujol",
      "description": "The interior of Pujol restaurant",
      "imageUrl": "https://picsum.photos/seed/pujol/800/600",
      "imageHint": "michelin star"
    },
    {
      "id": "cdmx-onora",
      "description": "Handcrafted items at Onora Casa",
      "imageUrl": "https://picsum.photos/seed/onoracasa/800/600",
      "imageHint": "mexican crafts"
    },
    {
      "id": "cdmx-xinu",
      "description": "Xinú Perfumería boutique",
      "imageUrl": "https://picsum.photos/seed/xinu/800/600",
      "imageHint": "perfume boutique"
    }
];

export default async function CdmxPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const cdmxDict = dict.cdmxPage;
    
    const sections = dict.data.cdmx_sections;

    const getImage = (id: string) => images.find((img) => img.id === id);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header dictionary={dict.nav} />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">{cdmxDict.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {cdmxDict.subtitle}
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Button asChild>
                    <Link href="#" target="_blank">{cdmxDict.condeNastButton}</Link>
                </Button>
                 <Button asChild variant="outline">
                    <Link href="#" target="_blank">{cdmxDict.inspirationButton}</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-16">
                <section>
                    <h2 className="font-headline text-3xl text-primary text-center mb-8">{cdmxDict.accommodation}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {sections.accommodation.map((item: any) => {
                            const image = getImage(item.id);
                            return (
                                <Link href={item.link} target="_blank" key={item.id} className="block group">
                                    <Card className="bg-background shadow-lg overflow-hidden h-full transition-shadow duration-300 group-hover:shadow-xl">
                                        {image && (
                                            <div className="aspect-[4/3] relative">
                                                <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint} />
                                            </div>
                                        )}
                                        <CardHeader>
                                            <CardTitle className="font-headline text-2xl text-primary transition-colors duration-300 group-hover:text-primary/80">{item.name}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </section>
                
                <section>
                    <h2 className="font-headline text-3xl text-primary text-center mb-8">{cdmxDict.whatToDo}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {sections.whatToDo.map((item: any) => {
                            const image = getImage(item.id);
                            return (
                                <Link href={item.link} target="_blank" key={item.id} className="block group">
                                    <Card className="bg-background shadow-lg overflow-hidden h-full transition-shadow duration-300 group-hover:shadow-xl">
                                        {image && (
                                            <div className="aspect-[4/3] relative">
                                                <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint} />
                                            </div>
                                        )}
                                        <CardHeader>
                                            <CardTitle className="font-headline text-2xl text-primary transition-colors duration-300 group-hover:text-primary/80">{item.name}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </section>

                 <section>
                    <h2 className="font-headline text-3xl text-primary text-center mb-8">{cdmxDict.restaurants}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {sections.restaurants.map((item: any) => {
                            const image = getImage(item.id);
                            return (
                                <Link href={item.link} target="_blank" key={item.id} className="block group">
                                    <Card className="bg-background shadow-lg overflow-hidden h-full transition-shadow duration-300 group-hover:shadow-xl">
                                        {image && (
                                            <div className="aspect-[4/3] relative">
                                                <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint} />
                                            </div>
                                        )}
                                        <CardHeader>
                                            <CardTitle className="font-headline text-xl text-primary transition-colors duration-300 group-hover:text-primary/80">{item.name}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </section>

                 <section>
                    <h2 className="font-headline text-3xl text-primary text-center mb-8">{cdmxDict.shopping}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {sections.shopping.map((item: any) => {
                            const image = getImage(item.id);
                            return (
                                <Link href={item.link} target="_blank" key={item.id} className="block group">
                                    <Card className="bg-background shadow-lg overflow-hidden h-full transition-shadow duration-300 group-hover:shadow-xl">
                                        {image && (
                                            <div className="aspect-[4/3] relative">
                                                <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint} />
                                            </div>
                                        )}
                                        <CardHeader>
                                            <CardTitle className="font-headline text-2xl text-primary transition-colors duration-300 group-hover:text-primary/80">{item.name}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </section>
            </div>
          </div>
        </div>
      </main>
      <Footer dictionary={dict.footer} />
    </div>
  );
}
