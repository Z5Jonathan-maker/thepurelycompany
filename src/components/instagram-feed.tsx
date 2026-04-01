"use client";

import Image from "next/image";
import { motion } from "motion/react";

function InstagramIcon({ size = 32 }: { size?: number }) {
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

const igPhotos = [
  {
    src: "/images/ig/stocking-stuffers.jpg",
    alt: "Stocking stuffers — tallow skincare",
  },
  {
    src: "/images/ig/gingerbread-display.jpg",
    alt: "Gingerbread display with tallow jars",
  },
  {
    src: "/images/ig/mothers-day.jpg",
    alt: "Mother's Day tallow gift set",
  },
  {
    src: "/images/ig/restock.jpg",
    alt: "Fresh restock of whipped tallow",
  },
];

export default function InstagramFeed() {
  return (
    <section className="bg-cream px-6 py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.25em] text-rose">
            Follow Along
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-[800] tracking-[-0.02em] text-dark md:text-4xl">
            @thepurelycompany
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {igPhotos.map((photo, i) => (
            <motion.a
              key={photo.src}
              href="https://instagram.com/thepurelycompany"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-dark/0 transition-all duration-500 group-hover:bg-dark/40">
                <span className="text-cream opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <InstagramIcon size={32} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
