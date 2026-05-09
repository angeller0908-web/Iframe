import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://example.com";

export const getSiteUrl = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL;
  return siteUrl.replace(/\/+$/, "");
};

export const absoluteUrl = (path: string) => `${getSiteUrl()}${path}`;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export const buildMetadata = ({ title, description, path }: PageMetaInput): Metadata => {
  const url = absoluteUrl(path);
  return {
    metadataBase: new URL(getSiteUrl()),
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Fall Brainrots"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
};
