export default function ResearchImpact() {
  const areas = [
    { title: "Rehabilitation Engineering", description: "<Fill_data: Details on rehabilitation engineering research>" },
    { title: "AI in Healthcare", description: "<Fill_data: Details on AI models and data analytics used>" },
    { title: "Clinical Validation", description: "<Fill_data: Details on clinical trials and validation processes>" },
    { title: "Social Impact & SDGs", description: "Addressing SDG 3 (Good Health & Well-Being), SDG 4 (Quality Education), SDG 9 (Industry, Innovation & Infrastructure), and SDG 11 (Sustainable Cities)." },
  ];

  return (
    <div className="flex flex-col text-white pb-24">
      <section className="pt-[150px] pb-[80px] px-6 max-w-7xl mx-auto w-full">
        <div className="clip-wrap mb-4">
          <p className="clip-inner text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]">Academic Foundation</p>
        </div>
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          <span className="clip-wrap block"><span className="clip-inner block">Research</span></span>
          <span className="clip-wrap block"><span className="clip-inner block text-white/40">& Impact.</span></span>
        </h1>
        <p className="text-[15px] text-white/40 max-w-md leading-relaxed mt-8 fade-up delay-2">
          Our solutions are grounded in rigorous academic research, clinical validation, and a commitment to global healthcare improvement.
        </p>
      </section>

      <div className="divider" />

      {/* Research Areas */}
      <section className="border-b border-line">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {areas.map((area, i) => (
            <div key={i} className="p-12 md:p-16 border-b md:border-r border-line last:border-r-0 md:[&:nth-child(2n)]:border-r-0 hover:bg-white/[0.01] transition-colors duration-500 group fade-up">
              <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] mb-6 block group-hover:text-cyan transition-colors">0{i + 1}</span>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{area.title}</h3>
              <p className="text-[14px] text-white/40 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="max-w-7xl mx-auto w-full px-6 py-24">
        <p className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-12 fade-up">Literature & Publications</p>
        <div className="space-y-0 border-t border-line">
          {[
            { title: "<Fill_data: Publication Title>", authors: "<Fill_data: Authors / Journal Name>", link: "Read Paper" },
            { title: "<Fill_data: IEEE Conference Presentation>", authors: "<Fill_data: Event Date / Details>", link: "View Event" },
          ].map((pub, i) => (
            <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-line hover:bg-white/[0.01] transition-colors duration-500 fade-up">
              <div>
                <h3 className="text-lg font-medium text-white mb-1 group-hover:translate-x-2 transition-transform duration-500">{pub.title}</h3>
                <p className="text-[13px] text-white/30">{pub.authors}</p>
              </div>
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 border border-line text-white/50 hover:bg-white hover:text-black transition-all duration-300 shrink-0 w-max">{pub.link}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
