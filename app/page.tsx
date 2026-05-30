import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { FAQ } from "@/components/FAQ";
import { GameFrame } from "@/components/GameFrame";
import { SimilarGames } from "@/components/SimilarGames";
import { games } from "@/data/games";
import { buildMetadata } from "@/lib/seo";

const game = games[0];

export const metadata = buildMetadata({
  title: "Play Fall Brainrots Unblocked \u2013 Free Online Browser Game, No Download",
  description:
    "Play Fall Brainrots unblocked for free in your browser. No download needed \u2014 works on Chromebook and school computers. Race through chaotic parkour courses with funny Italian brainrot characters.",
  path: "/"
});

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <Breadcrumbs items={[{ name: "Home", path: "/" }]} />

      <div className="space-y-6">
        <section className="rounded-lg bg-panel p-6 shadow-panel">
          <h1 className="text-4xl font-bold text-white">Play Fall Brainrots Unblocked \u2013 Free Online</h1>
          <p className="mt-3 max-w-3xl text-gray-200">
            Jump into a funny, chaotic parkour challenge you can play at school or anywhere \u2014 no
            download required. Fall Brainrots is a free browser game about running, dodging, and
            surviving wild obstacle courses with meme-style Italian Brainrot characters. Works on
            Chromebook, desktop, and mobile.
          </p>
        </section>

        <GameFrame title={game.title} iframeUrl={game.iframeUrl} />

        <ContentSection id="what-is" title="What is Fall Brainrots?">
          <p>
            Fall Brainrots is a free unblocked brainrot-themed parkour game you can play online in
            your browser. Sprint through unstable platforms, jump over gaps, and dodge moving traps.
            No download or installation is needed \u2014 just open the page and start playing. Each
            round pushes your reaction speed and rhythm, especially when multiple characters crowd
            narrow paths. Perfect for a quick game during study breaks.
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
            Fall Brainrots is an HTML5 browser game that runs directly in your browser \u2014 no
            download, no app install, no sign-up required. It works on Chromebook, Windows, Mac,
            and most mobile devices. Since it runs entirely in the browser tab, it can be played at
            school, at home, or anywhere with internet access. Availability may depend on your
            network policies, but the game itself requires no special software.
          </p>
        </ContentSection>

        <FAQ items={game.faqs} includeJsonLd />
        <SimilarGames currentSlug={game.slug} />
      </div>
    </div>
  );
}
