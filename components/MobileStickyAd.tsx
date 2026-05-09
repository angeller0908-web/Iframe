import { AdPlaceholder } from "@/components/AdPlaceholder";

type MobileStickyAdProps = {
  enabled?: boolean;
};

export function MobileStickyAd({ enabled = false }: MobileStickyAdProps) {
  if (!enabled) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-bg p-2 md:hidden">
      <AdPlaceholder position="mobile-sticky" />
    </div>
  );
}
