"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { services } from "@/data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesPreview() {
  return (
    <Section variant="sand" id="servicios">
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
            Servicios
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-tight lg:text-5xl">
            Soluciones integrales para cada proyecto
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                variants={itemVariants}
                className="group border border-border-light bg-cream p-8 transition-colors hover:border-terracotta"
              >
                <Icon
                  size={32}
                  className="text-terracotta"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-6 font-display text-xl uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal transition-colors group-hover:text-terracotta"
                >
                  Saber más
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
