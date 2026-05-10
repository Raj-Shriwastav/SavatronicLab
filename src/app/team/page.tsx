export default function Team() {
  const teamMembers = [
    { name: "Bishnu Thakur", role: "CEO", bio: "<Fill_data: Short bio for Bishnu>", linkedin: "#" },
    { name: "Rohit Sah", role: "Co-Founder", bio: "<Fill_data: Short bio for Rohit>", linkedin: "#" },
    { name: "Raj Shrivastava", role: "CTO", bio: "<Fill_data: Short bio for Raj>", linkedin: "#" },
    { name: "Tejaswini", role: "CMO", bio: "<Fill_data: Short bio for Tejaswini>", linkedin: "#" },
    { name: "Dr. Allwyn Gnanadas", role: "CRIO", bio: "<Fill_data: Short bio for Dr. Allwyn>", linkedin: "#" },
    { name: "Dr. Arnab Sikidar", role: "CRIO", bio: "<Fill_data: Short bio for Dr. Arnab>", linkedin: "#" },
    { name: "Tom d Nyamusoro", role: "Product Designer", bio: "<Fill_data: Short bio for Tom>", linkedin: "#" }
  ];

  return (
    <div className="flex flex-col text-zinc-100">
      <section className="bg-background border-b border-zinc-800">
        <div className="container mx-auto px-6 py-24 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 text-white">THE TEAM</h1>
          <p className="text-2xl md:text-3xl text-zinc-300 font-medium leading-tight max-w-4xl">
            A multidisciplinary collective of engineers, clinical researchers, and designers committed to transforming healthcare.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-y-none divide-zinc-800 border-b border-zinc-800">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-8 bg-background hover:bg-zinc-900 transition-colors flex flex-col h-full border-b md:border-b-0 border-zinc-800 group">
              <div className="aspect-square bg-zinc-950 border border-zinc-800 mb-8 flex items-center justify-center text-zinc-600 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                <span className="font-mono uppercase tracking-widest text-xs">&lt;Fill_data: Photo&gt;</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight uppercase group-hover:text-brand-neon transition-colors">{member.name}</h3>
              <p className="font-mono text-brand-neon text-xs tracking-widest uppercase mb-6">{member.role}</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{member.bio}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 text-zinc-300 font-bold uppercase tracking-widest text-xs hover:bg-brand-neon hover:border-brand-neon hover:text-black transition-all w-max">
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-24 border-b border-zinc-800 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-3xl font-black tracking-tighter mb-12 uppercase text-white">Advisors & Research Partners</h2>
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-zinc-400 text-lg">&lt;Fill_data: Add profiles or a list of advisors and student researchers here.&gt;</p>
          </div>
        </div>
      </section>
    </div>
  );
}
