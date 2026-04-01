"use client";

import { motion } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-rose px-6 py-20 md:py-28 lg:py-32">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.25 0.02 60) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.25em] text-dark/40"
        >
          Your skin deserves better
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-[family-name:var(--font-playfair)] text-3xl font-[800] tracking-[-0.02em] text-dark md:text-4xl lg:text-5xl"
        >
          Ready to feel the difference?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-10 max-w-md font-[family-name:var(--font-cormorant)] text-lg italic text-dark/50"
        >
          Join 243+ customers who switched to real, organic skincare. Free local pickup in Tampa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ShimmerButton
            shimmerColor="oklch(0.96 0.02 80)"
            shimmerDuration="2.5s"
            background="oklch(0.25 0.02 60)"
            borderRadius="100px"
            className="px-10 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold uppercase tracking-[0.08em] text-cream shadow-xl transition-transform duration-300 hover:scale-[1.03]"
            onClick={() => {
              document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Shop Now — Free Tampa Pickup
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
