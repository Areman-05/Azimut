import { images } from "@/config/images";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Sofía Martín",
    role: "Directora de arquitectura",
    bio: "Especialista en sistemas modulares y diseño bioclimático con más de 15 años de experiencia.",
    image: images.team["sofia-martin"],
  },
  {
    id: "2",
    name: "Javier Ortega",
    role: "Director técnico",
    bio: "Ingeniero civil experto en estructuras prefabricadas y gestión de obra.",
    image: images.team["javier-ortega"],
  },
  {
    id: "3",
    name: "Laura Fernández",
    role: "Arquitecta sostenibilidad",
    bio: "Consultora en certificaciones energéticas y materiales de bajo impacto ambiental.",
    image: images.team["laura-fernandez"],
  },
  {
    id: "4",
    name: "Miguel Santos",
    role: "Jefe de proyectos",
    bio: "Coordina equipos multidisciplinares garantizando plazos y calidad en cada entrega.",
    image: images.team["miguel-santos"],
  },
];
