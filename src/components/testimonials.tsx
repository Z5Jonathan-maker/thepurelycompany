"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've been using the unscented tallow on the baby since she had mild eczema and now it's completely gone! Her skin is so soft and smooth. I can't believe how fast it worked.",
    author: "Ari",
    context: "Baby eczema — resolved",
    initial: "A",
    color: "bg-rose/20 text-rose-deep",
  },
  {
    quote:
      "We went in the sun and got pretty red. We put your tallow on our face, chest and shoulders and there was no peeling and the redness subsided overnight! It was incredible.",
    author: "Juliana",
    context: "Sun relief — overnight",
    initial: "J",
    color: "bg-honey/20 text-honey",
  },
  {
    quote:
      "My mom said: 'Wow your face looks so healthy!' I told her it was your tallow!! I've been using it every night and the difference is real.",
    author: "Rose",
    context: "Visible results — weeks",
    initial: "R",
    color: "bg-sage/20 text-sage",
  },
  {
    quote:
      "TESTIMONY TIME! I had the worst dry patches on my hands from washing them constantly. Two days of this tallow and they're completely healed. This stuff is magic.",
    author: "Maria",
    context: "Dry skin — healed in 2 days",
    initial: "M",
    color: "bg-rose-light/30 text-rose",
  },
  {
    quote:
      "CALLING ALL MOMS — if your babies have sensitive skin, you NEED this. We ditched every store-bought cream and this is the only thing that actually works. Pure ingredients, real results.",
    author: "Daniela",
    context: "Mom-approved for babies",
    initial: "D",
    color: "bg-honey/15 text-honey",
  },
];

function ReviewCard({
  quote,
  author,
  context,
  initial,
  color,
}: (typeof testimonials)[0]) {
  return (
    <div className="glass-card-dark flex w-[340px] flex-col justify-between rounded-2xl p-7 md:w-[380px]">
      {/* Stars */}
      <div className="mb-4 flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-honey text-honey"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="mb-6 font-[family-name:var(--font-cormorant)] text-lg font-light italic leading-[1.6] text-cream/85">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div>
        <div className="mb-3 h-px w-10 bg-rose/20" />
        <div className="flex items-center gap-3">
          {/* Avatar circle */}
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full font-[family-name:var(--font-dm-sans)] text-xs font-bold ${color}`}
          >
            {initial}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold uppercase tracking-[0.08em] text-cream">
                {author}
              </p>
              <span className="rounded-full bg-sage/15 px-2 py-0.5 font-[family-name:var(--font-dm-sans)] text-[9px] font-medium uppercase tracking-[0.06em] text-sage">
                Verified
              </span>
            </div>
            <p className="mt-0.5 font-[family-name:var(--font-dm-sans)] text-[11px] text-cream/25">
              {context}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(2).concat(testimonials.slice(0, 2));

  return (
    <section className="noise relative overflow-hidden bg-dark-deep py-20 md:py-28 lg:py-36">
      <div className="relative z-10">
        {/* Decorative Quote Mark */}
        <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none font-[family-name:var(--font-playfair)] text-[120px] font-[800] leading-none text-rose/8 md:text-[180px]">
          &ldquo;
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 px-6 text-center md:mb-18"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.25em] text-rose">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-[800] tracking-[-0.02em] text-cream md:text-4xl lg:text-5xl">
            Real results, real people
          </h2>
        </motion.div>

        {/* Dual-row Marquee */}
        <div className="space-y-6">
          <Marquee pauseOnHover className="[--duration:50s]">
            {firstRow.map((t) => (
              <ReviewCard key={t.author} {...t} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:45s]">
            {secondRow.map((t, i) => (
              <ReviewCard key={`${t.author}-${i}`} {...t} />
            ))}
          </Marquee>
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-dark-deep to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-dark-deep to-transparent" />
      </div>
    </section>
  );
}
