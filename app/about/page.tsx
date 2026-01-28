import Link from "next/link";

export const metadata = {
  title: "About Colton — Motion Graphics Director",
  description: "Learn about Colton Batts and his creative journey in motion design.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="section-alt">
        <div className="container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Who I Am
          </p>
          <h1 className="colton-large text-[#e8e8e8] mb-8">
            Colton Batts
          </h1>
          <p className="text-2xl text-[#999] leading-relaxed font-light max-w-2xl">
            Lead Editor & Motion Graphics Designer based in NYC. 
            Obsessed with creating work that doesn't just look beautiful—it performs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Left Column - Main Narrative */}
            <div className="md:col-span-2 space-y-8">
              <div className="border-t-2 border-[#2a2a2a] pt-12">
                <h2 className="colton-heading text-[#e8e8e8] mb-6">
                  The Background
                </h2>
                <p className="text-[#ccc] leading-relaxed font-light mb-4">
                  I'm a lead editor and motion graphics designer with 2+ years of dedicated 
                  professional experience. Based in New York City, I specialize in high-impact 
                  video production and motion design for premium brands that demand excellence.
                </p>
                <p className="text-[#ccc] leading-relaxed font-light">
                  I've had the privilege of working with world-class brands including 
                  <strong className="font-bold text-[#e8e8e8]"> Google</strong>, 
                  <strong className="font-bold text-[#e8e8e8]"> Kate Spade</strong>, and 
                  <strong className="font-bold text-[#e8e8e8]"> Under Armour</strong> through 
                  <strong className="font-bold text-[#e8e8e8]"> Capture This (NYC)</strong>.
                </p>
              </div>

              <div className="border-t-2 border-[#2a2a2a] pt-12">
                <h2 className="colton-heading text-[#e8e8e8] mb-6">
                  What I Do
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-white font-bold text-lg flex-shrink-0">→</span>
                    <div>
                      <p className="font-bold text-[#e8e8e8] mb-1">Video Production & Editing</p>
                      <p className="text-[#999] text-sm leading-relaxed">
                        Conceptualization, shooting, color grading, and final delivery. 
                        From raw footage to broadcast-quality productions.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-white font-bold text-lg flex-shrink-0">→</span>
                    <div>
                      <p className="font-bold text-[#e8e8e8] mb-1">Motion Graphics & Visual Effects</p>
                      <p className="text-[#999] text-sm leading-relaxed">
                        Animated brand assets, typography design, and visual effects that elevate 
                        storytelling.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-white font-bold text-lg flex-shrink-0">→</span>
                    <div>
                      <p className="font-bold text-[#e8e8e8] mb-1">Instructional Design</p>
                      <p className="text-[#999] text-sm leading-relaxed">
                        Turning complex information into visually engaging, easy-to-understand 
                        content.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-white font-bold text-lg flex-shrink-0">→</span>
                    <div>
                      <p className="font-bold text-[#e8e8e8] mb-1">Project Management</p>
                      <p className="text-[#999] text-sm leading-relaxed">
                        Delivering at scale. Managing timelines, expectations, and premium quality 
                        across multiple campaigns.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-t-2 border-[#2a2a2a] pt-12">
                <h2 className="colton-heading text-[#e8e8e8] mb-6">
                  Philosophy
                </h2>
                <p className="text-[#ccc] leading-relaxed font-light mb-4">
                  I believe in creating work that doesn't just look beautiful—it <strong className="font-bold text-[#e8e8e8]">performs</strong>. 
                  That means understanding the strategic goals behind every project, 
                  not just the aesthetics.
                </p>
                <p className="text-[#ccc] leading-relaxed font-light">
                  Every project is approached with precision, intention, and a deep commitment 
                  to the client's vision and audience engagement. I'm not interested in 
                  trends for their own sake. I'm interested in creating work that matters.
                </p>
              </div>

              <div className="border-t-2 border-[#2a2a2a] pt-12">
                <h2 className="colton-heading text-[#e8e8e8] mb-6">
                  Outside Work
                </h2>
                <p className="text-[#ccc] leading-relaxed font-light">
                  When I'm not editing or designing, I'm exploring new production techniques, 
                  staying on top of industry trends, and collaborating with talented creatives 
                  who push the boundaries of what's possible in motion design. I'm also 
                  constantly learning—whether that's new software, new storytelling approaches, 
                  or understanding how audiences engage with content.
                </p>
              </div>
            </div>

            {/* Right Column - Stats / Key Info */}
            <div className="space-y-6">
              <div className="project-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Experience
                </p>
                <p className="colton-display text-[#e8e8e8]">2+</p>
                <p className="text-sm text-[#999]">Years Professional</p>
              </div>

              <div className="project-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Clients
                </p>
                <p className="colton-display text-[#e8e8e8]">3</p>
                <p className="text-sm text-[#999]">Fortune 500 Brands</p>
              </div>

              <div className="project-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Based
                </p>
                <p className="text-lg font-bold text-[#e8e8e8]">NYC</p>
                <p className="text-sm text-[#999]">Remote Work Available</p>
              </div>

              <div className="project-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Status
                </p>
                <p className="text-lg font-bold text-[#e8e8e8]">Available</p>
                <p className="text-sm text-[#999]">For New Projects</p>
              </div>

              {/* Quick Links */}
              <div className="border-t-2 border-[#2a2a2a] pt-6 mt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Connect
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@coltonbatts.com"
                    className="block text-sm text-[#999] hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors font-bold uppercase tracking-wider"
                  >
                    Email →
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-[#999] hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors font-bold uppercase tracking-wider"
                  >
                    Instagram →
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-[#999] hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors font-bold uppercase tracking-wider"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt">
        <div className="container max-w-3xl text-center">
          <h2 className="colton-display text-[#e8e8e8] mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-[#999] leading-relaxed font-light mb-12 max-w-xl mx-auto">
            Have a project in mind? Want to collaborate? I'm always open to discussing 
            new ideas and building something meaningful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <a href="mailto:hello@coltonbatts.com" className="btn btn-secondary">
              Send me an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
