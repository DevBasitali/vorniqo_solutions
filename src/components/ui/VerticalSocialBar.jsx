import Link from "next/link";
import { Linkedin, TwitterIcon, Facebook } from "lucide-react";

const OctagonButton = ({ children, href = "", ariaLabel }) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex h-8 w-8 items-center justify-center text-white transition-transform duration-200 hover:scale-110"
    >
      <svg
        viewBox="0 0 24 24"
        className="absolute h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.025 2.154L16.975 2.154L21.846 7.025V16.975L16.975 21.846H7.025L2.154 16.975V7.025L7.025 2.154Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <div className="z-10">{children}</div>
    </Link>
  );
};

const VerticalSocialBar = () => {
  const socialLinks = [
    { href: "https://linkedin.com", icon: Linkedin, label: "Linkedin" },
    { href: "https://twitter.com", icon: TwitterIcon, label: "X" },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="h-10 w-px bg-white/60" />
      <div className="flex flex-col gap-4 py-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <OctagonButton key={label} href={href} ariaLabel={label}>
            <Icon size={13} className="fill-current" />
          </OctagonButton>
        ))}
      </div>
      <div className="h-10 w-px bg-white/60" />
    </div>
  );
};

export default VerticalSocialBar;