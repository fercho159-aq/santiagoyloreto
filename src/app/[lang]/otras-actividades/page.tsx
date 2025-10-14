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
  description: string;
  imageUrl: string;
  imageHint: string;
};

const images: ImagePlaceholder[] = [
    {
      "id": "activity-horseback",
      "description": "People riding horses on a beach",
      "imageUrl": "https://picsum.photos/seed/horseback/600/400",
      "imageHint": "horseback riding beach"
    },
    {
      "id": "activity-diving",
      "description": "Scuba diver underwater with coral reef",
      "imageUrl": "https://picsum.photos/seed/scubadiving/600/400",
      "imageHint": "scuba diving"
    },
    {
      "id": "activity-ocean-safari",
      "description": "A boat on the ocean during a safari tour",
      "imageUrl": "https://picsum.photos/seed/oceansafari/600/400",
      "imageHint": "ocean safari"
    },
    {
      "id": "activity-golf",
      "description": "A beautiful golf course by the ocean",
      "imageUrl": "https://picsum.photos/seed/golfcourse/600/400",
      "imageHint": "golf course"
    },
    {
      "id": "activity-whale-shark",
      "description": "A person swimming near a large whale shark",
      "imageUrl": "https://picsum.photos/seed/whaleshark/600/400",
      "imageHint": "whale shark"
    },
    {
      "id": "activity-sol-de-mayo",
      "description": "A waterfall in a canyon",
      "imageUrl": "https://picsum.photos/seed/soldemayo/600/400",
      "imageHint": "canyon waterfall"
    },
    {
      "id": "activity-surf",
      "description": "A person learning to surf",
      "imageUrl": "https://picsum.photos/seed/surfclass/600/400",
      "imageHint": "surf lesson"
    },
    {
      "id": "activity-art-walk",
      "description": "A colorful street during an art walk event",
      "imageUrl": "https://picsum.photos/seed/artwalk/600/400",
      "imageHint": "art walk"
    },
    {
      "id": "restaurant-acre",
      "description": "A stylish restaurant in a lush, natural setting",
      "imageUrl": "https://picsum.photos/seed/acrerestaurant/600/400",
      "imageHint": "jungle restaurant"
    },
    {
      "id": "restaurant-flora-farms",
      "description": "A rustic farm-to-table restaurant",
      "imageUrl": "https://picsum.photos/seed/florafarms/600/400",
      "imageHint": "farm restaurant"
    },
    {
      "id": "restaurant-tamarindos",
      "description": "An elegant restaurant with outdoor seating",
      "imageUrl": "https://picsum.photos/seed/tamarindos/600/400",
      "imageHint": "elegant restaurant"
    },
    {
      "id": "restaurant-la-lupita",
      "description": "A lively taqueria with a vibrant atmosphere",
      "imageUrl": "https://picsum.photos/seed/lalupita/600/400",
      "imageHint": "mexican taqueria"
    },
    {
      "id": "restaurant-toro-guero",
      "description": "A local seafood restaurant",
      "imageUrl": "https://picsum.photos/seed/toroguero/600/400",
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
                            alt={image.description}
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
                            alt={image.description}
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
