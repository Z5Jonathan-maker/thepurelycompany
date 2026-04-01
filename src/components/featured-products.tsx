"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Whipped Tallow",
    price: "From $15",
    image: "/images/products/whipped-tallow-2.5oz.jpg",
    slug: "whipped-tallow",
  },
  {
    name: "Tallow Lip Balm",
    price: "$10",
    image: "/images/products/tallow-lip-balm.jpg",
    slug: "tallow-lip-balm",
  },
  {
    name: 'Whipped Tallow "For Him"',
    price: "From $15",
    image: "/images/products/product-closeup.jpg",
    slug: "whipped-tallow-for-him",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="shop" className="bg-cream px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.2em] text-rose">
            Featured
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-dark md:text-5xl">
            Our Collection
          </h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {products.map((product, i) => (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative mb-5 aspect-square overflow-hidden rounded-2xl bg-cream-light">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Glass overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-dark/0 backdrop-blur-0 transition-all duration-500 group-hover:bg-dark/5 group-hover:backdrop-blur-[1px]" />
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-dark md:text-xl">
                    {product.name}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-dark/60">
                    {product.price}
                  </p>
                </div>
                <span className="mt-1 flex items-center gap-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.06em] text-rose opacity-0 transition-all duration-300 group-hover:opacity-100">
                  View
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
