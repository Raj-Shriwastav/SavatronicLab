import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-background border-b border-zinc-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-6 h-6 bg-brand-neon text-black flex items-center justify-center font-bold text-xs group-hover:bg-white transition-colors">
            S
          </div>
          <span className="font-bold text-lg text-white tracking-tight uppercase group-hover:text-brand-neon transition-colors">Savatronic</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/about" className="text-zinc-400 hover:text-brand-neon transition-colors uppercase">Company</Link>
          <Link href="/products" className="text-zinc-400 hover:text-brand-neon transition-colors uppercase">Products</Link>
          <Link href="/research-impact" className="text-zinc-400 hover:text-brand-neon transition-colors uppercase">Research</Link>
          <Link href="/team" className="text-zinc-400 hover:text-brand-neon transition-colors uppercase">Team</Link>
          <Link href="/contact" className="ml-4 px-5 py-2 border border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-black transition-colors uppercase text-xs tracking-widest font-bold shadow-[0_0_15px_rgba(255,244,183,0.2)] hover:shadow-[0_0_20px_rgba(255,244,183,0.4)]">
            Demo
          </Link>
        </div>
        
        <button className="md:hidden text-white hover:text-brand-neon transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
