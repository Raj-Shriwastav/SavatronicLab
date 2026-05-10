export default function About() {
  return (
    <div className="flex flex-col text-zinc-100">
      <section className="bg-background border-b border-zinc-800">
        <div className="container mx-auto px-6 py-24 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 text-white">THE COMPANY</h1>
          <p className="text-2xl md:text-3xl text-zinc-300 font-medium leading-tight max-w-4xl">
            Savatronic Tech is a rehabilitation engineering startup. We build accessible, intelligent, and clinical-grade assistive technologies to solve complex motor recovery challenges.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="p-12 md:p-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-brand-neon">THE PROBLEM</h2>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-4 border-t border-zinc-800 pt-4">
                <span className="font-mono text-zinc-600 text-sm">01</span>
                <span>Highly expensive, clinic-dependent systems limit patient access.</span>
              </li>
              <li className="flex items-start gap-4 border-t border-zinc-800 pt-4">
                <span className="font-mono text-zinc-600 text-sm">02</span>
                <span>Rural and underserved areas lack adequate rehabilitation infrastructure.</span>
              </li>
              <li className="flex items-start gap-4 border-t border-zinc-800 pt-4">
                <span className="font-mono text-zinc-600 text-sm">03</span>
                <span>Current repetitive exercises fail to engage patients, leading to high dropout rates.</span>
              </li>
              <li className="flex items-start gap-4 border-t border-zinc-800 pt-4 border-b pb-4">
                <span className="font-mono text-zinc-600 text-sm">04</span>
                <span>Lack of continuous, objective data tracking outside the clinical environment.</span>
              </li>
            </ul>
          </div>

          <div className="p-12 md:p-16 bg-background">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-white">OUR METHODOLOGY</h2>
            <div className="prose prose-invert text-zinc-400">
              <p className="mb-6">
                We employ a strict <strong className="text-white">Design Thinking</strong> approach, rooted in our origins at the Biomedical Innovation Lab. Every solution is engineered with a human-centric focus.
              </p>
              <p>
                By integrating AI-driven analytics with highly engaging, "therapy-through-play" methodologies, we transform repetitive exercises into dynamic, data-rich recovery sessions that can be performed anywhere.
              </p>
              <div className="mt-12 p-6 border border-brand-neon bg-brand-neon/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-neon"></div>
                <p className="font-mono text-sm text-brand-neon uppercase tracking-widest mb-2">Vision Statement</p>
                <p className="font-bold text-white italic">
                  &lt;Fill_data: Insert specific vision and mission statement here&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
