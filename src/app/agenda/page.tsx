import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { events, boatSchedule } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ship } from "lucide-react";

export default function AgendaPage() {
  const days = ["Jueves", "Viernes", "Sábado", "Domingo"];
  const eventsByDay = days.map(day => ({
    day,
    events: events.filter(event => event.day === day),
  }));

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">Agenda del Fin de Semana</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Aquí tienes el cronograma de todos los eventos que hemos planeado para celebrar juntos.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {eventsByDay.map(({ day, events }) => (
                events.length > 0 && (
                  <div key={day} className="mb-12">
                    <h2 className="font-headline text-3xl text-primary mb-6 text-center">{day}</h2>
                    <div className="relative pl-8 sm:pl-12 py-6 group">
                       <div className="absolute top-0 left-4 sm:left-6 w-px h-full bg-border -translate-x-1/2"></div>
                       {events.map((event, index) => (
                         <div key={event.title} className="mb-10 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 -left-[42px] sm:-left-[58px] z-10">
                                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
                                    <event.icon className="w-5 h-5"/>
                                </div>
                            </div>
                           <Card className="bg-background shadow-lg border-border/50">
                             <CardHeader>
                               <CardTitle className="font-headline text-2xl text-primary">{event.title}</CardTitle>
                             </CardHeader>
                             <CardContent className="space-y-3 text-muted-foreground">
                               <p><strong>Horario:</strong> {event.time}</p>
                               <p><strong>Lugar:</strong> {event.location}</p>
                               <p><strong>Código de Vestimenta:</strong> {event.dressCode}</p>
                             </CardContent>
                           </Card>
                         </div>
                       ))}
                    </div>
                     {day === "Viernes" && (
                        <div className="pl-8 sm:pl-12">
                            <Alert className="max-w-full mx-auto border-primary/50 bg-background shadow-lg">
                            <Ship className="h-5 w-5 text-primary" />
                            <AlertTitle className="font-headline text-xl text-primary">Logística Importante del Viernes</AlertTitle>
                            <AlertDescription className="mt-2 text-muted-foreground">
                                <p className="font-bold mb-2">Traslados en barco entre Hotel El Ganzo y Yetti:</p>
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
      <Footer />
    </div>
  );
}
