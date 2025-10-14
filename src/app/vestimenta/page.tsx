import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DressCodePage() {
  const welcomeImages = [
    PlaceHolderImages.find((img) => img.id === "dress-code-welcome-1"),
    PlaceHolderImages.find((img) => img.id === "dress-code-welcome-2"),
    PlaceHolderImages.find((img) => img.id === "dress-code-welcome-3"),
  ];

  const weddingImages = [
    PlaceHolderImages.find((img) => img.id === "dress-code-wedding-1"),
    PlaceHolderImages.find((img) => img.id === "dress-code-wedding-2"),
    PlaceHolderImages.find((img) => img.id === "dress-code-wedding-3"),
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">Vestimenta</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Esto es solo un moodboard, no te estreses, siéntete libre de expresarte.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              <section>
                <div className="text-center mb-8">
                  <h2 className="font-headline text-3xl text-primary">07.11.25 - Encuentro de Bienvenida</h2>
                  <p className="mt-2 text-muted-foreground">
                    El evento será en la playa, por lo que recomendamos usar calzado cómodo y adecuado para la arena.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {welcomeImages.map((image, index) =>
                    image ? (
                      <Card key={index} className="overflow-hidden bg-background shadow-lg">
                        <div className="aspect-[2/3] relative">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 33vw"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      </Card>
                    ) : null
                  )}
                </div>
              </section>

              <section>
                <div className="text-center mb-8">
                  <h2 className="font-headline text-3xl text-primary">08.11.2025 - Ceremonia & Recepción</h2>
                  <p className="mt-2 text-muted-foreground">
                    La boda será al aire libre en un jardín, por lo que recomendamos usar zapatos cómodos y adecuados para el césped.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {weddingImages.map((image, index) =>
                    image ? (
                      <Card key={index} className="overflow-hidden bg-background shadow-lg">
                        <div className="aspect-[2/3] relative">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 33vw"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      </Card>
                    ) : null
                  )}
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
