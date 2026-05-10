"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "@/components/VideoModal";

export default function DemoButton({ productName, videoUrl }: { productName: string; videoUrl?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 px-7 py-4 bg-brand-cyan text-black font-bold text-sm tracking-wide hover:bg-white hover:shadow-[0_0_24px_rgba(103,252,241,0.35)] transition-all duration-300 glow-cyan"
      >
        <Play className="w-4 h-4" fill="currentColor" />
        Watch Demo
      </button>

      <VideoModal
        isOpen={open}
        onClose={() => setOpen(false)}
        productName={productName}
        videoUrl={videoUrl}
      />
    </>
  );
}
