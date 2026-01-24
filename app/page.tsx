import Link from "next/link";
import { PARTY } from "./party.config";

const pillars = [
  {
    title: "Modern Development",
    desc: "Infrastructure, digital governance, and efficient public services.",
  },
  {
    title: "Jobs & Economy",
    desc: "Skill-first growth, entrepreneurship support, and stable employment.",
  },
  {
    title: "Education for the Future",
    desc: "Stronger schools, youth programs, and modern learning opportunities.",
  },
  {
    title: "Transparency & Accountability",
    desc: "Systems that reduce corruption and improve citizen trust.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-12 relative">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-2)]" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 text-xs font-bold dark:bg-black/30">
                  🇮🇳 National Movement • Youth • Modern Governance
                </div>

                <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight">
                  {PARTY.name}
                </h1>

                <p className="mt-4 text-lg md:text-xl text-[color:var(--color-muted)] max-w-2xl">
                  {PARTY.slogan}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/join" className="btn btn-primary">
                    Join the Movement
                  </Link>
                  <Link href="/manifesto" className="btn btn-outline">
                    View Manifesto
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-4 dark:bg-black/30">
                    <div className="text-sm font-bold">Citizen-first</div>
                    <div className="text-xs text-[color:var(--color-muted)] mt-1">
                      Policies designed for people
                    </div>
                  </div>
                  <div className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-4 dark:bg-black/30">
                    <div className="text-sm font-bold">Tech-powered</div>
                    <div className="text-xs text-[color:var(--color-muted)] mt-1">
                      Digital governance & efficiency
                    </div>
                  </div>
                  <div className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-4 dark:bg-black/30">
                    <div className="text-sm font-bold">Youth-led</div>
                    <div className="text-xs text-[color:var(--color-muted)] mt-1">
                      Future-ready national vision
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="card p-6">
                <div className="text-lg font-extrabold">{p.title}</div>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-2xl font-black tracking-tight">
                Be part of the national transformation.
              </div>
              <div className="mt-2 text-sm text-[color:var(--color-muted)]">
                Become a volunteer, member, or supporter — and help build a
                modern India.
              </div>
            </div>
            <Link href="/join" className="btn btn-primary">
              Apply to Join
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
