import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Plane, Car, ThermometerSun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TravelPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">Viaje</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Información para ayudarte a planificar tu viaje a Los Cabos.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
                <Card className="bg-background shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl text-primary">
                            <Plane className="w-8 h-8" />
                            Aeropuerto y Vuelos
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p className="text-lg">El principal punto de llegada es el <span className="font-semibold text-foreground">Aeropuerto Internacional de Los Cabos (SJD)</span>.</p>
                        <p>Para viajeros internacionales, recomendamos hacer escala en la Ciudad de México antes de dirigirse a Los Cabos. Hay vuelos directos diarios desde las principales ciudades de México y Estados Unidos.</p>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Rutas de ejemplo:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Los Ángeles – SJD</li>
                                <li>Ciudad de México – SJD</li>
                                <li>Madrid – Los Ángeles - SJD</li>
                                <li>Madrid – Ciudad de México - SJD</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-background shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl text-primary">
                            <Car className="w-8 h-8" />
                            Transporte Terrestre
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>Si opta por alquilar un coche, encontrará la mayoría de las compañías de alquiler disponibles en el aeropuerto SJD. Recomendamos reservar con antelación.</p>
                        <p>Si prefiere un conductor privado, le recomendamos contratarlo directamente a través de su hotel para mayor comodidad y seguridad.</p>
                    </CardContent>
                </Card>

                <Card className="bg-background shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl text-primary">
                            <ThermometerSun className="w-8 h-8" />
                            Clima y Vestimenta
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>Los Cabos en noviembre es cálido, con máximas diurnas de alrededor de <span className="font-semibold text-foreground">28°C (82°F)</span> y noches más frescas de cerca de <span className="font-semibold text-foreground">16°C (61°F)</span>.</p>
                        <p>Telas ligeras y transpirables son ideales. Se recomienda llevar un chal o una chaqueta ligera para las noches frescas, especialmente cerca del océano.</p>
                    </CardContent>
                </Card>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
