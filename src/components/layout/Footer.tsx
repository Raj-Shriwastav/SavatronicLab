import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-zinc-800 text-zinc-100 py-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white group cursor-default">
              Savatronic <span className="text-brand-neon">Tech</span>
            </h3>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Engineering accessible rehabilitation technologies for neurological and motor healthcare.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold mb-4 text-zinc-600 uppercase tracking-widest">Platform</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/about" className="text-zinc-400 hover:text-brand-neon transition-colors">Company</Link></li>
              <li><Link href="/products" className="text-zinc-400 hover:text-brand-neon transition-colors">Products</Link></li>
              <li><Link href="/research-impact" className="text-zinc-400 hover:text-brand-neon transition-colors">Research</Link></li>
              <li><Link href="/team" className="text-zinc-400 hover:text-brand-neon transition-colors">Team</Link></li>
              <li><Link href="/investors" className="text-zinc-400 hover:text-brand-neon transition-colors">Investors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold mb-4 text-zinc-600 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="mailto:<Fill_data: Contact Email>" className="text-zinc-400 hover:text-brand-neon transition-colors">Email Us</a></li>
              <li><a href="<Fill_data: LinkedIn URL>" className="text-zinc-400 hover:text-brand-neon transition-colors">LinkedIn</a></li>
              <li><a href="<Fill_data: Instagram URL>" className="text-zinc-400 hover:text-brand-neon transition-colors">Instagram</a></li>
              <li className="pt-2 text-zinc-600 font-mono text-xs">&lt;Fill_data: Location Address&gt;</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 uppercase tracking-wide">
          <p>&copy; {new Date().getFullYear()} Savatronic Tech.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
