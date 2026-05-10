import Link from "next/link";
import { ArrowRight, Play, Calendar, Download } from "lucide-react";

export default function Home() {
  const products = [
    {
      id: "neuroglow",
      name: "NeuroGlow",
      tagline: "AI-powered hand-eye coordination rehabilitation.",
      description: "An advanced system using interactive LED-based engagement paired with real-time data analytics. It adapts intelligently to the patient's performance, transforming repetitive exercises into dynamic, therapy-through-play recovery sessions.",
    },
    {
      id: "smart-walker",
      name: "Smart Walker",
      tagline: "Mobility assistance for Parkinson’s and elderly care.",
      description: "Designed to provide unprecedented stability and gait monitoring. The Smart Walker collects objective movement data outside the clinical environment, allowing physicians to track progress remotely.",
    },
    {
      id: "foot-pressure",
      name: "Foot Pressure System",
      tagline: "Advanced gait analysis and biomechanics monitoring.",
      description: "High-resolution sensor grids capture dynamic foot pressure distribution, providing critical biomechanical insights for orthopedic and neuro-rehabilitation assessments.",
    }
  ];

  return (
    <div className="flex flex-col text-white">
      {/* Hero Section */}
      <section className="bg-background border-b border-brand-teal relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-white">
            REHABILITATION.<br />
            <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(255,244,183,0.3)]">REENGINEERED.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl font-medium leading-relaxed mb-12">
            Savatronic Tech develops intelligent, accessible assistive technologies for neurological and motor recovery.
          </p>
        </div>
      </section>

      {/* Cinematic Full-Screen Product Scroll */}
      <section className="bg-background">
        {products.map((product, index) => (
          <div key={product.id} className="relative h-[100vh] w-full flex items-center overflow-hidden border-b border-brand-teal">
            {/* Background Image / Render Placeholder */}
            <div className="absolute inset-0 z-0">
               <div className="w-full h-full bg-brand-navy flex items-center justify-center opacity-40">
                  <span className="font-mono text-brand-yellow/30 text-2xl tracking-widest uppercase">&lt;Fill_data: {product.name} 3D Render Background&gt;</span>
               </div>
               {/* Dark Gradient Overlay for text readability */}
               <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
              <span className="text-brand-yellow font-mono text-sm mb-4 block">0{index + 1} // HARDWARE</span>
              <h2 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-lg">{product.name}</h2>
              <p className="text-2xl font-medium text-brand-yellow mb-6 leading-snug max-w-2xl drop-shadow-md">{product.tagline}</p>
              <p className="text-lg text-zinc-300 mb-12 leading-relaxed max-w-xl">{product.description}</p>
              
              <Link href={`/products/${product.id}`} className="inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow text-black font-bold uppercase tracking-widest text-sm hover:bg-white hover:shadow-[0_0_30px_rgba(255,244,183,0.6)] transition-all w-max group will-change-transform">
                Explore Product <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}

        {/* Coming Soon Section */}
        <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden border-b border-brand-teal bg-background">
           <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10 text-center px-6">
              <span className="text-6xl text-brand-teal font-light block mb-4">+</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">MORE INNOVATIONS <span className="text-brand-yellow">COMING SOON</span></h2>
              <p className="text-zinc-400 text-lg">Our engineering lab is actively developing next-generation assistive solutions.</p>
           </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-brand-navy py-32 border-b border-brand-teal relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold mb-12 tracking-tight uppercase text-white">Deployed For</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["ASD Children", "Cerebral Palsy", "Stroke Survivors", "Parkinson’s Disease", "Elderly Care", "Rehab Clinics"].map((client, i) => (
              <span key={i} className="px-6 py-3 border border-brand-teal text-white text-sm font-medium tracking-wide uppercase hover:border-brand-yellow hover:text-brand-yellow hover:shadow-[0_0_15px_rgba(255,244,183,0.2)] transition-all cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
