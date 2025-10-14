
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CdmxPage() {
    const sections = {
        alojamiento: [
            { id: "cdmx-soho-house", name: "Soho House", link: "https://www.sohohouse.com/houses/soho-house-mexico-city" },
            { id: "cdmx-condesa-df", name: "Condesa DF", link: "https://www.condesadf.com/" },
            { id: "cdmx-octavia-casa", name: "Octavia Casa", link: "https://octaviacasa.com/" },
        ],
        queHacer: [
            { id: "cdmx-chapultepec", name: "Castillo de Chapultepec", link: "https://mnh.inah.gob.mx/" },
            { id: "cdmx-frida-kahlo", name: "Museo Frida Kahlo", link: "https://www.museofridakahlo.org.mx/" },
            { id: "cdmx-desfile", name: "Desfile Día de los Muertos", link: "#" },
            { id: "cdmx-casa-gilardi", name: "Casa Gilardi Luis Barragán", link: "https://www.casagilardi.mx/" },
            { id: "cdmx-bellas-artes", name: "Bellas Artes", link: "https://palacio.inba.gob.mx/" },
        ],
        restaurantes: [
            { id: "cdmx-panaderia-rosetta", name: "Panadería Rosetta", link: "https://www.rosetta.com.mx/panaderia/" },
            { id: "cdmx-maizajo", name: "Tacos de Maizajo", link: "https://www.maizajo.com/" },
            { id: "cdmx-expendio-maiz", name: "Expendio de Maíz", link: "#" },
            { id: "cdmx-rosetta", name: "Rosetta", link: "https://www.rosetta.com.mx/" },
            { id: "cdmx-maximo-bistrot", name: "Máximo Bistrot", link: "https://maximobistrot.com.mx/" },
            { id: "cdmx-lardo", name: "Lardo", link: "https://www.lardo.mx/" },
            { id: "cdmx-pujol", name: "Pujol", link: "https://pujol.com.mx/" },
        ],
        compras: [
            { id: "cdmx-onora", name: "Onora Casa", link: "https://onoracasa.com/" },
            { id: "cdmx-xinu", name: "Perfumería Xinú", link: "https://xinu.mx/" },
        ],
    };

    const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">CDMX</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Para quienes tengan escala en Ciudad de México
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Button asChild>
                    <Link href="#" target="_blank">GUÍA DE VIAJES DE CONDE NAST CDMX</Link>
                </Button>
                 <Button asChild variant="outline">
                    <Link href="#" target="_blank">GUÍA DE VIAJE INSPIRACIÓN</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-16">
                <section>
                    <h2 className="font-headline text-3xl text-primary text-center mb-8">Alojamiento</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {sections.alojamiento.map(item => {
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
                    <h2 className="font-headline text-3xl text-primary text-center mb-8">¿Qué hacer?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {sections.queHacer.map(item => {
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
                    <h2 className="font-headline text-3xl text-primary text-center mb-8">Restaurantes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {sections.restaurantes.map(item => {
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
                    <h2 className="font-headline text-3xl text-primary text-center mb-8">Compras</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {sections.compras.map(item => {
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
      <Footer />
    </div>
  );
}
