"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const productImages = [
  {
    src: "/images/lifestyle/hero-jars.jpg",
    alt: "Whipped Tallow — open jar with lid showing Pt logo",
  },
  {
    src: "/images/products/whipped-tallow-3.2oz.jpg",
    alt: "Whipped Tallow — 3.2oz jar",
  },
  {
    src: "/images/products/whipped-tallow-1.2oz.jpg",
    alt: "Whipped Tallow — 1.2oz jar",
  },
];

export default function ProductDisplay() {
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    springConfig
  );
  const glowX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [20, 80]),
    springConfig
  );
  const glowY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [20, 80]),
    springConfig
  );

  return (
    <div className="relative">
      {/* Bestseller badge */}
      <div className="absolute left-4 top-4 z-20 rounded-full bg-dark px-4 py-1.5 font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold uppercase tracking-[0.12em] text-cream shadow-lg">
        Bestseller
      </div>

      {/* Main product image with 3D tilt */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-grab active:cursor-grabbing"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative overflow-hidden rounded-3xl bg-cream-light"
        >
          {/* Shine/glow effect that follows cursor */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) =>
                  `radial-gradient(400px circle at ${x}% ${y}%, oklch(1 0 0 / 0.12), transparent 50%)`
              ),
            }}
          />

          {/* Product image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            {productImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={false}
                animate={{
                  opacity: activeImage === i ? 1 : 0,
                  scale: activeImage === i ? 1 : 1.05,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />
              </motion.div>
            ))}
          </div>

          {/* Subtle border glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              boxShadow:
                "inset 0 0 0 1px oklch(0.75 0.08 20 / 0.2), 0 20px 60px -15px oklch(0.75 0.08 20 / 0.15)",
            }}
          />
        </motion.div>
      </div>

      {/* Thumbnail selector */}
      <div className="mt-4 flex items-center justify-center gap-3">
        {productImages.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActiveImage(i)}
            className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
              activeImage === i
                ? "border-rose shadow-lg shadow-rose/10"
                : "border-dark/8 opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
