import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass-nav w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-[56px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-[18px] h-[18px] bg-cyan flex items-center justify-center shrink-0">
            <span className="text-black font-black text-[9px] leading-none">S</span>
          </div>
          <span className="font-semibold text-[14px] text-white/90 tracking-tight group-hover:text-white transition-colors">
            Savatronic
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0">
          {[
            { label: "Company",  href: "/about" },
            { label: "Products", href: "/products" },
            { label: "Research", href: "/research-impact" },
            { label: "Team",     href: "/team" },
            { label: "Investors",href: "/investors" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-[13px] font-medium text-white/45 hover:text-white/90 transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="btn-cyan h-[36px]">
          <span className="text-[12px]">Book Demo</span>
          <div className="icon-box h-[36px] w-[36px]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#67FCF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  );
}
