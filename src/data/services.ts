import { Box, Leaf, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const services: Service[] = [
  {
    id: "modular",
    title: "Arquitectura modular",
    description:
      "Sistemas constructivos modulares de alta precisión para viviendas y espacios comerciales con tiempos de ejecución reducidos.",
    icon: Box,
    href: "/servicios#modular",
  },
  {
    id: "sostenible",
    title: "Construcción sostenible",
    description:
      "Materiales de bajo impacto, eficiencia energética y certificaciones ambientales integradas en cada fase del proyecto.",
    icon: Leaf,
    href: "/servicios#sostenible",
  },
  {
    id: "reformas",
    title: "Reformas premium",
    description:
      "Rehabilitación y ampliación de espacios existentes con acabados de alto standing y atención al detalle artesanal.",
    icon: Hammer,
    href: "/servicios#reformas",
  },
];
