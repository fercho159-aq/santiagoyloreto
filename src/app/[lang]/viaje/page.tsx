import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Plane, Car, ThermometerSun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n-config";

export default async function TravelPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);
  const pageDict = dict.travelPage;
  
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header dictionary={dict.nav} />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">{pageDict.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {pageDict.subtitle}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
                <Card className="bg-background shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl text-primary">
                            <Plane className="w-8 h-8" />
                            {pageDict.airportTitle}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p className="text-lg">{pageDict.airportBody1}</p>
                        <p>{pageDict.airportBody2}</p>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">{pageDict.exampleRoutes.title}</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                {pageDict.exampleRoutes.routes.map((route: string) => (
                                    <li key={route}>{route}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-background shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl text-primary">
                            <Car className="w-8 h-8" />
                            {pageDict.groundTransportTitle}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>{pageDict.groundTransportBody1}</p>
                        <p>{pageDict.groundTransportBody2}</p>
                    </CardContent>
                </Card>

                <Card className="bg-background shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl text-primary">
                            <ThermometerSun className="w-8 h-8" />
                            {pageDict.weatherTitle}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>{pageDict.weatherBody1}</p>
                        <p>{pageDict.weatherBody2}</p>
                    </CardContent>
                </Card>
            </div>

          </div>
        </div>
      </main>
      <Footer dictionary={dict.footer} />
    </div>
  );
}
