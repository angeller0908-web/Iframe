import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { FAQ } from "@/components/FAQ";
import { GameFrame } from "@/components/GameFrame";
import { SimilarGames } from "@/components/SimilarGames";
import { games, getGameBySlug, type FAQItem } from "@/data/games";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type GamePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export function generateMetadata({ params }: GamePageProps): Metadata {
  const game = getGameBySlug(params.slug);
  if (!game) return {};

  return buildMetadata({
    title: `Play ${game.title} Online Free`,
    description: game.description,
    path: `/games/${game.slug}`
  });
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameBySlug(params.slug);
  if (!game) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Games", path: "/games" },
          { name: game.title, path: `/games/${game.slug}` }
        ]}
      />

      <div className="space-y-6">
        <section className="rounded-lg bg-panel p-6 shadow-panel">
          <h1 className="text-4xl font-bold text-white">{game.title}</h1>
          <p className="mt-3 max-w-3xl text-gray-200">{game.description}</p>
        </section>

        <GameFrame title={game.title} iframeUrl={game.iframeUrl} />

        <ContentSection id="what-is" title={`What is ${game.title}?`}>
          <p>{game.description}</p>
        </ContentSection>

        <ContentSection id="how-to-play" title={`How to Play ${game.title}`}>
          <ul className="list-disc space-y-2 pl-5">
            {game.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
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
            {game.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection id="unblocked" title={`Is ${game.title} Unblocked?`}>
          <p>
            {game.title} is a browser game that can be played online without downloading.
            Availability may depend on your network, device, or region.
          </p>
        </ContentSection>

        <FAQ items={game.faqs} includeJsonLd />
        <SimilarGames currentSlug={game.slug} />
      </div>
    </div>
  );
}
