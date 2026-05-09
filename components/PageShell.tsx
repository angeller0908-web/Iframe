import { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type PageShellProps = {
  title: string;
  intro: string;
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
};

export function PageShell({ title, intro, breadcrumbs, children }: PageShellProps) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <section className="rounded-lg bg-panel p-6 shadow-panel">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="mt-3 text-gray-200">{intro}</p>
      </section>
      <div className="mt-6 space-y-6">{children}</div>
    </div>
  );
}
