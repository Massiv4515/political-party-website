
import Link from "next/link";
import { PARTY } from "../party.config";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-extrabold text-lg">{PARTY.name}</div>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              {PARTY.slogan}
            </p>
          </div>

          <div className="text-sm">
            <div className="font-bold mb-2">Links</div>
            <div className="grid gap-2 text-[color:var(--color-muted)]">
              <Link href="/about">About</Link>
              <Link href="/manifesto">Manifesto</Link>
              <Link href="/updates">Updates</Link>
              <Link href="/join">Join</Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-bold mb-2">Contact</div>
            <div className="grid gap-2 text-[color:var(--color-muted)]">
              <span>contact_email_goes_here</span>
              <span>phone_number_goes_here</span>
              <span>head_office_address_goes_here</span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-[color:var(--color-muted)]">
          © {new Date().getFullYear()} {PARTY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
