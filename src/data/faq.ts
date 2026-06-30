export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "plazos",
    question: "¿Cuánto tarda un proyecto modular?",
    answer:
      "Los plazos varían según alcance, pero un proyecto residencial modular suele completarse entre 6 y 12 meses, frente a los 18-24 de la construcción tradicional.",
  },
  {
    id: "presupuesto",
    question: "¿Cómo se calcula el presupuesto?",
    answer:
      "Tras la consulta inicial elaboramos un presupuesto detallado por fases: diseño, fabricación de módulos, montaje y acabados. Sin costes ocultos.",
  },
  {
    id: "zonas",
    question: "¿En qué zonas trabajáis?",
    answer:
      "Desarrollamos proyectos en toda España, con especial foco en Madrid, Cataluña, Andalucía y Castilla y León.",
  },
  {
    id: "sostenibilidad",
    question: "¿Qué certificaciones ambientales ofrecéis?",
    answer:
      "Trabajamos con estándares Passivhaus, BREEAM y certificación energética A. Seleccionamos materiales con trazabilidad y bajo impacto.",
  },
  {
    id: "permisos",
    question: "¿Gestionáis permisos y licencias?",
    answer:
      "Sí, nuestro equipo se encarga de la tramitación urbanística, licencias de obra y coordinación con administraciones locales.",
  },
];
