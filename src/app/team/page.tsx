import Image from "next/image";

export default function Team() {
  const teamMembers = [
    { 
      name: "Bishnu Thakur", 
      role: "Chief Executive Officer", 
      bio: "Biomedical Engineering graduate from KPRIET and an IIT Jodhpur intern (SAIDE’25). Expertise in MedTech product innovation, AI/ML, robotics, and embedded systems.", 
      linkedin: "https://www.linkedin.com/company/savatronic-tech/", 
      image: "/images/Bishnu Thakur.jpeg" 
    },
    { 
      name: "Rohit Sah", 
      role: "Co-Founder", 
      bio: "Biomedical Engineering undergraduate at KPRIET and a Summer Research Intern at IIT Hyderabad (2025). Focuses on medical device innovation and affordable healthcare.", 
      linkedin: "https://www.linkedin.com/company/savatronic-tech/", 
      image: "/images/Rohit Sah.jpeg" 
    },
    { 
      name: "Raj Shrivastava", 
      role: "Chief Tech Officer", 
      bio: "Leading technology development and innovation for accessible rehabilitation systems.", 
      linkedin: "https://www.linkedin.com/company/savatronic-tech/", 
      image: null 
    },
    { 
      name: "Tejaswini", 
      role: "Chief Marketing Officer", 
      bio: "Driving marketing strategy and outreach for innovative, affordable healthcare solutions.", 
      linkedin: "https://www.linkedin.com/company/savatronic-tech/", 
      image: null 
    },
    { 
      name: "Dr. Allwyn Gnanadas A", 
      role: "CRIO", 
      bio: "Assistant Professor III, Dept of Biomedical Engineering. Expertise in IoT, medical device design, and regulatory frameworks.", 
      linkedin: "https://www.linkedin.com/company/savatronic-tech/", 
      image: "/images/Dr. Allwyn Gnanadas A.jpeg" 
    },
    { 
      name: "Dr. Arnab Sikidar", 
      role: "CRIO", 
      bio: "Assistant Professor III, Dept of Mechatronics Engineering. Expertise in Biomechanics, robotics, and rehabilitation technologies.", 
      linkedin: "https://www.linkedin.com/company/savatronic-tech/", 
      image: "/images/Arnab.jpeg" 
    },
    { 
      name: "Tom d Nyamusoro", 
      role: "Product Designer", 
      bio: "Designing human-centered and emotionally warm medical devices for enhanced patient engagement.", 
      linkedin: "https://www.linkedin.com/company/savatronic-tech/", 
      image: null 
    }
  ];

  return (
    <div className="flex flex-col text-white pb-24">
      {/* Editorial Header */}
      <section className="pt-[150px] pb-[80px] px-6 max-w-7xl mx-auto w-full">
        <div className="clip-wrap mb-4">
          <p className="clip-inner text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]">
            The Collective
          </p>
        </div>
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-12">
          <span className="clip-wrap block"><span className="clip-inner block">Engineers.</span></span>
          <span className="clip-wrap block"><span className="clip-inner block text-white/60">Researchers.</span></span>
          <span className="clip-wrap block"><span className="clip-inner block text-white/30">Designers.</span></span>
        </h1>
        <p className="text-[15px] text-white/40 max-w-md leading-relaxed fade-up delay-3">
          A multidisciplinary collective committed to transforming healthcare through accessible, data-driven rehabilitation engineering.
        </p>
      </section>

      <div className="divider" />

      {/* Brutalist Team Grid */}
      <section className="border-b border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative border-r border-b border-line last:border-r-0 xl:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 aspect-[3/4] flex flex-col justify-end p-6 overflow-hidden bg-background hover:bg-[#080808] transition-colors duration-500"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover opacity-30 grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors duration-500 flex items-center justify-center">
                    <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.4em] rotate-90 opacity-50">Image Missing</span>
                  </div>
                )}
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full fade-up">
                <div className="mt-auto">
                  <div className="w-4 h-[1px] bg-white/20 mb-4 group-hover:w-8 group-hover:bg-white transition-all duration-500" />
                  <h3 className="text-2xl font-medium text-white tracking-tight leading-none mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
                    {member.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6 group-hover:text-white/80 transition-colors">
                    {member.role}
                  </p>
                  
                  {/* Bio Reveal on Hover */}
                  <div className="overflow-hidden">
                    <p className="text-[13px] text-white/50 leading-relaxed max-w-[90%] opacity-0 h-0 transform translate-y-4 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-0 group-hover:mb-6 transition-all duration-500 ease-out">
                      {member.bio}
                    </p>
                  </div>
                  
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-white hover:text-cyan transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center">
        <p className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-8 fade-up">
          Advisors & Research Partners
        </p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight text-white/80 max-w-3xl mx-auto fade-up delay-1">
          Savatronic Tech, KPRIET — Fostering biomedical innovation through rigorous design thinking.
        </h2>
      </section>
    </div>
  );
}
