"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const ProductDisplay = dynamic(() => import("./product-display"), { ssr: false });

const sizes = [
  { label: "1.2 oz", price: "$15", detail: "3-4 weeks supply" },
  { label: "2.5 oz", price: "$25", detail: "Most popular" },
  { label: "3.2 oz", price: "$30", detail: "Best value" },
];

const scents = ["Unscented", "Vanilla", "Lavender", "Frankincense"];

const secondaryProducts = [
  {
    name: "Tallow Lip Balm",
    price: "$10",
    image: "/images/products/tallow-lip-balm.jpg",
    tagline: "Organic nourishment for your lips",
  },
  {
    name: 'Whipped Tallow "For Him"',
    price: "From $15",
    image: "/images/products/product-closeup.jpg",
    tagline: "Beard care, tattoo aftercare, post-shave",
  },
];

function CursorSpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlightPos({ x, y });
    },
    []
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: isHovered
          ? `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, oklch(0.75 0.08 20 / 0.08), transparent 40%)`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}

export default function ProductShowcase() {
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedScent, setSelectedScent] = useState(0);

  return (
    <section id="shop" className="bg-cream px-6 py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex items-center gap-6"
        >
          <div className="h-px flex-1 bg-dark/10" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-[800] tracking-[-0.02em] text-dark md:text-4xl lg:text-5xl">
            The Collection
          </h2>
          <div className="h-px flex-1 bg-dark/10" />
        </motion.div>

        {/* Featured Product — Image Display + Details */}
        <div className="mb-24 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Product Images with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductDisplay />
          </motion.div>

          {/* Product Details — optimized for conversion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.2em] text-rose">
              Signature Product
            </p>
            <h3 className="mb-2 font-[family-name:var(--font-playfair)] text-4xl font-[800] tracking-[-0.02em] text-dark lg:text-5xl">
              Whipped Tallow
            </h3>
            <p className="mb-4 font-[family-name:var(--font-cormorant)] text-xl italic text-dark/50">
              Our signature moisturizer
            </p>

            {/* Star rating + review count for conversion */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-honey text-honey" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-[family-name:var(--font-dm-sans)] text-sm text-dark/50">
                243+ happy customers
              </span>
            </div>

            <p className="mb-8 max-w-md font-[family-name:var(--font-dm-sans)] text-base font-light leading-relaxed text-dark/70">
              Rich, creamy moisturizer from 100% grass-fed tallow. Deeply nourishes
              and restores your skin&apos;s natural barrier. No parabens, no synthetics
              — just pure ingredients your skin actually recognizes.
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.12em] text-dark/40">
                Size
              </p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size, i) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(i)}
                    className={`relative rounded-full px-5 py-2.5 font-[family-name:var(--font-dm-sans)] text-sm font-medium transition-all duration-300 ${
                      selectedSize === i
                        ? "bg-dark text-cream shadow-lg"
                        : "border border-dark/10 bg-cream-light text-dark/60 hover:border-rose/30 hover:text-dark"
                    }`}
                  >
                    {size.label}
                    {i === 1 && (
                      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose text-[7px] font-bold text-cream">
                        ★
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-xs text-dark/30">
                {sizes[selectedSize].detail}
              </p>
            </div>

            {/* Scent Selector */}
            <div className="mb-8">
              <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.12em] text-dark/40">
                Scent
              </p>
              <div className="flex flex-wrap gap-3">
                {scents.map((scent, i) => (
                  <button
                    key={scent}
                    onClick={() => setSelectedScent(i)}
                    className={`rounded-full px-5 py-2.5 font-[family-name:var(--font-dm-sans)] text-sm font-medium transition-all duration-300 ${
                      selectedScent === i
                        ? "bg-dark text-cream shadow-lg"
                        : "border border-dark/10 bg-cream-light text-dark/60 hover:border-rose/30 hover:text-dark"
                    }`}
                  >
                    {scent}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <p className="mb-6 font-[family-name:var(--font-playfair)] text-4xl font-[800] text-dark">
              {sizes[selectedSize].price}
            </p>

            {/* Add to Cart — Shimmer Button */}
            <ShimmerButton
              shimmerColor="oklch(0.96 0.02 80)"
              shimmerDuration="3s"
              background="oklch(0.25 0.02 60)"
              borderRadius="100px"
              className="w-full px-10 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold uppercase tracking-[0.08em] text-cream shadow-xl hover:scale-[1.02] sm:w-auto"
            >
              <svg className="mr-3 h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              Add to Cart
            </ShimmerButton>

            {/* Trust signals for conversion */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-[11px] text-dark/35">
                <Truck size={13} strokeWidth={1.5} /> Free Tampa pickup
              </span>
              <span className="flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-[11px] text-dark/35">
                <Shield size={13} strokeWidth={1.5} /> 100% organic
              </span>
              <span className="flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-[11px] text-dark/35">
                <Clock size={13} strokeWidth={1.5} /> Ships in 1-2 days
              </span>
            </div>
          </motion.div>
        </div>

        {/* Secondary Products — 2-column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {secondaryProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CursorSpotlightCard className="group cursor-pointer rounded-3xl border border-dark/5 bg-cream-light p-3 transition-all duration-500 hover:border-rose/20 hover:shadow-2xl hover:shadow-rose/5">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-dark/60 via-dark/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="mb-6 flex items-center gap-2 rounded-full bg-cream/90 px-6 py-3 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.08em] text-dark backdrop-blur-sm">
                      View Product
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between px-3 py-5">
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-[800] text-dark">
                      {product.name}
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-cormorant)] text-base italic text-dark/50">
                      {product.tagline}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] text-xl font-[800] text-dark">
                    {product.price}
                  </p>
                </div>
              </CursorSpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
