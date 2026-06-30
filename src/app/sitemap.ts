import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";
import { getAllProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/proyectos",
    "/servicios",
    "/nosotros",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${siteConfig.url}/proyectos/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticEntries, ...projectEntries];
}
