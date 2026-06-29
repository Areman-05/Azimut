"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <Section id="proceso">
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">
            Proceso
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-tight lg:text-5xl">
            De la idea a la entrega
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t-2 border-terracotta pt-6"
            >
              <span className="font-display text-3xl text-terracotta">
                0{step.step}
              </span>
              <h3 className="mt-4 font-display text-lg uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
