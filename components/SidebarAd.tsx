import { AdPlaceholder } from "@/components/AdPlaceholder";

export function SidebarAd() {
  return (
    <aside aria-label="Sidebar ad" className="sticky top-4 hidden lg:block">
      <AdPlaceholder position="sidebar" />
    </aside>
  );
}
