import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Download, Users } from "lucide-react";
import { notFound } from "next/navigation";
import DemoButton from "@/components/DemoButton";

const productsData: Record<string, {
  name: string;
  tagline: string;
  longDescription: string;
  specs: string[];
  useCases: string[];
  videoUrl?: string;
  heroImage: string;
  detailImages: string[];
}> = {
  "neuroglow": {
    name: "NeuroGlow",
    tagline: "AI-powered hand-eye coordination rehabilitation.",
    longDescription: "NeuroGlow transforms the rehabilitation experience using an adaptive LED grid that responds in real-time to patient performance, gamifying motor exercises and dramatically improving engagement. An integrated AI analytics engine continuously measures response times, accuracy, and fatigue patterns — automatically adjusting difficulty to keep patients in their optimal therapeutic zone.",
    specs: ["Adaptive AI Analytics Engine", "Interactive LED Stimulus Grid", "Cloud Data Sync & Reports", "Gamified Therapy Protocols", "Parent/Clinician Dashboard"],
    useCases: ["Autism Spectrum Disorder", "Cerebral Palsy", "Post-Stroke Recovery", "Traumatic Brain Injury"],
    videoUrl: undefined,
    heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1800&q=80&fit=crop",
    detailImages: [
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=900&q=80&fit=crop",
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=900&q=80&fit=crop",
    ],
  },
  "smart-walker": {
    name: "Smart Walker",
    tagline: "Mobility assistance for Parkinson's and elderly care.",
    longDescription: "The Smart Walker integrates gyroscopic stabilization, real-time gait analysis sensors, and an emergency fall-detection alert system into a clinically validated mobility aid. Unlike conventional walkers, it transmits objective biomechanical data directly to a physician's dashboard — enabling tele-rehabilitation and remote progress tracking.",
    specs: ["Gyroscopic Stabilization System", "Real-time 3-Axis Gait Analysis", "Automatic Fall Detection & Alerts", "Tele-Rehab Cloud Integration", "Long-Lasting Battery (24h)"],
    useCases: ["Parkinson's Disease", "Elderly Post-Surgical Rehab", "Multiple Sclerosis", "Hip Fracture Recovery"],
    videoUrl: undefined,
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1800&q=80&fit=crop",
    detailImages: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&fit=crop",
      "https://images.unsplash.com/photo-1518085250887-2f903c200fee?w=900&q=80&fit=crop",
    ],
  },
  "foot-pressure": {
    name: "Foot Pressure System",
    tagline: "Advanced gait analysis and biomechanics monitoring.",
    longDescription: "The Foot Pressure System deploys a dense array of piezoelectric sensors to map the complete distribution of ground reaction forces during walking, running, and standing. The resulting pressure maps are rendered in real-time on a clinical dashboard, giving orthopedic surgeons and physiotherapists unprecedented precision in diagnosing gait abnormalities.",
    specs: ["High-Density Piezoelectric Array", "Dynamic 3D Pressure Mapping", "Live Biomechanics Dashboard", "EMR-Compatible Data Export", "Under-Shoe & Platform Modes"],
    useCases: ["Orthopedic Assessment", "Sports Biomechanics", "Diabetic Foot Monitoring", "Post-Surgical Gait Analysis"],
    videoUrl: undefined,
    heroImage: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1800&q=80&fit=crop",
    detailImages: [
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&q=80&fit=crop",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=900&q=80&fit=crop",
    ],
  }
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData[slug];
  if (!product) notFound();

  return (
    <div className="flex flex-col text-white">

      {/* ─── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-24 pt-20 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-white/40 text-xs font-medium hover:text-brand-cyan transition-colors mb-16 tracking-wide uppercase">
            <ArrowLeft className="w-3 h-3" /> All Products
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-brand-cyan"></span>
            Hardware Platform
          </div>

          <h1 className="text-7xl md:text-[7rem] font-medium tracking-tight leading-none mb-6">
            {product.name}
          </h1>
          <p className="text-2xl text-white/50 font-medium max-w-xl mb-14 leading-snug">
            {product.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <DemoButton productName={product.name} videoUrl={product.videoUrl} />
            <Link
              href="#book"
              className="inline-flex items-center gap-3 px-7 py-4 glass border border-white/20 text-white font-bold text-sm tracking-wide hover:border-brand-cyan/40 hover:text-brand-cyan transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Demo Session
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW + SPECS ── */}
      <section className="bg-zinc-950 border-t border-white/8">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4 block">Overview</span>
              <h2 className="text-4xl font-medium tracking-tight text-white mb-8">About this product</h2>
              <p className="text-lg text-white/50 leading-relaxed">{product.longDescription}</p>

              {/* Temp product photos */}
              <div className="grid grid-cols-2 gap-3 mt-10">
                {product.detailImages.map((img, i) => (
                  <div key={i} className="relative aspect-video overflow-hidden border border-white/8">
                    <Image src={img} alt={`${product.name} detail ${i + 1}`} fill className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-300" unoptimized />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4 block">Engineering</span>
              <h2 className="text-4xl font-medium tracking-tight text-white mb-8">Technical Specs</h2>
              <ul className="space-y-0 border-t border-white/8">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-4 py-5 border-b border-white/8 text-white/60 hover:text-white transition-colors duration-200">
                    <span className="w-1.5 h-1.5 bg-brand-cyan shrink-0"></span>
                    <span className="font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ── */}
      <section className="bg-background border-t border-white/8 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4 block">Applications</span>
          <h2 className="text-4xl font-medium tracking-tight text-white mb-12 flex items-center gap-4">
            <Users className="w-7 h-7 text-white/20" />
            Who This Helps
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {product.useCases.map((uc, i) => (
              <div key={i} className="glass border border-white/8 p-8 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-all duration-300 group">
                <span className="font-mono text-brand-cyan/40 text-xs mb-3 block">0{i + 1}</span>
                <p className="text-white font-medium text-lg leading-tight group-hover:text-brand-cyan transition-colors duration-200">{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTOR DECK ── */}
      <section className="bg-zinc-950 border-t border-white/8 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="glass border border-white/8 p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div>
              <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4 block">Investor Intelligence</span>
              <h2 className="text-4xl font-medium tracking-tight text-white mb-4">{product.name} Investor Brief</h2>
              <p className="text-white/40 max-w-xl leading-relaxed">
                Download the dedicated deck — covering unit economics, clinical validation milestones, IP filings, and total addressable market for {product.name}.
              </p>
            </div>
            <button className="shrink-0 inline-flex items-center gap-3 px-7 py-4 bg-brand-cyan text-black font-bold text-sm tracking-wide hover:bg-white transition-colors duration-200 glow-cyan">
              <Download className="w-4 h-4" />
              Download Deck
            </button>
          </div>
        </div>
      </section>

      {/* ─── BOOK + CONTACT ── */}
      <section id="book" className="bg-background border-t border-white/8 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4 block">Contact</span>
              <h2 className="text-4xl font-medium tracking-tight text-white mb-6">
                Integrate <span className="text-brand-cyan">{product.name}</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10">
                Reach our clinical deployment team to discuss pilot programs, institutional licensing, or bulk pricing.
              </p>
              <div className="space-y-4">
                <p className="text-white/40 text-sm"><span className="text-brand-cyan font-mono">Email ——</span> &lt;Fill_data: contact@savatronic.com&gt;</p>
                <p className="text-white/40 text-sm"><span className="text-brand-cyan font-mono">Phone ——</span> &lt;Fill_data: +91 XXXXX XXXXX&gt;</p>
              </div>
            </div>

            <form className="flex flex-col gap-6">
              {[
                { label: "Your Name", type: "text" },
                { label: "Email Address", type: "email" },
                { label: "Organization / Hospital", type: "text" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-2">
                  <label className="font-mono text-white/30 text-xs tracking-widest uppercase">{field.label}</label>
                  <input
                    type={field.type}
                    className="w-full bg-transparent border-b border-white/12 py-3 text-white font-medium focus:outline-none focus:border-brand-cyan transition-colors duration-200"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-white/30 text-xs tracking-widest uppercase">Message</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-white/12 py-3 text-white font-medium focus:outline-none focus:border-brand-cyan transition-colors duration-200 resize-none" />
              </div>
              <button type="button" className="mt-4 w-full py-4 bg-brand-cyan text-black font-bold tracking-wide text-sm hover:bg-white transition-colors duration-200">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
