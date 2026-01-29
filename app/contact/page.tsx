import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="section-alt">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Let's Talk
          </p>
          <h1 className="colton-large text-[#e8e8e8] mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-[#b5b5b5] leading-relaxed font-light">
            Have a project in mind? Want to collaborate on something meaningful? 
            I'd love to hear about it. Reach out directly or use the form below.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Info Column */}
            <div className="md:col-span-2 space-y-12">
              {/* Email */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Email
                </p>
                <a
                  href="mailto:hello@coltonbatts.com"
                  className="text-2xl font-bold text-[#e8e8e8] hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors"
                >
                  hello@coltonbatts.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Location
                </p>
                <p className="text-lg text-[#e8e8e8] font-bold">
                  New York City, NY
                </p>
                <p className="text-sm text-[#b5b5b5] mt-1">Available for Remote Work</p>
              </div>

              {/* Availability */}
              <div className="project-card p-6 border-2 border-[#2a2a2a] bg-[#1a1a1a]">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Current Status
                </p>
                <p className="text-lg font-bold text-[#e8e8e8]">
                  Open for Projects
                </p>
                <p className="text-sm text-[#b5b5b5] mt-2">
                  Typically respond within 24 hours.
                </p>
              </div>

              {/* Social Links */}
              <div className="border-t-2 border-[#2a2a2a] pt-12">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Follow
                </p>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#b5b5b5] hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors font-bold uppercase tracking-wider text-sm"
                  >
                    Instagram →
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#b5b5b5] hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors font-bold uppercase tracking-wider text-sm"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="md:col-span-3">
              <h2 className="colton-heading text-[#e8e8e8] mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section section-alt">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-card p-8 border-2 border-[#2a2a2a] bg-[#1a1a1a]">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Email Direct
              </p>
              <p className="text-[#b5b5b5] mb-6">
                Prefer to skip the form? Send me an email directly.
              </p>
              <a href="mailto:hello@coltonbatts.com" className="btn btn-secondary w-full text-center">
                Send Email
              </a>
            </div>

            <div className="project-card p-8 border-2 border-[#2a2a2a] bg-[#1a1a1a]">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Quick Call
              </p>
              <p className="text-[#b5b5b5] mb-6">
                Want to chat quickly? Let's have a conversation.
              </p>
              <a href="mailto:hello@coltonbatts.com?subject=Let%27s%20Schedule%20a%20Call" className="btn btn-secondary w-full text-center">
                Request a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
