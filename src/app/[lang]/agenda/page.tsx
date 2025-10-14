import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { events as eventsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ship } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n-config";

export default async function AgendaPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);
  const agendaDict = dict.agendaPage;
  const dataDict = dict.data;

  const events = [
    { dayKey: "thursday", titleKey: "welcome_cocktail", time: "7:00 PM - 10:00 PM", location: "Hotel El Ganzo", dressCodeKey: "beach_casual", icon: eventsData[0].icon },
    { dayKey: "friday", titleKey: "ceremony", time: "1:00 PM - 2:30 PM", location: "Yetti", dressCodeKey: "beach_formal", icon: eventsData[1].icon },
    { dayKey: "friday", titleKey: "reception", time: "2:30 PM - 7:30 PM", location: "Yetti", dressCodeKey: "beach_formal", icon: eventsData[2].icon },
    { dayKey: "saturday", titleKey: "pool_party", time: "12:00 PM - 5:00 PM", location: "Hotel El Ganzo", dressCodeKey: "swimsuit", icon: eventsData[3].icon },
    { dayKey: "saturday", titleKey: "dinner_party", time: "8:00 PM - 2:00 AM", location: "Crania", dressCodeKey: "formal", icon: eventsData[4].icon },
    { dayKey: "sunday", titleKey: "farewell_brunch", time: "10:00 AM - 1:00 PM", location: "Jardín de las Esculturas", dressCodeKey: "casual", icon: eventsData[5].icon },
  ];
  
  const boatSchedule = [
    { leg: dataDict.boat_schedule.to_yetti, time: "12:00 PM - 1:00 PM", details: dataDict.boat_schedule.departures },
    { leg: dataDict.boat_schedule.pause, time: "1:00 PM - 2:30 PM", details: dataDict.boat_schedule.suspended },
    { leg: dataDict.boat_schedule.to_ganzo, time: "2:30 PM - 7:30 PM", details: dataDict.boat_schedule.departures },
  ];

  const days = ["thursday", "friday", "saturday", "sunday"];
  const eventsByDay = days.map(dayKey => ({
    dayKey,
    dayName: dataDict.days[dayKey as keyof typeof dataDict.days],
    events: events.filter(event => event.dayKey === dayKey),
  }));

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header dictionary={dict.nav} />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">{agendaDict.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {agendaDict.subtitle}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {eventsByDay.map(({ dayKey, dayName, events }) => (
                events.length > 0 && (
                  <div key={dayKey} className="mb-12">
                    <h2 className="font-headline text-3xl text-primary mb-6 text-center">{dayName}</h2>
                    <div className="relative pl-8 sm:pl-12 py-6 group">
                       <div className="absolute top-0 left-4 sm:left-6 w-px h-full bg-border -translate-x-1/2"></div>
                       {events.map((event, index) => (
                         <div key={index} className="mb-10 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 -left-[42px] sm:-left-[58px] z-10">
                                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
                                    <event.icon className="w-5 h-5"/>
                                </div>
                            </div>
                           <Card className="bg-background shadow-lg border-border/50">
                             <CardHeader>
                               <CardTitle className="font-headline text-2xl text-primary">{dataDict.events[event.titleKey as keyof typeof dataDict.events]}</CardTitle>
                             </CardHeader>
                             <CardContent className="space-y-3 text-muted-foreground">
                               <p><strong>{agendaDict.schedule.time}:</strong> {event.time}</p>
                               <p><strong>{agendaDict.schedule.location}:</strong> {event.location}</p>
                               <p><strong>{agendaDict.schedule.dressCode}:</strong> {dataDict.dress_codes[event.dressCodeKey as keyof typeof dataDict.dress_codes]}</p>
                             </CardContent>
                           </Card>
                         </div>
                       ))}
                    </div>
                     {dayKey === "friday" && (
                        <div className="pl-8 sm:pl-12">
                            <Alert className="max-w-full mx-auto border-primary/50 bg-background shadow-lg">
                            <Ship className="h-5 w-5 text-primary" />
                            <AlertTitle className="font-headline text-xl text-primary">{agendaDict.logisticsTitle}</AlertTitle>
                            <AlertDescription className="mt-2 text-muted-foreground">
                                <p className="font-bold mb-2">{agendaDict.boatScheduleTitle}</p>
                                <ul className="list-disc pl-5 space-y-1">
                                {boatSchedule.map(item => (
                                    <li key={item.leg}><strong>{item.leg}:</strong> {item.time} ({item.details})</li>
                                ))}
                                </ul>
                            </AlertDescription>
                            </Alert>
                        </div>
                    )}
                  </div>
                )
              ))}
            </div>

          </div>
        </div>
      </main>
      <Footer dictionary={dict.footer} />
    </div>
  );
}
