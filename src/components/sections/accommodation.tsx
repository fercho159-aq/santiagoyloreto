import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building, Phone, Mail } from "lucide-react";

export default function AccommodationSection() {
  const elGanzoImage = PlaceHolderImages.find((img) => img.id === "hotel-el-ganzo");
  const laMarinaImage = PlaceHolderImages.find((img) => img.id === "hotel-la-marina");

  return (
    <section id="hospedaje" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">Tu Estancia</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hemos negociado tarifas especiales en estos hoteles para su comodidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Hotel El Ganzo */}
          <Card className="bg-background shadow-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Hotel El Ganzo (Sede)</CardTitle>
              <CardDescription>Varios de nuestros eventos tomarán lugar aquí.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {elGanzoImage && (
                <div className="aspect-video rounded-md overflow-hidden mb-4">
                  <Image
                    src={elGanzoImage.imageUrl}
                    alt={elGanzoImage.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={elGanzoImage.imageHint}
                  />
                </div>
              )}
              <p className="text-muted-foreground">
                Un hotel boutique de diseño en la marina de San José del Cabo, conocido por su vibrante escena artística y musical.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="w-full text-lg">
                <Link href="#" target="_blank">
                  RESERVAR CON TARIFA ESPECIAL
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Hotel La Marina Inn */}
          <Card className="bg-background shadow-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Hotel La Marina Inn</CardTitle>
              <CardDescription>Una cómoda alternativa a unos pasos de la sede.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {laMarinaImage && (
                <div className="aspect-video rounded-md overflow-hidden mb-4">
                  <Image
                    src={laMarinaImage.imageUrl}
                    alt={laMarinaImage.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={laMarinaImage.imageHint}
                  />
                </div>
              )}
              <div className="bg-primary/5 p-4 rounded-md border border-primary/20">
                <p className="text-center text-primary font-semibold">Para reservar, menciona el código:</p>
                <p className="text-center text-2xl font-bold text-primary mt-1">"Boda Loreto & Santiago"</p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4"/> <a href="tel:+5212345678" className="hover:text-primary">MX: +52 123 456 78</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4"/> <a href="mailto:reservas@lamarinainn.com" className="hover:text-primary">reservas@lamarinainn.com</a>
                    </div>
                </div>
              </div>
            </CardContent>
             <CardFooter>
                <p className="text-xs text-muted-foreground text-center w-full">Contacta directamente al hotel para asegurar la tarifa de grupo.</p>
             </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
