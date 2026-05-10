import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "neuroglow",
    name: "NeuroGlow",
    shortName: "Neuro\nGlow",
    headline: "Hand-eye coordination, reimagined.",
    body: "An adaptive LED grid that responds in real-time to patient performance — turning repetitive motor therapy into data-rich, game-like sessions that patients actually want to do.",
    stats: [
      { value: "94%", label: "patient engagement rate" },
      { value: "3×", label: "faster motor recovery" },
    ],
    features: [
      "Adaptive AI difficulty engine",
      "LED stimulus grid array",
      "Cloud-synced clinician dashboard",
      "Gamified session protocols",
    ],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80&fit=crop",
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
      <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-[56px] overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=1920&q=80&fit=crop"
            alt="Biomedical research lab"
            fill priority unoptimized
            className="object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Eyebrow */}
          <div className="clip-wrap mb-8">
            <p className="clip-inner text-[12px] font-semibold text-white/40 uppercase tracking-[0.15em]">
              Rehabilitation Technology — Est. 2024
            </p>
          </div>

          {/* Main headline — each line is individually masked */}
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.03em] mb-12">
            <span className="clip-wrap block"><span className="clip-inner block">Engineering</span></span>
            <span className="clip-wrap block"><span className="clip-inner block text-cyan">recovery.</span></span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/contact" className="btn-cyan h-[44px]">
              <span>Book a Demo</span>
              <div className="icon-box h-[44px] w-[44px]">
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#67FCF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <p className="text-[14px] text-white/35 max-w-xs leading-snug fade-up delay-2">
              Intelligent assistive tech for neurological and motor recovery — designed for clinics, hospitals, and home care.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3 text-white/20 text-[11px] tracking-widest uppercase rotate-90 origin-bottom-right">
          <div className="w-8 h-px bg-white/20"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── DIVIDER ─── */}
      <div className="divider" />

      {/* ── PRODUCTS — TRILO STICKY SPLIT-SCREEN ─────────── */}
      {products.map((product, i) => (
        <section key={product.id}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <span className="text-[11px] font-semibold text-white/25 uppercase tracking-[0.15em]">
              {String(i + 1).padStart(2, "0")} / Hardware
            </span>
          </div>
          <div className="divider" />

          {/* Sticky split: LEFT = image, RIGHT = scrolling content */}
          <div className="flex flex-col md:flex-row">
            {/* LEFT — sticky image panel */}
            <div className="md:w-1/2 md:sticky md:top-[56px] md:h-[calc(100vh-56px)] relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill unoptimized
                className="object-cover opacity-60"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              {/* Big product name watermark */}
              <div className="absolute bottom-10 left-8 z-10">
                <p className="text-[clamp(3rem,6vw,5rem)] font-medium leading-none tracking-[-0.03em] text-white/10 whitespace-pre-line select-none">
                  {product.shortName}
                </p>
              </div>
            </div>

            {/* RIGHT — scrolling detail content */}
            <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-24 md:py-32 gap-0">
              {/* Headline */}
              <div className="mb-8">
                <span className="clip-wrap block">
                  <span className="clip-inner block text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium leading-tight tracking-[-0.02em] text-white">
                    {product.headline}
                  </span>
                </span>
              </div>

              {/* Body copy */}
              <p className="text-[16px] text-white/45 leading-relaxed mb-12 max-w-md fade-up">
                {product.body}
              </p>

              {/* Stats */}
              <div className="flex gap-12 mb-12 fade-up delay-1">
                {product.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[2.8rem] font-medium tracking-tight leading-none text-white mb-1">{stat.value}</p>
                    <p className="text-[12px] text-white/35 uppercase tracking-[0.1em]">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="divider mb-12" />

              {/* Feature list */}
              <ul className="flex flex-col fade-up delay-2">
                {product.features.map((feat, fi) => (
                  <li key={fi} className="flex items-center gap-4 py-4 border-b border-white/[0.06] last:border-b-0">
                    <div className="w-[22px] h-[22px] border border-cyan/40 flex items-center justify-center shrink-0">
                      <span className="text-cyan text-[10px] font-bold">{String(fi + 1).padStart(2, "0")}</span>
                    </div>
                    <span className="text-[14px] text-white/60 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="divider my-12" />

              {/* CTA */}
              <Link href={`/products/${product.id}`} className="btn-cyan h-[44px] w-max fade-up delay-3">
                <span>Explore {product.name}</span>
                <div className="icon-box h-[44px] w-[44px]">
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#67FCF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className="divider" />
        </section>
      ))}

      {/* ── COMING SOON ──────────────────────────────────── */}
      <section className="min-h-[50vh] flex items-center justify-center py-32">
        <div className="text-center px-6">
          <p className="text-[11px] font-semibold text-white/25 uppercase tracking-[0.15em] mb-8 fade-up">Next Release</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-[-0.03em] text-white mb-4">
            <span className="clip-wrap block"><span className="clip-inner block">More innovations</span></span>
            <span className="clip-wrap block"><span className="clip-inner block text-cyan">in development.</span></span>
          </h2>
          <p className="text-[15px] text-white/35 max-w-sm mx-auto mt-6 leading-relaxed fade-up delay-2">
            Our engineering lab is actively developing next-generation assistive solutions for broader neurological conditions.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── DEPLOYED FOR ─────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold text-white/25 uppercase tracking-[0.15em] mb-12 fade-up">Designed for</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06]">
            {["ASD Children", "Cerebral Palsy", "Stroke Survivors", "Parkinson's Disease", "Elderly Care", "Rehab Clinics"].map((client, i) => (
              <div key={i} className="bg-background p-6 hover:bg-white/[0.03] transition-colors duration-200 fade-up">
                <div className="w-1 h-1 bg-cyan mb-4" />
                <p className="text-[13px] text-white/50 font-medium leading-snug">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
