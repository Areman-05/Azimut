# Azimut Estructuras

Plataforma web comercial para **Azimut Estructuras**, estudio ficticio de arquitectura modular premium y construcción sostenible con base en España. Proyecto de portfolio personal con estética minimalista inspirada en referencias del sector construcción.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm test` | Tests unitarios (Vitest) |
| `npm run test:e2e` | Tests end-to-end (Playwright) |
| `npm run lint` | ESLint |

## Estructura

```
src/
├── app/           # Rutas y páginas
├── components/    # UI, layout, home, projects, contact
├── config/        # Sitio, navegación, imágenes
├── data/          # Contenido estático
├── lib/           # Utilidades
└── types/         # Tipos TypeScript
public/images/     # Assets locales
```

## Páginas

- `/` — Inicio
- `/proyectos` — Portfolio con filtros
- `/proyectos/[slug]` — Detalle de proyecto
- `/servicios` — Servicios
- `/nosotros` — Empresa y equipo
- `/contacto` — Formulario y FAQ

## Licencia

Proyecto educativo / portfolio. Contenido y marca ficticios.
