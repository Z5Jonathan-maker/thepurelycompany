"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "bg-cream/95 backdrop-blur-xl shadow-[0_1px_0_0_oklch(0.25_0.02_60/0.06)]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className={cn(
              "font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight transition-colors duration-500 md:text-2xl",
              scrolled ? "text-dark" : "text-cream"
            )}
          >
            The Purely Company
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.08em] transition-colors duration-300",
                  scrolled
                    ? "text-dark/70 hover:text-rose"
                    : "text-cream/80 hover:text-cream"
                )}
              >
                {link.label}
              </a>
            ))}

            {/* Cart */}
            <button
              className={cn(
                "relative transition-colors duration-300",
                scrolled ? "text-dark" : "text-cream"
              )}
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "md:hidden transition-colors duration-300",
              scrolled ? "text-dark" : "text-cream"
            )}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-dark-deep/95 backdrop-blur-2xl"
          >
            <div className="flex h-full flex-col items-center justify-center">
              {/* Close */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-6 top-6 text-cream"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>

              {/* Logo */}
              <p className="mb-16 font-[family-name:var(--font-playfair)] text-2xl font-bold text-cream">
                The Purely Company
              </p>

              {/* Links */}
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="font-[family-name:var(--font-dm-sans)] text-sm uppercase tracking-[0.12em] text-cream/80 transition-colors hover:text-rose"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Cart */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 flex items-center gap-3 text-cream/60"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-[0.08em]">
                  Cart (0)
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
