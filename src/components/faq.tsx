"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const faqs = [
  {
    question: "Is tallow safe for sensitive skin?",
    answer:
      "Yes! Our tallow is 100% organic and free from synthetic ingredients. Many customers with eczema and sensitive skin have seen amazing results. Tallow closely mimics the natural oils in your skin, so it absorbs beautifully without irritation.",
  },
  {
    question: "What does it smell like?",
    answer:
      "Our unscented version has a very mild, natural scent that fades quickly. We also offer Vanilla, Lavender, Frankincense, Peppermint, and seasonal scents like Candy Cane and Gingerbread.",
  },
  {
    question: "How long does a jar last?",
    answer:
      "The 1.2 oz lasts about 3-4 weeks with daily face use. The 2.5 oz is our most popular — it lasts 6-8 weeks. The 3.2 oz lasts 2-3 months and is our best value.",
  },
  {
    question: "Do you ship nationwide?",
    answer:
      "Yes! We ship everywhere in the US. Tampa locals can choose free local pickup at checkout. Orders typically ship within 1-2 business days.",
  },
  {
    question: 'What\'s the difference between regular and "For Him"?',
    answer:
      'Our "For Him" formula is the same premium tallow base, formulated for beard care, tattoo aftercare, and post-shave use with masculine scent options like Cedarwood and Pine.',
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-dark/8">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-rose"
      >
        <span className="pr-8 font-[family-name:var(--font-playfair)] text-lg font-[700] text-dark md:text-xl">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
        >
          <ChevronDown size={20} strokeWidth={1.5} className="text-rose" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-[family-name:var(--font-dm-sans)] text-base font-light leading-relaxed text-dark/60">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream-light px-6 py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <BlurFade delay={0.1} inView>
          <div className="mb-16 text-center">
            <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.25em] text-rose">
              Common Questions
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-[800] tracking-[-0.02em] text-dark md:text-4xl lg:text-5xl">
              Everything you need to know
            </h2>
          </div>
        </BlurFade>

        {/* Accordion */}
        <div className="border-t border-dark/8">
          {faqs.map((faq, i) => (
            <BlurFade key={faq.question} delay={0.1 + i * 0.05} inView>
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
