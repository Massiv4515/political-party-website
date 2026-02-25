import Link from "next/link";
import { PARTY } from "../party.config";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/ourTeam", label: "Our Team" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/80 backdrop-blur dark:bg-black/30">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Party Logo" width={40} height={40} className="object-contain"/>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight">
              {PARTY.name}
            </div>
            <div className="text-xs text-[color:var(--color-muted)]">
              {PARTY.country}
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-semibold">
          {/* Links only visible on md+ */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[color:var(--color-foreground)]/80 hover:text-[color:var(--color-foreground)] transition"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Single Join button (always visible) */}
          <Link href="/join" className="btn btn-primary px-4 py-2">
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
