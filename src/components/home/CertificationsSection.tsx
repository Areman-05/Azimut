"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <Section variant="sand" id="certificaciones">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
            Confianza
          </p>
          <h2 className="font-display text-3xl uppercase tracking-tight lg:text-4xl">
            Certificaciones y estándares
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-border-light bg-cream p-6"
            >
              <Award
                size={28}
                className="text-terracotta"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-sm uppercase tracking-wide">
                {cert.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cert.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
