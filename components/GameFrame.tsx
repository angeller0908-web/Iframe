"use client";

import { useState } from "react";

type GameFrameProps = {
  title: string;
  iframeUrl: string;
};

export function GameFrame({ title, iframeUrl }: GameFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <section className="rounded-lg bg-panel p-4 shadow-panel">
      <h2 className="mb-3 text-2xl font-semibold text-white">Play {title} Online</h2>
      <div className="overflow-hidden rounded border border-white/10 bg-black">
        <div className="h-[58vh] min-h-[420px] max-h-[700px] w-full sm:h-[62vh] lg:h-[650px]">
          {!hasError ? (
            <iframe
              src={iframeUrl}
              title={`Play ${title}`}
              width="100%"
              height="100%"
              frameBorder={0}
              scrolling="no"
              allowFullScreen
              loading="lazy"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center text-gray-200">
              The game failed to load in this embed. Please refresh the page and try again.
            </div>
          )}
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-400">
        No download required. If the embedded player is slow, refresh and wait a few seconds for
        assets to load.
      </p>
    </section>
  );
}
