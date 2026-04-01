"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Leaf, Droplets, Heart, ShieldCheck } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    },
    []
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        background: hovered
          ? `radial-gradient(500px circle at ${pos.x}% ${pos.y}%, oklch(0.75 0.08 20 / 0.06), transparent 40%)`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}

const ingredients = [
  {
    icon: Droplets,
    title: "Organic Jojoba Oil",
    description:
      "A closer match to your skin's natural sebum for faster absorption.",
  },
  {
    icon: Heart,
    title: "Handmade with Love",
    description:
      "Every jar crafted by hand in Tampa, Florida.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Synthetics",
    description:
      "No parabens, no preservatives, no artificial fragrances.",
  },
];

const benefitPhrases = [
  "Deeply Hydrating",
  "Vitamin Rich",
  "No Parabens",
  "Grass-Fed",
  "Handmade",
  "Organic",
  "Eczema Safe",
  "Cruelty Free",
  "No Preservatives",
  "Skin Barrier Repair",
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="bg-cream px-6 py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.25em] text-rose">
            Ingredients
          </p>
          <h2 className="mx-auto max-w-lg font-[family-name:var(--font-playfair)] text-3xl font-[800] tracking-[-0.02em] text-dark md:text-4xl lg:text-5xl">
            What goes on your skin matters
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-6">
          {/* Large Card — Tallow (col-span-2, row-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <SpotlightCard className="group relative h-full overflow-hidden rounded-3xl border border-dark/5 bg-cream-light transition-all duration-500 hover:border-rose/20 hover:shadow-2xl hover:shadow-rose/5">
              {/* Image */}
              <div className="relative h-64 overflow-hidden lg:h-[55%]">
                <Image
                  src="/images/lifestyle/lifestyle-1.jpg"
                  alt="Grass-fed tallow from Olivor Farms"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream-light via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose/10">
                  <Leaf
                    size={28}
                    strokeWidth={1.5}
                    className="text-rose transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-playfair)] text-2xl font-[800] text-dark">
                  100% Grass-Fed Tallow
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-base font-light leading-relaxed text-dark/60">
                  Sourced from Olivor Farms, our tallow comes from cattle raised
                  on organic pastures. Rich in vitamins A, D, E, and K — the
                  same nutrients found in healthy human skin.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Small Cards */}
          {ingredients.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i + 1) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={i === 0 ? "lg:col-span-2" : ""}
              >
                <SpotlightCard className="group flex h-full flex-col rounded-3xl border border-dark/5 bg-cream-light p-8 transition-all duration-500 hover:border-rose/20 hover:shadow-2xl hover:shadow-rose/5">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose/10">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-rose transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-playfair)] text-lg font-[800] text-dark">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-dark/60">
                    {item.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Marquee */}
        <div className="mt-16">
          <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
            {benefitPhrases.map((phrase) => (
              <span
                key={phrase}
                className="whitespace-nowrap font-[family-name:var(--font-cormorant)] text-lg italic text-dark/25"
              >
                {phrase} <span className="mx-3 text-rose/30">&bull;</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
