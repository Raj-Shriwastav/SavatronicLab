import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "neuroglow",
    name: "NeuroGlow",
    headline: "Rehabilitation through engagement.",
    description: "AI-powered hand-eye coordination rehabilitation system using interactive LED-based engagement and data analytics. Developed in partnership with Alert NGO, Joan Enterprise, and Amrit Centre For Special Needs with $5,300 IEEE Funding.",
    useCases: ["ASD Children", "Cerebral Palsy", "Stroke Recovery"],
    status: "Available",
    image: "/images/NEUROGLOW.jpeg",
    specs: [
      { label: "Hardware", value: "Modular LED & Sensor Array" },
      { label: "Funding", value: "$5,300 IEEE IMS" },
      { label: "Impact", value: "49+ Patients" }
    ]
  },
  {
    id: "smart-walker",
    name: "Smart Walker",
    headline: "Every step, tracked. Every fall, prevented.",
    description: "Mobility assistance system designed to support Parkinson's disease patients and elderly rehabilitation.",
    useCases: ["Parkinson's Disease", "Elderly Care", "Gait Training"],
    status: "In Development",
    image: null,
    specs: [
      { label: "Sensors", value: "3-axis gait analysis" },
      { label: "Safety", value: "Auto fall detection" }
    ]
  },
  {
    id: "foot-pressure",
    name: "Foot Pressure System",
    headline: "Gait data precise enough to change a diagnosis.",
    description: "Advanced gait analysis and biomechanics monitoring system for comprehensive rehabilitation assessment.",
    useCases: ["Biomechanics Research", "Orthopedics", "Rehabilitation"],
    status: "In Development",
    image: null,
    specs: [
      { label: "Resolution", value: "High-density piezo array" },
      { label: "Latency", value: "<5ms live mapping" }
    ]
  }
];

export default function ProductsIndex() {
  return (
    <div className="flex flex-col text-white pb-24">
      {/* Cinematic Header */}
      <section className="pt-[150px] pb-[80px] px-6 max-w-7xl mx-auto w-full">
        <div className="clip-wrap mb-4">
          <p className="clip-inner text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]">
            Hardware & Software Systems
          </p>
        </div>
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          <span className="clip-wrap block"><span className="clip-inner block">Precision tools for</span></span>
          <span className="clip-wrap block"><span className="clip-inner block text-white/40">clinical recovery.</span></span>
        </h1>
      </section>

      <div className="divider" />

      {/* Sticky Scroll Products */}
      {products.map((product, index) => (
        <section key={product.id} className="relative border-b border-line">
          {/* Split Container */}
          <div className="flex flex-col md:flex-row">
            
            {/* LEFT: Sticky Image Panel */}
            <div className="md:w-1/2 md:sticky md:top-[56px] md:h-[calc(100vh-56px)] bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center border-r border-line">
              {product.image ? (
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 image-reveal"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/10 p-12 text-center bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                  <div className="w-[1px] h-24 bg-white/10 mb-8 fade-up" />
                  <span className="text-xs uppercase tracking-[0.3em] fade-up delay-1">In Development</span>
                  <p className="text-4xl mt-4 font-light tracking-tight fade-up delay-2">{product.name}</p>
                </div>
              )}
              {/* Product Label Watermark */}
              <div className="absolute bottom-8 left-8 pointer-events-none">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">{String(index + 1).padStart(2, '0')} // {product.name}</p>
              </div>
            </div>

            {/* RIGHT: Scrolling Content */}
            <div className="md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[100vh]">
              <div className="flex justify-between items-start mb-16 fade-up">
                <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-medium tracking-tight leading-[1]">{product.name}</h2>
                <div className="px-3 py-1 border border-line text-[10px] uppercase tracking-widest text-white/50 mt-2">
                  {product.status}
                </div>
              </div>

              <div className="clip-wrap mb-8">
                <p className="clip-inner text-[clamp(1.2rem,2vw,1.8rem)] text-white/80 leading-snug tracking-tight">
                  {product.headline}
                </p>
              </div>

              <p className="text-[15px] text-white/40 leading-relaxed mb-16 max-w-md fade-up delay-1">
                {product.description}
              </p>

              {/* Specs Table */}
              <div className="border-t border-line mb-16 fade-up delay-2">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-line gap-2 sm:gap-0">
                    <span className="sm:w-1/3 text-[11px] uppercase tracking-[0.15em] text-white/30">{spec.label}</span>
                    <span className="sm:w-2/3 text-[14px] text-white/80 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mb-16 fade-up delay-3">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6">Target Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((uc, i) => (
                    <span key={i} className="px-4 py-2 bg-white/[0.03] text-[12px] text-white/60 font-medium tracking-wide">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="fade-up delay-4 mt-auto pt-12">
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:text-cyan transition-colors group"
                >
                  <span className="w-8 h-[1px] bg-white group-hover:bg-cyan transition-colors" />
                  View Full Specs
                </Link>
              </div>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}
