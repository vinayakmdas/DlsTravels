import { Menu, X } from "lucide-react";
import { FaPlane, FaBus, FaCarSide } from "react-icons/fa";
import { useUIStore } from "../store/useUIStore";

export default function Navbar() {
  const isMobileMenuOpen = useUIStore((state) => state.isMobileMenuOpen);
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);

  return (
    <header className="absolute top-4 left-1/2 z-30 w-full max-w-4xl -translate-x-1/2 px-4">
      <nav className="flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-2 shadow-xl backdrop-blur-xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <FaPlane className="animate-plane text-lg text-white" />

          <span className="font-bold text-sm leading-none">
            <span className="text-brand-primary">DLS</span>
            <span className="text-white">TRAVELS</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-[14px] font-medium text-white md:flex">
          <li>
            <a
              href="#home"
              className="flex items-center gap-2 transition duration-300 hover:text-brand-primary"
            >
              <FaBus
  size={18}
  className="animate-bus text-white"
/>
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition duration-300 hover:text-brand-primary"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 transition duration-300 hover:text-brand-primary"
            >
              Contact Us
              <FaCarSide
  size={20}
  className="animate-car text-white"
/>
            </a>
          </li>
        </ul>

        {/* Book Now */}
        <a
          href="#book"
          className="hidden rounded-full bg-cta-gradient px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 md:inline-block"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-3 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-5 text-white">
            <li>
              <a
                href="#home"
                onClick={toggleMobileMenu}
                className="flex items-center gap-2"
              >
                <FaBus
  size={18}
  className="animate-bus text-white"
/>
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={toggleMobileMenu}
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="flex items-center gap-2"
              >
                Contact Us
                <FaCarSide
  size={20}
  className="animate-car text-white"
/>
              </a>
            </li>
          </ul>

          <a
            href="#book"
            onClick={toggleMobileMenu}
            className="mt-5 block rounded-full bg-cta-gradient px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}