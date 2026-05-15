import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] pt-16 pb-10 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-[18px] h-[18px] bg-cyan flex items-center justify-center">
                <span className="text-black font-black text-[9px]">S</span>
              </div>
              <span className="font-semibold text-[14px] text-white/80">Savatronic Tech</span>
            </div>
            <p className="text-[13px] text-white/30 leading-relaxed max-w-xs">
              Engineering accessible rehabilitation technologies for neurological and motor healthcare recovery.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] text-white/20 font-semibold uppercase tracking-[0.12em] mb-5">Platform</h4>
            <ul className="space-y-3">
              {[["Company","/about"],["Products","/products"],["Research","/research-impact"],["Team","/team"],["Investors","/investors"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-[13px] text-white/35 hover:text-cyan transition-colors duration-150">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] text-white/20 font-semibold uppercase tracking-[0.12em] mb-5">Connect</h4>
            <ul className="space-y-3">
              <li><a href="mailto:savatronic12@gmail.com" className="text-[13px] text-white/35 hover:text-cyan transition-colors duration-150">savatronic12@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/company/savatronic-tech/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/35 hover:text-cyan transition-colors duration-150">LinkedIn</a></li>
              <li><a href="#" className="text-[13px] text-white/35 hover:text-cyan transition-colors duration-150">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/20">© {new Date().getFullYear()} Savatronic Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[12px] text-white/20 hover:text-cyan transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[12px] text-white/20 hover:text-cyan transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
