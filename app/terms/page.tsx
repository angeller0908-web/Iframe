import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of service for using this independent Fall Brainrots browser game page.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      intro="By using this website, you agree to the terms below."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Terms", path: "/terms" }
      ]}
    >
      <section className="rounded-lg bg-panel p-6 shadow-panel text-gray-200">
        <p>
          This site is provided as an independent fan-made game page for informational and
          entertainment use.
        </p>
        <p className="mt-3">
          We do not guarantee uninterrupted access, and game availability may change based on
          third-party providers.
        </p>
        <p className="mt-3">
          You agree not to misuse the site, interfere with service operations, or attempt to
          exploit embedded content.
        </p>
      </section>
    </PageShell>
  );
}
