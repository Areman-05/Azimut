"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";
import { mainNavigation, siteConfig } from "@/config";
import { cn } from "@/lib/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-light/60 bg-cream/90 backdrop-blur-md">
      <Container as="div" className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl uppercase tracking-[0.2em] text-charcoal"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-widest text-muted transition-colors hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contacto" size="sm">
            Presupuesto
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-charcoal lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border-light bg-cream lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6" aria-label="Móvil">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "border-b border-border-light py-4 text-sm uppercase tracking-widest text-charcoal",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6">
                <Button href="/contacto" className="w-full">
                  Solicitar presupuesto
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
