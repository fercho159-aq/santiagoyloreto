"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { events, boatSchedule } from "@/lib/data";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ship } from "lucide-react";

const days = ["Jueves", "Viernes", "Sábado", "Domingo"];

export default function ItinerarySection() {
  return (
    <section id="agenda" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">La Agenda</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            El itinerario de nuestro fin de semana.
          </p>
        </div>

        <Tabs defaultValue="Viernes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl h-auto">
            {days.map((day) => (
              <TabsTrigger key={day} value={day} className="py-2.5 text-base">
                {day}
              </TabsTrigger>
            ))}
          </TabsList>
          {days.map((day) => (
            <TabsContent key={day} value={day}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {events.filter((event) => event.day === day).map((event) => (
                    <Card key={event.title} className="bg-background shadow-lg border-border/50">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <event.icon className="w-8 h-8 text-primary" />
                          <CardTitle className="font-headline text-2xl text-primary">{event.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 text-muted-foreground">
                        <p><strong>Horario:</strong> {event.time}</p>
                        <p><strong>Lugar:</strong> {event.location}</p>
                        <p><strong>Código de Vestimenta:</strong> {event.dressCode}</p>
                      </CardContent>
                    </Card>
                ))}
              </div>
              {day === "Viernes" && (
                <Alert className="mt-12 max-w-4xl mx-auto border-primary/50 bg-background shadow-lg">
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
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
