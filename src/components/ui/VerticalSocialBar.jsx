// components/VerticalSocialBar.jsx

import Link from "next/link";
import { Twitter, Send, Facebook } from "lucide-react";

// --- THIS IS THE BULLETPROOF VERSION ---
// Notice the 'href = ""' in the function signature.
const OctagonButton = ({ children, href = "", ariaLabel }) => {
  // We can also add a console.log to help you debug if you want.
  // console.log('Rendering OctagonButton with href:', href);

  return (
    <Link
      // The 'href' passed here will now always be a string, never undefined.
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex h-10 w-10 items-center justify-center text-white transition-transform duration-200 hover:scale-110"
    >
      <svg
        viewBox="0 0 24 24"
        className="absolute h-full w-full"
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
  // Ensure this array is correct and doesn't contain null or undefined hrefs.
  const socialLinks = [
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://telegram.org", icon: Send, label: "Telegram" },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Top vertical line */}
      <div className="h-24 w-px bg-white/40" />

      {/* Container for the icons */}
      <div className="flex flex-col gap-4 py-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <OctagonButton key={label} href={href} ariaLabel={label}>
            <Icon size={16} className="fill-current" />
          </OctagonButton>
        ))}
      </div>

      {/* Bottom vertical line */}
      <div className="h-24 w-px bg-white/40" />
    </div>
  );
};

export default VerticalSocialBar;