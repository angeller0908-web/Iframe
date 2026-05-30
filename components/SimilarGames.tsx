import Link from "next/link";
import Image from "next/image";
import { games, GameInfo } from "@/data/games";

type SimilarGamesProps = {
  currentSlug?: string;
};

export function SimilarGames({ currentSlug }: SimilarGamesProps) {
  const displayedGames = currentSlug
    ? games.filter((g) => g.slug !== currentSlug)
    : games;

  return (
    <section id="similar-games" className="rounded-lg bg-panel p-6 shadow-panel">
      <h2 className="mb-4 text-2xl font-semibold text-white">Games Like Fall Brainrots</h2>
      <p className="mb-4 text-gray-200">
        Check out these games you can play right now in your browser.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {displayedGames.map((game) => (
          <Link
            key={game.slug}
            href={`/games/${game.slug}`}
            className="group rounded border border-white/10 bg-black/20 p-4 transition-colors hover:border-accent/40"
          >
            <div className="relative mb-3 h-[100px] w-full overflow-hidden rounded">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="font-medium text-white group-hover:text-accent">
              {game.title}
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              {game.description.length > 80
                ? game.description.slice(0, 80) + "…"
                : game.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-accent/20 px-1.5 py-0.5 text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
