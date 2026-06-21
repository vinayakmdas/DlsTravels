import { ArrowRight, Star, MessageCircle } from 'lucide-react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-dark">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop"
        alt="Winding mountain road at sunset"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      {/* Dark gradient overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />

      <Navbar />

      <div className="relative z-10 flex h-full min-h-screen flex-col justify-center px-6 pt-32 sm:px-12 lg:px-20">
        {/* Trust badge */}
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90">
          <Star size={14} className="fill-brand-primaryLight text-brand-primaryLight" />
          Trusted by 12,000+ travelers
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl">
          Book Your Journey with{' '}
          <span className="bg-headline-gradient bg-clip-text text-transparent">
            Comfort &amp; Confidence
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-xl text-lg text-brand-primaryLight/80">
          Find the perfect vehicle for your trip and travel hassle-free.
          Professional drivers, transparent pricing, and 24/7 support — across every route.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-cta-gradient px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-primary/30 transition-transform hover:scale-105">
            Book Now <ArrowRight size={18} />
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
            Explore Fleet
          </button>
        </div>
      </div>

      {/* Floating chat button */}
      <button
        className="absolute bottom-8 right-8 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-cta-gradient text-white shadow-lg"
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    </section>
  );
}