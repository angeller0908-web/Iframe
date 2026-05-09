import { ContentSection } from "@/components/ContentSection";
import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fall Brainrots Tips and Tricks",
  description:
    "Practical Fall Brainrots tips for beginners and regular players. Learn safer lines, better jump timing, and stronger obstacle survival habits.",
  path: "/tips"
});

export default function TipsPage() {
  return (
    <PageShell
      title="Fall Brainrots Tips and Tricks"
      intro="Use these practical habits to survive more rounds and finish courses more consistently."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Tips", path: "/tips" }
      ]}
    >
      <ContentSection title="Beginner Tips">
        <ul className="list-disc space-y-2 pl-5">
          <li>Learn one map section at a time.</li>
          <li>Keep your route simple before trying risky shortcuts.</li>
          <li>Reset quickly after mistakes and keep your rhythm.</li>
        </ul>
      </ContentSection>
      <ContentSection title="Survival Tips">
        <ul className="list-disc space-y-2 pl-5">
          <li>Watch moving hazards for one full cycle.</li>
          <li>Stay near center lanes when platforms are narrow.</li>
          <li>Slow down slightly at high-fail corners.</li>
        </ul>
      </ContentSection>
      <ContentSection title="How to Avoid Falling">
        <p>
          Most falls happen from late jumps and rushed turns. Line up early, face the landing
          point, then jump with commitment.
        </p>
      </ContentSection>
      <ContentSection title="How to Improve Timing">
        <p>
          Replay difficult sections in short sessions. Repetition teaches spacing faster than long
          random runs.
        </p>
      </ContentSection>
      <ContentSection title="How to Win More Rounds">
        <p>
          Focus on low-error runs instead of maximum speed. Consistency across all obstacles leads
          to better final placement.
        </p>
      </ContentSection>
    </PageShell>
  );
}
