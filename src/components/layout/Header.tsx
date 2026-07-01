"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { NavLink } from "./NavLink";
import { Button, Logo } from "@/components/ui";
import { mainNavigation } from "@/config";
import { cn } from "@/lib/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-light/60 bg-cream/90 backdrop-blur-md">
      <Container as="div" className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {mainNavigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
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
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn("border-b border-border-light py-4")}
                >
                  {item.label}
                </NavLink>
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
