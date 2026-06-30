export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Azimut transformó nuestra visión en una villa modular excepcional. El proceso fue transparente y el resultado superó expectativas.",
    author: "María López",
    role: "Propietaria",
    project: "Villa Modular Mediterránea",
  },
  {
    id: "2",
    quote:
      "Profesionalidad y atención al detalle en cada fase. Nuestras oficinas sostenibles son un referente para nuestros clientes.",
    author: "Carlos Ruiz",
    role: "Director general",
    project: "Oficinas Sostenibles Madrid",
  },
  {
    id: "3",
    quote:
      "Cumplieron plazos y presupuesto sin sorpresas. La calidad constructiva es impecable.",
    author: "Elena Vidal",
    role: "Promotora inmobiliaria",
    project: "Residencia Pasiva Segovia",
  },
];
