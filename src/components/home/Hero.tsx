"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui";
import { siteConfig } from "@/config";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-end overflow-hidden bg-charcoal text-cream">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(18,18,18,0.3), rgba(18,18,18,0.95)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
        }}
        role="img"
        aria-label="Edificio moderno de arquitectura contemporánea"
      />

      <Container className="relative z-10 pb-16 pt-32 lg:pb-24 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-xs uppercase tracking-[0.3em] text-terracotta"
        >
          Estudio boutique · España
        </motion.p>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
          >
            Construimos
            <br />
            <span className="text-terracotta">espacios</span>
            <br />
            modulares
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-sand/80 lg:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/proyectos" size="lg">
              Ver proyectos
            </Button>
            <Button href="/contacto" variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
              Solicitar presupuesto
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-center gap-2 text-xs uppercase tracking-widest text-muted"
        >
          <ArrowDown size={16} className="animate-bounce" />
          <span>Descubre más</span>
        </motion.div>
      </Container>
    </section>
  );
}
