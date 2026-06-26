"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [{ href: "/", label: "Home" }];

export function ShezNav() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none",
      )}
    >
      <div className="liquid-glass flex items-center gap-1 rounded-full px-2 py-2 sm:gap-2 sm:px-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
              pathname === link.href
                ? "bg-white/15 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
