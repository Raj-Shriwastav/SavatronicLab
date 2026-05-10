import { Download } from "lucide-react";

export default function Investors() {
  return (
    <div className="flex flex-col text-zinc-100">
      <section className="bg-black text-white border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 py-24 max-w-5xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">INVESTOR RELATIONS</h1>
          <p className="text-2xl md:text-3xl text-zinc-400 font-medium leading-tight max-w-4xl">
            Savatronic Tech is actively seeking strategic partnerships to scale our clinical deployments and accelerate product manufacturing.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800 border-b border-zinc-800">
          
          <div className="p-12 bg-background flex flex-col justify-between group hover:bg-zinc-900 transition-colors">
            <div>
              <span className="font-mono text-zinc-600 group-hover:text-brand-neon transition-colors text-xs tracking-widest uppercase mb-4 block">Traction</span>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">&lt;Fill_data: Revenue / Beta Testing Numbers&gt;</h3>
              <p className="text-zinc-500 leading-relaxed mb-12">Currently deployed in beta testing across &lt;Fill_data: X&gt; clinics, with strong patient engagement metrics.</p>
            </div>
          </div>

          <div className="p-12 bg-zinc-950 flex flex-col justify-between group hover:bg-zinc-900 transition-colors">
            <div>
              <span className="font-mono text-zinc-600 group-hover:text-brand-neon transition-colors text-xs tracking-widest uppercase mb-4 block">Intellectual Property</span>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">&lt;Fill_data: Patents Pending&gt;</h3>
              <p className="text-zinc-500 leading-relaxed mb-12">Proprietary hardware sensors combined with our custom ML models for gait analysis and cognitive engagement.</p>
            </div>
          </div>

          <div className="p-12 bg-background flex flex-col justify-between group hover:bg-zinc-900 transition-colors">
            <div>
              <span className="font-mono text-zinc-600 group-hover:text-brand-neon transition-colors text-xs tracking-widest uppercase mb-4 block">Funding Goal</span>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">&lt;Fill_data: Seed Round Target&gt;</h3>
              <p className="text-zinc-500 leading-relaxed mb-12">Raising capital for mass manufacturing, regulatory (FDA/CE) clearance, and expansion of the engineering team.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto px-6 py-24 max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tighter text-white mb-6">PITCH DECK</h2>
          <p className="text-zinc-400 mb-12">
            Download our comprehensive investor presentation detailing the market opportunity, our competitive moat, and unit economics.
          </p>
          <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-neon text-black font-bold uppercase tracking-widest text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(255,244,183,0.4)] transition-all w-max mx-auto group">
            Download PDF <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
          <p className="font-mono text-brand-neon/50 text-xs mt-6 uppercase tracking-widest">Password Required</p>
        </div>
      </section>
    </div>
  );
}
