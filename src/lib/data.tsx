import { CocktailIcon, CeremonyIcon, PartyIcon, PalmTreeIcon } from "@/components/icons";
import { Ship, UtensilsCrossed, Sun } from "lucide-react";
import React from 'react';

export const events = [
  {
    day: "Jueves",
    title: "Cóctel de Bienvenida",
    time: "7:00 PM - 10:00 PM",
    location: "Hotel El Ganzo",
    dressCode: "Beach Casual",
    icon: CocktailIcon,
  },
  {
    day: "Viernes",
    title: "Ceremonia",
    time: "1:00 PM - 2:30 PM",
    location: "Yetti",
    dressCode: "Formal de Playa",
    icon: CeremonyIcon,
  },
  {
    day: "Viernes",
    title: "Recepción",
    time: "2:30 PM - 7:30 PM",
    location: "Yetti",
    dressCode: "Formal de Playa",
    icon: UtensilsCrossed,
  },
  {
    day: "Sábado",
    title: "Pool Party",
    time: "12:00 PM - 5:00 PM",
    location: "Hotel El Ganzo",
    dressCode: "Traje de Baño",
    icon: Sun,
  },
  {
    day: "Sábado",
    title: "Cena y Fiesta",
    time: "8:00 PM - 2:00 AM",
    location: "Crania",
    dressCode: "Formal",
    icon: PartyIcon,
  },
  {
    day: "Domingo",
    title: "Brunch de Despedida",
    time: "10:00 AM - 1:00 PM",
    location: "Jardín de las Esculturas",
    dressCode: "Casual",
    icon: PalmTreeIcon,
  },
];

export const boatSchedule = [
  { leg: "IDA (El Ganzo -> Yetti)", time: "12:00 PM - 1:00 PM", details: "Salidas cada 15 min" },
  { leg: "PAUSA (Durante la Misa)", time: "1:00 PM - 2:30 PM", details: "Servicio suspendido" },
  { leg: "REGRESO (Yetti -> El Ganzo)", time: "2:30 PM - 7:30 PM", details: "Salidas cada 15 min" },
];

export const locations = [
  {
    id: "el-ganzo",
    name: "Hotel El Ganzo",
    address: "Blvd. Tiburón s/n, La Playita, San José del Cabo",
    events: ["Cóctel de Bienvenida", "Pool Party"],
    position: { top: "45%", left: "25%" },
  },
  {
    id: "yetti",
    name: "Yetti",
    address: "En la marina, acceso vía barco desde El Ganzo",
    events: ["Ceremonia", "Recepción"],
    position: { top: "30%", left: "75%" },
  },
  {
    id: "sculpture-garden",
    name: "Jardín de las Esculturas",
    address: "Junto a El Ganzo, La Playita",
    events: ["Brunch de Despedida"],
    position: { top: "70%", left: "35%" },
  },
  {
    id: "crania",
    name: "Crania",
    address: "Zona Hotelera, San José del Cabo",
    events: ["Cena y Fiesta"],
    position: { top: "65%", left: "80%" },
  },
  {
    id: "la-marina-inn",
    name: "Hotel La Marina Inn",
    address: "A unos pasos de El Ganzo, La Playita",
    events: [],
    position: { top: "20%", left: "15%" },
  },
];

export const faqs = [
    {
        question: "¿Qué significa 'Beach Casual' y 'Formal'?",
        answer: (
            <>
                <p className="font-bold">Beach Casual:</p>
                <p>Piensa en ropa de lino, vestidos de verano, guayaberas, sandalias elegantes. Cómodo pero con estilo. ¡Sin chanclas de plástico, por favor!</p>
                <br />
                <p className="font-bold">Formal de Playa:</p>
                <p>Para hombres, traje de lino o color claro, guayabera de manga larga. Para mujeres, vestido largo o de cóctel en telas fluidas y colores vibrantes. Los tacones de aguja no son recomendables en la arena.</p>
                <br />
                <p className="font-bold">Formal:</p>
                <p>Traje oscuro para hombres, vestido de noche o de cóctel elegante para mujeres. ¡Es hora de brillar!</p>
            </>
        ),
    },
    {
        question: "¿Cómo llego del aeropuerto a los hoteles?",
        answer: "Recomendamos reservar un shuttle o taxi privado desde el Aeropuerto Internacional de Los Cabos (SJD). El trayecto a la zona de La Playita / San José del Cabo es de unos 20-30 minutos. Hay varios servicios confiables como Cabo Airport Shuttle o Transcabo.",
    },
    {
        question: "Además de los eventos, ¿qué más recomiendan hacer?",
        answer: "¡Están en un paraíso! Recomendamos explorar el centro histórico de San José del Cabo, especialmente el 'Art Walk' del jueves por la noche. También pueden disfrutar de las playas (Playa Palmilla es hermosa), tomar una clase de surf, o hacer un tour en barco al Arco de Cabo San Lucas.",
    },
    {
        question: "¿Necesito confirmar mi asistencia a cada evento por separado?",
        answer: "No es necesario. Con que completes el formulario de RSVP en esta web, entenderemos que asistirás a todos los eventos programados para el fin de semana. Si por alguna razón no puedes asistir a un evento en particular, por favor avísanos personalmente.",
    },
];
