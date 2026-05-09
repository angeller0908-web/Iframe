import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-black/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-gray-300">
        <p className="mb-4">
          This is an independent fan-made game page. We are not affiliated with the original game
          developer or publisher.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-accent">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
