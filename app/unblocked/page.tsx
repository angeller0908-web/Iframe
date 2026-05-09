import { ContentSection } from "@/components/ContentSection";
import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fall Brainrots Unblocked",
  description:
    "Fall Brainrots can be played online in browser without downloading. Availability may depend on network policy, device, and region.",
  path: "/unblocked"
});

export default function UnblockedPage() {
  return (
    <PageShell
      title="Fall Brainrots Unblocked"
      intro="Fall Brainrots is a browser game that can be played online without downloading."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Unblocked", path: "/unblocked" }
      ]}
    >
      <ContentSection title="Availability Notes">
        <p>
          Access may vary based on your network rules, region, or browser setup. If the game does
          not load, try another supported browser or device.
        </p>
      </ContentSection>
      <ContentSection title="No Download Required">
        <p>
          The embedded version runs directly in browser. You do not need to install an app or APK
          to start playing.
        </p>
      </ContentSection>
      <ContentSection title="Performance Tips">
        <ul className="list-disc space-y-2 pl-5">
          <li>Use an updated browser version.</li>
          <li>Close heavy background tabs before long sessions.</li>
          <li>Prefer stable Wi-Fi for smoother loading.</li>
        </ul>
      </ContentSection>
    </PageShell>
  );
}
