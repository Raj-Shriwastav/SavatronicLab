import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";

const products = [
  {
    id: "neuroglow",
    name: "NeuroGlow",
    shortName: "Neuro\nGlow",
    headline: "Hand-eye coordination, reimagined.",
    body: "An adaptive LED grid that responds in real-time to patient performance — turning repetitive motor therapy into data-rich, game-like sessions that patients actually want to do.",
    stats: [
      { value: "$5.3k", label: "IEEE Funding" },
      { value: "49+", label: "Estimated Impact" },
    ],
    features: [
      "Interactive LED cues & sensors",
      "Real-time feedback visualization",
      "Measures & enhances response times",
      "Partnered with Alert NGO & Amrit Centre",
    ],
    image: "/images/NEUROGLOW.jpeg",
  },
  {
    id: "smart-walker",
    name: "Smart Walker",
    shortName: "Smart\nWalker",
    headline: "Every step, tracked. Every fall, prevented.",
    body: "Gyroscopic stabilization and real-time gait sensors transform a traditional walker into a remote-monitoring platform. Physicians see your patient's movement data in real time — from anywhere.",
    stats: [
      { value: "24h", label: "continuous battery life" },
      { value: "99%", label: "fall detection accuracy" },
    ],
    features: [
      "Gyroscopic balance system",
      "3-axis real-time gait analysis",
      "Automatic fall detection & alerts",
      "Tele-rehab cloud integration",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80&fit=crop",
  },
  {
    id: "foot-pressure",
    name: "Foot Pressure System",
    shortName: "Foot\nPressure",
    headline: "Gait data precise enough to change a diagnosis.",
    body: "A dense piezoelectric sensor array maps ground reaction forces in real-time. The result: pressure maps so detailed, orthopedic surgeons can catch what X-rays miss.",
    stats: [
      { value: "512", label: "sensors per sq. foot" },
      { value: "<5ms", label: "measurement latency" },
    ],
    features: [
      "High-density piezoelectric array",
      "Dynamic 3D pressure mapping",
      "Live biomechanics dashboard",
      "EMR-compatible data export",
    ],
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=80&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col text-white" style={{ fontFamily: "'Overused Grotesk', system-ui, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <HeroSection />

      {/* ── DIVIDER ─── */}
      <div className="divider" />

      {/* ── PRODUCTS — STICKY SPLIT-SCREEN WITH PARALLAX ── */}
      {products.map((product, i) => (
        <ProductSection key={product.id} product={product} index={i} />
      ))}

      {/* ── COMING SOON ──────────────────────────────────── */}
      <section className="min-h-[50vh] flex items-center justify-center py-32">
        <div className="text-center px-6">
          <p className="text-[11px] font-semibold text-white/25 uppercase tracking-[0.15em] mb-8 fade-up">Next Release</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-[-0.03em] text-white mb-4">
            <span className="clip-wrap block"><span className="clip-inner block">More innovations</span></span>
            <span className="clip-wrap block"><span className="clip-inner block text-white/40">in development.</span></span>
          </h2>
          <p className="text-[15px] text-white/35 max-w-sm mx-auto mt-6 leading-relaxed fade-up delay-2">
            Our engineering team is actively developing next-generation assistive solutions for broader neurological conditions.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── DEPLOYED FOR ─────────────────────────────────── */}
      <section className="py-32 border-t border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 fade-up">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight text-white/80 max-w-lg leading-tight">
              Clinical precision for diverse applications.
            </h2>
            <p className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em] mt-6 md:mt-0">
              Target Patient Groups
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-line">
            {["ASD Children", "Cerebral Palsy", "Stroke Survivors", "Parkinson's Disease", "Elderly Care", "Rehab Clinics"].map((client, i) => (
              <div key={i} className="group border-r border-b border-line p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500 fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-4 h-[1px] bg-white/20 mb-6 group-hover:bg-white group-hover:w-8 transition-all duration-500" />
                <p className="text-[15px] text-white/60 font-medium leading-snug group-hover:text-white transition-colors duration-500">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
