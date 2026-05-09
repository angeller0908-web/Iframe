import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

type Crumb = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-400">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-gray-200">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-accent">
                    {item.name}
                  </Link>
                )}
                {!isLast && <span>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
