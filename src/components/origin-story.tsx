"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function OriginStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textElements = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Video slides in from left
      gsap.from(videoContainerRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Text elements stagger from right
      const children = textElements.current?.children;
      if (children) {
        gsap.from(Array.from(children), {
          x: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="noise relative overflow-hidden bg-dark-deep px-6 py-20 md:py-28 lg:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Video — 60% */}
          <div ref={videoContainerRef} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-cream/8">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/5] w-full object-cover lg:aspect-video"
              >
                <source
                  src="/images/videos/origin-story.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Text — 40% */}
          <div ref={textElements} className="lg:col-span-2">
            <p className="mb-4 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.25em] text-rose">
              Our Story
            </p>

            <h2 className="mb-8 font-[family-name:var(--font-playfair)] text-3xl font-[800] leading-[1.05] tracking-[-0.02em] text-cream md:text-4xl lg:text-5xl">
              Born from a mother&rsquo;s love
            </h2>

            <p className="mb-6 font-[family-name:var(--font-cormorant)] text-xl italic leading-[1.8] text-cream/70 lg:text-2xl">
              The Purely Company was born out of a personal mission to find a
              truly natural solution for my son&rsquo;s stubborn skin rashes.
              After trying countless store-bought creams filled with synthetic
              ingredients&nbsp;&mdash; all with no relief&nbsp;&mdash; I
              discovered the remarkable benefits of nutrient-rich tallow.
            </p>

            <p className="mb-10 font-[family-name:var(--font-cormorant)] text-xl italic leading-[1.8] text-cream/70 lg:text-2xl">
              What started as a kitchen experiment became a calling. Today, every
              jar is still handcrafted with the same love and intention, using
              only the purest organic ingredients sourced from Olivor Farms.
            </p>

            <a
              href="#about"
              className="group inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium uppercase tracking-[0.08em] text-rose transition-colors hover:text-rose-light"
            >
              Read More
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
