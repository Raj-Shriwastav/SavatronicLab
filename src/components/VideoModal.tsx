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

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-4xl mx-4 bg-brand-deep border border-brand-teal shadow-[0_0_60px_rgba(0,106,103,0.3)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-teal">
          <div>
            <span className="font-mono text-brand-yellow/60 text-xs tracking-widest uppercase">Demo Video</span>
            <h3 className="text-xl font-black text-white tracking-tight">{productName}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-brand-teal text-brand-yellow hover:bg-brand-teal hover:text-white transition-all"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video area */}
        <div className="aspect-video w-full bg-black flex items-center justify-center">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center px-12 h-full">
              <div className="w-16 h-16 border-2 border-brand-yellow flex items-center justify-center mb-6">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-brand-yellow ml-1"></div>
              </div>
              <p className="font-mono text-brand-yellow/50 text-sm tracking-widest uppercase">&lt;Fill_data: {productName} Demo Video URL&gt;</p>
              <p className="text-zinc-500 text-sm mt-2">Add a video URL to the product data to enable playback</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
