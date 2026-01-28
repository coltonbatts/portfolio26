import Link from "next/link";
import Signature from "./Signature";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer relative">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <Signature size="small" animated={false} />
            </div>
            <p className="colton text-lg text-[#e8e8e8] mb-3">Colton Batts</p>
            <p className="text-sm text-[#999]">
              Motion Graphics Designer & Video Producer
            </p>
            <p className="text-xs text-[#666] mt-3 font-bold uppercase tracking-widest">
              New York City, NY
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer-section font-bold text-[#e8e8e8] mb-4 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/#portfolio">Portfolio</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="footer-section font-bold text-[#e8e8e8] mb-4 text-sm uppercase tracking-widest">
              Connect
            </h4>
            <div className="footer-links">
              <a href="mailto:hello@coltonbatts.com">Email</a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Divider & Copyright */}
        <div className="footer-divider">
          <p className="footer-bottom text-[#666]">
            &copy; {currentYear} Colton Batts. All rights reserved.
          </p>
          <Link href="/contact" className="link-hover text-[#999] text-xs font-bold uppercase tracking-widest">
            Get in Touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
