import { ReactNode } from "react";

type ContentSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export function ContentSection({ id, title, children }: ContentSectionProps) {
  return (
    <section id={id} className="rounded-lg bg-panel p-6 shadow-panel">
      <h2 className="mb-4 text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-gray-200">{children}</div>
    </section>
  );
}
