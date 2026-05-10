import Link from "next/link";
import { ArrowLeft, Calendar, Download, Users, Microscope, FileText } from "lucide-react";
import { notFound } from "next/navigation";
import DemoButton from "@/components/DemoButton";

/* ─── Product data ─────────────────────────────────────────────────── */
const productsData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  specs: string[];
  useCases: string[];
  videoUrl?: string;
}> = {
  "neuroglow": {
    name: "NeuroGlow",
    tagline: "AI-powered hand-eye coordination rehabilitation.",
    description: "An advanced system using interactive LED-based engagement paired with real-time data analytics.",
    longDescription: "NeuroGlow transforms the rehabilitation experience for children and adults with neurological conditions. Using an adaptive LED grid that responds in real-time to patient performance, the system gamifies repetitive motor exercises, dramatically improving engagement and compliance. An integrated AI analytics engine continuously measures response times, accuracy, and fatigue patterns, automatically adjusting difficulty to stay in the patient's optimal therapeutic zone.",
    specs: ["Adaptive AI Analytics Engine", "Interactive LED Stimulus Grid", "Cloud Data Sync & Reports", "Gamified Therapy Protocols", "Parent/Clinician Dashboard"],
    useCases: ["Autism Spectrum Disorder", "Cerebral Palsy", "Post-Stroke Recovery", "Traumatic Brain Injury"],
    videoUrl: undefined,
  },
  "smart-walker": {
    name: "Smart Walker",
    tagline: "Mobility assistance for Parkinson's and elderly care.",
    description: "Unprecedented stability and gait monitoring for patients outside the clinical environment.",
    longDescription: "The Smart Walker integrates gyroscopic stabilization, real-time gait analysis sensors, and an emergency fall-detection alert system into a clinically validated mobility aid. Unlike conventional walkers, it transmits objective biomechanical data directly to a physician's dashboard, enabling tele-rehabilitation and remote progress tracking. This closes the critical gap in continuity of care for patients who cannot visit a clinic frequently.",
    specs: ["Gyroscopic Stabilization System", "Real-time 3-Axis Gait Analysis", "Automatic Fall Detection & Alerts", "Tele-Rehab Cloud Integration", "Long-Lasting Battery (24h)"],
    useCases: ["Parkinson's Disease", "Elderly Post-Surgical Rehab", "Multiple Sclerosis", "Hip Fracture Recovery"],
    videoUrl: undefined,
  },
  "foot-pressure": {
    name: "Foot Pressure System",
    tagline: "Advanced gait analysis and biomechanics monitoring.",
    description: "High-resolution sensor grids capturing dynamic foot pressure distribution.",
    longDescription: "The Foot Pressure System deploys a dense array of piezoelectric sensors to map the complete distribution of ground reaction forces during walking, running, and standing. The resulting pressure maps are rendered in real-time on a clinical dashboard, giving orthopedic surgeons and physiotherapists unprecedented precision in diagnosing gait abnormalities, monitoring post-surgical recovery, and designing targeted interventions. Data can be exported in standard clinical formats for EMR integration.",
    specs: ["High-Density Piezoelectric Array", "Dynamic 3D Pressure Mapping", "Live Biomechanics Dashboard", "EMR-Compatible Data Export", "Under-Shoe & Platform Modes"],
    useCases: ["Orthopedic Assessment", "Sports Biomechanics", "Diabetic Foot Monitoring", "Post-Surgical Gait Analysis"],
    videoUrl: undefined,
  }
};

/* ─── Page ─────────────────────────────────────────────────────────── */
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData[slug];
  if (!product) notFound();

  return (
    <div className="flex flex-col text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-screen flex items-end pb-24 bg-background border-b border-brand-teal">
        {/* Background image / 3D render placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-brand-navy flex items-center justify-center">
            <span className="font-mono text-brand-yellow/10 text-xl tracking-widest uppercase">
              &lt;Fill_data: {product.name} 3D Background Render&gt;
            </span>
          </div>
          {/* Gradient keeps text readable over any image */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand-yellow/70 font-bold uppercase tracking-widest text-xs mb-16 hover:text-brand-yellow transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> All Products
          </Link>

          <h1 className="text-7xl md:text-[7rem] font-black tracking-tighter leading-none mb-6">
            {product.name}
          </h1>
          <p className="text-2xl text-brand-yellow font-medium max-w-2xl mb-12 leading-snug">
            {product.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Video demo — client component that owns modal state */}
            <DemoButton productName={product.name} videoUrl={product.videoUrl} />

            <Link
              href="#book"
              className="px-8 py-4 border border-brand-teal text-brand-yellow hover:bg-brand-teal hover:text-white hover:shadow-[0_0_20px_rgba(0,106,103,0.5)] transition-all font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 w-max"
            >
              <Calendar className="w-4 h-4" /> Book Demo Session
            </Link>
          </div>
        </div>
      </section>

      {/* ── Overview & Specs ── */}
      <section className="bg-background border-b border-brand-teal">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-teal">
          <div className="p-12 md:p-20">
            <span className="font-mono text-brand-yellow/50 text-xs tracking-widest uppercase mb-4 block">Overview</span>
            <h2 className="text-3xl font-black text-white mb-8 tracking-tight uppercase">About This Product</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">{product.longDescription}</p>
          </div>
          <div className="p-12 md:p-20 bg-brand-navy">
            <span className="font-mono text-brand-yellow/50 text-xs tracking-widest uppercase mb-4 block">Engineering</span>
            <h2 className="text-3xl font-black text-white mb-8 tracking-tight uppercase">Technical Specs</h2>
            <ul className="space-y-5">
              {product.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-200 font-medium border-b border-brand-teal/30 pb-5 last:border-b-0 last:pb-0">
                  <span className="w-2 h-2 bg-brand-yellow shrink-0"></span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="bg-brand-deep border-b border-brand-teal py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="font-mono text-brand-yellow/50 text-xs tracking-widest uppercase mb-4 block">Applications</span>
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight uppercase flex items-center gap-4">
            <Users className="w-8 h-8 text-brand-teal" /> Who This Helps
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-teal border border-brand-teal">
            {product.useCases.map((uc, i) => (
              <div key={i} className="p-8 hover:bg-brand-teal/10 transition-colors group">
                <span className="font-mono text-brand-yellow/40 text-xs mb-3 block">0{i + 1}</span>
                <p className="text-white font-bold text-lg leading-tight group-hover:text-brand-yellow transition-colors">{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investor Deck ── */}
      <section className="bg-background border-b border-brand-teal py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-brand-yellow/50 text-xs tracking-widest uppercase mb-4 block flex items-center gap-2">
                <FileText className="w-3 h-3" /> Investor Intelligence
              </span>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight uppercase">
                {product.name} <span className="text-brand-yellow">Investor Brief</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Download the dedicated deck for {product.name} — covering unit economics, total addressable market, clinical validation milestones, IP filings, and manufacturing cost projections.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <button className="px-8 py-5 bg-brand-yellow text-black font-bold uppercase tracking-widest text-sm hover:bg-white hover:shadow-[0_0_30px_rgba(255,244,183,0.5)] transition-all flex items-center justify-center gap-3 w-full">
                <Download className="w-4 h-4" /> Download Investor Deck
              </button>
              <p className="font-mono text-brand-yellow/40 text-xs text-center uppercase tracking-widest">
                &lt;Fill_data: Add PDF link to product data&gt;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Book Demo & Contact ── */}
      <section id="book" className="bg-brand-navy py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <span className="font-mono text-brand-yellow/50 text-xs tracking-widest uppercase mb-4 block">Get In Touch</span>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight uppercase">
                Integrate <span className="text-brand-yellow">{product.name}</span>
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-10">
                Reach our clinical deployment team to discuss pilot programs, institutional licensing, or bulk pricing.
              </p>
              <div className="space-y-4 text-zinc-400 text-sm font-mono">
                <p><span className="text-brand-yellow/60">Email ——</span> &lt;Fill_data: contact@savatronic.com&gt;</p>
                <p><span className="text-brand-yellow/60">Phone ——</span> &lt;Fill_data: +91 XXXXX XXXXX&gt;</p>
              </div>
            </div>

            {/* Right: form */}
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="font-mono text-zinc-500 text-xs tracking-widest uppercase">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-brand-teal py-3 text-white font-bold tracking-wide placeholder:text-zinc-700 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-mono text-zinc-500 text-xs tracking-widest uppercase">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-brand-teal py-3 text-white font-bold tracking-wide placeholder:text-zinc-700 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-mono text-zinc-500 text-xs tracking-widest uppercase">Organization / Hospital</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-brand-teal py-3 text-white font-bold tracking-wide placeholder:text-zinc-700 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-mono text-zinc-500 text-xs tracking-widest uppercase">Message</label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-brand-teal py-3 text-white font-bold tracking-wide placeholder:text-zinc-700 focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                />
              </div>
              <button
                type="button"
                className="mt-4 px-8 py-4 bg-brand-yellow text-black font-bold uppercase tracking-widest text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(255,244,183,0.5)] transition-all w-full"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
