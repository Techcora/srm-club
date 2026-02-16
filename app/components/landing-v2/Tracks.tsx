export function Tracks() {
  const tracks = [
    {
      name: "AI Research & Engineering",
      desc: "Deep-dive into AI/ML systems — understanding model architectures, training pipelines, evaluation, and deployment. Build the technical intuition to work with and on AI.",
      skills: ["Machine learning fundamentals", "Model evaluation & safety", "Applied AI engineering"],
    },
    {
      name: "AI-Augmented Product",
      desc: "Design and build products that leverage AI effectively. Learn to identify where AI adds real value, prototype AI-powered features, and ship to users.",
      skills: ["Product thinking with AI", "Prototyping & user testing", "Full-stack development"],
    },
    {
      name: "AI Strategy & Policy",
      desc: "Analyze AI's economic, social, and regulatory implications. Research workforce transformation, policy frameworks, and institutional adaptation strategies.",
      skills: ["AI policy & governance", "Economic impact analysis", "Strategic communication"],
    },
    {
      name: "Content & Curriculum",
      desc: "Translate complex AI research into accessible learning materials. Build workshops, write guides, create video content, and design curricula for the broader student body.",
      skills: ["Curriculum design", "Technical writing", "Content production & distribution"],
    },
  ];

  return (
    <section id="tracks" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          05 — Tracks
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          AI-Relevant Verticals
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          Members choose a primary track based on their interests and strengths.
          Each track contributes to the club's overall mission from a different
          angle.
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
