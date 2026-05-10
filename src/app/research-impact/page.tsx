export default function ResearchImpact() {
  const areas = [
    {
      title: "Rehabilitation Engineering",
      description: "<Fill_data: Details on rehabilitation engineering research>"
    },
    {
      title: "AI in Healthcare",
      description: "<Fill_data: Details on AI models and data analytics used>"
    },
    {
      title: "Clinical Validation",
      description: "<Fill_data: Details on clinical trials and validation processes>"
    },
    {
      title: "Social Impact & SDGs",
      description: "Addressing SDG 3 (Good Health & Well-Being), SDG 4 (Quality Education), SDG 9 (Industry, Innovation & Infrastructure), and SDG 11 (Sustainable Cities)."
    }
  ];

  return (
    <div className="flex flex-col text-zinc-100">
      <section className="bg-background border-b border-zinc-800">
        <div className="container mx-auto px-6 py-24 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 text-white">RESEARCH & IMPACT</h1>
          <p className="text-2xl md:text-3xl text-zinc-300 font-medium leading-tight max-w-4xl">
            Our solutions are grounded in rigorous academic research, clinical validation, and a commitment to global healthcare improvement.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800 border-b border-zinc-800">
          {areas.map((area, index) => (
            <div key={index} className="p-12 md:p-16 bg-background hover:bg-zinc-900 transition-colors group">
              <span className="font-mono text-zinc-600 group-hover:text-brand-neon transition-colors text-sm mb-4 block">0{index + 1}</span>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{area.title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white border-b border-zinc-800">
        <div className="container mx-auto px-6 py-24 max-w-5xl">
          <h2 className="text-4xl font-black tracking-tighter mb-12">LITERATURE & PUBLICATIONS</h2>
          <div className="space-y-8 border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-baseline border-b border-zinc-800 pb-8 group">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-neon transition-colors">&lt;Fill_data: Publication Title&gt;</h3>
                <p className="text-zinc-500">&lt;Fill_data: Authors / Journal Name&gt;</p>
              </div>
              <a href="#" className="font-mono text-sm tracking-widest uppercase hover:bg-brand-neon hover:text-black transition-colors border border-zinc-700 hover:border-brand-neon px-4 py-2 shrink-0">Read Paper</a>
            </div>
             <div className="flex flex-col md:flex-row gap-6 justify-between items-baseline border-b border-zinc-800 pb-8 group">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-neon transition-colors">&lt;Fill_data: IEEE Conference Presentation&gt;</h3>
                <p className="text-zinc-500">&lt;Fill_data: Event Date / Details&gt;</p>
              </div>
              <a href="#" className="font-mono text-sm tracking-widest uppercase hover:bg-brand-neon hover:text-black transition-colors border border-zinc-700 hover:border-brand-neon px-4 py-2 shrink-0">View Event</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
