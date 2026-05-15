export default function About() {
  return (
    <div className="flex flex-col text-white pb-24">
      {/* Cinematic Header */}
      <section className="pt-[150px] pb-[80px] px-6 max-w-7xl mx-auto w-full">
        <div className="clip-wrap mb-4">
          <p className="clip-inner text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]">
            Company Overview
          </p>
        </div>
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          <span className="clip-wrap block"><span className="clip-inner block">Engineering</span></span>
          <span className="clip-wrap block"><span className="clip-inner block text-white/40">autonomy.</span></span>
        </h1>
      </section>

      <div className="divider" />

      {/* Split Content */}
      <section className="border-b border-line">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Column */}
          <div className="md:w-1/2 p-8 md:p-16 lg:p-24 border-r border-line bg-background">
            <h2 className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-tight mb-12 fade-up">
              The Protocol
            </h2>
            
            <div className="space-y-8 fade-up delay-1">
              <div className="border-t border-line pt-4 flex gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 shrink-0">01</span>
                <p className="text-[14px] text-white/70 leading-relaxed">Highly expensive, clinic-dependent systems limit patient access.</p>
              </div>
              <div className="border-t border-line pt-4 flex gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 shrink-0">02</span>
                <p className="text-[14px] text-white/70 leading-relaxed">Rural and underserved areas lack adequate rehabilitation infrastructure.</p>
              </div>
              <div className="border-t border-line pt-4 flex gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 shrink-0">03</span>
                <p className="text-[14px] text-white/70 leading-relaxed">Current repetitive exercises fail to engage patients, leading to high dropout rates.</p>
              </div>
              <div className="border-t border-line pt-4 flex gap-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 shrink-0">04</span>
                <p className="text-[14px] text-white/70 leading-relaxed">Lack of continuous, objective data tracking outside the clinical environment.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 p-8 md:p-16 lg:p-24 bg-[#050505]">
            <h2 className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-tight mb-12 fade-up">
              Our Methodology
            </h2>
            <div className="text-[15px] text-white/50 leading-relaxed space-y-6 fade-up delay-1">
              <p>
                Savatronic Tech is a rehabilitation engineering startup. We build accessible, intelligent, and clinical-grade assistive technologies to solve complex motor recovery challenges.
              </p>
              <p>
                We employ a strict <span className="text-white">Design Thinking</span> approach, rooted in our deep engineering background. Every solution is engineered with a human-centric focus.
              </p>
              <p>
                By integrating AI-driven analytics with highly engaging, "therapy-through-play" methodologies, we transform repetitive exercises into dynamic, data-rich recovery sessions that can be performed anywhere.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="mt-16 p-8 border border-line bg-white/[0.02] fade-up delay-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Vision Statement</p>
              <p className="text-lg font-medium text-white italic">
                “Engineering accessible rehabilitation technologies for neurological and motor healthcare.”
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
