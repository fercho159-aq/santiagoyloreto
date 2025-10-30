import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n-config";

type ImagePlaceholder = {
  id: string;
  imageUrl: string;
  imageHint: string;
};

const images: ImagePlaceholder[] = [
    {
      "id": "activity-horseback",
      "imageUrl": "/images/actividades/22a3c9_ea3a0aab276845788ea38c46bcedac26~mv2.jpg",
      "imageHint": "horseback riding beach"
    },
    {
      "id": "activity-diving",
      "imageUrl": "/images/actividades/6c1a0008069a75c8081cd178111d7c8b.webp",
      "imageHint": "scuba diving"
    },
    {
      "id": "activity-ocean-safari",
      "imageUrl": "/images/actividades/22a3c9_2f63e83d997e4cb586259caff1d5a363~mv2.jpg",
      "imageHint": "ocean safari"
    },
    {
      "id": "activity-golf",
      "imageUrl": "/images/actividades/01-Club-Campestre-Hole-14-Pano.jpg",
      "imageHint": "golf course"
    },
    {
      "id": "activity-whale-shark",
      "imageUrl": "/images/actividades/El-tiburon-ballena-el-pez-mas-grande-del-mundo-que-es-visible-en-La-Paz-3.webp",
      "imageHint": "whale shark"
    },
    {
      "id": "activity-sol-de-mayo",
      "imageUrl": "/images/actividades/la-cascada-vista-desde.jpg",
      "imageHint": "canyon waterfall"
    },
    {
      "id": "activity-surf",
      "imageUrl": "/images/actividades/Monuments.jpg",
      "imageHint": "surf lesson"
    },
    {
      "id": "activity-art-walk",
      "imageUrl": "/images/actividades/WhatsApp Image 2025-07-30 at 18_38_23.jpeg",
      "imageHint": "art walk"
    },
    {
      "id": "restaurant-acre",
      "imageUrl": "/images/actividades/68612693-3.webp",
      "imageHint": "jungle restaurant"
    },
    {
      "id": "restaurant-flora-farms",
      "imageUrl": "/images/actividades/Flora_Farms-San_Jose_del_Cabo-Mexico-1.jpg",
      "imageHint": "farm restaurant"
    },
    {
      "id": "restaurant-tamarindos",
      "imageUrl": "/images/actividades/tamarindos-mexican-farm-to-table-restaurant1-feat-img.webp",
      "imageHint": "elegant restaurant"
    },
    {
      "id": "restaurant-la-lupita",
      "imageUrl": "/images/actividades/22a3c9_4be7dfef89f6492eb735ca5117212a44~mv2.png",
      "imageHint": "mexican taqueria"
    },
    {
      "id": "restaurant-toro-guero",
      "imageUrl": "/images/actividades/la-lupita-040-01.jpg",
      "imageHint": "seafood restaurant"
    }
];

export default async function OtherActivitiesPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const pageDict = dict.otherActivitiesPage;
    
    const activities = dict.data.other_activities_list;
    const restaurants = dict.data.restaurants_list;

    const getImage = (id: string) => images.find((img) => img.id === id);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header dictionary={dict.nav} />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">{pageDict.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {pageDict.subtitle}
              </p>
            </div>

            <section id="activities">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                {activities.map((item: any) => {
                  const image = getImage(item.id);
                  return (
                    <Card key={item.id} className="bg-background shadow-lg overflow-hidden flex flex-col">
                      {image && (
                        <div className="aspect-video relative">
                          <Image
                            src={image.imageUrl}
                            alt={item.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">{item.name}</CardTitle>
                      </CardHeader>
                      { (item.code || item.phone || item.email) &&
                        <CardContent className="flex-grow space-y-4">
                           {item.code &&
                                <div className="bg-primary/5 p-3 rounded-md border border-primary/20">
                                    <p className="text-center text-primary font-semibold">{pageDict.bookingCode}:</p>
                                    <p className="text-center text-xl font-bold text-primary mt-1">{item.code}</p>
                                </div>
                            }
                             <div className="space-y-2 text-muted-foreground">
                                <p className="font-semibold text-foreground">{pageDict.contact}:</p>
                                {item.phone && (
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4"/> <a href={`tel:${item.phone}`} className="hover:text-primary">{item.phone}</a>
                                    </div>
                                )}
                                {item.email && (
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4"/> <a href={`mailto:${item.email}`} className="hover:text-primary">{item.email}</a>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                      }
                      <CardFooter>
                        <Button asChild className="w-full" variant={item.link === "#" ? "secondary" : "default"}>
                          <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            {pageDict.visitWebsite}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            </section>
            
            <div className="text-center my-16 md:my-24">
              <h2 className="font-headline text-4xl text-primary">{pageDict.restaurantsTitle}</h2>
            </div>

            <section id="restaurants">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                {restaurants.map((item: any) => {
                  const image = getImage(item.id);
                  return (
                     <Card key={item.id} className="bg-background shadow-lg overflow-hidden flex flex-col">
                      {image && (
                        <div className="aspect-video relative">
                          <Image
                            src={image.imageUrl}
                            alt={item.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <CardHeader className="flex-grow">
                        <CardTitle className="font-headline text-3xl text-primary">{item.name}</CardTitle>
                      </CardHeader>
                      <CardFooter>
                        <Button asChild className="w-full" variant={item.link === "#" ? "secondary" : "default"}>
                          <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            {pageDict.visitWebsite}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer dictionary={dict.footer} />
    </div>
  );
}
