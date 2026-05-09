import { PageShell } from "@/components/PageShell";
import { SimilarGames } from "@/components/SimilarGames";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Games Like Fall Brainrots",
  description:
    "Explore game categories similar to Fall Brainrots, including brainrot games, obstacle runners, and meme-style parkour browser games.",
  path: "/similar-games"
});

export default function SimilarGamesPage() {
  return (
    <PageShell
      title="Games Like Fall Brainrots"
      intro="Use this page to discover related categories while we continue adding more playable entries."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Similar Games", path: "/similar-games" }
      ]}
    >
      <SimilarGames />
    </PageShell>
  );
}
