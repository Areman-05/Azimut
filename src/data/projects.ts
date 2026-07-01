import type { Project } from "@/types";
import { images } from "@/config/images";

export const projects: Project[] = [
  {
    slug: "villa-modular-mediterranea",
    title: "Villa Modular Mediterránea",
    category: "modular",
    location: "Málaga, España",
    year: 2025,
    area: "320 m²",
    duration: "8 meses",
    description:
      "Vivienda unifamiliar de lujo con sistema modular prefabricado, integrada en un entorno costero con vistas al mar.",
    challenge:
      "Construir en parcela con pendiente pronunciada sin comprometer los plazos de entrega ni el paisaje circundante.",
    solution:
      "Módulos fabricados en taller con montaje en obra en tres fases, minimizando impacto ambiental y tiempos de ejecución.",
    image: images.projects["villa-modular-mediterranea"].main,
    gallery: [...images.projects["villa-modular-mediterranea"].gallery],
    featured: true,
  },
  {
    slug: "oficinas-sostenibles-madrid",
    title: "Oficinas Sostenibles Madrid",
    category: "comercial",
    location: "Madrid, España",
    year: 2024,
    area: "1.200 m²",
    duration: "14 meses",
    description:
      "Espacio de coworking premium con certificación energética A y materiales de origen local.",
    challenge:
      "Rehabilitar un edificio histórico del siglo XIX manteniendo su fachada protegida.",
    solution:
      "Estructura interior desmontable en madera laminada que respeta la envolvente original.",
    image: images.projects["oficinas-sostenibles-madrid"].main,
    gallery: [...images.projects["oficinas-sostenibles-madrid"].gallery],
    featured: true,
  },
  {
    slug: "residencia-pasiva-segovia",
    title: "Residencia Pasiva Segovia",
    category: "residencial",
    location: "Segovia, España",
    year: 2024,
    area: "240 m²",
    duration: "10 meses",
    description:
      "Vivienda de consumo casi nulo con paneles solares integrados y captación de agua de lluvia.",
    challenge:
      "Alcanzar estándar Passivhaus en clima continental con inviernos severos.",
    solution:
      "Envolvente de alto rendimiento térmico con ventilación mecánica de doble flujo.",
    image: images.projects["residencia-pasiva-segovia"].main,
    featured: true,
  },
  {
    slug: "centro-logistico-valencia",
    title: "Centro Logístico Valencia",
    category: "comercial",
    location: "Valencia, España",
    year: 2023,
    area: "4.500 m²",
    duration: "18 meses",
    description:
      "Nave industrial modular expandible diseñada para crecimiento futuro sin paralizar operaciones.",
    challenge:
      "Entregar fase uno operativa mientras se planificaba la ampliación de fase dos.",
    solution:
      "Sistema de ampliación modular con conexiones prefabricadas en fachada lateral.",
    image: images.projects["centro-logistico-valencia"].main,
  },
  {
    slug: "apartamentos-boutique-bilbao",
    title: "Apartamentos Boutique Bilbao",
    category: "residencial",
    location: "Bilbao, España",
    year: 2023,
    area: "180 m²",
    duration: "7 meses",
    description:
      "Reforma integral de piso histórico convertido en tres apartamentos turísticos de alto standing.",
    challenge:
      "Preservar elementos arquitectónicos originales mientras se modernizaba toda la instalación.",
    solution:
      "Restauración selectiva de molduras y suelos hidráulicos con instalaciones ocultas en falsos techos.",
    image: images.projects["apartamentos-boutique-bilbao"].main,
  },
  {
    slug: "pabellon-modular-barcelona",
    title: "Pabellón Modular Barcelona",
    category: "modular",
    location: "Barcelona, España",
    year: 2025,
    area: "600 m²",
    duration: "5 meses",
    description:
      "Pabellón temporal para eventos culturales con desmontaje y reubicación previstos.",
    challenge:
      "Cumplir normativa municipal de estructuras temporales en espacio público céntrico.",
    solution:
      "Base de cimentación reversible y módulos apilables transportables por carretera.",
    image: images.projects["pabellon-modular-barcelona"].main,
  },
];
