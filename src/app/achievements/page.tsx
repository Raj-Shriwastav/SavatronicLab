export default function AchievementsNews() {
  const events = [
    { title: "<Fill_data: Event/Award 1>", date: "<Fill_data: Date 1>", description: "<Fill_data: Short description>", type: "Award" },
    { title: "<Fill_data: Event/Award 2>", date: "<Fill_data: Date 2>", description: "<Fill_data: Short description>", type: "Exhibition" },
    { title: "<Fill_data: Event/Award 3>", date: "<Fill_data: Date 3>", description: "<Fill_data: Short description>", type: "Publication" },
  ];

  return (
    <div className="flex flex-col text-white pb-24">
      <section className="pt-[150px] pb-[80px] px-6 max-w-7xl mx-auto w-full">
        <div className="clip-wrap mb-4">
          <p className="clip-inner text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]">Milestones</p>
        </div>
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          <span className="clip-wrap block"><span className="clip-inner block">Achievements</span></span>
          <span className="clip-wrap block"><span className="clip-inner block text-white/40">& News.</span></span>
        </h1>
      </section>

      <div className="divider" />

      <section className="max-w-7xl mx-auto w-full px-6 py-24">
        <div className="space-y-0 border-t border-line">
          {events.map((event, i) => (
            <div key={i} className="group flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-line hover:bg-white/[0.01] transition-colors duration-500 fade-up">
              <div className="md:w-24 shrink-0">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">{event.type}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white mb-1 group-hover:translate-x-2 transition-transform duration-500">{event.title}</h3>
                <p className="text-[14px] text-white/40">{event.description}</p>
              </div>
              <div className="md:w-32 shrink-0 text-right">
                <span className="text-[12px] text-white/20 font-mono">{event.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
