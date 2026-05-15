export default function Gallery() {
  const images = Array.from({ length: 6 });

  return (
    <div className="flex flex-col text-white pb-24">
      <section className="pt-[150px] pb-[80px] px-6 max-w-7xl mx-auto w-full">
        <div className="clip-wrap mb-4">
          <p className="clip-inner text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]">Visual Archive</p>
        </div>
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em]">
          <span className="clip-wrap block"><span className="clip-inner block">Gallery.</span></span>
        </h1>
        <p className="text-[15px] text-white/40 max-w-md leading-relaxed mt-8 fade-up delay-2">
          A visual journey of our prototypes, workshops, testing sessions, and exhibitions.
        </p>
      </section>

      <div className="divider" />

      <section className="px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 border-l border-t border-line">
          {images.map((_, i) => (
            <div key={i} className="aspect-square border-r border-b border-line flex flex-col items-center justify-center text-white/10 hover:bg-white/[0.02] transition-colors duration-500 group fade-up">
              <div className="w-[1px] h-12 bg-white/10 mb-4 group-hover:h-16 transition-all duration-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">&lt;Fill_data: Image {i+1}&gt;</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
