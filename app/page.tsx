import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { FAQ } from "@/components/FAQ";
import { GameFrame } from "@/components/GameFrame";
import { SimilarGames } from "@/components/SimilarGames";
import { game } from "@/data/game";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Play Fall Brainrots Online Free",
  description:
    "Play Fall Brainrots online for free. Run, jump, dodge obstacles, and race against funny Brainrot characters in this chaotic browser parkour game.",
  path: "/"
});

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <Breadcrumbs items={[{ name: "Home", path: "/" }]} />

      <div className="space-y-6">
        <section className="rounded-lg bg-panel p-6 shadow-panel">
          <h1 className="text-4xl font-bold text-white">Fall Brainrots</h1>
          <p className="mt-3 max-w-3xl text-gray-200">
            Jump into a funny, chaotic parkour challenge where timing is everything. Fall
            Brainrots is a fast browser game about running, dodging, and surviving wild obstacle
            courses while meme-style Brainrot characters race with you.
          </p>
        </section>

        <GameFrame title={game.title} iframeUrl={game.iframeUrl} />

        <ContentSection id="what-is" title="What is Fall Brainrots?">
          <p>
            Fall Brainrots is a funny brainrot-themed parkour game where you sprint through
            unstable platforms, jump over gaps, and dodge moving traps. Each round pushes your
            reaction speed and rhythm, especially when multiple characters crowd narrow paths.
          </p>
        </ContentSection>

        <ContentSection id="how-to-play" title="How to Play Fall Brainrots">
          <ul className="list-disc space-y-2 pl-5">
            <li>Run forward and keep your momentum.</li>
            <li>Avoid traps and unstable tiles.</li>
            <li>Jump over gaps before the edge.</li>
            <li>Stay on the platform and recover after bumps.</li>
            <li>Reach the finish line and retry fast after falling.</li>
          </ul>
        </ContentSection>

        <ContentSection id="controls" title="Controls">
          <ul className="list-disc space-y-2 pl-5">
            {game.controls.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-400">
            Controls may vary slightly depending on the version of the game.
          </p>
        </ContentSection>

        <ContentSection id="tips" title="Tips to Win">
          <ul className="list-disc space-y-2 pl-5">
            <li>Do not rush every obstacle.</li>
            <li>Watch moving platforms before committing to a jump.</li>
            <li>Jump early instead of late on long gaps.</li>
            <li>Stay near the center of the track whenever possible.</li>
            <li>Learn each stage pattern and replay to improve timing.</li>
          </ul>
        </ContentSection>

        <ContentSection id="unblocked" title="Is Fall Brainrots Unblocked?">
          <p>
            Fall Brainrots is a browser game that can be played online without downloading.
            Availability may depend on your network, device, or region.
          </p>
        </ContentSection>

        <FAQ items={game.faqs} includeJsonLd />
        <SimilarGames />
      </div>
    </div>
  );
}
