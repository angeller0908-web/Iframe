import { FAQItem } from "@/data/game";
import { absoluteUrl } from "@/lib/seo";

type FAQProps = {
  items: FAQItem[];
  includeJsonLd?: boolean;
};

export function FAQ({ items, includeJsonLd = false }: FAQProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section id="faq" className="rounded-lg bg-panel p-6 shadow-panel">
      <h2 className="mb-4 text-2xl font-semibold text-white">FAQ</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded border border-white/10 bg-black/20 p-4">
            <summary className="cursor-pointer font-medium text-white">{item.question}</summary>
            <p className="mt-2 text-gray-200">{item.answer}</p>
          </details>
        ))}
      </div>
      {includeJsonLd ? (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                url: absoluteUrl("/"),
                name: "Play Fall Brainrots Online Free"
              })
            }}
          />
        </>
      ) : null}
    </section>
  );
}
