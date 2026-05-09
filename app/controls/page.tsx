import { ContentSection } from "@/components/ContentSection";
import { PageShell } from "@/components/PageShell";
import { game } from "@/data/game";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fall Brainrots Controls",
  description:
    "Review Fall Brainrots controls, movement handling, jump timing advice, and mobile input notes for smoother obstacle runs.",
  path: "/controls"
});

export default function ControlsPage() {
  return (
    <PageShell
      title="Fall Brainrots Controls"
      intro="Use these controls and timing notes to keep your movement clean in chaotic obstacle rounds."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Controls", path: "/controls" }
      ]}
    >
      <ContentSection title="Keyboard Controls">
        <ul className="list-disc space-y-2 pl-5">
          {game.controls.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </ContentSection>
      <ContentSection title="Movement Tips">
        <p>
          Tap direction changes instead of holding hard turns. This helps keep the character
          centered on narrow sections.
        </p>
      </ContentSection>
      <ContentSection title="Jump Timing">
        <p>
          Start your jump a fraction earlier than you think on wider gaps. Late jumps are the most
          common cause of falling.
        </p>
      </ContentSection>
      <ContentSection title="Mobile Controls">
        <p>
          Some versions support touch input on mobile browsers. If controls feel imprecise, try a
          larger screen or desktop keyboard play.
        </p>
      </ContentSection>
    </PageShell>
  );
}
