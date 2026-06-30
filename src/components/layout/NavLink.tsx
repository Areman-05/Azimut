"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm uppercase tracking-widest transition-colors",
        isActive
          ? "text-charcoal font-medium"
          : "text-muted hover:text-charcoal",
        className,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
