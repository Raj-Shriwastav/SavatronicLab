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
        className="px-8 py-4 bg-brand-yellow text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,244,183,0.6)] transition-all font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 w-max will-change-transform"
      >
        <Play className="w-4 h-4" /> Watch Demo
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
