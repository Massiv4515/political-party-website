"use client";

import { useState } from "react";

const nationalCoordinator = {
  name: "Mudit Sharma",
  role: "National Coordinator",
  photo: "/team/pfp1.jpeg",
};

const states = [
  {
    id: "andhra_pradesh",
    label: "Andhra Pradesh",
    coordinator: {
      name: "name_goes_here",
      role: "State Coordinator",
      photo: "/team/pfp2.jpeg",
    },
    members: [
      {
        name: "name_goes_here",
        role: "Member",
        photo: "/team/pfp3.png",
      },
      {
        name: "name_goes_here",
        role: "Member",
        photo: "/team/pfp4.jpeg",
      },
    ],
  },
  {
    id: "telangana",
    label: "Telangana",
    coordinator: {
      name: "name_goes_here",
      role: "State Coordinator",
      photo: "/team/pfp5.jpeg",
    },
    members: [],
  },
  {
    id: "maharashtra",
    label: "Maharashtra",
    coordinator: {
      name: "name_goes_here",
      role: "State Coordinator",
      photo: "/team/pfp6.jpeg",
    },
    members: [],
  },
  // add more later (28 + 8)
];

export default function OurTeamPage() {
  const [activeState, setActiveState] = useState(states[0]);

  return (
    <main>
      {/* Header */}
      <section className="section border-b border-[color:var(--border)]">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Our Team
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--color-muted)]">
            A structured national organization working across states and union territories.
          </p>
        </div>
      </section>

      {/* National Coordinator */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-extrabold mb-6">
            National Leadership
          </h2>

          <TeamCard person={nationalCoordinator} highlight />
        </div>
      </section>

      {/* State Selector */}
      <section className="section border-t border-[color:var(--border)]">
        <div className="container">
          <h2 className="text-2xl font-extrabold mb-4">
            State & UT Teams
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {states.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveState(s)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition
                  ${
                    activeState.id === s.id
                      ? "bg-[color:var(--color-primary)] text-white"
                      : "border border-[color:var(--border)]"
                  }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Selected State */}
          <div className="space-y-8">
            <TeamCard person={activeState.coordinator} />

            {activeState.members.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {activeState.members.map((m, i) => (
                  <TeamCard key={i} person={m} />
                ))}
              </div>
            )}

            {activeState.members.length === 0 && (
              <div className="text-sm text-[color:var(--color-muted)]">
                Team details will be updated soon.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamCard({
  person,
  highlight = false,
}: {
  person: { name: string; role: string; photo: string };
  highlight?: boolean;
}) {
  return (
    <div
      className={`card p-6 flex items-center gap-5 ${
        highlight ? "ring-2 ring-[color:var(--color-primary)]" : ""
      }`}
    >
      <img
        src={person.photo}
        alt={person.name}
        className="h-20 w-20 rounded-2xl object-cover border"
      />
      <div>
        <div className="font-extrabold text-lg">{person.name}</div>
        <div className="text-sm text-[color:var(--color-muted)]">
          {person.role}
        </div>
      </div>
    </div>
  );
}
