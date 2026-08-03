import { Github, Linkedin, Facebook } from "lucide-react";
import { socialLinks } from "@/constants/social";

const ICONS = { github: Github, linkedin: Linkedin, facebook: Facebook, mail: Github };

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-copy">
          © {new Date().getFullYear()} John Carl Honrado. Built with Next.js &amp; Tailwind CSS.
        </div>
        <div className="social-row">
          {socialLinks.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                className="social-icon"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
