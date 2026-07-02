export type Certification = {
  id: string;
  name: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    id: "passivhaus",
    name: "Passivhaus",
    description: "Estándar de eficiencia energética y confort térmico.",
  },
  {
    id: "breeam",
    name: "BREEAM",
    description: "Certificación de sostenibilidad en edificación.",
  },
  {
    id: "iso14001",
    name: "ISO 14001",
    description: "Gestión ambiental en procesos constructivos.",
  },
  {
    id: "energia-a",
    name: "Energía A",
    description: "Media de certificación energética en proyectos entregados.",
  },
];
