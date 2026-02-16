export function WhoWeSeek() {
  const traits = [
    {
      trait: "Curious minds",
      desc: "You read about AI not because someone assigned it, but because you genuinely want to understand what's happening and what it means.",
    },
    {
      trait: "Builders",
      desc: "You like making things — code, content, research, products. You'd rather build a rough prototype than write a perfect plan.",
    },
    {
      trait: "Researchers",
      desc: "You enjoy going deep on a question. You're comfortable with ambiguity and willing to follow evidence wherever it leads.",
    },
    {
      trait: "Clear communicators",
      desc: "You can explain complex ideas simply. Good writing, clear presentations, and honest feedback come naturally to you.",
    },
  ];

  const phases = [
    {
      phase: "Phase 1 — Explore",
      desc: "Attend open sessions, meet current members, and get a feel for the work. No commitment required.",
    },
    {
      phase: "Phase 2 — Contribute",
      desc: "Take on a small project or join a sprint team. Show your thinking and working style through real output.",
    },
    {
      phase: "Phase 3 — Join",
      desc: "After a successful contribution period, you're invited to join as a full member with a primary track.",
    },
  ];

  return (
    <section id="who-we-seek" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          07 — Who We're Looking For
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          People, Not Profiles
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          We don't filter by CGPA, year, or department. We look for the traits
          that actually matter for the work we do.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {traits.map((t) => (
            <div
              key={t.trait}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-2">{t.trait}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-8">How you join</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="border border-gray-800 rounded-lg p-6"
            >
              <h4 className="text-white font-semibold mb-2">{p.phase}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
