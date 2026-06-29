export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Consulta inicial",
    description:
      "Analizamos tus necesidades, el terreno y el presupuesto para definir el alcance del proyecto.",
  },
  {
    step: 2,
    title: "Diseño y planificación",
    description:
      "Desarrollamos la propuesta arquitectónica modular con visualizaciones y planos técnicos detallados.",
  },
  {
    step: 3,
    title: "Fabricación",
    description:
      "Los módulos se fabrican en taller bajo control de calidad, reduciendo tiempos y desperdicio en obra.",
  },
  {
    step: 4,
    title: "Montaje y entrega",
    description:
      "Instalación en sitio, acabados finales y entrega de llaves con documentación completa.",
  },
];
