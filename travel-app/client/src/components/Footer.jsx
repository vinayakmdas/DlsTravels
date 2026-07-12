import { Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
       className="bg-cta-gradient py-12 text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold">
            DLS <span className="font-light">TRAVELS</span>
          </h2>

          <p className="mt-2 text-white/80">
            Safe. Comfortable. Reliable.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="mb-3 text-lg font-semibold">
            Contact Us
          </h3>

          <a
            href="tel:+919497409806"
            className="mb-2 flex items-center justify-center gap-2 transition hover:text-white/80 md:justify-start"
          >
            <Phone size={18} />
            +91 9497409806

          </a>
          <a
            href="tel:+919652443198"
            className="mb-2 flex items-center justify-center gap-2 transition hover:text-white/80 md:justify-start"
          >
            <Phone size={18} />
            +91 9652443198
</a>

          <a
            href="https://www.instagram.com/dls_holidays__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 transition hover:text-white/80 md:justify-start"
          >
            <FaInstagram size={18} />
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} DLS Travels. All Rights Reserved.
      </div>
    </footer>
  );
}