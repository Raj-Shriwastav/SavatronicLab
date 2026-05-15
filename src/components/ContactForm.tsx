"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  source: string; // e.g., "Contact Page", "Product Demo - NeuroGlow"
  showMessage?: boolean;
}

export default function ContactForm({ source, showMessage = true }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement)?.value || "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      source,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center fade-up">
        <div className="w-12 h-12 border border-cyan flex items-center justify-center mb-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67FCF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-lg font-medium text-white mb-2">Inquiry received.</p>
        <p className="text-[13px] text-white/40">We will get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 fade-up">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-white/30">Full Name</label>
        <input id="name" name="name" type="text" required className="w-full bg-transparent border-b border-line py-2 text-white font-medium placeholder:text-white/20 focus:outline-none focus:border-cyan transition-colors" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-white/30">Email Address</label>
        <input id="email" name="email" type="email" required className="w-full bg-transparent border-b border-line py-2 text-white font-medium placeholder:text-white/20 focus:outline-none focus:border-cyan transition-colors" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="organization" className="text-[10px] uppercase tracking-[0.2em] text-white/30">Organization / Hospital</label>
        <input id="organization" name="organization" type="text" className="w-full bg-transparent border-b border-line py-2 text-white font-medium placeholder:text-white/20 focus:outline-none focus:border-cyan transition-colors" />
      </div>
      {showMessage && (
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-white/30">Message</label>
          <textarea id="message" name="message" rows={3} className="w-full bg-transparent border-b border-line py-2 text-white font-medium placeholder:text-white/20 focus:outline-none focus:border-cyan transition-colors resize-none" />
        </div>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-[0.1em] text-[11px] hover:bg-cyan transition-colors w-max disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Submit Request"}
      </button>
      {status === "error" && (
        <p className="text-[12px] text-red-400">Failed to send. Please email savatronic12@gmail.com directly.</p>
      )}
    </form>
  );
}
