"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { business } from "@/lib/site-data";
import heroImage from "@/public/images/ssm-campaign.webp";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const positioning = [
  { label: "Offline + Online", value: "Full-spectrum reach" },
  { label: "Idea → Execution", value: "Handled end to end" },
  { label: "Indore rooted", value: "Local market expertise" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-zinc-950 pt-32 pb-20 sm:pt-40"
    >
      {/* Mesh gradient / radial glow backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#09090b)]" />
      </div>

      <div className="site-shell relative grid flex-1 grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
            Marketing agency, Indore
          </span>

          <h1
            id="hero-heading"
            className="mt-6 text-balance text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-tighter text-white"
          >
            Ideas that get noticed.{" "}
            <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-cyan-300 bg-clip-text text-transparent">
              Marketing that gets remembered.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
            Creative campaigns across digital, offline and local marketing — built around your business, your audience and your goals.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href={business.campaignUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_-8px_rgba(251,191,36,0.6)] transition-shadow hover:shadow-[0_0_40px_-6px_rgba(251,191,36,0.8)]"
            >
              Start Your Campaign
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Explore Services
              <ArrowDown className="size-4" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>

        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={
              reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={heroImage}
                alt="SSM brand concept: a vermilion Make Some Real Noise poster, branded bottle and printed campaign materials in a sunlit studio"
                fill
                placeholder="blur"
                sizes="(max-width: 1023px) 90vw, 420px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }
            className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-zinc-950/80 px-5 py-4 text-xs text-zinc-400 shadow-xl backdrop-blur-md"
          >
            <p className="font-medium text-white">A little local.</p>
            <p>A lot of impact.</p>
          </motion.div>
        </motion.figure>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.2 }}
        className="site-shell relative mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3"
      >
        {positioning.map((item) => (
          <div key={item.label} className="bg-zinc-950 px-6 py-5">
            <p className="text-sm font-medium text-white">{item.label}</p>
            <p className="mt-1 text-xs text-zinc-500">{item.value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
