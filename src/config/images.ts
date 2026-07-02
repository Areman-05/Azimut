export const images = {
  hero: {
    main: "/images/hero/main.jpg",
  },
  og: "/images/og.jpg",
  projects: {
    "villa-modular-mediterranea": {
      main: "/images/projects/villa-modular-mediterranea/main.jpg",
      gallery: [
        "/images/projects/villa-modular-mediterranea/main.jpg",
        "/images/projects/villa-modular-mediterranea/interior.jpg",
        "/images/projects/villa-modular-mediterranea/exterior.jpg",
        "/images/projects/villa-modular-mediterranea/detail.jpg",
      ],
    },
    "oficinas-sostenibles-madrid": {
      main: "/images/projects/oficinas-sostenibles-madrid/main.jpg",
      gallery: [
        "/images/projects/oficinas-sostenibles-madrid/main.jpg",
        "/images/projects/oficinas-sostenibles-madrid/office.jpg",
        "/images/projects/oficinas-sostenibles-madrid/lobby.jpg",
      ],
    },
    "residencia-pasiva-segovia": {
      main: "/images/projects/residencia-pasiva-segovia/main.jpg",
    },
    "centro-logistico-valencia": {
      main: "/images/projects/centro-logistico-valencia/main.jpg",
    },
    "apartamentos-boutique-bilbao": {
      main: "/images/projects/apartamentos-boutique-bilbao/main.jpg",
    },
    "pabellon-modular-barcelona": {
      main: "/images/projects/pabellon-modular-barcelona/main.jpg",
    },
  },
  services: {
    modular: "/images/services/modular.jpg",
    sostenible: "/images/services/sostenible.jpg",
    reformas: "/images/services/reformas.jpg",
  },
  team: {
    "sofia-martin": "/images/team/sofia-martin.jpg",
    "javier-ortega": "/images/team/javier-ortega.jpg",
    "laura-fernandez": "/images/team/laura-fernandez.jpg",
    "miguel-santos": "/images/team/miguel-santos.jpg",
  },
} as const;

export function getProjectImages(slug: string) {
  return images.projects[slug as keyof typeof images.projects];
}
