export function HowWeWork() {
  const principles = [
    {
      title: "Curiosity first",
      desc: "Every project begins by asking what we don't know and what we need to find out. We value good questions as much as good answers.",
    },
    {
      title: "Intellectual rigor",
      desc: "Claims need evidence. We hold each other to a high standard of thinking — opinions are welcome, but backed-up opinions carry weight.",
    },
    {
      title: "Collaborative by default",
      desc: "Research, content, and projects are built in teams. We share work early, give honest feedback, and build on each other's contributions.",
    },
    {
      title: "Sprint-based rhythm",
      desc: "Work is organized in focused sprints with clear goals and deliverables. This keeps momentum high, makes progress visible, and builds professional discipline.",
    },
  ];

  return (
    <section id="how-we-work" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
          07 — How We Work
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Operating Principles
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mb-16 leading-relaxed">
          Four principles guide how the club collaborates, makes decisions, and
          delivers work.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
