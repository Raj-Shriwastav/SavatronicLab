export default function Contact() {
  return (
    <div className="flex flex-col text-zinc-100">
      <section className="bg-background border-b border-zinc-800">
        <div className="container mx-auto px-6 py-24 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 text-white">CONTACT</h1>
          <p className="text-2xl md:text-3xl text-zinc-300 font-medium leading-tight max-w-4xl">
            Reach out to our team for product demos, research partnerships, or media inquiries.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800 min-h-[600px]">
          
          <div className="p-12 md:p-24 bg-background flex flex-col justify-center">
            <h2 className="text-3xl font-black tracking-tight mb-12 uppercase text-white">Direct Inquiries</h2>
            <div className="space-y-8">
              <div>
                <p className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-2">Email</p>
                <a href="mailto:<Fill_data: Email>" className="text-2xl font-bold text-white hover:text-brand-neon hover:underline underline-offset-8 transition-colors">&lt;Fill_data: Contact Email&gt;</a>
              </div>
              <div>
                <p className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-2">Phone</p>
                <p className="text-2xl font-bold text-white">&lt;Fill_data: Phone Number&gt;</p>
              </div>
              <div>
                <p className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-2">Headquarters</p>
                <p className="text-2xl font-bold text-white leading-tight max-w-xs">&lt;Fill_data: Physical Address / Lab Location&gt;</p>
              </div>
            </div>
          </div>

          <div className="p-12 md:p-24 bg-zinc-950 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none"></div>
             <h2 className="text-3xl font-black tracking-tight mb-12 uppercase text-white relative z-10">Request Demo</h2>
             <form className="flex flex-col gap-6 relative z-10">
                <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-zinc-800 py-4 text-white font-bold uppercase tracking-wide placeholder:text-zinc-600 focus:outline-none focus:border-brand-neon transition-colors" />
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-zinc-800 py-4 text-white font-bold uppercase tracking-wide placeholder:text-zinc-600 focus:outline-none focus:border-brand-neon transition-colors" />
                <input type="text" placeholder="ORGANIZATION" className="w-full bg-transparent border-b border-zinc-800 py-4 text-white font-bold uppercase tracking-wide placeholder:text-zinc-600 focus:outline-none focus:border-brand-neon transition-colors" />
                <button type="button" className="mt-8 px-8 py-4 bg-brand-neon text-black font-bold uppercase tracking-widest text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(255,244,183,0.4)] transition-all w-max">
                  Submit Request
                </button>
             </form>
          </div>

        </div>
      </section>
    </div>
  );
}
