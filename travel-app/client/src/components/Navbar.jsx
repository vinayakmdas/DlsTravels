import { Menu, X } from 'lucide-react';
import { useUIStore } from '../store/useUIStore';

const NAV_LINKS = ['Book', 'Destinations', 'Fleet', 'Why Us', 'Contact'];

export default function Navbar() {
  const isMobileMenuOpen = useUIStore((state) => state.isMobileMenuOpen);
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);

  return (
    <header className="absolute top-6 left-1/2 z-20 w-[94%] max-w-6xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-white/30 bg-white/85 px-6 py-3 shadow-lg shadow-black/10 backdrop-blur-md">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-pink text-white">
            ✈
          </span>
          <span className="text-brand-primary font-bold text-brand-darkSoft">
            DLS<span className="text-lg text-brand-darkSoft">TRAVELS</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-brand-primary transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden rounded-full bg-cta-gradient px-5 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 md:inline-block">
          Book Now
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-darkSoft"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <ul className="mt-3 flex flex-col gap-3 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-md md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-700 font-medium">
                {link}
              </a>
            </li>
          ))}
          <button className="mt-2 rounded-full bg-cta-gradient px-5 py-2 text-sm font-semibold text-white">
            Book Now
          </button>
        </ul>
      )}
    </header>
  );
}