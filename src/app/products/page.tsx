import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "neuroglow",
    name: "NEUROGLOW",
    description: "AI-powered hand-eye coordination rehabilitation system using interactive LED-based engagement and data analytics.",
    useCases: ["ASD Children", "Cerebral Palsy", "Stroke Recovery"],
    status: "Available"
  },
  {
    id: "smart-walker",
    name: "SMART WALKER",
    description: "Mobility assistance system designed to support Parkinson's disease patients and elderly rehabilitation.",
    useCases: ["Parkinson's Disease", "Elderly Care", "Gait Training"],
    status: "Available"
  },
  {
    id: "foot-pressure",
    name: "FOOT PRESSURE SYSTEM",
    description: "Advanced gait analysis and biomechanics monitoring system for comprehensive rehabilitation assessment.",
    useCases: ["Biomechanics Research", "Orthopedics", "Rehabilitation"],
    status: "Available"
  }
];

export default function ProductsIndex() {
  return (
    <div className="flex flex-col text-white">
      {/* Hero */}
      <section className="bg-background border-b border-brand-teal relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 py-24 max-w-5xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">PRODUCTS</h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
            Hardware and software platforms engineered for clinical precision and patient engagement.
          </p>
        </div>
      </section>

      {/* Product rows */}
      <section className="bg-background">
        <div className="divide-y divide-brand-teal">
          {products.map((product) => (
            <div key={product.id} className="grid md:grid-cols-12 min-h-[420px]">
              {/* Image */}
              <div className="md:col-span-5 bg-brand-navy border-r border-brand-teal flex flex-col justify-center items-center p-12 text-brand-yellow/20 relative overflow-hidden">
                <span className="relative z-10 text-sm font-mono tracking-widest uppercase text-center">
                  &lt;Fill_data: {product.name} Image / 3D Render&gt;
                </span>
              </div>

              {/* Details */}
              <div className="md:col-span-7 p-12 md:p-16 flex flex-col justify-center relative bg-background">
                <div className="absolute top-8 right-8 px-3 py-1 border border-brand-yellow text-brand-yellow text-xs font-bold uppercase tracking-widest bg-brand-yellow/5 shadow-[0_0_10px_rgba(255,244,183,0.1)]">
                  {product.status}
                </div>
                <h2 className="text-4xl font-black tracking-tight text-white mb-6">{product.name}</h2>
                <p className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">{product.description}</p>

                <div className="mb-10">
                  <h3 className="text-xs font-bold text-brand-yellow/40 mb-4 uppercase tracking-widest border-b border-brand-teal pb-2">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.useCases.map((uc, i) => (
                      <span key={i} className="px-3 py-1 bg-brand-navy text-zinc-200 text-xs font-semibold tracking-wide uppercase border border-brand-teal">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center gap-3 px-6 py-3 border border-brand-yellow text-brand-yellow font-bold uppercase tracking-widest text-sm hover:bg-brand-yellow hover:text-black hover:shadow-[0_0_20px_rgba(255,244,183,0.3)] transition-all w-max group"
                >
                  Explore & Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon row */}
        <div className="min-h-[280px] flex items-center justify-center border-t border-brand-teal bg-brand-deep">
          <div className="text-center px-6">
            <span className="text-5xl text-brand-teal font-light block mb-4">+</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-2">
              MORE COMING <span className="text-brand-yellow">SOON</span>
            </h2>
            <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase mt-2">Next-gen innovations in development</p>
          </div>
        </div>
      </section>
    </div>
  );
}
