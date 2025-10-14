import { CocktailIcon, CeremonyIcon, PartyIcon, PalmTreeIcon } from "@/components/icons";
import { UtensilsCrossed, Sun } from "lucide-react";
import React from 'react';

export const events = [
  {
    icon: CocktailIcon,
  },
  {
    icon: CeremonyIcon,
  },
  {
    icon: UtensilsCrossed,
  },
  {
    icon: Sun,
  },
  {
    icon: PartyIcon,
  },
  {
    icon: PalmTreeIcon,
  },
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
