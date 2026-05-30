import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { games } from "@/data/games";

const routes = [
  "/",
  "/how-to-play",
  "/controls",
  "/tips",
  "/unblocked",
  "/similar-games",
  "/privacy-policy",
  "/terms",
  "/contact",
  "/about",
  "/games"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? ("daily" as const) : ("weekly" as const),
    priority: route === "/" ? 1 : 0.7
  }));

  const gameRoutes = games.map((game) => ({
    url: absoluteUrl(`/games/${game.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  return [...staticRoutes, ...gameRoutes];
}
