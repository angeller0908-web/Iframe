import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-to-play", label: "How to Play" },
  { href: "/controls", label: "Controls" },
  { href: "/tips", label: "Tips" },
  { href: "/unblocked", label: "Unblocked" },
  { href: "/similar-games", label: "Similar Games" }
];

export function Header() {
  return (
    <header className="border-b border-white/10 bg-black/20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          Fall Brainrots
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
