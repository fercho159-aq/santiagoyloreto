import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, User } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n-config";

export default async function AccommodationPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const accommodationDict = dict.accommodationPage;
    const dataDict = dict.data;

    const elGanzoImage = PlaceHolderImages.find((img) => img.id === "hotel-el-ganzo");
    const laMarinaImage = PlaceHolderImages.find((img) => img.id === "hotel-la-marina");
    const jwMarriottImage = PlaceHolderImages.find((img) => img.id === "jw-marriott");
    const ritzCarltonImage = PlaceHolderImages.find((img) => img.id === "ritz-carlton");
    const secretsImage = PlaceHolderImages.find((img) => img.id === "secrets-resort");
    
    const hotels = [
        {
            name: "Hotel El Ganzo",
            image: elGanzoImage,
            bookingCode: "2511LORETO",
            phone: "+52 624 104 9000",
            email: "reservas@elganzo.com",
            bookingLink: "#"
        },
        {
            name: "Marina Inn",
            image: laMarinaImage,
            bookingCode: dataDict.wedding_name_code,
            phone: "+1 310 272 9244 / +52 524 142 4166",
            email: "manager@lamarinainn.com",
            bookingLink: null
        },
        {
            name: "JW Marriott - Casa Maat",
            image: jwMarriottImage,
            bookingCode: dataDict.wedding_name_code,
            contactPerson: "Carlos Davis",
            phone: "+52 624 163 7625",
            email: "jwlc.greservaciones@grupodiestra.com",
            bookingLink: "#"
        },
        {
            name: "Ritz Carlton",
            image: ritzCarltonImage,
            bookingCode: "BSL",
            phone: "+52 624 172 9000 / +52 624 121 2880",
            email: "reservas.zadun@ritzcarlton.com",
            bookingLink: "#"
        },
        {
            name: "Secrets",
            image: secretsImage,
            bookingCode: "Santiago & Loreto",
            phone: null,
            email: "martha.arangure@secretsresorts.com",
            bookingLink: null
        }
    ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header dictionary={dict.nav} />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">{accommodationDict.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {accommodationDict.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
              {hotels.map(hotel => (
                <Card key={hotel.name} className="bg-background shadow-lg overflow-hidden flex flex-col">
                  {hotel.image && (
                    <div className="aspect-video relative">
                      <Image
                        src={hotel.image.imageUrl}
                        alt={hotel.image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={hotel.image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">{hotel.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="bg-primary/5 p-4 rounded-md border border-primary/20">
                      <p className="text-center text-primary font-semibold">{accommodationDict.bookingCode}:</p>
                      <p className="text-center text-2xl font-bold text-primary mt-1">{hotel.bookingCode}</p>
                    </div>
                     <div className="space-y-2 text-muted-foreground">
                        <p className="font-semibold text-foreground">{accommodationDict.contact}:</p>
                        {hotel.contactPerson && (
                             <div className="flex items-center gap-2">
                                <User className="w-4 h-4"/> <span>{hotel.contactPerson}</span>
                            </div>
                        )}
                        {hotel.phone && (
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4"/> <a href={`tel:${hotel.phone.split(' / ')[0]}`} className="hover:text-primary">{hotel.phone}</a>
                            </div>
                        )}
                        {hotel.email && (
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4"/> <a href={`mailto:${hotel.email}`} className="hover:text-primary">{hotel.email}</a>
                            </div>
                        )}
                    </div>
                  </CardContent>
                  {hotel.bookingLink && (
                     <CardFooter className="flex-col items-stretch gap-2">
                        <Button asChild size="lg" className="w-full text-lg">
                            <Link href={hotel.bookingLink} target="_blank">
                                {accommodationDict.bookHere}
                            </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">{accommodationDict.contactDirectly}</p>
                     </CardFooter>
                  )}
                </Card>
              ))}
            </div>

            <Alert className="mt-12 max-w-4xl mx-auto border-primary/50 bg-background shadow-lg">
                <AlertDescription className="text-center text-muted-foreground">
                    {accommodationDict.transportationNote}
                </AlertDescription>
            </Alert>

          </div>
        </div>
      </main>
      <Footer dictionary={dict.footer} />
    </div>
  );
}
