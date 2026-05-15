import { Download } from "lucide-react";

export default function Investors() {
  return (
    <div className="flex flex-col text-white pb-24">
      <section className="pt-[150px] pb-[80px] px-6 max-w-7xl mx-auto w-full">
        <div className="clip-wrap mb-4">
          <p className="clip-inner text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]">Investor Relations</p>
        </div>
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          <span className="clip-wrap block"><span className="clip-inner block">Partner with</span></span>
          <span className="clip-wrap block"><span className="clip-inner block text-white/40">the future.</span></span>
        </h1>
        <p className="text-[15px] text-white/40 max-w-md leading-relaxed mt-8 fade-up delay-2">
          Savatronic Tech is actively seeking strategic partnerships to scale clinical deployments and accelerate product manufacturing.
        </p>
      </section>

      <div className="divider" />

      {/* Metrics Grid */}
      <section className="border-b border-line">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { label: "Traction", title: "<Fill_data: Revenue / Beta Testing Numbers>", body: "Currently deployed in beta testing with strong patient engagement metrics." },
            { label: "Intellectual Property", title: "<Fill_data: Patents Pending>", body: "Proprietary hardware sensors combined with custom ML models for gait analysis and cognitive engagement." },
            { label: "Funding Goal", title: "<Fill_data: Seed Round Target>", body: "Raising capital for mass manufacturing, regulatory (FDA/CE) clearance, and team expansion." },
          ].map((item, i) => (
            <div key={i} className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-line last:border-r-0 hover:bg-white/[0.01] transition-colors duration-500 group fade-up">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6 block group-hover:text-cyan transition-colors">{item.label}</span>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-[14px] text-white/40 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pitch Deck Download */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-8 fade-up">Pitch Deck</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight text-white mb-6 fade-up delay-1">
            Download our investor presentation.
          </h2>
          <p className="text-[15px] text-white/40 mb-12 fade-up delay-2">
            Covering market opportunity, competitive moat, and unit economics.
          </p>
          <a href="#" className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-cyan transition-colors duration-300 fade-up delay-3">
            Download PDF
            <Download className="w-4 h-4" />
          </a>
          <p className="text-[10px] text-white/20 mt-6 uppercase tracking-[0.2em] fade-up delay-4">Password Required</p>
        </div>
      </section>
    </div>
  );
}
