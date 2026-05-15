"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms — elements move at different speeds
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const orbScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.4]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col justify-end pb-20 pt-[56px] overflow-hidden"
    >
      {/* ── Animated Orb Background ──────────────────── */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        style={{ scale: orbScale, opacity: orbOpacity }}
      >
        {/* Primary orb — large cyan glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan/10 blur-[120px] animate-pulse" />
        {/* Secondary orb — offset blue */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[100px] translate-x-[200px] translate-y-[-100px]" style={{ animation: "float 8s ease-in-out infinite" }} />
        {/* Tertiary orb — subtle purple accent */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[80px] translate-x-[-200px] translate-y-[100px]" style={{ animation: "float 12s ease-in-out infinite reverse" }} />
      </motion.div>

      {/* ── Grid lines background ────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Film Grain Overlay ────────────────────────── */}
      <div className="absolute inset-0 z-[2] pointer-events-none grain-overlay opacity-[0.03]" />

      {/* ── Gradient overlays for text readability ───── */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[3] bg-gradient-to-r from-background/60 via-transparent to-transparent pointer-events-none" />

      {/* ── Content ──────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-[90vw] mx-auto px-6 w-full"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.25em]">
            Rehabilitation Engineering Collective
          </p>
        </motion.div>

        {/* ── MASSIVE Brutalist Headline ─── */}
        <motion.h1
          style={{ scale: titleScale }}
          className="origin-bottom-left"
        >
          {/* Line 1 — full-bleed width */}
          <motion.span
            className="block text-[clamp(4rem,12vw,14rem)] font-medium leading-[0.85] tracking-[-0.05em] text-white"
            initial={{ opacity: 0, y: 80, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
          >
            Engineering
          </motion.span>
          {/* Line 2 — intentionally lighter */}
          <motion.span
            className="block text-[clamp(4rem,12vw,14rem)] font-medium leading-[0.85] tracking-[-0.05em] text-white/50"
            initial={{ opacity: 0, y: 80, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
          >
            accessible
          </motion.span>
          {/* Line 3 — faded */}
          <motion.span
            className="block text-[clamp(4rem,12vw,14rem)] font-medium leading-[0.85] tracking-[-0.05em] text-white/25"
            initial={{ opacity: 0, y: 80, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1], delay: 0.7 }}
          >
            recovery.
          </motion.span>
        </motion.h1>

        {/* Sub-content row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1.1 }}
        >
          <Link href="/contact" className="btn-cyan h-[44px]">
            <span>Book a Demo</span>
            <div className="icon-box h-[44px] w-[44px]">
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#67FCF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
          <p className="text-[13px] text-white/30 max-w-xs leading-relaxed">
            Intelligent assistive tech for neurological and motor recovery — designed for clinics, hospitals, and home care.
          </p>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex items-center gap-3 text-white/15 text-[10px] tracking-[0.3em] uppercase rotate-90 origin-bottom-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-8 h-px bg-white/15" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
