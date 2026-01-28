import Link from "next/link";

export default function About() {
  const stats = [
    { number: "3", label: "Fortune 500 Clients" },
    { number: "8+", label: "Content Series" },
    { number: "2+", label: "Years at Capture This" },
    { number: "100%", label: "Committed" },
  ];

  const services = [
    {
      title: "Video Production",
      description: "Conceptualization to final delivery. Broadcast, social, commercial. The full picture."
    },
    {
      title: "Motion Graphics",
      description: "Dynamic effects, typography animation, brand assets. Visual storytelling that moves."
    },
    {
      title: "Editing",
      description: "Fast-paced storytelling, color grading, sound design. Impact through precision."
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Main Content */}
          <div className="md:col-span-3">
            <h2 className="colton-large text-[#e8e8e8] mb-10">
              About<br />the Work
            </h2>

            <div className="space-y-8 mb-12">
              <p className="text-[#ccc] text-base md:text-lg leading-relaxed font-light">
                I specialize in <span className="font-bold text-[#e8e8e8]">premium motion graphics and video production</span> for brands that know what they're doing. 
                Fortune 500 clients. Creative agencies. Bold visions that demand excellence.
              </p>

              <p className="text-[#ccc] text-base md:text-lg leading-relaxed font-light">
                Every project is approached with <span className="font-bold text-[#e8e8e8]">precision, intention, and commitment</span>. 
                Not generic. Not corporate. Work that matters. Work that <span className="text-accent">performs</span>.
              </p>

              <p className="text-[#999] text-sm leading-relaxed">
                2+ years at Capture This (NYC), working directly with Google, Kate Spade, Under Armour, and more. 
                Every project is a collaboration. Every detail counts.
              </p>
            </div>

            <Link href="/about" className="btn btn-primary">
              Full Story
            </Link>
          </div>

          {/* Stats - Asymmetric Grid */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="portfolio-card p-6"
                  style={{
                    minHeight: "120px",
                    animation: "slideInUp 0.8s ease-out forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <p className="colton-large text-accent mb-2 leading-none">
                    {stat.number}
                  </p>
                  <p className="text-xs text-[#999] font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section - Editorial Grid */}
        <div className="mt-24 pt-16 border-t-2 border-[#2a2a2a]">
          <h3 className="colton text-xs text-[#999] font-bold tracking-widest mb-12 uppercase">
            Core Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group"
                style={{
                  animation: "slideInUp 0.8s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <h4 className="colton-heading text-[#e8e8e8] mb-4 group-hover:text-accent transition-all">
                  {service.title}
                </h4>
                <p className="text-[#999] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
