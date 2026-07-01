import { Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config";

export function SocialLinks() {
  const links = [
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      icon: Linkedin,
    },
    {
      label: "Instagram",
      href: siteConfig.social.instagram,
      icon: Instagram,
    },
  ];

  return (
    <div className="flex gap-4">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted transition-colors hover:text-terracotta"
        >
          <Icon size={20} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
