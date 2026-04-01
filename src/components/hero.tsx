"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(
        [
          eyebrowRef.current,
          bodyRef.current,
          ctaRef.current,
          proofRef.current,
          chevronRef.current,
        ],
        { opacity: 0, y: 40 }
      );

      const words = headlineRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.set(words, { opacity: 0, y: 50 });
      }

      // Ken Burns slow zoom on hero image
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        { scale: 1.08, duration: 20, ease: "none", repeat: -1, yoyo: true }
      );

      // Orchestrated text entrance
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
        .to(
          words ?? [],
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
          0.7
        )
        .to(bodyRef.current, { opacity: 0.8, y: 0, duration: 0.5 }, 1.3)
        .to(
          ctaRef.current,
          { opacity: 1, y: 0, scale: 1, duration: 0.4 },
          1.6
        )
        .to(proofRef.current, { opacity: 1, y: 0, duration: 0.4 }, 1.9)
        .to(chevronRef.current, { opacity: 0.5, y: 0, duration: 0.3 }, 2.1);

      gsap.set(ctaRef.current, { scale: 0.9 });

      gsap.to(chevronRef.current, {
        y: 8,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.5,
      });
    },
    { scope: containerRef }
  );

  const headlineText = "Nourish your skin the way nature intended.";
  const headlineWords = headlineText.split(" ");

  return (
    <section
      ref={containerRef}
      className="noise relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden"
    >
      {/* Hero Image with Ken Burns zoom */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/images/lifestyle/hero-main.jpg"
          alt="The Purely Company — organic tallow skincare"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Multi-layer cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.02 60 / 0.6) 0%, oklch(0.12 0.02 60 / 0.45) 30%, oklch(0.12 0.02 60 / 0.7) 70%, oklch(0.12 0.02 60 / 0.85) 100%)",
        }}
      />
      {/* Rose warm vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 30%, oklch(0.12 0.02 60 / 0.4) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className="mb-8 font-[family-name:var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.3em] text-rose-light"
          style={{ opacity: 0 }}
        >
          100% Organic &bull; Grass-Fed &bull; Handmade in Tampa
        </p>

        {/* Headline — word-by-word reveal */}
        <h1
          ref={headlineRef}
          className="mb-8 font-[family-name:var(--font-playfair)] font-[800] leading-[1.02] tracking-[-0.03em] text-cream"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="word inline-block" style={{ opacity: 0 }}>
              {word}
              {i < headlineWords.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </h1>

        {/* Body */}
        <p
          ref={bodyRef}
          className="mx-auto mb-12 max-w-lg font-[family-name:var(--font-cormorant)] text-xl font-light italic leading-relaxed text-cream/80 md:text-2xl"
          style={{ opacity: 0 }}
        >
          Handcrafted with 100% organic, grass-fed tallow — the ingredient list
          your skin has been waiting for.
        </p>

        {/* CTA — Shimmer Button */}
        <div ref={ctaRef} style={{ opacity: 0 }}>
          <ShimmerButton
            shimmerColor="oklch(0.96 0.02 80)"
            shimmerDuration="2.5s"
            background="oklch(0.75 0.08 20)"
            borderRadius="100px"
            className="px-12 py-4 font-[family-name:var(--font-dm-sans)] text-[13px] font-semibold uppercase tracking-[0.1em] text-dark shadow-2xl shadow-dark/30 transition-transform duration-300 hover:scale-[1.04]"
            onClick={() => {
              document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Shop Collection
          </ShimmerButton>
        </div>

        {/* Social Proof */}
        <div
          ref={proofRef}
          className="mt-8 flex items-center justify-center gap-2.5"
          style={{ opacity: 0 }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-3.5 w-3.5 fill-honey text-honey"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-[family-name:var(--font-dm-sans)] text-xs tracking-wide text-cream/60">
            Loved by{" "}
            <NumberTicker
              value={243}
              className="font-semibold text-cream/80"
              delay={2.2}
            />
            + customers
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={chevronRef}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: 0 }}
      >
        <ChevronDown size={24} strokeWidth={1} className="text-cream/40" />
      </div>
    </section>
  );
}
