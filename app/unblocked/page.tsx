import { ContentSection } from "@/components/ContentSection";
import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fall Brainrots Unblocked \u2013 Play Free at School, No Download",
  description:
    "Play Fall Brainrots unblocked at school for free. No download, no install \u2014 runs in any browser including Chromebook. HTML5 game with no blocked content.",
  path: "/unblocked"
});

export default function UnblockedPage() {
  return (
    <PageShell
      title="Fall Brainrots Unblocked"
      intro="Fall Brainrots is an unblocked browser game you can play at school for free \u2014 no download, no installation, no sign-up. Just open this page and start playing on any device including Chromebook."
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
      <ContentSection title="Works on School Chromebooks">
        <p>
          Fall Brainrots is an HTML5 browser game that runs entirely in your browser tab. It does
          not need Flash, Java, or any plugins. This means it works on Chromebook, Windows, Mac,
          iPad, and most Android devices. Since there is nothing to download or install, school
          network filters are less likely to block it. Just search for &apos;Fall Brainrots
          unblocked&apos; or visit this page directly.
        </p>
      </ContentSection>
      <ContentSection title="Why Students Love Brainrot Games">
        <p>
          Brainrot games are the perfect study break. They are fast, funny, and meme-packed \u2014
          you can jump in for a quick round between classes. Italian brainrot characters, chaotic
          physics, and silly obstacles make every round unpredictable. Plus, they work right in
          your browser with no setup, so you can play at school, at home, or on the go.
        </p>
      </ContentSection>
    </PageShell>
  );
}
