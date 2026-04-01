"use client";

import { Mail, ArrowRight } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const quickLinks = [
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="noise relative bg-dark-deep px-6 py-16 md:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand — 5 cols */}
          <div className="md:col-span-5">
            <p className="mb-4 font-[family-name:var(--font-playfair)] text-2xl font-[800] tracking-[-0.02em] text-cream">
              The Purely Company
            </p>
            <p className="mb-6 max-w-sm font-[family-name:var(--font-cormorant)] text-lg italic leading-relaxed text-cream/40">
              Changing the world, one pure ingredient at a time.
            </p>
            <p className="max-w-xs font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-cream/30">
              Organic, grass-fed tallow skincare handcrafted in Tampa, FL.
            </p>
          </div>

          {/* Quick Links — 3 cols */}
          <div className="md:col-span-3">
            <p className="mb-5 font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/30">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-dm-sans)] text-sm text-cream/50 transition-colors duration-300 hover:text-rose"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect + Newsletter — 4 cols */}
          <div className="md:col-span-4">
            <p className="mb-5 font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/30">
              Connect
            </p>
            <div className="mb-8 flex items-center gap-4">
              <a
                href="https://instagram.com/thepurelycompany"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/8 text-cream/40 transition-all duration-300 hover:border-rose/40 hover:text-rose hover:shadow-lg hover:shadow-rose/10"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="mailto:hello@thepurelycompany.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/8 text-cream/40 transition-all duration-300 hover:border-rose/40 hover:text-rose hover:shadow-lg hover:shadow-rose/10"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>

            {/* Newsletter */}
            <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/30">
              Stay in the loop
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-0 overflow-hidden rounded-full border border-cream/8 transition-all duration-300 focus-within:border-rose/30"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-5 py-3.5 font-[family-name:var(--font-dm-sans)] text-sm text-cream placeholder:text-cream/20 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-full items-center justify-center bg-rose px-5 py-3.5 text-dark transition-all duration-300 hover:bg-rose-light"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-cream/6 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-[family-name:var(--font-dm-sans)] text-xs text-cream/20">
              &copy; {new Date().getFullYear()} The Purely Company. All rights
              reserved.
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-xs text-cream/20">
              Handcrafted in Tampa, FL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
