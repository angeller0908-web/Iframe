import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read the privacy policy for the Fall Brainrots fan-made browser game page.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      intro="This page explains what data may be processed when you use this website."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy-policy" }
      ]}
    >
      <section className="rounded-lg bg-panel p-6 shadow-panel text-gray-200">
        <p>
          We keep this site lightweight and do not ask users to create an account. Basic technical
          logs may be processed by hosting providers for security and uptime purposes.
        </p>
        <p className="mt-3">
          Third-party embedded content, including game iframe providers and future advertising
          providers, may process data under their own policies.
        </p>
        <p className="mt-3">
          If you have a privacy request, contact us through the Contact page and include enough
          detail for follow-up.
        </p>
      </section>
    </PageShell>
  );
}
