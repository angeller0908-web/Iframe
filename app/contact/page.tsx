import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact page for questions about the Fall Brainrots fan-made game website.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="For business, content, or policy questions, use the contact details below."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" }
      ]}
    >
      <section className="rounded-lg bg-panel p-6 shadow-panel text-gray-200">
        <p>Email: contact@example.com</p>
        <p className="mt-3">
          Please include your topic and relevant page URL so we can respond more accurately.
        </p>
      </section>
    </PageShell>
  );
}
