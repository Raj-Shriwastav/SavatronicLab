import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col text-white pb-24">
      {/* Cinematic Header */}
      <section className="pt-[150px] pb-[80px] px-6 max-w-7xl mx-auto w-full">
        <div className="clip-wrap mb-4">
          <p className="clip-inner text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]">
            Connect
          </p>
        </div>
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-8">
          <span className="clip-wrap block"><span className="clip-inner block">Initiate</span></span>
          <span className="clip-wrap block"><span className="clip-inner block text-white/40">contact.</span></span>
        </h1>
        <p className="text-[15px] text-white/40 max-w-md leading-relaxed fade-up delay-2">
          Reach out to our team for product demos, research partnerships, or media inquiries.
        </p>
      </section>

      <div className="divider" />

      {/* Split Content */}
      <section className="border-b border-line">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Column: Direct Inquiries */}
          <div className="md:w-1/2 p-8 md:p-16 lg:p-24 border-r border-line bg-[#050505]">
            <h2 className="text-[clamp(1.5rem,2vw,2rem)] font-medium tracking-tight mb-12 fade-up">
              Direct Inquiries
            </h2>
            
            <div className="space-y-12 fade-up delay-1">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Email</p>
                <a href="mailto:savatronic12@gmail.com" className="text-xl md:text-2xl font-medium text-white hover:text-cyan transition-colors">
                  savatronic12@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Phone</p>
                <p className="text-xl md:text-2xl font-medium text-white/60">&lt;Fill_data: Phone Number&gt;</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Headquarters</p>
                <p className="text-xl md:text-2xl font-medium text-white/60 leading-tight max-w-xs">
                  &lt;Fill_data: Physical Office Address&gt;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Request Demo Form */}
          <div className="md:w-1/2 p-8 md:p-16 lg:p-24 bg-background">
             <h2 className="text-[clamp(1.5rem,2vw,2rem)] font-medium tracking-tight mb-12 fade-up">
               Request Demo
             </h2>
             <ContactForm source="Contact Page" />
          </div>

        </div>
      </section>
    </div>
  );
}
