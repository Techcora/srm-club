export function HowWeWork() {
  const values = [
    {
      title: "Curiosity first",
      desc: "We start with questions, not answers. Every project begins by asking what we don't know and what we need to find out.",
    },
    {
      title: "Intellectual rigor",
      desc: "Claims need evidence. Opinions are welcome — but backed-up opinions carry weight. We hold each other to a high standard of thinking.",
    },
    {
      title: "Collaborative by default",
      desc: "Research, content, and products are built in teams. We share work early, give honest feedback, and build on each other's ideas.",
    },
    {
      title: "Sprint-based rhythm",
      desc: "Work is organized in focused sprints with clear goals and deliverables. This keeps momentum high and makes progress visible.",
    },
  ];

  return (
    <section id="how-we-work" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          06 — How We Work
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Our Operating Principles
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          We keep things simple. These four principles guide how we collaborate,
          make decisions, and get work done.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
