import { ContentSection } from "@/components/ContentSection";
import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How to Play Fall Brainrots",
  description:
    "Learn the objective, movement basics, and winning strategy for Fall Brainrots. Improve your parkour timing and avoid common beginner mistakes.",
  path: "/how-to-play"
});

export default function HowToPlayPage() {
  return (
    <PageShell
      title="How to Play Fall Brainrots"
      intro="This guide explains the core objective, movement flow, and survival rhythm for new players."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "How to Play", path: "/how-to-play" }
      ]}
    >
      <ContentSection title="Basic Objective">
        <p>
          Reach the finish line before the round ends. Stay on the course, recover quickly from
          slips, and avoid falling into hazards.
        </p>
      </ContentSection>
      <ContentSection title="Movement">
        <p>
          Move forward in short controlled bursts. Use small direction changes to line up jumps
          and avoid over-correcting in mid-air.
        </p>
      </ContentSection>
      <ContentSection title="Obstacles">
        <p>
          Expect gaps, moving platforms, and bump zones. Watch one cycle first when an obstacle
          looks risky, then commit with timing.
        </p>
      </ContentSection>
      <ContentSection title="Winning Strategy">
        <p>
          Consistency beats speed in most rounds. A clean path with fewer mistakes usually
          outperforms aggressive jumps.
        </p>
      </ContentSection>
      <ContentSection title="Beginner Mistakes">
        <ul className="list-disc space-y-2 pl-5">
          <li>Jumping too late on long gaps.</li>
          <li>Holding maximum speed through every trap.</li>
          <li>Ignoring platform movement before jumping.</li>
          <li>Not retrying the same section to learn timing.</li>
        </ul>
      </ContentSection>
    </PageShell>
  );
}
