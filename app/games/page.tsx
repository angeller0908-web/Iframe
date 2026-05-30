import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { games } from "@/data/games";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All Games – Play Free Online Games",
  description:
    "Browse and play all free online games. From brainrot parkour to clicker games, find your next favorite browser game.",
  path: "/games"
});

export default function GamesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Games", path: "/games" }
        ]}
      />

      <div className="space-y-6">
        <section className="rounded-lg bg-panel p-6 shadow-panel">
          <h1 className="text-4xl font-bold text-white">All Games</h1>
          <p className="mt-3 max-w-3xl text-gray-200">
            Browse our collection of free online games. Click any game to start playing instantly in
            your browser — no download required.
          </p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group rounded-lg bg-panel shadow-panel transition-transform hover:scale-[1.02]"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white group-hover:text-accent">
                  {game.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-gray-300">{game.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {game.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
