type AdPosition = "top-banner" | "below-game" | "sidebar" | "in-content" | "mobile-sticky";

const sizeByPosition: Record<AdPosition, string> = {
  "top-banner": "min-h-[90px]",
  "below-game": "min-h-[120px]",
  sidebar: "min-h-[250px]",
  "in-content": "min-h-[120px]",
  "mobile-sticky": "h-[56px]"
};

type AdPlaceholderProps = {
  position: AdPosition;
  className?: string;
};

export function AdPlaceholder({ position, className = "" }: AdPlaceholderProps) {
  return (
    <div
      aria-label={`Ad placeholder ${position}`}
      className={`w-full rounded border border-dashed border-gray-500/60 bg-gray-300/15 px-4 py-3 text-center text-sm text-gray-300 ${sizeByPosition[position]} ${className}`}
    >
      <span className="inline-block pt-2">Advertisement</span>
    </div>
  );
}
