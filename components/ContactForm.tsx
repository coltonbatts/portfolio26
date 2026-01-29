"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-[#1a1a1a] border-2 border-[#00ff99] animate-slide-in-up">
        <p className="colton-heading text-[#00ff99] mb-2">Message Sent!</p>
        <p className="text-[#b5b5b5]">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-bold uppercase tracking-widest text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 bg-[#0f0f0f] border-2 border-[#2a2a2a] text-[#e8e8e8] placeholder-[#888] focus:outline-none focus:border-white focus:bg-[#1a1a1a] focus:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-200"
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-bold uppercase tracking-widest text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 bg-[#0f0f0f] border-2 border-[#2a2a2a] text-[#e8e8e8] placeholder-[#888] focus:outline-none focus:border-white focus:bg-[#1a1a1a] focus:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-200"
          placeholder="your@email.com"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-bold uppercase tracking-widest text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          className="w-full px-4 py-3 bg-[#0f0f0f] border-2 border-[#2a2a2a] text-[#e8e8e8] placeholder-[#888] focus:outline-none focus:border-white focus:bg-[#1a1a1a] focus:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-200"
          placeholder="What's this about?"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-widest text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          className="w-full px-4 py-3 bg-[#0f0f0f] border-2 border-[#2a2a2a] text-[#e8e8e8] placeholder-[#888] focus:outline-none focus:border-white focus:bg-[#1a1a1a] focus:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-200 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-[#888] font-bold uppercase tracking-widest">
        I typically respond within 24 hours.
      </p>
    </form>
  );
}
