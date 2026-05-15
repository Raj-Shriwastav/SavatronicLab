"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  videoUrl?: string;
}

export default function VideoModal({ isOpen, onClose, productName, videoUrl }: VideoModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-4xl mx-4 bg-background border border-line">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-line">
          <div>
            <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase">Demo Video</span>
            <h3 className="text-lg font-medium text-white tracking-tight">{productName}</h3>
          </div>
          <button onClick={onClose} className="p-2 border border-line text-white/50 hover:bg-white hover:text-black transition-all" aria-label="Close video">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video area */}
        <div className="aspect-video w-full bg-black flex items-center justify-center">
          {videoUrl ? (
            <iframe src={videoUrl} className="w-full h-full border-0" allow="autoplay; fullscreen" allowFullScreen />
          ) : (
            <div className="flex flex-col items-center justify-center text-center px-12 h-full">
              <div className="w-12 h-12 border border-line flex items-center justify-center mb-6">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white/30 ml-1" />
              </div>
              <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">&lt;Fill_data: {productName} Demo Video URL&gt;</p>
              <p className="text-white/20 text-[13px] mt-2">Add a video URL to the product data to enable playback</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
