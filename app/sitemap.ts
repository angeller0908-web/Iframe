import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

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
  "/about"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.7
  }));
}
