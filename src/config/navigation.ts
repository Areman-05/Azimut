export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNavigation = {
  empresa: [
    { label: "Sobre nosotros", href: "/nosotros" },
    { label: "Proceso", href: "/#proceso" },
    { label: "Sostenibilidad", href: "/nosotros#sostenibilidad" },
  ],
  servicios: [
    { label: "Arquitectura modular", href: "/servicios#modular" },
    { label: "Construcción sostenible", href: "/servicios#sostenible" },
    { label: "Reformas premium", href: "/servicios#reformas" },
  ],
  legal: [
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Privacidad", href: "/privacidad" },
  ],
} as const;
