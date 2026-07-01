import { Box, Leaf, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { images } from "@/config/images";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "modular",
    title: "Arquitectura modular",
    description:
      "Sistemas constructivos modulares de alta precisión para viviendas y espacios comerciales con tiempos de ejecución reducidos.",
    icon: Box,
    href: "/servicios#modular",
    image: images.services.modular,
  },
  {
    id: "sostenible",
    title: "Construcción sostenible",
    description:
      "Materiales de bajo impacto, eficiencia energética y certificaciones ambientales integradas en cada fase del proyecto.",
    icon: Leaf,
    href: "/servicios#sostenible",
    image: images.services.sostenible,
  },
  {
    id: "reformas",
    title: "Reformas premium",
    description:
      "Rehabilitación y ampliación de espacios existentes con acabados de alto standing y atención al detalle artesanal.",
    icon: Hammer,
    href: "/servicios#reformas",
    image: images.services.reformas,
  },
];
