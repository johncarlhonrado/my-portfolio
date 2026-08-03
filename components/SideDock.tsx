import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks, contactDetails } from "@/constants/social";

const ICONS = { github: Github, linkedin: Linkedin, twitter: Mail, mail: Mail };

/** Fixed floating social dock, visible on desktop only (hidden on mobile via CSS). */
export default function SideDock() {
  return (
    <div className="side-dock">
      {socialLinks
        .filter((l) => l.icon === "github" || l.icon === "linkedin")
        .map((link) => {
          const Icon = ICONS[link.icon];
          return (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              <Icon size={17} strokeWidth={2} />
            </a>
          );
        })}
      <a href={`mailto:${contactDetails.email}`} aria-label="Email">
        <Mail size={17} strokeWidth={2} />
      </a>
    </div>
  );
}
