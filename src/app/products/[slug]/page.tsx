import Link from "next/link";
import Image from "next/image";
import { Calendar, Download } from "lucide-react";
import { notFound } from "next/navigation";
import DemoButton from "@/components/DemoButton";
import ContactForm from "@/components/ContactForm";

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
            className="object-cover opacity-30 grayscale mix-blend-luminosity"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 fade-up">
          <Link href="/products" className="inline-flex items-center gap-4 text-[10px] font-bold hover:text-cyan transition-colors mb-16 tracking-[0.2em] uppercase text-white/50">
            <span className="w-8 h-[1px] bg-white/50" /> Back to Hardware
          </Link>

          <div className="inline-flex items-center gap-3 px-4 py-2 border border-line text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-cyan"></span>
            Hardware / Device
          </div>

          <h1 className="text-[clamp(4rem,10vw,8rem)] font-medium tracking-tight leading-[0.9] mb-8">
            <span className="clip-wrap block"><span className="clip-inner block">{product.name}</span></span>
          </h1>
          <p className="text-[clamp(1.5rem,2vw,2rem)] text-white/50 font-medium max-w-2xl mb-14 leading-snug fade-up delay-1">
            {product.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 fade-up delay-2">
            <DemoButton productName={product.name} videoUrl={product.videoUrl} />
            <Link
              href="#book"
              className="inline-flex items-center gap-3 px-7 py-4 border border-line text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
            >
              <Calendar className="w-4 h-4" />
              Book Clinical Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW + SPECS ── */}
      <section className="bg-background border-t border-line">
        <div className="container mx-auto px-6 max-w-7xl py-32">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="fade-up">
              <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-6 block">Overview</span>
              <h2 className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-tight text-white mb-8">Engineering Focus</h2>
              <p className="text-[15px] text-white/50 leading-relaxed max-w-lg">{product.longDescription}</p>

              {/* Temp product photos */}
              <div className="grid grid-cols-2 gap-px bg-line mt-16 border border-line">
                {product.detailImages.map((img, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden bg-background">
                    <Image src={img} alt={`${product.name} detail ${i + 1}`} fill className="object-cover opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" unoptimized />
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up delay-1">
              <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-6 block">Technical Specs</span>
              <h2 className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-tight text-white mb-8">System Architecture</h2>
              <ul className="space-y-0 border-t border-line">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-6 py-6 border-b border-line text-white/60 hover:text-white transition-colors duration-200 group">
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-cyan transition-colors">0{i+1}</span>
                    <span className="text-[14px] font-medium tracking-wide">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ── */}
      <section className="bg-[#050505] border-t border-line py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-6 block fade-up">Applications</span>
          <h2 className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-tight text-white mb-16 flex items-center gap-4 fade-up delay-1">
            Target Patient Groups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
            {product.useCases.map((uc, i) => (
              <div key={i} className="border-r border-b border-line p-10 hover:bg-white/[0.02] transition-colors duration-500 group fade-up">
                <span className="font-mono text-white/20 text-[10px] tracking-[0.2em] mb-6 block">0{i + 1}</span>
                <p className="text-white/60 font-medium text-[15px] leading-tight group-hover:text-white transition-colors duration-300">{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTOR DECK ── */}
      <section className="bg-background border-t border-line py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="border border-line p-12 md:p-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10 hover:bg-white/[0.01] transition-colors duration-500 fade-up">
            <div className="max-w-xl">
              <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-6 block">Investor Intelligence</span>
              <h2 className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-tight text-white mb-6">Download the {product.name} Brief</h2>
              <p className="text-[15px] text-white/50 leading-relaxed">
                Access unit economics, clinical validation milestones, IP filings, and the total addressable market analysis for this specific product.
              </p>
            </div>
            <button className="shrink-0 inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-cyan transition-colors duration-300">
              Download PDF
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── BOOK + CONTACT ── */}
      <section id="book" className="bg-[#050505] border-t border-line py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-24">
            <div className="fade-up">
              <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-6 block">Contact Sales</span>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-medium tracking-tight text-white mb-8">
                Integrate <span className="text-white/40">{product.name}</span>
              </h2>
              <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-sm">
                Reach our clinical deployment team to discuss pilot programs, institutional licensing, or bulk pricing.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-2">Email</p>
              <p className="text-xl font-medium text-white/80">savatronic12@gmail.com</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-2">Phone</p>
                  <p className="text-xl font-medium text-white/80">&lt;Fill_data: +91 XXXXX XXXXX&gt;</p>
                </div>
              </div>
            </div>

            <div className="fade-up delay-1">
              <ContactForm source={`Product Demo - ${product.name}`} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
