import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { FAQ } from "@/components/FAQ";
import { GameFrame } from "@/components/GameFrame";
import { SimilarGames } from "@/components/SimilarGames";
import { games, getGameBySlug } from "@/data/games";
import { buildMetadata } from "@/lib/seo";

// The home page is permanently pinned to Fall Brainrots — this is the site's
// primary SEO landing page. Do NOT switch it to games[0]: adding a new "weekly
// trending" game to the top of the list would otherwise hijack the home page.
const game = getGameBySlug("fall-brainrots") ?? games[0];

export const metadata = buildMetadata({
  title: `Play ${game.title} Unblocked – Free Online Browser Game, No Download`,
  description: game.description,
  path: "/"
});

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <Breadcrumbs items={[{ name: "Home", path: "/" }]} />

      <div className="space-y-6">
        <section className="rounded-lg bg-panel p-6 shadow-panel">
          <h1 className="text-4xl font-bold text-white">Play {game.title} Unblocked – Free Online</h1>
          <p className="mt-3 max-w-3xl text-gray-200">
            {game.description}
          </p>
        </section>

        <GameFrame title={game.title} iframeUrl={game.iframeUrl} />

        <ContentSection id="what-is" title={`What is ${game.title}?`}>
          <p>
            {game.title} is a free unblocked game you can play online in your browser. No download
            or installation is needed — just open the page and start playing. Works on Chromebook,
            desktop, and mobile. Perfect for a quick game during breaks!
          </p>
        </ContentSection>

        <ContentSection id="how-to-play" title={`How to Play ${game.title}`}>
          <ul className="list-disc space-y-2 pl-5 text-gray-200">
            {game.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection id="controls" title="Controls">
          <ul className="list-disc space-y-2 pl-5 text-gray-200">
            {game.controls.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-400 mt-2">
            Controls may vary slightly depending on the version of the game.
          </p>
        </ContentSection>

        <ContentSection id="tips" title="Tips to Win">
          <ul className="list-disc space-y-2 pl-5 text-gray-200">
            {game.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection id="unblocked" title={`Is ${game.title} Unblocked?`}>
          <p>
            {game.title} is an HTML5 browser game that runs directly in your browser — no
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
