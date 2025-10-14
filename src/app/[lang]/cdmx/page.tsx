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
      "imageUrl": "/images/CDMX/01_CDMX_Hero_53.avif",
      "imageHint": "luxury hotel"
    },
    {
      "id": "cdmx-condesa-df",
      "description": "Condesa DF Hotel",
      "imageUrl": "/images/CDMX/CONDESA DF .jpeg",
      "imageHint": "boutique hotel"
    },
    {
      "id": "cdmx-octavia-casa",
      "description": "Octavia Casa hotel interior",
      "imageUrl": "/images/CDMX/OCTAVIA.jpeg",
      "imageHint": "minimalist hotel"
    },
    {
      "id": "cdmx-chapultepec",
      "description": "Chapultepec Castle",
      "imageUrl": "/images/CDMX/chapultepec.jpeg",
      "imageHint": "castle cdmx"
    },
    {
      "id": "cdmx-frida-kahlo",
      "description": "Frida Kahlo Museum (Casa Azul)",
      "imageUrl": "/images/CDMX/frida.jpeg",
      "imageHint": "frida kahlo"
    },
    {
      "id": "cdmx-desfile",
      "description": "Day of the Dead parade in Mexico City",
      "imageUrl": "/images/CDMX/ofrenda-monumental-zocalo-cdmx.jpg",
      "imageHint": "parade skulls"
    },
    {
      "id": "cdmx-casa-gilardi",
      "description": "Casa Gilardi by Luis Barragan",
      "imageUrl": "/images/CDMX/barragan.jpeg",
      "imageHint": "modernist architecture"
    },
    {
      "id": "cdmx-bellas-artes",
      "description": "Palacio de Bellas Artes",
      "imageUrl": "/images/CDMX/bellas artes.jpeg",
      "imageHint": "art deco"
    },
    {
      "id": "cdmx-panaderia-rosetta",
      "description": "Interior of Panaderia Rosetta",
      "imageUrl": "/images/CDMX/file.jpg",
      "imageHint": "artisan bakery"
    },
    {
      "id": "cdmx-maizajo",
      "description": "Tacos from Maizajo",
      "imageUrl": "/images/CDMX/Maizajo_DSC_0354.webp",
      "imageHint": "gourmet tacos"
    },
    {
      "id": "cdmx-expendio-maiz",
      "description": "Expendio de Maíz restaurant",
      "imageUrl": "/images/CDMX/download.jpg",
      "imageHint": "traditional mexican food"
    },
    {
      "id": "cdmx-rosetta",
      "description": "Rosetta restaurant dining room",
      "imageUrl": "/images/CDMX/A90A9847-683x1024.jpg",
      "imageHint": "italian restaurant"
    },
    {
      "id": "cdmx-maximo-bistrot",
      "description": "A dish from Máximo Bistrot",
      "imageUrl": "/images/CDMX/41fef20483cd4bc8b07532c8a8747e5d.webp",
      "imageHint": "fine dining"
    },
    {
      "id": "cdmx-lardo",
      "description": "Lardo restaurant ambiance",
      "imageUrl": "/images/CDMX/LARDO1.jpg",
      "imageHint": "casual dining"
    },
    {
      "id": "cdmx-pujol",
      "description": "The interior of Pujol restaurant",
      "imageUrl": "/images/CDMX/JSa_Pujol_LGM_0254+(Footer).jpg",
      "imageHint": "michelin star"
    },
    {
      "id": "cdmx-onora",
      "description": "Handcrafted items at Onora Casa",
      "imageUrl": "/images/CDMX/73382883-88ee-4058-ba00-de8d0b721d9d_onora-visit.avif",
      "imageHint": "mexican crafts"
    },
    {
      "id": "cdmx-xinu",
      "description": "Xinú Perfumería boutique",
      "imageUrl": "/images/CDMX/InteriorDesign_Aug2024_xinu-2.jpg",
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
