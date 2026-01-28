import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-4xl">
          {/* Pre-heading */}
          <p className="text-xs text-[#999] font-bold uppercase tracking-widest mb-8">
            Next Steps
          </p>

          {/* Main Headline - Bold & Asymmetric */}
          <h2 className="colton-large text-[#e8e8e8] mb-8 leading-tight">
            Let's Create
            <br />
            <span className="text-accent">Something Worth It</span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#999] mb-12 leading-relaxed max-w-2xl font-light">
            Whether you have a specific project in mind or want to explore ideas, 
            I'm always interested in talking to people who want to make something meaningful. 
            Let's build something worth paying attention to.
          </p>

          {/* CTA Buttons - Minimal */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <a href="mailto:hello@coltonbatts.com" className="btn btn-secondary">
              Email Me Directly
            </a>
          </div>

          {/* Footer Text - Minimal Meta */}
          <p className="text-xs text-[#666] font-bold uppercase tracking-widest mt-16 border-t-2 border-[#2a2a2a] pt-8">
            NYC Based · Available Globally
          </p>
        </div>
      </div>
    </section>
  );
}
