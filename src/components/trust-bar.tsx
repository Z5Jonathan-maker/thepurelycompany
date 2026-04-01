"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Shield, Heart, MapPin, Award } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    label: "As featured by Bobby Parrish",
    highlight: true,
  },
  {
    icon: Heart,
    value: 243,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "Organic",
  },
  {
    icon: MapPin,
    label: "Handmade in Tampa",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-dark/5 bg-cream-light px-6 py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16"
      >
        {trustItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-2.5"
            >
              <Icon
                size={16}
                strokeWidth={1.5}
                className={item.highlight ? "text-sage" : "text-rose/60"}
              />
              <span className="font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.08em] text-dark/50">
                {item.value !== undefined ? (
                  <>
                    <NumberTicker
                      value={item.value}
                      className="text-dark/70 font-semibold"
                      delay={0.5}
                    />
                    {item.suffix} {item.label}
                  </>
                ) : (
                  <>
                    {item.label}
                    {item.highlight && (
                      <span className="ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sage/20 text-[8px] text-sage">
                        ✓
                      </span>
                    )}
                  </>
                )}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
