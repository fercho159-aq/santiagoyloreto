import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, Users } from "lucide-react";

export default function OtherActivitiesPage() {
    const activities = [
        { id: "activity-horseback", name: "Montar a Caballo", link: "#" },
        { id: "activity-diving", name: "Buceo", link: "#" },
        { id: "activity-ocean-safari", name: "Safari Oceánico", link: "#" },
        { id: "activity-golf", name: "Golf", link: "https://www.questrogolf.com/", code: "Boda Loreto & Santiago", phone: "624-173-9400", email: "reservations@questrogolf.com" },
        { id: "activity-whale-shark", name: "Tiburón Ballena", link: "#" },
        { id: "activity-sol-de-mayo", name: "Sol de Mayo", link: "#" },
        { id: "activity-surf", name: "Clases de Surf", link: "#" },
        { id: "activity-art-walk", name: "Art Walk", link: "#" },
    ];

    const restaurants = [
        { id: "restaurant-acre", name: "ACRE", link: "https://www.acreresort.com/" },
        { id: "restaurant-flora-farms", name: "Flora Farms", link: "https://www.flora-farms.com/" },
        { id: "restaurant-tamarindos", name: "Tamarindos", link: "https://tamarindos.mx/" },
        { id: "restaurant-la-lupita", name: "La Lupita", link: "https://lalupitatym.com/" },
        { id: "restaurant-toro-guero", name: "Toro Güero", link: "#" },
    ];

    const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">Otras Actividades</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Hemos curado esta lista con algunas de nuestras experiencias favoritas en Baja para que las disfrutes. Al hacer clic en la actividad de tu elección, encontrarás la página web y la información de contacto para realizar tu reservación.
              </p>
            </div>

            <section id="activities">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                {activities.map(item => {
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
                                    <p className="text-center text-primary font-semibold">Código de Reserva:</p>
                                    <p className="text-center text-xl font-bold text-primary mt-1">{item.code}</p>
                                </div>
                            }
                             <div className="space-y-2 text-muted-foreground">
                                <p className="font-semibold text-foreground">Por favor contactar para reservar:</p>
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
                            Visitar Sitio Web
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            </section>
            
            <div className="text-center my-16 md:my-24">
              <h2 className="font-headline text-4xl text-primary">Restaurantes</h2>
            </div>

            <section id="restaurants">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                {restaurants.map(item => {
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
                            Visitar Sitio Web
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
      <Footer />
    </div>
  );
}
