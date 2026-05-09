import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "About this independent fan-made Fall Brainrots browser game page.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      intro="This project is a lightweight single-game iframe site built as an MVP for SEO and gameplay access."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" }
      ]}
    >
      <section className="rounded-lg bg-panel p-6 shadow-panel text-gray-200">
        <p>
          The goal is to provide a clear browser play experience around Fall Brainrots, with
          helpful guides, controls, tips, and policy pages in one fast-loading structure.
        </p>
        <p className="mt-3">
          This is an independent fan-made page and is not affiliated with the original game
          developer or publisher.
        </p>
      </section>
    </PageShell>
  );
}
