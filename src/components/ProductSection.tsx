"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProductSectionProps {
  product: {
    id: string;
    name: string;
    shortName: string;
    headline: string;
    body: string;
    stats: { value: string; label: string }[];
    features: string[];
    image: string;
  };
  index: number;
}

export default function ProductSection({ product, index }: ProductSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Image parallax: moves slower than scroll for depth
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);

  // Content stagger
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.35], [60, 0]);

  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <span className="text-[11px] font-semibold text-white/25 uppercase tracking-[0.15em]">
          {String(index + 1).padStart(2, "0")} / Hardware
        </span>
      </div>
      <div className="divider" />

      {/* Sticky split: LEFT = image, RIGHT = scrolling content */}
      <div className="flex flex-col md:flex-row">
        {/* LEFT — sticky image panel with parallax */}
        <div className="md:w-1/2 md:sticky md:top-[56px] md:h-[calc(100vh-56px)] relative overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[1.5s]"
            />
          </motion.div>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          {/* Big product name watermark */}
          <div className="absolute bottom-10 left-8 z-10">
            <p className="text-[clamp(3rem,6vw,5rem)] font-medium leading-none tracking-[-0.03em] text-white/10 whitespace-pre-line select-none">
              {product.shortName}
            </p>
          </div>
        </div>

        {/* RIGHT — scrolling detail content */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-24 md:py-32 gap-0"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* Headline */}
          <div className="mb-8">
            <span className="clip-wrap block">
              <span className="clip-inner block text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium leading-tight tracking-[-0.02em] text-white">
                {product.headline}
              </span>
            </span>
          </div>

          {/* Body copy */}
          <p className="text-[16px] text-white/45 leading-relaxed mb-12 max-w-md fade-up">
            {product.body}
          </p>

          {/* Stats */}
          <div className="flex gap-12 mb-12 fade-up delay-1">
            {product.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[2.8rem] font-medium tracking-tight leading-none text-white mb-1">{stat.value}</p>
                <p className="text-[12px] text-white/35 uppercase tracking-[0.1em]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="divider mb-12" />

          {/* Feature list */}
          <ul className="flex flex-col fade-up delay-2">
            {product.features.map((feat, fi) => (
              <li key={fi} className="flex items-center gap-4 py-4 border-b border-white/[0.06] last:border-b-0">
                <div className="w-[22px] h-[22px] border border-cyan/40 flex items-center justify-center shrink-0">
                  <span className="text-cyan text-[10px] font-bold">{String(fi + 1).padStart(2, "0")}</span>
                </div>
                <span className="text-[14px] text-white/60 font-medium">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="divider my-12" />

          {/* CTA */}
          <Link href={`/products/${product.id}`} className="btn-cyan h-[44px] w-max fade-up delay-3">
            <span>Explore {product.name}</span>
            <div className="icon-box h-[44px] w-[44px]">
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#67FCF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="divider" />
    </section>
  );
}
