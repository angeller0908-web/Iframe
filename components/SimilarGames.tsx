const similarGameCategories = [
  "Brainrot Games",
  "Parkour Games",
  "Obstacle Games",
  "Funny Meme Games",
  "Multiplayer Running Games"
];

export function SimilarGames() {
  return (
    <section id="similar-games" className="rounded-lg bg-panel p-6 shadow-panel">
      <h2 className="mb-4 text-2xl font-semibold text-white">Games Like Fall Brainrots</h2>
      <p className="mb-4 text-gray-200">
        Looking for similar chaos? Start with these categories while we expand the playable list.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {similarGameCategories.map((item) => (
          <article key={item} className="rounded border border-white/10 bg-black/20 p-4">
            <h3 className="font-medium text-white">{item}</h3>
            <p className="mt-2 text-sm text-gray-300">Placeholder list. Full game cards coming soon.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
