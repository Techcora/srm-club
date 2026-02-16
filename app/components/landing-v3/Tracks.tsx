export function Tracks() {
  const tracks = [
    {
      name: "AI Research & Engineering",
      desc: "Study AI/ML systems — model architectures, training pipelines, evaluation methods, and deployment. Build the technical intuition to work with and on AI systems.",
      skills: [
        "Machine learning fundamentals",
        "Model evaluation & safety",
        "Applied AI engineering",
      ],
    },
    {
      name: "AI-Augmented Product Development",
      desc: "Design and build products that leverage AI effectively. Learn to identify where AI adds real value, prototype AI-powered features, and ship working software.",
      skills: [
        "Product thinking with AI",
        "Prototyping & user research",
        "Full-stack development",
      ],
    },
    {
      name: "AI Strategy & Policy",
      desc: "Analyze AI's economic, social, and regulatory implications. Research workforce transformation, policy frameworks, and institutional adaptation strategies.",
      skills: [
        "AI policy & governance research",
        "Economic impact analysis",
        "Strategic communication & writing",
      ],
    },
    {
      name: "Content & Curriculum Design",
      desc: "Translate complex AI research into accessible learning materials. Design workshops, write guides, produce content, and build curricula for the broader student body.",
      skills: [
        "Curriculum & instructional design",
        "Technical writing & communication",
        "Content production & distribution",
      ],
    },
  ];

  return (
    <section id="tracks" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          04 — Focus Tracks
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Four AI-Relevant Verticals
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          Members choose a primary track based on their interests and strengths.
          Each track contributes to the club's mission from a different angle,
          and all tracks collaborate on shared projects.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {tracks.map((t) => (
            <div
              key={t.name}
              className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {t.desc}
              </p>
              <div className="space-y-2">
                {t.skills.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-mono text-sm mt-0.5">
                      →
                    </span>
                    <span className="text-sm text-gray-400">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
