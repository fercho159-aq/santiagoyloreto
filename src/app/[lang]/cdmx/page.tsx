import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n-config";

export default async function CdmxPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const cdmxDict = dict.cdmxPage;
    
    const sections = dict.data.cdmx_sections;

    const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

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
